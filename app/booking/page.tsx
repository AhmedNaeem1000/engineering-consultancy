"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/layout/header"
import { Calendar, Clock, CheckCircle, ArrowRight, CalendarDays } from "lucide-react"

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [bookingData, setBookingData] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isBooked, setIsBooked] = useState(false)

  const services = [
    {
      id: "consultation",
      name: "استشارة عامة",
      duration: "30 دقيقة",
      price: "مجاناً",
      description: "استشارة أولية لمناقشة مشروعك ومتطلباتك",
    },
    {
      id: "architectural",
      name: "استشارة معمارية",
      duration: "60 دقيقة",
      price: "500 ريال",
      description: "استشارة متخصصة في التصميم المعماري",
    },
    {
      id: "structural",
      name: "استشارة إنشائية",
      duration: "60 دقيقة",
      price: "600 ريال",
      description: "استشارة في الهندسة الإنشائية والتصميم",
    },
    {
      id: "project-management",
      name: "استشارة إدارة مشاريع",
      duration: "45 دقيقة",
      price: "400 ريال",
      description: "استشارة في تخطيط وإدارة المشاريع",
    },
  ]

  const availableDates = [
    "2024-02-01",
    "2024-02-02",
    "2024-02-05",
    "2024-02-06",
    "2024-02-07",
    "2024-02-08",
    "2024-02-12",
    "2024-02-13",
    "2024-02-14",
    "2024-02-15",
  ]

  const availableTimes = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setBookingData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate booking submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsBooked(true)
  }

  if (isBooked) {
    return (
      <main className="min-h-screen">
        <Header />
        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="heading-2 text-gray-900 mb-4">تم حجز موعدكم بنجاح!</h1>
              <p className="body-large mb-8">
                شكراً لحجز موعد معنا. ستصلكم رسالة تأكيد على البريد الإلكتروني مع تفاصيل الموعد.
              </p>

              <Card className="border-0 card-shadow mb-8">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">تفاصيل الموعد</h3>
                  <div className="space-y-3 text-right">
                    <div className="flex justify-between">
                      <span className="text-gray-600">الخدمة:</span>
                      <span className="font-semibold">{services.find((s) => s.id === bookingData.service)?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">التاريخ:</span>
                      <span className="font-semibold">{new Date(bookingData.date).toLocaleDateString("ar-SA")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">الوقت:</span>
                      <span className="font-semibold">{bookingData.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">المدة:</span>
                      <span className="font-semibold">
                        {services.find((s) => s.id === bookingData.service)?.duration}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => (window.location.href = "/")} className="bg-gray-900 hover:bg-gray-800">
                  العودة للرئيسية
                </Button>
                <Button variant="outline" className="bg-transparent">
                  إضافة للتقويم
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
              <CalendarDays className="h-4 w-4 ml-2" />
              حجز موعد
            </Badge>
            <h1 className="heading-1 text-gray-900 mb-6">
              احجز استشارة
              <span className="block text-gray-700">مع خبرائنا</span>
            </h1>
            <p className="body-large">احجز موعداً مع فريق الخبراء لدينا للحصول على استشارة متخصصة في مشروعك</p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between">
              {[
                { step: 1, title: "اختر الخدمة" },
                { step: 2, title: "اختر الموعد" },
                { step: 3, title: "معلوماتك" },
              ].map((item, index) => (
                <div key={item.step} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                      currentStep >= item.step ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {item.step}
                  </div>
                  <span className={`mr-3 ${currentStep >= item.step ? "text-gray-900" : "text-gray-500"}`}>
                    {item.title}
                  </span>
                  {index < 2 && (
                    <div className={`w-16 h-1 mx-4 ${currentStep > item.step ? "bg-gray-900" : "bg-gray-200"}`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            {/* Step 1: Service Selection */}
            {currentStep === 1 && (
              <div>
                <div className="text-center mb-8">
                  <h2 className="heading-3 text-gray-900 mb-4">اختر نوع الاستشارة</h2>
                  <p className="text-gray-600">حدد نوع الخدمة التي تحتاجها</p>
                </div>

                <div className="grid gap-6">
                  {services.map((service) => (
                    <Card
                      key={service.id}
                      className={`cursor-pointer border-2 transition-all duration-200 ${
                        bookingData.service === service.id
                          ? "border-gray-900 card-shadow-lg"
                          : "border-gray-200 hover:border-gray-300 card-shadow"
                      }`}
                      onClick={() => setBookingData((prev) => ({ ...prev, service: service.id }))}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">{service.name}</h3>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                          </div>
                          <div className="text-left">
                            <div className="text-lg font-bold text-gray-900">{service.price}</div>
                            <div className="text-sm text-gray-500">{service.duration}</div>
                          </div>
                        </div>
                        {bookingData.service === service.id && (
                          <div className="flex items-center text-green-600">
                            <CheckCircle className="h-5 w-5 ml-2" />
                            <span className="text-sm font-medium">محدد</span>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="flex justify-end mt-8">
                  <Button
                    onClick={handleNext}
                    disabled={!bookingData.service}
                    className="bg-gray-900 hover:bg-gray-800"
                  >
                    التالي
                    <ArrowRight className="mr-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Date and Time Selection */}
            {currentStep === 2 && (
              <div>
                <div className="text-center mb-8">
                  <h2 className="heading-3 text-gray-900 mb-4">اختر التاريخ والوقت</h2>
                  <p className="text-gray-600">حدد الموعد المناسب لك</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Date Selection */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Calendar className="h-5 w-5 ml-2" />
                      اختر التاريخ
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {availableDates.map((date) => (
                        <button
                          key={date}
                          onClick={() => setBookingData((prev) => ({ ...prev, date }))}
                          className={`p-3 text-sm rounded-lg border transition-all duration-200 ${
                            bookingData.date === date
                              ? "border-gray-900 bg-gray-900 text-white"
                              : "border-gray-300 hover:border-gray-400 bg-white"
                          }`}
                        >
                          {new Date(date).toLocaleDateString("ar-SA", {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                          })}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Selection */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Clock className="h-5 w-5 ml-2" />
                      اختر الوقت
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {availableTimes.map((time) => (
                        <button
                          key={time}
                          onClick={() => setBookingData((prev) => ({ ...prev, time }))}
                          disabled={!bookingData.date}
                          className={`p-3 text-sm rounded-lg border transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                            bookingData.time === time
                              ? "border-gray-900 bg-gray-900 text-white"
                              : "border-gray-300 hover:border-gray-400 bg-white"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <Button variant="outline" onClick={handlePrevious} className="bg-transparent">
                    السابق
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={!bookingData.date || !bookingData.time}
                    className="bg-gray-900 hover:bg-gray-800"
                  >
                    التالي
                    <ArrowRight className="mr-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Personal Information */}
            {currentStep === 3 && (
              <div>
                <div className="text-center mb-8">
                  <h2 className="heading-3 text-gray-900 mb-4">معلوماتك الشخصية</h2>
                  <p className="text-gray-600">أكمل بياناتك لتأكيد الحجز</p>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">الاسم الكامل *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={bookingData.name}
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
                        value={bookingData.email}
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
                        value={bookingData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                        placeholder="+966 5X XXX XXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">الشركة (اختياري)</label>
                      <input
                        type="text"
                        name="company"
                        value={bookingData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                        placeholder="اسم الشركة"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">نوع المشروع</label>
                      <select
                        name="projectType"
                        value={bookingData.projectType}
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
                        value={bookingData.budget}
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">تفاصيل إضافية</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={bookingData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
                      placeholder="اكتب أي تفاصيل إضافية عن مشروعك..."
                    />
                  </div>
                </form>

                <div className="flex justify-between mt-8">
                  <Button variant="outline" onClick={handlePrevious} className="bg-transparent">
                    السابق
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    disabled={!bookingData.name || !bookingData.email || !bookingData.phone || isSubmitting}
                    className="bg-gray-900 hover:bg-gray-800"
                  >
                    {isSubmitting ? "جاري الحجز..." : "تأكيد الحجز"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
