import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { GoogleAnalytics } from "@/components/analytics/google-analytics"
import { Chatbot } from "@/components/chatbot/chatbot"
import { PageLoader } from "@/components/ui/loading-spinner"
import { useEffect, useState } from "react"
import InitialLoader from "@/components/layout/initial-loader"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "شركة الواحة الهندسية - خدمات هندسية متميزة",
    template: "%s | شركة الواحة الهندسية",
  },
  description:
    "شركة الواحة الهندسية تقدم خدمات التصميم المعماري والهندسة الإنشائية وإدارة المشاريع بأعلى معايير الجودة في المملكة العربية السعودية",
  keywords: ["هندسة معمارية", "تصميم إنشائي", "إدارة مشاريع", "استشارات هندسية", "الرياض", "السعودية"],
  authors: [{ name: "شركة الواحة الهندسية" }],
  creator: "شركة الواحة الهندسية",
  publisher: "شركة الواحة الهندسية",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://alwaha-engineering.com",
    siteName: "شركة الواحة الهندسية",
    title: "شركة الواحة الهندسية - خدمات هندسية متميزة",
    description:
      "شركة الواحة الهندسية تقدم خدمات التصميم المعماري والهندسة الإنشائية وإدارة المشاريع بأعلى معايير الجودة",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "شركة الواحة الهندسية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "شركة الواحة الهندسية - خدمات هندسية متميزة",
    description:
      "شركة الواحة الهندسية تقدم خدمات التصميم المعماري والهندسة الإنشائية وإدارة المشاريع بأعلى معايير الجودة",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        <InitialLoader>{children}</InitialLoader>
        <Chatbot />
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
      </body>
    </html>
  )
}
