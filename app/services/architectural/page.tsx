"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/layout/header"
import Image from "next/image"
import Link from "next/link"
import {
  PenTool,
  Building2,
  Ruler,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Phone,
  Calendar,
  Users,
  Award,
  Target,
  Zap,
} from "lucide-react"

export default function ArchitecturalServicesPage() {
  const services = [
    {
      icon: PenTool,
      title: "التصميم المعماري",
      description: "تصاميم معمارية مبتكرة تجمع بين الجمال والوظيفة",
      features: ["تصميم المخططات", "النمذجة ثلاثية الأبعاد", "التصور المعماري"],
    },
    {
      icon: Building2,
      title: "التخطيط العمراني",
      description: "تخطيط شامل للمشاريع العمرانية والسكنية",
      features: ["دراسة الموقع", "التخطيط الحضري", "تصميم المساحات"],
    },
    {
      icon: Ruler,
      title: "الرسوم التنفيذية",
      description: "رسوم تفصيلية دقيقة للتنفيذ",
      features: ["المخططات التنفيذية", "التفاصيل الإنشائية", "جداول الكميات"],
    },
    {
      icon: Lightbulb,
      title: "الاستشارات التصميمية",
      description: "استشارات متخصصة في التصميم والتطوير",
      features: ["تقييم التصاميم", "تحسين الكفاءة", "حلول إبداعية"],
    },
  ]

  const projects = [
    {
      title: "مجمع الرياض التجاري",
      category: "مباني تجارية",
      area: "50,000 م²",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      description: "مجمع تجاري حديث بتصميم معماري متميز",
    },
    {
      title: "فيلا العائلة الملكية",
      category: "مشاريع سكنية",
      area: "2,500 م²",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
      description: "فيلا فاخرة بتصميم معماري استثنائي",
    },
    {
      title: "مركز الأعمال الدولي",
      category: "مباني إدارية",
      area: "75,000 م²",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      description: "مركز أعمال بمعايير عالمية",
    },
  ]

  const process = [
    {
      step: "01",
      title: "الاستشارة الأولية",
      description: "نناقش رؤيتكم ومتطلباتكم بالتفصيل",
    },
    {
      step: "02",
      title: "دراسة الموقع",
      description: "تحليل شامل للموقع والعوامل المؤثرة",
    },
    {
      step: "03",
      title: "التصميم المفاهيمي",
      description: "وضع المفاهيم الأولية والأفكار التصميمية",
    },
    {
      step: "04",
      title: "التطوير والتنفيذ",
      description: "تطوير التصميم وإعداد الرسوم التنفيذية",
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
              <PenTool className="h-4 w-4 ml-2" />
              الاستشارات المعمارية
            </Badge>
            <h1 className="heading-1 text-gray-900 mb-6">
              تصاميم معمارية
              <span className="block text-gray-700">تحاكي المستقبل</span>
            </h1>
            <p className="body-large mb-8">
              نقدم خدمات الاستشارات المعمارية الشاملة من التصميم المفاهيمي إلى الرسوم التنفيذية بأعلى معايير الجودة
              والإبداع
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
            <h2 className="heading-2 text-gray-900 mb-6">خدماتنا المعمارية</h2>
            <p className="body-large max-w-3xl mx-auto">نقدم مجموعة شاملة من الخدمات المعمارية المتخصصة</p>
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
            <p className="body-large max-w-3xl mx-auto">نتبع منهجية علمية مدروسة لضمان تحقيق أفضل النتائج</p>
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
            <h2 className="heading-2 text-gray-900 mb-6">مشاريع معمارية مميزة</h2>
            <p className="body-large max-w-3xl mx-auto">نماذج من أعمالنا المعمارية المتميزة</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-0 card-shadow hover:card-shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-64">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-gray-700">{project.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
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
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 text-gray-900 mb-6">
                لماذا تختار خدماتنا
                <span className="block text-gray-700">المعمارية؟</span>
              </h2>
              <p className="body-large mb-8">
                نجمع بين الخبرة العريقة والتقنيات الحديثة لتقديم تصاميم معمارية استثنائية
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Users,
                    title: "فريق متخصص",
                    description: "مهندسون معماريون بخبرة تزيد عن 15 عاماً",
                  },
                  {
                    icon: Award,
                    title: "جوائز ومعايير",
                    description: "حاصلون على جوائز محلية وإقليمية في التصميم",
                  },
                  {
                    icon: Target,
                    title: "دقة في التنفيذ",
                    description: "نهتم بأدق التفاصيل لضمان تحقيق رؤيتكم",
                  },
                  {
                    icon: Zap,
                    title: "تقنيات متطورة",
                    description: "نستخدم أحدث برامج التصميم والنمذجة",
                  },
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="flex items-start space-x-4 space-x-reverse">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-gray-700" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=800&fit=crop"
                alt="فريق التصميم المعماري"
                width={600}
                height={800}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 mb-6">جاهز لبدء مشروعك المعماري؟</h2>
            <p className="body-large text-gray-300 mb-12">
              احصل على استشارة مجانية من خبرائنا المعماريين واكتشف كيف يمكننا تحويل رؤيتك إلى تحفة معمارية
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
