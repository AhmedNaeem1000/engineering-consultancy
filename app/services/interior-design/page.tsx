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

export default function InteriorDesignServicesPage() {
  const services = [
    {
      icon: Users,
      title: "تصميم المساحات الداخلية",
      description: "تصاميم عصرية تلبي احتياجات العميل وتحقق الراحة والجمال",
      features: ["تصميم غرف المعيشة", "تصميم المكاتب", "حلول للمساحات الصغيرة"],
    },
    {
      icon: Award,
      title: "اختيار المواد والتشطيبات",
      description: "اختيار مواد عالية الجودة وتشطيبات متقنة",
      features: ["اختيار الألوان", "توزيع الإضاءة", "تشطيبات عصرية"],
    },
    {
      icon: Target,
      title: "تنسيق الأثاث والإكسسوارات",
      description: "تنسيق الأثاث والإكسسوارات بما يتناسب مع المساحة والوظيفة",
      features: ["توزيع الأثاث", "اختيار الإكسسوارات", "حلول تخزين مبتكرة"],
    },
    {
      icon: Zap,
      title: "حلول تقنية وذكية",
      description: "دمج التقنيات الذكية في التصميم الداخلي",
      features: ["إضاءة ذكية", "أنظمة تحكم", "تصاميم مستدامة"],
    },
  ]

  const process = [
    {
      step: "01",
      title: "الاستشارة والتخطيط",
      description: "فهم احتياجات العميل وتخطيط المساحات بدقة",
    },
    {
      step: "02",
      title: "التصميم والاختيار",
      description: "إعداد التصاميم واختيار المواد والتشطيبات",
    },
    {
      step: "03",
      title: "التنفيذ والإشراف",
      description: "تنفيذ التصميم والإشراف على جميع التفاصيل",
    },
    {
      step: "04",
      title: "التسليم والمتابعة",
      description: "تسليم المشروع وضمان رضا العميل والمتابعة بعد التسليم",
    },
  ]

  const projects = [
    {
      title: "فيلا النخبة",
      category: "سكني فاخر",
      area: "1,200 م²",
      description: "تصميم داخلي فاخر لفيلا خاصة مع حلول ذكية للإضاءة والتخزين",
    },
    {
      title: "مكتب الواحة",
      category: "مكاتب إدارية",
      area: "400 م²",
      description: "تصميم داخلي حديث لمكتب إداري مع توزيع مثالي للإضاءة والأثاث",
    },
    {
      title: "شقة عصرية",
      category: "سكني",
      area: "180 م²",
      description: "تصميم داخلي عصري لشقة سكنية مع استغلال أمثل للمساحات",
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
              التصميم الداخلي
            </Badge>
            <h1 className="heading-1 text-gray-900 mb-6">
              إبداع في كل زاوية
              <span className="block text-gray-700">تصاميم داخلية تلهمك</span>
            </h1>
            <p className="body-large mb-8">
              نقدم خدمات التصميم الداخلي التي تجمع بين الجمال والوظيفة، مع الاهتمام بأدق التفاصيل لتوفير بيئة مريحة وعصرية.
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
            <h2 className="heading-2 text-gray-900 mb-6">خدمات التصميم الداخلي</h2>
            <p className="body-large max-w-3xl mx-auto">نقدم مجموعة متكاملة من خدمات التصميم الداخلي العصرية</p>
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
            <p className="body-large max-w-3xl mx-auto">نتبع منهجية دقيقة لضمان أفضل النتائج في التصميم الداخلي</p>
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
            <h2 className="heading-2 text-gray-900 mb-6">مشاريع تصميم داخلي مميزة</h2>
            <p className="body-large max-w-3xl mx-auto">نماذج من مشاريعنا في التصميم الداخلي</p>
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
            <h2 className="heading-2 mb-6">جاهز لتجديد مساحتك الداخلية؟</h2>
            <p className="body-large text-gray-300 mb-12">
              احصل على استشارة مجانية من خبرائنا في التصميم الداخلي واكتشف كيف نحقق لك بيئة عصرية ومريحة
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