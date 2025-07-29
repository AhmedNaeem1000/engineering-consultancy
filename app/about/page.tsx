"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/layout/header"
import Image from "next/image"
import { Award, Users, Target, Eye, Building2, Calendar, CheckCircle, ArrowRight } from "lucide-react"

export default function AboutPage() {
  const milestones = [
    {
      year: "2006",
      title: "تأسيس الشركة",
      description: "بداية الرحلة مع رؤية واضحة لتطوير الهندسة المعمارية في المملكة",
    },
    {
      year: "2010",
      title: "التوسع الأول",
      description: "افتتاح فرع جدة وتوسيع نطاق الخدمات لتشمل الهندسة الإنشائية",
    },
    {
      year: "2015",
      title: "الاعتماد الدولي",
      description: "حصولنا على شهادة ISO 9001:2015 والاعتماد من الهيئة السعودية للمهندسين",
    },
    {
      year: "2018",
      title: "مشاريع كبرى",
      description: "تنفيذ أول مشروع حكومي كبير وبداية العمل مع القطاع العام",
    },
    {
      year: "2020",
      title: "التحول الرقمي",
      description: "تطبيق تقنيات BIM والتصميم الرقمي في جميع مشاريعنا",
    },
    {
      year: "2024",
      title: "الريادة والتميز",
      description: "أصبحنا من أكبر الشركات الهندسية في المملكة مع أكثر من 450 مشروع",
    },
  ]

  const team = [
    {
      name: "المهندس أحمد محمد السعيد",
      position: "الرئيس التنفيذي والمؤسس",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "خبرة 25 عاماً في الهندسة المعمارية والإدارة",
      education: "ماجستير هندسة معمارية - جامعة الملك سعود",
      specialties: ["التصميم المعماري", "إدارة المشاريع", "التطوير العقاري"],
    },
    {
      name: "الدكتورة فاطمة عبدالله النعيمي",
      position: "مديرة التصميم والتطوير",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "دكتوراه في الهندسة المعمارية المستدامة",
      education: "دكتوراه هندسة معمارية - جامعة كامبريدج",
      specialties: ["العمارة المستدامة", "التصميم البيئي", "البحث والتطوير"],
    },
    {
      name: "المهندس خالد إبراهيم الزعابي",
      position: "مدير الهندسة الإنشائية",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "خبير في الهندسة الإنشائية والتصميم الزلزالي",
      education: "ماجستير هندسة إنشائية - جامعة الملك فهد",
      specialties: ["التصميم الإنشائي", "تحليل الزلازل", "المواد الحديثة"],
    },
    {
      name: "المهندسة نورا سعد القحطاني",
      position: "مديرة إدارة المشاريع",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "متخصصة في إدارة المشاريع الكبرى والتخطيط الاستراتيجي",
      education: "ماجستير إدارة مشاريع - جامعة الأمير سلطان",
      specialties: ["إدارة المشاريع", "التخطيط الاستراتيجي", "ضمان الجودة"],
    },
  ]

  const values = [
    {
      icon: Award,
      title: "التميز والجودة",
      description: "نسعى دائماً لتحقيق أعلى معايير الجودة في جميع أعمالنا",
    },
    {
      icon: Users,
      title: "العمل الجماعي",
      description: "نؤمن بقوة الفريق الواحد والتعاون لتحقيق النجاح",
    },
    {
      icon: Target,
      title: "الالتزام بالمواعيد",
      description: "نحترم الوقت ونلتزم بتسليم المشاريع في المواعيد المحددة",
    },
    {
      icon: CheckCircle,
      title: "الشفافية والثقة",
      description: "نبني علاقات طويلة الأمد مع عملائنا على أساس الثقة والشفافية",
    },
  ]

  const achievements = [
    "أكثر من 450 مشروع مكتمل بنجاح",
    "98% معدل رضا العملاء",
    "شهادة ISO 9001:2015 للجودة",
    "عضوية الهيئة السعودية للمهندسين",
    "15 جائزة محلية ودولية للتميز",
    "فريق من 65+ مهندس محترف",
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
              من نحن
            </Badge>
            <h1 className="heading-1 text-gray-900 mb-6">
              قصة نجاح تمتد
              <span className="block text-gray-700">لأكثر من 18 عاماً</span>
            </h1>
            <p className="body-large">
              منذ تأسيسنا في 2006، نسعى لتقديم حلول هندسية مبتكرة ومتميزة تساهم في بناء مستقبل أفضل للمملكة العربية
              السعودية
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-gray-100 text-gray-700">
                <Eye className="h-4 w-4 ml-2" />
                رؤيتنا ورسالتنا
              </Badge>
              <h2 className="heading-2 text-gray-900 mb-8">
                نبني المستقبل
                <span className="block text-gray-700">بإتقان وإبداع</span>
              </h2>

              <div className="space-y-8">
                <Card className="border-0 card-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 space-x-reverse mb-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Eye className="h-6 w-6 text-gray-700" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">رؤيتنا</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      أن نكون الشركة الرائدة في مجال الاستشارات الهندسية والمعمارية في المملكة العربية السعودية، ونساهم
                      في تحقيق رؤية 2030 من خلال مشاريع مبتكرة ومستدامة.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 card-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 space-x-reverse mb-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Target className="h-6 w-6 text-gray-700" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">رسالتنا</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      نقدم حلولاً هندسية متكاملة ومبتكرة تتميز بالجودة والاحترافية، ونساعد عملاءنا في تحقيق رؤاهم
                      المعمارية بأعلى المعايير العالمية وبما يتماشى مع البيئة المحلية.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=800&fit=crop"
                alt="رؤية شركة الواحة الهندسية"
                width={600}
                height={800}
                className="rounded-2xl card-shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white text-gray-700 border border-gray-300">
              <Calendar className="h-4 w-4 ml-2" />
              رحلة النجاح
            </Badge>
            <h2 className="heading-2 text-gray-900 mb-6">
              معالم مهمة في
              <span className="block text-gray-700">تاريخ الشركة</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute right-1/2 transform translate-x-1/2 w-1 h-full bg-gray-300 rounded-full"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? "pl-12" : "pr-12"}`}>
                      <Card className="border-0 card-shadow hover:card-shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="text-2xl font-bold text-gray-900 mb-2">{milestone.year}</div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline Node */}
                    <div className="relative z-10">
                      <div className="w-6 h-6 bg-gray-900 rounded-full border-4 border-white card-shadow"></div>
                    </div>

                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gray-100 text-gray-700">
              <Users className="h-4 w-4 ml-2" />
              فريق القيادة
            </Badge>
            <h2 className="heading-2 text-gray-900 mb-6">
              خبراء يقودون
              <span className="block text-gray-700">رحلة التميز</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-0 card-shadow hover:card-shadow-lg transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-6 text-center flex flex-col items-center justify-center h-full">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-amber-700 font-semibold mb-2">{member.position}</p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{member.bio}</p>
                  <div className="mb-4">
                    <div className="text-xs text-gray-500 mb-1">التعليم:</div>
                    <div className="text-sm text-gray-700">{member.education}</div>
                  </div>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.specialties.map((specialty, specialtyIndex) => (
                      <Badge key={specialtyIndex} variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white text-gray-700 border border-gray-300">
              <Award className="h-4 w-4 ml-2" />
              قيمنا الأساسية
            </Badge>
            <h2 className="heading-2 text-gray-900 mb-6">
              المبادئ التي
              <span className="block text-gray-700">تقودنا للنجاح</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="text-center border-0 card-shadow hover:card-shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 mb-6">انضم إلى قصة نجاحنا</h2>
            <p className="body-large text-gray-300 mb-12">
              كن جزءاً من رحلتنا واجعل مشروعك القادم إضافة جديدة لقائمة إنجازاتنا المتميزة
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                ابدأ مشروعك معنا
                <ArrowRight className="mr-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 bg-transparent">
                تعرف على خدماتنا
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
