import { type NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase"
import { handleError, logError } from "@/lib/error-handler"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const supabase = createServerClient()

    const { event, page, userId, data } = body

    // Track page views, clicks, form submissions, etc.
    const analyticsData = {
      event_type: event,
      page_url: page,
      user_id: userId || null,
      event_data: data || {},
      timestamp: new Date().toISOString(),
      user_agent: request.headers.get("user-agent"),
      ip_address: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip"),
      referrer: request.headers.get("referer"),
    }

    // Save to analytics table (you'll need to create this table)
    const { error } = await supabase.from("analytics_events").insert(analyticsData)

    if (error) {
      throw new Error(`Analytics error: ${error.message}`)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    logError(error, "Analytics API")
    return handleError(error)
  }
}

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const { searchParams } = new URL(request.url)
    const startDate = searchParams.get("startDate")
    const endDate = searchParams.get("endDate")
    const eventType = searchParams.get("eventType")

    // Get analytics data
    let query = supabase.from("analytics_events").select("*").order("timestamp", { ascending: false })

    if (startDate) {
      query = query.gte("timestamp", startDate)
    }
    if (endDate) {
      query = query.lte("timestamp", endDate)
    }
    if (eventType) {
      query = query.eq("event_type", eventType)
    }

    const { data: events, error } = await query

    if (error) {
      throw new Error(`Database error: ${error.message}`)
    }

    // Calculate basic metrics
    const pageViews = events?.filter((e) => e.event_type === "page_view").length || 0
    const uniqueVisitors = new Set(events?.map((e) => e.ip_address)).size
    const formSubmissions = events?.filter((e) => e.event_type === "form_submit").length || 0

    return NextResponse.json({
      success: true,
      data: events,
      metrics: {
        pageViews,
        uniqueVisitors,
        formSubmissions,
        totalEvents: events?.length || 0,
      },
    })
  } catch (error) {
    logError(error, "Get Analytics API")
    return handleError(error)
  }
}
