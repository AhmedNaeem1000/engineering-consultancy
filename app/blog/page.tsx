"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/layout/header"
import Image from "next/image"
import { Calendar, User, Clock, ArrowRight, Search, Filter, BookOpen, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("الكل")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = [
    "الكل",
    "التصميم المعماري",
    "الهندسة الإنشائية",
    "إدارة المشاريع",
    "التقنيات الحديثة",
    "الاستدامة",
  ]

  const blogPosts = [
    {
      id: 1,
      title: "مستقبل التصميم المعماري في المملكة العربية السعودية",
      excerpt: "نظرة على التطورات الحديثة في التصميم المعماري وكيف تساهم في تحقيق رؤية 2030",
      content: "التصميم المعماري في المملكة يشهد تطوراً مستمراً...",
      category: "التصميم المعماري",
      author: "المهندس أحمد السعيد",
      date: "2024-01-15",
      readTime: "5 دقائق",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      tags: ["رؤية 2030", "التصميم", "المستقبل"],
      featured: true,
    },
    {
      id: 2,
      title: "أهمية تقنية BIM في المشاريع الإنشائية الحديثة",
      excerpt: "كيف تساعد تقنية نمذجة معلومات البناء في تحسين كفاءة المشاريع وتقليل التكاليف",
      content: "تقنية BIM أحدثت ثورة في صناعة البناء...",
      category: "التقنيات الحديثة",
      author: "الدكتورة فاطمة النعيمي",
      date: "2024-01-10",
      readTime: "7 دقائق",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
      tags: ["BIM", "تقنية", "كفاءة"],
      featured: false,
    },
    {
      id: 3,
      title: "إدارة المشاريع الهندسية: أفضل الممارسات والتحديات",
      excerpt: "دليل شامل لإدارة المشاريع الهندسية بكفاءة وتجنب المشاكل الشائعة",
      content: "إدارة المشاريع الهندسية تتطلب مهارات متخصصة...",
      category: "إدارة المشاريع",
      author: "المهندسة نورا القحطاني",
      date: "2024-01-05",
      readTime: "6 دقائق",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      tags: ["إدارة", "مشاريع", "كفاءة"],
      featured: false,
    },
    {
      id: 4,
      title: "العمارة المستدامة: بناء مستقبل أخضر",
      excerpt: "كيف تساهم العمارة المستدامة في حماية البيئة وتوفير الطاقة",
      content: "العمارة المستدامة ليست مجرد اتجاه...",
      category: "الاستدامة",
      author: "المهندس خالد الزعابي",
      date: "2024-01-01",
      readTime: "8 دقائق",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      tags: ["استدامة", "بيئة", "طاقة"],
      featured: true,
    },
    {
      id: 5,
      title: "تحديات الهندسة الإنشائية في المناطق الزلزالية",
      excerpt: "كيفية تصميم المباني لتكون مقاومة للزلازل وآمنة للسكان",
      content: "التصميم المقاوم للزلازل يتطلب دراسة دقيقة...",
      category: "الهندسة الإنشائية",
      author: "المهندس خالد الزعابي",
      date: "2023-12-28",
      readTime: "9 دقائق",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop",
      tags: ["زلازل", "أمان", "تصميم"],
      featured: false,
    },
    {
      id: 6,
      title: "الذكاء الاصطناعي في التصميم المعماري",
      excerpt: "كيف يغير الذكاء الاصطناعي طريقة تصميم المباني والمساحات",
      content: "الذكاء الاصطناعي يفتح آفاقاً جديدة...",
      category: "التقنيات الحديثة",
      author: "الدكتورة فاطمة النعيمي",
      date: "2023-12-25",
      readTime: "6 دقائق",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      tags: ["ذكاء اصطناعي", "تصميم", "مستقبل"],
      featured: false,
    },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "الكل" || post.category === activeCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter((post) => post.featured)
  const recentPosts = blogPosts.slice(0, 3)

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-gray-700 border border-gray-300">
              <BookOpen className="h-4 w-4 ml-2" />
              المدونة
            </Badge>
            <h1 className="heading-1 text-gray-900 mb-6">
              مقالات ونصائح
              <span className="block text-gray-700">من خبراء الهندسة</span>
            </h1>
            <p className="body-large">
              اكتشف أحدث الاتجاهات والتقنيات في عالم الهندسة والعمارة من خلال مقالات متخصصة يكتبها فريق الخبراء لدينا
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="heading-3 text-gray-900 mb-2">المقالات المميزة</h2>
              <p className="text-gray-600">أهم المقالات التي يجب قراءتها</p>
            </div>
            <TrendingUp className="h-8 w-8 text-gray-400" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card
                key={post.id}
                className="border-0 card-shadow hover:card-shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Badge className="bg-white/90 text-gray-700">{post.category}</Badge>
                    <Badge className="bg-amber-500 text-white">مميز</Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <div className="flex items-center">
                        <User className="h-4 w-4 ml-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 ml-1" />
                        <span>{new Date(post.date).toLocaleDateString("ar-SA")}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 ml-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>

                  <Link href={`/blog/${post.id}`}>
                    <Button variant="outline" className="w-full bg-transparent">
                      اقرأ المقال
                      <ArrowRight className="mr-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="ابحث في المقالات..."
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
                    variant={activeCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(category)}
                    className={
                      activeCategory === category ? "bg-gray-900 hover:bg-gray-800" : "bg-transparent hover:bg-gray-50"
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

      {/* All Posts */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="heading-3 text-gray-900 mb-2">جميع المقالات</h2>
                <p className="text-gray-600">
                  {filteredPosts.length} مقال
                  {activeCategory !== "الكل" && ` في فئة "${activeCategory}"`}
                </p>
              </div>

              <div className="space-y-8">
                {filteredPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="border-0 card-shadow hover:card-shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="relative h-48 md:h-full overflow-hidden">
                        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-white/90 text-gray-700">{post.category}</Badge>
                        </div>
                      </div>

                      <div className="md:col-span-2 p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center space-x-4 space-x-reverse">
                            <div className="flex items-center">
                              <User className="h-4 w-4 ml-1" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 ml-1" />
                              <span>{new Date(post.date).toLocaleDateString("ar-SA")}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 ml-1" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag, index) => (
                            <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                              #{tag}
                            </Badge>
                          ))}
                        </div>

                        <Link href={`/blog/${post.id}`}>
                          <Button variant="outline" className="bg-transparent">
                            اقرأ المزيد
                            <ArrowRight className="mr-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-16">
                  <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">لا توجد مقالات</h3>
                  <p className="text-gray-600">لم نجد مقالات تطابق البحث أو الفلتر المحدد</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Recent Posts */}
              <Card className="border-0 card-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">أحدث المقالات</h3>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <div key={post.id} className="flex space-x-3 space-x-reverse">
                        <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden rounded-lg">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <Link href={`/blog/${post.id}`}>
                            <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 hover:text-gray-700">
                              {post.title}
                            </h4>
                          </Link>
                          <p className="text-xs text-gray-500 mt-1">
                            {new Date(post.date).toLocaleDateString("ar-SA")}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="border-0 card-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">الفئات</h3>
                  <div className="space-y-2">
                    {categories.slice(1).map((category) => {
                      const count = blogPosts.filter((post) => post.category === category).length
                      return (
                        <button
                          key={category}
                          onClick={() => setActiveCategory(category)}
                          className="flex items-center justify-between w-full text-right py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-gray-700">{category}</span>
                          <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                            {count}
                          </Badge>
                        </button>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="border-0 card-shadow bg-gray-50">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">اشترك في النشرة</h3>
                  <p className="text-gray-600 text-sm mb-4">احصل على أحدث المقالات والنصائح في بريدك</p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="بريدك الإلكتروني"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                    />
                    <Button size="sm" className="w-full bg-gray-900 hover:bg-gray-800">
                      اشترك الآن
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
