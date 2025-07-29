"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/layout/header"
import Image from "next/image"
import { Star, Quote, ThumbsUp, MessageSquare, Filter, Search } from "lucide-react"
import { db } from "@/lib/database"

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    loadReviews()
  }, [])

  const loadReviews = async () => {
    try {
      const data = await db.getReviews()
      setReviews(data || [])
    } catch (error) {
      console.error("Error loading reviews:", error)
    } finally {
      setLoading(false)
    }
  }

  const filteredReviews = reviews.filter((review) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "featured" && review.is_featured) ||
      (filter === "recent" && new Date(review.created_at) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000))

    const matchesSearch =
      review.review_text?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.client?.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.project?.title?.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesFilter && matchesSearch
  })

  const averageRating =
    reviews.length > 0 ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length : 0

  const ratingDistribution = [5, 4, 3, 2, 1].map((rating) => ({
    rating,
    count: reviews.filter((r) => r.rating === rating).length,
    percentage: reviews.length > 0 ? (reviews.filter((r) => r.rating === rating).length / reviews.length) * 100 : 0,
  }))

  const renderStars = (rating: number, size: "sm" | "md" | "lg" = "md") => {
    const sizeClasses = {
      sm: "h-3 w-3",
      md: "h-4 w-4",
      lg: "h-5 w-5",
    }

    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${sizeClasses[size]} ${star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
          />
        ))}
      </div>
    )
  }

  if (loading) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="section-padding bg-white">
          <div className="container">
            <div className="text-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
              <p className="mt-4 text-gray-600">جاري التحميل...</p>
            </div>
          </div>
        </div>
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
              <Star className="h-4 w-4 ml-2" />
              آراء العملاء
            </Badge>
            <h1 className="heading-1 text-gray-900 mb-6">
              ما يقوله عملاؤنا
              <span className="block text-gray-700">عن خدماتنا</span>
            </h1>
            <p className="body-large">اكتشف تجارب عملائنا الحقيقية وآرائهم في الخدمات التي قدمناها لهم</p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Overall Rating */}
              <Card className="border-0 card-shadow text-center">
                <CardContent className="p-8">
                  <div className="text-6xl font-bold text-gray-900 mb-2">{averageRating.toFixed(1)}</div>
                  <div className="flex justify-center mb-4">{renderStars(Math.round(averageRating), "lg")}</div>
                  <p className="text-gray-600 mb-2">متوسط التقييم</p>
                  <p className="text-sm text-gray-500">بناءً على {reviews.length} تقييم</p>
                </CardContent>
              </Card>

              {/* Rating Distribution */}
              <div className="space-y-3">
                {ratingDistribution.map(({ rating, count, percentage }) => (
                  <div key={rating} className="flex items-center space-x-4 space-x-reverse">
                    <div className="flex items-center space-x-1 space-x-reverse w-16">
                      <span className="text-sm font-medium">{rating}</span>
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-8">{count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="ابحث في التقييمات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center space-x-2 space-x-reverse">
              <Filter className="h-5 w-5 text-gray-500" />
              <div className="flex space-x-2 space-x-reverse">
                {[
                  { id: "all", label: "الكل" },
                  { id: "featured", label: "المميزة" },
                  { id: "recent", label: "الحديثة" },
                ].map((filterOption) => (
                  <Button
                    key={filterOption.id}
                    variant={filter === filterOption.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilter(filterOption.id)}
                    className={
                      filter === filterOption.id ? "bg-gray-900 hover:bg-gray-800" : "bg-transparent hover:bg-gray-50"
                    }
                  >
                    {filterOption.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          {filteredReviews.length === 0 ? (
            <div className="text-center py-16">
              <MessageSquare className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">لا توجد تقييمات</h3>
              <p className="text-gray-600">لم نجد تقييمات تطابق البحث أو الفلتر المحدد</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredReviews.map((review) => (
                <Card
                  key={review.id}
                  className={`border-0 card-shadow hover:card-shadow-lg transition-all duration-300 ${
                    review.is_featured ? "ring-2 ring-yellow-400" : ""
                  }`}
                >
                  <CardContent className="p-6">
                    {review.is_featured && (
                      <Badge className="mb-4 bg-yellow-100 text-yellow-800">
                        <Star className="h-3 w-3 ml-1" />
                        مميز
                      </Badge>
                    )}

                    <div className="flex items-center justify-between mb-4">
                      {renderStars(review.rating)}
                      <Quote className="h-6 w-6 text-gray-300" />
                    </div>

                    <blockquote className="text-gray-700 mb-6 leading-relaxed">"{review.review_text}"</blockquote>

                    <div className="flex items-center space-x-3 space-x-reverse">
                      <Image
                        src={review.client?.avatar_url || "/placeholder.svg?height=40&width=40"}
                        alt={review.client?.full_name || "عميل"}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{review.client?.full_name || "عميل"}</div>
                        <div className="text-sm text-gray-500">{review.project?.title}</div>
                        <div className="text-xs text-gray-400">
                          {new Date(review.created_at).toLocaleDateString("ar-SA")}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 text-gray-900 mb-6">هل أنت عميل سابق؟</h2>
            <p className="body-large mb-8">شاركنا تجربتك وساعد الآخرين في اتخاذ القرار الصحيح</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gray-900 hover:bg-gray-800">
                <Star className="ml-2 h-4 w-4" />
                اكتب تقييماً
              </Button>
              <Button variant="outline" className="bg-transparent">
                <ThumbsUp className="ml-2 h-4 w-4" />
                شارك تجربتك
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
