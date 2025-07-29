"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import type { User } from "@/lib/database"
import { auth } from "@/lib/auth"

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, userData: any) => Promise<void>
  signOut: () => Promise<void>
  updateProfile: (updates: Partial<User>) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  const useAuthStateChange = (callback: (user: User | null) => void) => {
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(callback)
      return () => unsubscribe()
    }, [callback])
  }

  useEffect(() => {
    // جلب المستخدم الحالي عند التحميل
    const fetchCurrentUser = async () => {
      try {
        const user = await auth.getCurrentUser()
        setUser(user)
      } catch {
        // Do nothing if there's an error fetching the current user
      } finally {
        setLoading(false)
      }
    }

    fetchCurrentUser()

    // الاستماع لتغييرات المصادقة
    const handleAuthStateChange = (user: User | null) => {
      setUser(user)
      setLoading(false)
    }

    const unsubscribe = auth.onAuthStateChanged(handleAuthStateChange)
    return () => unsubscribe()
  }, [])

  const signIn = async (email: string, password: string) => {
    const { user } = await auth.signIn(email, password)
    setUser(user)
  }

  const signUp = async (email: string, password: string, userData: any) => {
    await auth.signUp(email, password, userData)
  }

  const signOut = async () => {
    await auth.signOut()
    setUser(null)
  }

  const updateProfile = async (updates: Partial<User>) => {
    if (!user) return
    const updatedUser = await auth.updateProfile(user.id, updates)
    setUser(updatedUser)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signUp,
        signOut,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
