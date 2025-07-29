import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Only create client if environment variables are available
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Database types
export interface User {
  id: string
  email: string
  full_name: string
  phone?: string
  company?: string
  role: "admin" | "engineer" | "client"
  avatar_url?: string
  is_verified: boolean
  created_at: string
  updated_at: string
}

export interface Project {
  id: string
  title: string
  description?: string
  category: string
  client_id: string
  assigned_engineer_id?: string
  status: "planning" | "design" | "execution" | "completed" | "cancelled"
  budget?: number
  start_date?: string
  end_date?: string
  progress: number
  location?: string
  area?: number
  images?: string[]
  documents?: string[]
  created_at: string
  updated_at: string
}

export interface Service {
  id: string
  name: string
  description?: string
  category: string
  price?: number
  duration?: number
  is_active: boolean
  features?: string[]
  created_at: string
  updated_at: string
}

export interface Booking {
  id: string
  client_id: string
  service_id: string
  engineer_id?: string
  booking_date: string
  booking_time: string
  status: "pending" | "confirmed" | "completed" | "cancelled"
  notes?: string
  meeting_link?: string
  created_at: string
  updated_at: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt?: string
  content: string
  category: string
  author_id: string
  featured_image?: string
  tags?: string[]
  status: "draft" | "published" | "archived"
  views: number
  likes: number
  published_at?: string
  created_at: string
  updated_at: string
}

export interface Inquiry {
  id: string
  name: string
  email: string
  phone?: string
  company?: string
  service_type?: string
  project_type?: string
  budget_range?: string
  message: string
  status: "new" | "in_progress" | "responded" | "closed"
  assigned_to?: string
  created_at: string
  updated_at: string
}

export interface Notification {
  id: string
  user_id: string
  title: string
  message: string
  type: string
  is_read: boolean
  action_url?: string
  created_at: string
}

export interface Review {
  id: string
  project_id: string
  client_id: string
  rating: number
  review_text?: string
  is_featured: boolean
  is_approved: boolean
  created_at: string
  updated_at: string
}

