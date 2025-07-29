import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Only create client if environment variables are available
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Types
export interface ContactSubmission {
  id?: string
  name: string
  email: string
  phone: string
  company?: string
  message: string
  created_at?: string
}

export interface BookingSubmission {
  id?: string
  name: string
  email: string
  phone: string
  company?: string
  service: string
  date: string
  time: string
  project_type?: string
  budget?: string
  message?: string
  status: "pending" | "confirmed" | "cancelled"
  created_at?: string
}

export interface Review {
  id?: string
  name: string
  company?: string
  rating: number
  comment: string
  project_type?: string
  is_approved: boolean
  created_at?: string
}

// Database functions
export const submitContactForm = async (data: ContactSubmission) => {
  if (!supabase) {
    return { success: false, error: "Supabase client not configured" }
  }
  
  try {
    const { data: result, error } = await supabase.from("contact_submissions").insert([data]).select()

    if (error) throw error
    return { success: true, data: result }
  } catch (error) {
    console.error("Contact form submission error:", error)
    return { success: false, error: (error as Error).message }
  }
}

export const submitBooking = async (data: BookingSubmission) => {
  if (!supabase) {
    return { success: false, error: "Supabase client not configured" }
  }
  
  try {
    const { data: result, error } = await supabase
      .from("bookings")
      .insert([{ ...data, status: "pending" }])
      .select()

    if (error) throw error
    return { success: true, data: result }
  } catch (error) {
    console.error("Booking submission error:", error)
    return { success: false, error: (error as Error).message }
  }
}

export const submitReview = async (data: Review) => {
  if (!supabase) {
    return { success: false, error: "Supabase client not configured" }
  }
  
  try {
    const { data: result, error } = await supabase
      .from("reviews")
      .insert([{ ...data, is_approved: false }])
      .select()

    if (error) throw error
    return { success: true, data: result }
  } catch (error) {
    console.error("Review submission error:", error)
    return { success: false, error: (error as Error).message }
  }
}

export const getApprovedReviews = async () => {
  if (!supabase) {
    return { success: false, error: "Supabase client not configured" }
  }
  
  try {
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .eq("is_approved", true)
      .order("created_at", { ascending: false })

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error("Get reviews error:", error)
    return { success: false, error: (error as Error).message }
  }
}

// Helper for API routes (server-side)
export function createServerClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase environment variables are not configured");
  }
  
  return createClient(supabaseUrl, supabaseAnonKey);
}
