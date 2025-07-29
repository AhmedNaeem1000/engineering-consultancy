"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/layout/header"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Building2, MessageSquare, Calendar, Users } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    projectType: "",
    budget: "",
    message: "",
    preferredContact: "phone",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "اتصل بنا",
      details: ["+966 11 234 5678", "+966 11 234 5679"],
      description: "متاحون للرد على استفساراتكم",
    },
    {
      icon: Mail,
      title: "راسلنا",
      details: ["info@alwaha-engineering.com", "projects@alwaha-engineering.com"],
      description: "نرد على جميع الرسائل خلال 24 ساعة",
    },
    {
      icon: MapPin,
      title: "زورونا",
      details: ["شارع الملك فهد، حي العليا", "الرياض، المملكة العربية السعودية"],
      description: "مكتبنا الرئيسي في قلب الرياض",
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      details: ["الأحد - الخميس: 8:00 ص - 6:00 م", "الجمعة - السبت: مغلق"],
      description: "نحن هنا لخدمتكم في أوقات العمل الرسمية",
    },
  ]

  const offices = [
    {
      city: "الرياض",
      address: "شارع الملك فهد، حي العليا",
      phone: "+966 11 234 5678",
      email: "riyadh@alwaha-engineering.com",
      isMain: true,
    },
    {
      city: "جدة",
      address: "طريق الملك عبدالعزيز، حي الروضة",
      phone: "+966 12 345 6789",
      email: "jeddah@alwaha-engineering.com",
      isMain: false,
    },
    {
      city: "الدمام",
      address: "شارع الأمير محمد بن فهد، حي الفيصلية",
      phone: "+966 13 456 7890",
      email: "dammam@alwaha-engineering.com",
      isMain: false,
    },
  ]

  if (isSubmitted) {
    return (
      <main className="min-h-screen">
        <Header />
        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="heading-2 text-gray-900 mb-4">تم إرسال رسالتكم بنجاح!</h1>
              <p className="body-large mb-8">شكراً لتواصلكم معنا. سيقوم فريقنا بالرد عليكم خلال 24 ساعة.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => setIsSubmitted(false)} className="bg-gray-900 hover:bg-gray-800">
                  إرسال رسالة أخرى
                </Button>
                <Button variant="outline" className="bg-transparent">
                  العودة للرئيسية
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-gray-700 border border-gray-300">
              <MessageSquare className="h-4 w-4 ml-2" />
              تواصل معنا
            </Badge>
            <h1 className="heading-1 text-gray-900 mb-6">
              نحن هنا لمساعدتكم
              <span className="block text-gray-700">في تحقيق رؤيتكم</span>
            </h1>
            <p className="body-large">
              تواصلوا معنا للحصول على استشارة مجانية أو لمناقشة مشروعكم القادم مع فريق من الخبراء
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="heading-3 text-gray-900 mb-4">أرسل لنا رسالة</h2>
                <p className="text-gray-600">املأ النموذج أدناه وسنتواصل معكم في أقرب وقت ممكن</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">الاسم الكامل *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      placeholder="+966 5X XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">الخدمة المطلوبة</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    >
                      <option value="">اختر الخدمة</option>
                      <option value="architectural">الاستشارات المعمارية</option>
                      <option value="structural">الهندسة الإنشائية</option>
                      <option value="project-management">إدارة المشاريع</option>
                      <option value="supervision">الإشراف الهندسي</option>
                      <option value="interior">التصميم الداخلي</option>
                      <option value="consultation">استشارة عامة</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">نوع المشروع</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    >
                      <option value="">اختر نوع المشروع</option>
                      <option value="residential">سكني</option>
                      <option value="commercial">تجاري</option>
                      <option value="medical">طبي</option>
                      <option value="educational">تعليمي</option>
                      <option value="government">حكومي</option>
                      <option value="industrial">صناعي</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">الميزانية المتوقعة</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    >
                      <option value="">اختر الميزانية</option>
                      <option value="under-100k">أقل من 100,000 ريال</option>
                      <option value="100k-500k">100,000 - 500,000 ريال</option>
                      <option value="500k-1m">500,000 - 1,000,000 ريال</option>
                      <option value="1m-5m">1,000,000 - 5,000,000 ريال</option>
                      <option value="over-5m">أكثر من 5,000,000 ريال</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">تفاصيل المشروع *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
                    placeholder="اكتب تفاصيل مشروعك ومتطلباتك..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">طريقة التواصل المفضلة</label>
                  <div className="flex gap-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === "phone"}
                        onChange={handleInputChange}
                        className="ml-2"
                      />
                      <span className="text-gray-700">هاتف</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === "email"}
                        onChange={handleInputChange}
                        className="ml-2"
                      />
                      <span className="text-gray-700">بريد إلكتروني</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="whatsapp"
                        checked={formData.preferredContact === "whatsapp"}
                        onChange={handleInputChange}
                        className="ml-2"
                      />
                      <span className="text-gray-700">واتساب</span>
                    </label>
                  </div>
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full bg-gray-900 hover:bg-gray-800 py-4">
                  {isSubmitting ? (
                    "جاري الإرسال..."
                  ) : (
                    <>
                      <Send className="ml-2 h-5 w-5" />
                      إرسال الرسالة
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h2 className="heading-3 text-gray-900 mb-4">معلومات التواصل</h2>
                <p className="text-gray-600">يمكنكم التواصل معنا من خلال الطرق التالية</p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <Card key={index} className="border-0 card-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4 space-x-reverse">
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="h-6 w-6 text-gray-700" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                            <div className="space-y-1 mb-2">
                              {info.details.map((detail, detailIndex) => (
                                <p key={detailIndex} className="text-gray-700 font-medium">
                                  {detail}
                                </p>
                              ))}
                            </div>
                            <p className="text-sm text-gray-500">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white text-gray-700 border border-gray-300">
              <Building2 className="h-4 w-4 ml-2" />
              مكاتبنا
            </Badge>
            <h2 className="heading-2 text-gray-900 mb-6">مواقعنا في المملكة</h2>
            <p className="body-large max-w-3xl mx-auto">لدينا مكاتب في أهم المدن السعودية لخدمتكم بشكل أفضل</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card
                key={index}
                className={`border-0 card-shadow hover:card-shadow-lg transition-shadow ${office.isMain ? "ring-2 ring-gray-900" : ""}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{office.city}</h3>
                    {office.isMain && <Badge className="bg-gray-900 text-white">المكتب الرئيسي</Badge>}
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 space-x-reverse">
                      <MapPin className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{office.address}</span>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <Phone className="h-5 w-5 text-gray-500 flex-shrink-0" />
                      <span className="text-gray-700">{office.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <Mail className="h-5 w-5 text-gray-500 flex-shrink-0" />
                      <span className="text-gray-700">{office.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-gray-900 mb-6">طرق سريعة للتواصل</h2>
            <p className="body-large max-w-3xl mx-auto">اختر الطريقة الأنسب لك للتواصل معنا والحصول على المساعدة</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 card-shadow hover:card-shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">اتصال مباشر</h3>
                <p className="text-gray-600 mb-6">تحدث مع خبرائنا مباشرة للحصول على استشارة فورية</p>
                <Button className="w-full bg-gray-900 hover:bg-gray-800" asChild>
                  <Link href="tel:+966112345678">اتصل الآن</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 card-shadow hover:card-shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">احجز موعد</h3>
                <p className="text-gray-600 mb-6">احجز موعد لزيارة مكتبنا ومناقشة مشروعك بالتفصيل</p>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/booking">احجز موعد</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 card-shadow hover:card-shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">استشارة مجانية</h3>
                <p className="text-gray-600 mb-6">احصل على استشارة مجانية من فريق الخبراء لدينا</p>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/contact">استشارة مجانية</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
