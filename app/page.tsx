"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/layout/header"
import HeroSection from "@/components/sections/hero-section"
import ServicesSection from "@/components/sections/services-section"
import ProjectsSection from "@/components/sections/projects-section"
import AboutSection from "@/components/sections/about-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import ContactSection from "@/components/sections/contact-section"
import Footer from "@/components/layout/footer"
import { Building2, CheckCircle, PenTool, ClipboardCheck, Shield, Users, Award, Target } from "lucide-react"
import { useState, useEffect } from "react"
import { projects } from "@/data/projects";

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const services = [
    {
      icon: PenTool,
      title: "التصميم المعماري",
      description: "تصاميم معمارية مبتكرة تجمع بين الجمال والوظيفة",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop",
    },
    {
      icon: Building2,
      title: "الهندسة الإنشائية",
      description: "حلول إنشائية آمنة ومتطورة باستخدام أحدث التقنيات",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop",
    },
    {
      icon: ClipboardCheck,
      title: "إدارة المشاريع",
      description: "إدارة متكاملة تضمن تسليم المشاريع في الوقت والميزانية",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
    },
    {
      icon: Shield,
      title: "الإشراف الهندسي",
      description: "إشراف دقيق لضمان تطبيق أعلى معايير الجودة والسلامة",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
    },
  ]



  const testimonials = [
    {
      name: "المهندس أحمد محمد السعيد",
      position: "مدير التطوير، شركة الرياض للاستثمار",
      content:
        "شركة الواحة الهندسية قدمت لنا خدمة استثنائية في مشروع مجمع الرياض التجاري. الاحترافية والدقة في التنفيذ كانت مذهلة.",
      rating: 5,
      project: "مجمع الرياض التجاري",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "الدكتورة فاطمة عبدالله النعيمي",
      position: "مديرة المشاريع، وزارة الصحة",
      content:
        "التعامل مع فريق الواحة كان تجربة رائعة. إدارتهم المتميزة للمشاريع والالتزام بالمواعيد جعلنا نحقق أهدافنا بنجاح.",
      rating: 5,
      project: "مستشفى الملك فهد",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "المهندس خالد إبراهيم الزعابي",
      position: "مالك العقار",
      content: "حولوا رؤيتي إلى واقع معماري مذهل. الاهتمام بالتفاصيل والجودة في التنفيذ فاق كل توقعاتي. أنصح بهم بشدة.",
      rating: 5,
      project: "فيلا العائلة الملكية",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
  ]

  const whyChooseUs = [
    {
      icon: Award,
      title: "خبرة معتمدة",
      description: "18 عاماً من الخبرة مع شهادات دولية معتمدة",
    },
    {
      icon: Users,
      title: "فريق متخصص",
      description: "مهندسون محترفون مع خبرة واسعة في مختلف المجالات",
    },
    {
      icon: Target,
      title: "دقة في التنفيذ",
      description: "نهتم بأدق التفاصيل لضمان تحقيق رؤيتكم بالكامل",
    },
    {
      icon: CheckCircle,
      title: "ضمان الجودة",
      description: "نلتزم بأعلى معايير الجودة مع ضمان شامل على أعمالنا",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white text-gray-700 border border-gray-300">لماذا تختارنا</Badge>
            <h2 className="heading-2 text-gray-900 mb-6 ">
              نتميز بما يجعلنا
              <span className="block text-gray-700 mt-4">الخيار الأمثل</span>
            </h2>
            <p className="body-large max-w-3xl mx-auto">
              خبرة عريقة وفريق محترف يضمن تحقيق رؤيتكم بأعلى معايير الجودة والاحترافية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className="text-center border-0 card-shadow hover:card-shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <ServicesSection services={services} />

      {/* Featured Projects */}
      <ProjectsSection projects={projects} />

      {/* About Section */}
      <AboutSection />

      {/* Testimonials */}
      <TestimonialsSection
        testimonials={testimonials}
        currentTestimonial={currentTestimonial}
        setCurrentTestimonial={setCurrentTestimonial}
      />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
