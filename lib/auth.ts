import { supabase } from "./database"
import type { User } from "./database"

export interface AuthUser extends User {
  session?: any
}

export const auth = {
  // تسجيل الدخول
  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) throw error

    // جلب بيانات المستخدم الإضافية
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("*")
      .eq("id", data.user.id)
      .single()

    if (userError) throw userError

    return {
      user: userData as User,
      session: data.session,
    }
  },

  // تسجيل حساب جديد
  async signUp(
    email: string,
    password: string,
    userData: {
      full_name: string
      phone?: string
      company?: string
    },
  ) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) throw error

    if (data.user) {
      // إنشاء ملف المستخدم في قاعدة البيانات
      const { error: profileError } = await supabase.from("users").insert({
        id: data.user.id,
        email: data.user.email!,
        ...userData,
        role: "client",
      })

      if (profileError) throw profileError
    }

    return data
  },

  // تسجيل الخروج
  async signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  },

  // الحصول على المستخدم الحالي
  async getCurrentUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) return null

    const { data: userData, error } = await supabase.from("users").select("*").eq("id", user.id).single()

    if (error) throw error

    return userData as User
  },

  // تحديث الملف الشخصي
  async updateProfile(userId: string, updates: Partial<User>) {
    const { data, error } = await supabase.from("users").update(updates).eq("id", userId).select().single()

    if (error) throw error
    return data as User
  },

  // إعادة تعيين كلمة المرور
  async resetPassword(email: string) {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset-password`,
    })

    if (error) throw error
  },

  // تحديث كلمة المرور
  async updatePassword(newPassword: string) {
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    })

    if (error) throw error
  },

  // التحقق من البريد الإلكتروني
  async verifyEmail(token: string) {
    const { error } = await supabase.auth.verifyOtp({
      token_hash: token,
      type: "email",
    })

    if (error) throw error
  },
}

// Hook للاستماع لتغييرات المصادقة
export function useAuthStateChange(callback: (user: User | null) => void) {
  supabase.auth.onAuthStateChange(async (event, session) => {
    if (session?.user) {
      const { data: userData } = await supabase.from("users").select("*").eq("id", session.user.id).single()

      callback(userData as User)
    } else {
      callback(null)
    }
  })
}
