"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/layout/header"
import Image from "next/image"
import { Building2, MapPin, Calendar, Users, ArrowRight, Filter, Search } from "lucide-react"
import { projects } from "@/data/projects"

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("الكل")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = ["الكل", "مباني تجارية", "مشاريع سكنية", "مباني طبية", "مشاريع تعليمية", "مباني حكومية"]

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeFilter === "الكل" || project.category === activeFilter
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-gray-700 border border-gray-300">
              <Building2 className="h-4 w-4 ml-2" />
              مشاريعنا
            </Badge>
            <h1 className="heading-1 text-gray-900 mb-6">
              إنجازات نفتخر بها
              <span className="block text-gray-700">في جميع أنحاء المملكة</span>
            </h1>
            <p className="body-large">
              اكتشف مجموعة متنوعة من مشاريعنا المكتملة والجارية التي تعكس خبرتنا وإبداعنا في مختلف القطاعات
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="ابحث في المشاريع..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex items-center space-x-2 space-x-reverse">
              <Filter className="h-5 w-5 text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeFilter === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter(category)}
                    className={
                      activeFilter === category ? "bg-gray-900 hover:bg-gray-800" : "bg-transparent hover:bg-gray-50"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="border-0 card-shadow hover:card-shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Badge className="bg-white/90 text-gray-700">{project.category}</Badge>
                    <Badge
                      className={`${
                        project.status === "مكتمل"
                          ? "bg-green-100 text-green-800"
                          : project.status === "قيد التنفيذ"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

                  <div className="space-y-2 mb-4 text-sm text-gray-500">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 ml-1" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 ml-1" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Building2 className="h-4 w-4 ml-1" />
                        <span>{project.area}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 ml-1" />
                        <span>{project.client}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {project.features.length > 3 && (
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                        +{project.features.length - 3}
                      </Badge>
                    )}
                  </div>

                  <Button variant="outline" className="w-full bg-transparent">
                    تفاصيل المشروع
                    <ArrowRight className="mr-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <Building2 className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">لا توجد مشاريع</h3>
              <p className="text-gray-600">لم نجد مشاريع تطابق البحث أو الفلتر المحدد</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 text-gray-900 mb-6">هل لديك مشروع في ذهنك؟</h2>
            <p className="body-large mb-8">
              دعنا نساعدك في تحويل فكرتك إلى واقع معماري متميز. احصل على استشارة مجانية من خبرائنا
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
                ابدأ مشروعك الآن
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent">
                تحدث مع خبير
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
