"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/layout/header"
import Image from "next/image"
import {
  PenTool,
  Building2,
  ClipboardCheck,
  Shield,
  Home,
  Palette,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Users,
} from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: PenTool,
      title: "الاستشارات المعمارية",
      description: "تصاميم معمارية مبتكرة تجمع بين الجمال والوظيفة والاستدامة",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop",
      features: [
        "دراسة الموقع والتحليل البيئي",
        "التصميم المعماري الأولي والتفصيلي",
        "الرسوم التنفيذية والمواصفات",
        "استشارات التطوير العقاري",
        "دراسات الجدوى المعمارية",
      ],
      process: ["دراسة المتطلبات والموقع", "وضع المفهوم التصميمي", "التصميم التفصيلي", "إعداد الرسوم التنفيذية"],
      duration: "4-8 أسابيع",
      price: "يبدأ من 50,000 ريال",
    },
    {
      icon: Building2,
      title: "الهندسة الإنشائية",
      description: "حلول إنشائية آمنة ومتطورة باستخدام أحدث التقنيات والمعايير",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop",
      features: [
        "التصميم الإنشائي للمباني",
        "حساب الأحمال والتحليل الإنشائي",
        "اختيار المواد والأنظمة الإنشائية",
        "مراجعة وتدقيق التصاميم",
        "إشراف على التنفيذ الإنشائي",
      ],
      process: ["تحليل الأحمال والقوى", "التصميم الإنشائي", "إعداد الرسوم التنفيذية", "الإشراف على التنفيذ"],
      duration: "6-10 أسابيع",
      price: "يبدأ من 75,000 ريال",
    },
    {
      icon: ClipboardCheck,
      title: "إدارة المشاريع",
      description: "إدارة متكاملة تضمن تسليم المشاريع في الوقت والميزانية المحددة",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      features: [
        "تخطيط وجدولة المشاريع",
        "إدارة التكاليف والميزانيات",
        "متابعة التنفيذ وضمان الجودة",
        "التنسيق بين الفرق المختلفة",
        "إعداد التقارير الدورية",
      ],
      process: ["وضع خطة المشروع", "تنسيق الفرق والموارد", "متابعة التقدم", "ضمان الجودة والتسليم"],
      duration: "حسب حجم المشروع",
      price: "يبدأ من 30,000 ريال",
    },
    {
      icon: Shield,
      title: "الإشراف الهندسي",
      description: "إشراف دقيق لضمان تطبيق أعلى معايير الجودة والسلامة",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
      features: [
        "الإشراف على تنفيذ الأعمال",
        "مراقبة الجودة والمطابقة",
        "فحص المواد والأعمال",
        "إعداد تقارير التقدم",
        "حل المشاكل التقنية",
      ],
      process: ["مراجعة المخططات", "الإشراف اليومي", "فحص الجودة", "إعداد التقارير"],
      duration: "طوال فترة التنفيذ",
      price: "يبدأ من 40,000 ريال",
    },
    {
      icon: Home,
      title: "التصميم السكني",
      description: "تصاميم سكنية مميزة تلبي احتياجات العائلات العصرية",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
      features: [
        "تصميم الفلل والقصور",
        "تخطيط الشقق والمجمعات",
        "تصميم المساحات الداخلية",
        "تنسيق الحدائق والمناظر",
        "حلول التخزين والتنظيم",
      ],
      process: ["فهم احتياجات العائلة", "وضع التصميم الأولي", "التطوير والتحسين", "الرسوم النهائية"],
      duration: "3-6 أسابيع",
      price: "يبدأ من 35,000 ريال",
    },
    {
      icon: Palette,
      title: "التصميم الداخلي",
      description: "تصاميم داخلية أنيقة تعكس شخصيتكم وتلبي احتياجاتكم",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      features: [
        "تخطيط المساحات الداخلية",
        "اختيار الألوان والمواد",
        "تصميم الأثاث المخصص",
        "الإضاءة والديكور",
        "التنسيق مع المقاولين",
      ],
      process: ["دراسة المساحة والاحتياجات", "وضع المفهوم التصميمي", "اختيار المواد والألوان", "الإشراف على التنفيذ"],
      duration: "4-8 أسابيع",
      price: "يبدأ من 25,000 ريال",
    },
  ]

  const whyChooseOurServices = [
    {
      icon: Award,
      title: "خبرة معتمدة",
      description: "فريق من المهندسين المعتمدين مع خبرة تزيد عن 18 عاماً",
    },
    {
      icon: Clock,
      title: "التزام بالمواعيد",
      description: "نلتزم بتسليم جميع المشاريع في المواعيد المحددة",
    },
    {
      icon: CheckCircle,
      title: "ضمان الجودة",
      description: "نضمن أعلى معايير الجودة في جميع خدماتنا",
    },
    {
      icon: Users,
      title: "خدمة عملاء متميزة",
      description: "فريق دعم متخصص متاح لخدمتكم على مدار الساعة",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-gray-700 border border-gray-300">
              <Building2 className="h-4 w-4 ml-2" />
              خدماتنا
            </Badge>
            <h1 className="heading-1 text-gray-900 mb-6">
              حلول هندسية شاملة
              <span className="block text-gray-700">لكل احتياجاتكم</span>
            </h1>
            <p className="body-large">
              نقدم مجموعة متكاملة من الخدمات الهندسية والمعمارية بأعلى معايير الجودة والاحترافية
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="border-0 card-shadow hover:card-shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute top-6 right-6">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-6 right-6 left-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      <p className="text-white/90">{service.description}</p>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {/* Features */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">ما نقدمه:</h4>
                        <div className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start space-x-3 space-x-reverse">
                              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Process */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">خطوات العمل:</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {service.process.map((step, stepIndex) => (
                            <div key={stepIndex} className="flex items-center space-x-2 space-x-reverse">
                              <div className="w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                {stepIndex + 1}
                              </div>
                              <span className="text-sm text-gray-600">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Details */}
                      <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                        <div className="space-y-1">
                          <div className="text-sm text-gray-500">المدة المتوقعة</div>
                          <div className="font-semibold text-gray-900">{service.duration}</div>
                        </div>
                        <div className="space-y-1 text-left">
                          <div className="text-sm text-gray-500">السعر</div>
                          <div className="font-semibold text-gray-900">{service.price}</div>
                        </div>
                      </div>

                      <Button className="w-full bg-gray-900 hover:bg-gray-800">
                        اطلب الخدمة
                        <ArrowRight className="mr-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white text-gray-700 border border-gray-300">مميزاتنا</Badge>
            <h2 className="heading-2 text-gray-900 mb-6">لماذا تختار خدماتنا؟</h2>
            <p className="body-large max-w-3xl mx-auto">
              نتميز بالخبرة والاحترافية والالتزام بأعلى معايير الجودة في جميع خدماتنا
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseOurServices.map((item, index) => {
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

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gray-100 text-gray-700">منهجية العمل</Badge>
            <h2 className="heading-2 text-gray-900 mb-6">كيف نعمل معكم؟</h2>
            <p className="body-large max-w-3xl mx-auto">
              نتبع منهجية واضحة ومنظمة لضمان تحقيق أفضل النتائج في كل مشروع
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "الاستشارة الأولية",
                  description: "نلتقي بكم لفهم رؤيتكم ومتطلباتكم",
                },
                {
                  step: "02",
                  title: "التخطيط والتصميم",
                  description: "نضع الخطة ونطور التصاميم الأولية",
                },
                {
                  step: "03",
                  title: "التطوير والتنفيذ",
                  description: "نطور التصاميم ونشرف على التنفيذ",
                },
                {
                  step: "04",
                  title: "التسليم والمتابعة",
                  description: "نسلم المشروع ونقدم الدعم المستمر",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 mb-6">مستعد لبدء مشروعك؟</h2>
            <p className="body-large text-gray-300 mb-12">
              احصل على استشارة مجانية من خبرائنا واكتشف كيف يمكننا مساعدتك في تحقيق رؤيتك
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                احصل على استشارة مجانية
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 bg-transparent">
                تحدث مع خبير
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