// Database functions
export const db = {
  // Users
  async getUsers() {
    if (!supabase) {
      throw new Error("Supabase client not configured")
    }
    const { data, error } = await supabase.from("users").select("*").order("created_at", { ascending: false })

    if (error) throw error
    return data as User[]
  },

  async getUserById(id: string) {
    if (!supabase) {
      throw new Error("Supabase client not configured")
    }
    const { data, error } = await supabase.from("users").select("*").eq("id", id).single()

    if (error) throw error
    return data as User
  },

  async createUser(user: Omit<User, "id" | "created_at" | "updated_at">) {
    if (!supabase) {
      throw new Error("Supabase client not configured")
    }
    const { data, error } = await supabase.from("users").insert(user).select().single()

    if (error) throw error
    return data as User
  },

  // Projects
  async getProjects() {
    if (!supabase) {
      throw new Error("Supabase client not configured")
    }
    const { data, error } = await supabase
      .from("projects")
      .select(`
        *,
        client:users!projects_client_id_fkey(full_name, email),
        engineer:users!projects_assigned_engineer_id_fkey(full_name, email)
      `)
      .order("created_at", { ascending: false })

    if (error) throw error
    return data
  },

  async getProjectById(id: string) {
    if (!supabase) {
      throw new Error("Supabase client not configured")
    }
    const { data, error } = await supabase
      .from("projects")
      .select(`
        *,
        client:users!projects_client_id_fkey(full_name, email, phone),
        engineer:users!projects_assigned_engineer_id_fkey(full_name, email)
      `)
      .eq("id", id)
      .single()

    if (error) throw error
    return data
  },

  async createProject(project: Omit<Project, "id" | "created_at" | "updated_at">) {
    if (!supabase) {
      throw new Error("Supabase client not configured")
    }
    const { data, error } = await supabase.from("projects").insert(project).select().single()

    if (error) throw error
    return data as Project
  },

  async updateProject(id: string, updates: Partial<Project>) {
    if (!supabase) {
      throw new Error("Supabase client not configured")
    }
    const { data, error } = await supabase.from("projects").update(updates).eq("id", id).select().single()

    if (error) throw error
    return data as Project
  },

  // Services
  async getServices() {
    if (!supabase) {
      throw new Error("Supabase client not configured")
    }
    const { data, error } = await supabase.from("services").select("*").eq("is_active", true).order("name")

    if (error) throw error
    return data as Service[]
  },

  // Bookings
  async getBookings() {
    if (!supabase) {
      throw new Error("Supabase client not configured")
    }
    const { data, error } = await supabase
      .from("bookings")
      .select(`
        *,
        client:users!bookings_client_id_fkey(full_name, email, phone),
        service:services(name, duration),
        engineer:users!bookings_engineer_id_fkey(full_name, email)
      `)
      .order("booking_date", { ascending: true })

    if (error) throw error
    return data
  },

  async createBooking(booking: Omit<Booking, "id" | "created_at" | "updated_at">) {
    if (!supabase) {
      throw new Error("Supabase client not configured")
    }
    const { data, error } = await supabase.from("bookings").insert(booking).select().single()

    if (error) throw error
    return data as Booking
  },

  async updateBooking(id: string, updates: Partial<Booking>) {
    if (!supabase) {
      throw new Error("Supabase client not configured")
    }
    const { data, error } = await supabase.from("bookings").update(updates).eq("id", id).select().single()

    if (error) throw error
    return data as Booking
  },

  // Blog Posts
  async getBlogPosts(status?: string) {
    if (!supabase) {
      throw new Error("Supabase client not configured")
    }
    let query = supabase.from("blog_posts").select(`
        *,
        author:users(full_name, avatar_url)
      `)

    if (status) {
      query = query.eq("status", status)
    }

    const { data, error } = await query.order("published_at", { ascending: false })

    if (error) throw error
    return data
  },

  async getBlogPostBySlug(slug: string) {
    if (!supabase) {
      throw new Error("Supabase client not configured")
    }
    const { data, error } = await supabase
      .from("blog_posts")
      .select(`
        *,
        author:users(full_name, avatar_url)
      `)
      .eq("slug", slug)
      .single()

    if (error) throw error
    return data
  },

  async incrementBlogPostViews(id: string) {
    if (!supabase) {
      throw new Error("Supabase client not configured")
    }
    const { error } = await supabase.rpc("increment_post_views", { post_id: id })
    if (error) throw error
  },

  // Inquiries
  async getInquiries() {
    if (!supabase) {
      throw new Error("Supabase client not configured")
    }
    const { data, error } = await supabase
      .from("inquiries")
      .select(`
        *,
        assigned_user:users(full_name)
      `)
      .order("created_at", { ascending: false })

    if (error) throw error
    return data
  },

  async createInquiry(inquiry: Omit<Inquiry, "id" | "created_at" | "updated_at">) {
    if (!supabase) {
      throw new Error("Supabase client not configured")
    }
    const { data, error } = await supabase.from("inquiries").insert(inquiry).select().single()

    if (error) throw error
    return data as Inquiry
  },

  // Notifications
  async getNotifications(userId: string) {
    if (!supabase) {
      throw new Error("Supabase client not configured")
    }
    const { data, error } = await supabase
      .from("notifications")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })

    if (error) throw error
    return data as Notification[]
  },

  async createNotification(notification: Omit<Notification, "id" | "created_at">) {
    if (!supabase) {
      throw new Error("Supabase client not configured")
    }
    const { data, error } = await supabase.from("notifications").insert(notification).select().single()

    if (error) throw error
    return data as Notification
  },

  async markNotificationAsRead(id: string) {
    if (!supabase) {
      throw new Error("Supabase client not configured")
    }
    const { error } = await supabase.from("notifications").update({ is_read: true }).eq("id", id)

    if (error) throw error
  },

  // Reviews
  async getReviews(featured?: boolean) {
    if (!supabase) {
      throw new Error("Supabase client not configured")
    }
    let query = supabase
      .from("reviews")
      .select(`
        *,
        client:users(full_name, avatar_url),
        project:projects(title)
      `)
      .eq("is_approved", true)

    if (featured) {
      query = query.eq("is_featured", true)
    }

    const { data, error } = await query.order("created_at", { ascending: false })

    if (error) throw error
    return data
  },

  async createReview(review: Omit<Review, "id" | "created_at" | "updated_at">) {
    if (!supabase) {
      throw new Error("Supabase client not configured")
    }
    const { data, error } = await supabase.from("reviews").insert(review).select().single()

    if (error) throw error
    return data as Review
  },
}
