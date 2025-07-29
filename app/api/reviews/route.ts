import { type NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase"
import { handleError, logError } from "@/lib/error-handler"
import { sanitizeInput } from "@/lib/security"
import { z } from "zod"

const reviewSchema = z.object({
  projectId: z.string().uuid(),
  clientId: z.string().uuid(),
  rating: z.number().min(1).max(5),
  reviewText: z.string().min(10).max(1000),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const supabase = createServerClient()

    // Validate input
    const validatedData = reviewSchema.parse(body)

    // Sanitize input
    const sanitizedData = {
      project_id: validatedData.projectId,
      client_id: validatedData.clientId,
      rating: validatedData.rating,
      review_text: sanitizeInput(validatedData.reviewText),
      is_featured: false,
      is_approved: false, // Reviews need admin approval
    }

    // Check if client already reviewed this project
    const { data: existingReview } = await supabase
      .from("reviews")
      .select("id")
      .eq("project_id", sanitizedData.project_id)
      .eq("client_id", sanitizedData.client_id)
      .single()

    if (existingReview) {
      return NextResponse.json(
        {
          success: false,
          message: "لقد قمت بتقييم هذا المشروع من قبل",
        },
        { status: 400 },
      )
    }

    // Verify that the client was actually involved in this project
    const { data: project } = await supabase
      .from("projects")
      .select("client_id")
      .eq("id", sanitizedData.project_id)
      .single()

    if (!project || project.client_id !== sanitizedData.client_id) {
      return NextResponse.json(
        {
          success: false,
          message: "غير مصرح لك بتقييم هذا المشروع",
        },
        { status: 403 },
      )
    }

    // Create review
    const { data: review, error } = await supabase.from("reviews").insert(sanitizedData).select().single()

    if (error) {
      throw new Error(`Database error: ${error.message}`)
    }

    // Notify admins about new review
    const { data: admins } = await supabase.from("users").select("id").eq("role", "admin")

    if (admins && admins.length > 0) {
      const notifications = admins.map((admin) => ({
        user_id: admin.id,
        title: "تقييم جديد",
        message: `تقييم جديد بدرجة ${sanitizedData.rating} نجوم يحتاج للمراجعة`,
        type: "info",
        action_url: `/admin/reviews/${review.id}`,
        is_read: false,
      }))

      await supabase.from("notifications").insert(notifications)
    }

    return NextResponse.json({
      success: true,
      message: "تم إرسال تقييمك بنجاح. سيظهر بعد مراجعة الإدارة.",
      reviewId: review.id,
    })
  } catch (error) {
    logError(error, "Reviews API")

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
    const featured = searchParams.get("featured") === "true"
    const approved = searchParams.get("approved") !== "false" // Default to approved only
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const offset = (page - 1) * limit

    let query = supabase
      .from("reviews")
      .select(
        `
        *,
        client:users!reviews_client_id_fkey(full_name, avatar_url),
        project:projects(title, category)
      `,
        { count: "exact" },
      )
      .order("created_at", { ascending: false })
      .range(offset, offset + limit - 1)

    if (featured) {
      query = query.eq("is_featured", true)
    }

    if (approved) {
      query = query.eq("is_approved", true)
    }

    const { data: reviews, error, count } = await query

    if (error) {
      throw new Error(`Database error: ${error.message}`)
    }

    // Calculate average rating
    const { data: allReviews } = await supabase.from("reviews").select("rating").eq("is_approved", true)

    const averageRating =
      allReviews && allReviews.length > 0
        ? allReviews.reduce((sum, review) => sum + review.rating, 0) / allReviews.length
        : 0

    return NextResponse.json({
      success: true,
      data: reviews,
      pagination: {
        page,
        limit,
        total: count || 0,
        totalPages: Math.ceil((count || 0) / limit),
      },
      stats: {
        averageRating: Math.round(averageRating * 10) / 10,
        totalReviews: allReviews?.length || 0,
      },
    })
  } catch (error) {
    logError(error, "Get Reviews API")
    return handleError(error)
  }
}
