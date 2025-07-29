import { type NextRequest, NextResponse } from "next/server"
import { bookingFormSchema } from "@/lib/validation"
import { sanitizeInput } from "@/lib/security"
import { handleError, AppError, logError } from "@/lib/error-handler"
import { createServerClient } from "@/lib/supabase"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const supabase = createServerClient()

    // Validate input
    const validatedData = bookingFormSchema.parse(body)

    // Sanitize input
    const sanitizedData = {
      name: sanitizeInput(validatedData.name),
      email: sanitizeInput(validatedData.email),
      phone: sanitizeInput(validatedData.phone),
      service: sanitizeInput(validatedData.service),
      date: sanitizeInput(validatedData.date),
      time: sanitizeInput(validatedData.time),
      notes: validatedData.notes ? sanitizeInput(validatedData.notes) : undefined,
    }

    // Check if date is in the future
    const selectedDate = new Date(sanitizedData.date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    if (selectedDate < today) {
      throw new AppError("لا يمكن حجز موعد في الماضي", 400)
    }

    // Check if time slot is available
    const { data: existingBookings } = await supabase
      .from("bookings")
      .select("id")
      .eq("booking_date", sanitizedData.date)
      .eq("booking_time", sanitizedData.time)
      .neq("status", "cancelled")

    if (existingBookings && existingBookings.length > 0) {
      throw new AppError("هذا الموعد محجوز بالفعل. يرجى اختيار موعد آخر.", 400)
    }

    // Get or create client
    let { data: client } = await supabase.from("users").select("id").eq("email", sanitizedData.email).single()

    if (!client) {
      const { data: newClient, error: clientError } = await supabase
        .from("users")
        .insert({
          email: sanitizedData.email,
          full_name: sanitizedData.name,
          phone: sanitizedData.phone,
          role: "client",
          password_hash: "temp_hash", // They can set password later
          is_verified: false,
        })
        .select("id")
        .single()

      if (clientError) {
        throw new Error(`Error creating client: ${clientError.message}`)
      }
      client = newClient
    }

    // Get service details
    const { data: service } = await supabase
      .from("services")
      .select("id, name")
      .eq("name", sanitizedData.service)
      .single()

    if (!service) {
      throw new AppError("الخدمة المحددة غير متوفرة", 400)
    }

    // Create booking
    const { data: booking, error: bookingError } = await supabase
      .from("bookings")
      .insert({
        client_id: client.id,
        service_id: service.id,
        booking_date: sanitizedData.date,
        booking_time: sanitizedData.time,
        notes: sanitizedData.notes,
        status: "pending",
      })
      .select()
      .single()

    if (bookingError) {
      throw new Error(`Error creating booking: ${bookingError.message}`)
    }

    // Send notifications to admins
    const { data: admins } = await supabase.from("users").select("id").eq("role", "admin")

    if (admins && admins.length > 0) {
      const notifications = admins.map((admin) => ({
        user_id: admin.id,
        title: "حجز موعد جديد",
        message: `حجز موعد جديد من ${sanitizedData.name} لخدمة ${service.name}`,
        type: "info",
        action_url: `/admin/bookings/${booking.id}`,
        is_read: false,
      }))

      await supabase.from("notifications").insert(notifications)
    }

    // Send confirmation email to client
    // await sendBookingConfirmationEmail(sanitizedData.email, booking)

    return NextResponse.json({
      success: true,
      message: "تم حجز موعدك بنجاح. سنتواصل معك لتأكيد الموعد خلال ساعة.",
      bookingId: booking.id,
      bookingDetails: {
        date: sanitizedData.date,
        time: sanitizedData.time,
        service: service.name,
      },
    })
  } catch (error) {
    logError(error, "Booking API")

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
    const date = searchParams.get("date")
    const service = searchParams.get("service")

    if (date) {
      // Get available time slots for a specific date
      const { data: bookedSlots } = await supabase
        .from("bookings")
        .select("booking_time")
        .eq("booking_date", date)
        .neq("status", "cancelled")

      const allSlots = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"]

      const bookedTimes = bookedSlots?.map((slot) => slot.booking_time) || []
      const availableSlots = allSlots.filter((slot) => !bookedTimes.includes(slot))

      return NextResponse.json({
        success: true,
        availableSlots,
      })
    }

    // Get all bookings
    const { data: bookings, error } = await supabase
      .from("bookings")
      .select(`
        *,
        client:users!bookings_client_id_fkey(full_name, email, phone),
        service:services(name, duration),
        engineer:users!bookings_engineer_id_fkey(full_name, email)
      `)
      .order("booking_date", { ascending: true })

    if (error) {
      throw new Error(`Database error: ${error.message}`)
    }

    return NextResponse.json({
      success: true,
      data: bookings,
    })
  } catch (error) {
    logError(error, "Get Bookings API")
    return handleError(error)
  }
}
