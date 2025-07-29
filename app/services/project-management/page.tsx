"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/layout/header"
import Link from "next/link"
import {
  CheckCircle,
  Award,
  Target,
  Users,
  Zap,
  ArrowRight,
  Phone,
  Calendar,
} from "lucide-react"

export default function ProjectManagementServicesPage() {
  const services = [
    {
      icon: Users,
      title: "إدارة فرق العمل",
      description: "تنظيم وتوجيه فرق العمل لتحقيق أهداف المشروع بكفاءة",
      features: ["توزيع المهام", "متابعة الأداء", "تحفيز الفريق"],
    },
    {
      icon: Target,
      title: "ضبط الجداول الزمنية",
      description: "إدارة الوقت والموارد لضمان تسليم المشاريع في الموعد المحدد",
      features: ["تخطيط زمني دقيق", "إدارة المخاطر", "تتبع التقدم"],
    },
    {
      icon: Award,
      title: "ضمان الجودة",
      description: "تطبيق أعلى معايير الجودة في جميع مراحل المشروع",
      features: ["مراقبة الجودة", "تدقيق العمليات", "تحسين مستمر"],
    },
    {
      icon: Zap,
      title: "حلول تقنية متقدمة",
      description: "استخدام أحدث الأدوات والبرمجيات في إدارة المشاريع",
      features: ["برمجيات إدارة المشاريع", "تقارير فورية", "تحليل البيانات"],
    },
  ]

  const process = [
    {
      step: "01",
      title: "تحديد نطاق المشروع",
      description: "تحديد الأهداف والمتطلبات بدقة مع العميل",
    },
    {
      step: "02",
      title: "تخطيط وتنظيم الموارد",
      description: "إعداد خطة شاملة وتوزيع الموارد والمهام",
    },
    {
      step: "03",
      title: "التنفيذ والمتابعة",
      description: "إدارة التنفيذ ومتابعة التقدم وحل المشكلات",
    },
    {
      step: "04",
      title: "التسليم والتقييم",
      description: "تسليم المشروع وتقييم النتائج وضمان رضا العميل",
    },
  ]

  const projects = [
    {
      title: "مشروع تطوير الحي السكني",
      category: "إسكان",
      area: "30,000 م²",
      description: "إدارة شاملة لمشروع تطوير حي سكني متكامل",
    },
    {
      title: "مستشفى المستقبل",
      category: "مباني طبية",
      area: "20,000 م²",
      description: "إدارة تنفيذ مستشفى حديث بمعايير عالمية",
    },
    {
      title: "مركز الأعمال الذكي",
      category: "مباني إدارية",
      area: "15,000 م²",
      description: "إدارة مشروع مركز أعمال بتقنيات ذكية متقدمة",
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
              إدارة المشاريع
            </Badge>
            <h1 className="heading-1 text-gray-900 mb-6">
              إدارة مشاريع باحترافية
              <span className="block text-gray-700">تحقق أهدافك بكفاءة</span>
            </h1>
            <p className="body-large mb-8">
              نقدم خدمات إدارة المشاريع من التخطيط وحتى التسليم، مع ضمان الجودة والالتزام بالوقت والتكلفة.
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
            <h2 className="heading-2 text-gray-900 mb-6">خدمات إدارة المشاريع</h2>
            <p className="body-large max-w-3xl mx-auto">نقدم مجموعة متكاملة من خدمات إدارة المشاريع الحديثة</p>
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
            <p className="body-large max-w-3xl mx-auto">نتبع منهجية علمية دقيقة لضمان نجاح كل مشروع</p>
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
            <h2 className="heading-2 text-gray-900 mb-6">مشاريع إدارة مميزة</h2>
            <p className="body-large max-w-3xl mx-auto">نماذج من مشاريعنا في إدارة المشاريع</p>
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
            <h2 className="heading-2 mb-6">جاهز لإدارة مشروعك باحترافية؟</h2>
            <p className="body-large text-gray-300 mb-12">
              احصل على استشارة مجانية من خبرائنا في إدارة المشاريع واكتشف كيف نحقق أهدافك بكفاءة
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