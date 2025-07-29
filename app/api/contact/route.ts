import { type NextRequest, NextResponse } from "next/server"
import { contactFormSchema } from "@/lib/validation"
import { sanitizeInput } from "@/lib/security"
import { handleError, logError } from "@/lib/error-handler"
import { createServerClient } from "@/lib/supabase"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const supabase = createServerClient()

    // Validate input
    const validatedData = contactFormSchema.parse(body)

    // Sanitize input
    const sanitizedData = {
      name: sanitizeInput(validatedData.name),
      email: sanitizeInput(validatedData.email),
      phone: validatedData.phone ? sanitizeInput(validatedData.phone) : undefined,
      company: validatedData.company ? sanitizeInput(validatedData.company) : undefined,
      service_type: validatedData.serviceType || "general",
      project_type: validatedData.projectType || "consultation",
      budget_range: validatedData.budgetRange || "not-specified",
      message: sanitizeInput(validatedData.message),
      status: "new",
    }

    // Save to database
    const { data: inquiry, error } = await supabase.from("inquiries").insert(sanitizedData).select().single()

    if (error) {
      throw new Error(`Database error: ${error.message}`)
    }

    // Send notification to admins
    const { data: admins } = await supabase.from("users").select("id").eq("role", "admin")

    if (admins && admins.length > 0) {
      const notifications = admins.map((admin) => ({
        user_id: admin.id,
        title: "استفسار جديد",
        message: `استفسار جديد من ${sanitizedData.name} - ${sanitizedData.email}`,
        type: "info",
        action_url: `/admin/inquiries/${inquiry.id}`,
        is_read: false,
      }))

      await supabase.from("notifications").insert(notifications)
    }

    // Send auto-reply email (you can integrate with your email service)
    // await sendAutoReplyEmail(sanitizedData.email, sanitizedData.name)

    return NextResponse.json({
      success: true,
      message: "تم إرسال رسالتك بنجاح. سنتواصل معك خلال 24 ساعة.",
      inquiryId: inquiry.id,
    })
  } catch (error) {
    logError(error, "Contact Form API")

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        {
          success: false,
          message: "البيانات المدخلة غير صحيحة",
        },
        { status: 400 },
      )
    }

    return handleError(error)
  }
}

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const { searchParams } = new URL(request.url)
    const status = searchParams.get("status")
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const offset = (page - 1) * limit

    let query = supabase
      .from("inquiries")
      .select(
        `
        *,
        assigned_user:users(full_name, email)
      `,
        { count: "exact" },
      )
      .order("created_at", { ascending: false })
      .range(offset, offset + limit - 1)

    if (status && status !== "all") {
      query = query.eq("status", status)
    }

    const { data: inquiries, error, count } = await query

    if (error) {
      throw new Error(`Database error: ${error.message}`)
    }

    return NextResponse.json({
      success: true,
      data: inquiries,
      pagination: {
        page,
        limit,
        total: count || 0,
        totalPages: Math.ceil((count || 0) / limit),
      },
    })
  } catch (error) {
    logError(error, "Get Inquiries API")
    return handleError(error)
  }
}
