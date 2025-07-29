"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, Pause, Phone, Calendar, Award, Users, Building, CheckCircle } from "lucide-react"

export default function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    engineers: 0,
    experience: 0,
  })

  useEffect(() => {
    const targetStats = {
      projects: 247,
      clients: 180,
      engineers: 25,
      experience: 18,
    }

    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setStats({
        projects: Math.floor(targetStats.projects * progress),
        clients: Math.floor(targetStats.clients * progress),
        engineers: Math.floor(targetStats.engineers * progress),
        experience: Math.floor(targetStats.experience * progress),
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setStats(targetStats)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [])



  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    
      <div className="absolute inset-0 z-0">
        <video
          id="hero-video"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/4_V1.mp4" type="video/mp4" />
        </video>

    
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>



      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
        
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">شركة الواحة الهندسية</h1>

        
          <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
            نبني المستقبل بإتقان وإبداع منذ عام 2006
          </p>

      

        
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              asChild
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              <Link href="/booking">
                <Calendar className="w-5 h-5 ml-2" />
                احجز استشارة مجانية
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold bg-transparent"
            >
              <Link href="/contact">
                <Phone className="w-5 h-5 ml-2" />
                تواصل معنا
              </Link>
            </Button>
          </div>

          {/* الإحصائيات */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2 text-white">{stats.projects}+</div>
              <div className="text-gray-300 font-medium">مشروع مكتمل</div>
            </div>

            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2 text-white">{stats.clients}+</div>
              <div className="text-gray-300 font-medium">عميل راضٍ</div>
            </div>

            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2 text-white">{stats.engineers}+</div>
              <div className="text-gray-300 font-medium">مهندس خبير</div>
            </div>

            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2 text-white">{stats.experience}+</div>
              <div className="text-gray-300 font-medium">سنة خبرة</div>
            </div>
          </div>
        </div>
      </div>

      {/* مؤشر التمرير */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
