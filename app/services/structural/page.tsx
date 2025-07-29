"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/layout/header"
import Link from "next/link"
import {
  Ruler,
  Building2,
  CheckCircle,
  Award,
  Target,
  Users,
  Zap,
  ArrowRight,
  Phone,
  Calendar,
} from "lucide-react"

export default function StructuralServicesPage() {
  const services = [
    {
      icon: Ruler,
      title: "تصميم الهياكل الإنشائية",
      description: "تصميم هياكل آمنة وفعالة للمباني والمنشآت",
      features: ["تحليل الأحمال", "تصميم الأعمدة والأساسات", "نمذجة إنشائية متقدمة"],
    },
    {
      icon: Building2,
      title: "إشراف وتنفيذ إنشائي",
      description: "إشراف كامل على تنفيذ الأعمال الإنشائية وضبط الجودة",
      features: ["إدارة التنفيذ", "ضبط الجودة", "حلول للمشاكل الميدانية"],
    },
    {
      icon: CheckCircle,
      title: "تدقيق إنشائي",
      description: "مراجعة وتدقيق المخططات والرسومات التنفيذية",
      features: ["تدقيق المخططات", "تحليل المخاطر", "توصيات فنية"],
    },
    {
      icon: Zap,
      title: "حلول متقدمة",
      description: "استخدام أحدث البرمجيات والتقنيات في التصميم والتحليل",
      features: ["برمجيات BIM", "تحليل الزلازل", "نمذجة العناصر المحدودة"],
    },
  ]

  const process = [
    {
      step: "01",
      title: "دراسة المتطلبات",
      description: "جمع وتحليل متطلبات المشروع الإنشائية بالتفصيل",
    },
    {
      step: "02",
      title: "التصميم والتحليل",
      description: "إعداد التصاميم الأولية وتحليل الأحمال والاستقرار",
    },
    {
      step: "03",
      title: "إعداد الرسومات",
      description: "إعداد الرسومات التنفيذية والتفصيلية للمشروع",
    },
    {
      step: "04",
      title: "الإشراف والتنفيذ",
      description: "متابعة التنفيذ وضبط الجودة حتى التسليم النهائي",
    },
  ]

  const projects = [
    {
      title: "برج الأعمال المركزي",
      category: "مباني إدارية",
      area: "40,000 م²",
      description: "تصميم إنشائي متكامل لمبنى إداري متعدد الطوابق",
    },
    {
      title: "مستشفى الملك فهد",
      category: "مباني طبية",
      area: "25,000 م²",
      description: "تحليل وتصميم إنشائي لمستشفى حديث بمعايير عالمية",
    },
    {
      title: "جسر الواحة",
      category: "بنية تحتية",
      area: "500 م",
      description: "تصميم وتنفيذ جسر خرساني بطول 500 متر",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-gray-700 border border-gray-300">
              <Ruler className="h-4 w-4 ml-2" />
              الهندسة الإنشائية
            </Badge>
            <h1 className="heading-1 text-gray-900 mb-6">
              حلول إنشائية متكاملة
              <span className="block text-gray-700">بأعلى معايير الأمان</span>
            </h1>
            <p className="body-large mb-8">
              نقدم خدمات الهندسة الإنشائية من التصميم والتحليل حتى الإشراف والتنفيذ، مع ضمان الجودة والسلامة في كل مرحلة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800" asChild>
                <Link href="/booking">
                  <Calendar className="ml-3 h-5 w-5" />
                  احجز استشارة
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent" asChild>
                <Link href="/contact">
                  <Phone className="ml-3 h-5 w-5" />
                  تواصل معنا
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-gray-900 mb-6">خدماتنا الإنشائية</h2>
            <p className="body-large max-w-3xl mx-auto">نقدم مجموعة متكاملة من الخدمات الإنشائية المتخصصة</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="border-0 card-shadow hover:card-shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-600 ml-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-gray-900 mb-6">عملية العمل</h2>
            <p className="body-large max-w-3xl mx-auto">نتبع منهجية علمية دقيقة لضمان أفضل النتائج الإنشائية</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-gray-900 mb-6">مشاريع إنشائية مميزة</h2>
            <p className="body-large max-w-3xl mx-auto">نماذج من أعمالنا الإنشائية المتميزة</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-0 card-shadow hover:card-shadow-lg transition-shadow overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>النوع: {project.category}</span>
                    <span>المساحة: {project.area}</span>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    عرض التفاصيل
                    <ArrowRight className="mr-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      {/* هذا القسم محذوف بناءً على طلبك */}

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 mb-6">جاهز لبدء مشروعك الإنشائي؟</h2>
            <p className="body-large text-gray-300 mb-12">
              احصل على استشارة مجانية من خبرائنا الإنشائيين واكتشف كيف يمكننا تحقيق رؤيتك بأمان وكفاءة
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100" asChild>
                <Link href="/booking">
                  <Calendar className="ml-3 h-5 w-5" />
                  احجز استشارة مجانية
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/contact">
                  <Phone className="ml-3 h-5 w-5" />
                  تواصل معنا
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 