"use client"
import { useEffect, useState } from "react"
import { PageLoader } from "@/components/ui/loading-spinner"

export default function InitialLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000) 
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <PageLoader />
  return <>{children}</>
} 