"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/layout/header"
import Image from "next/image"
import { Calendar, Clock, ArrowRight, Share2, BookOpen, Eye, Heart, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function BlogPostPage({ params }: { params: { id: string } }) {
  // Mock blog post data - in real app, fetch based on params.id
  const post = {
    id: 1,
    title: "مستقبل التصميم المعماري في المملكة العربية السعودية",
    excerpt: "نظرة على التطورات الحديثة في التصميم المعماري وكيف تساهم في تحقيق رؤية 2030",
    content: `
      <p>يشهد قطاع التصميم المعماري في المملكة العربية السعودية تطوراً مستمراً ونمواً متسارعاً، خاصة مع إطلاق رؤية 2030 التي تهدف إلى تنويع الاقتصاد وتطوير القطاعات المختلفة. هذا التطور يتطلب من المهندسين المعماريين مواكبة أحدث الاتجاهات والتقنيات في مجال التصميم.</p>

      <h2>التحديات الحالية</h2>
      <p>يواجه المصممون المعماريون في المملكة عدة تحديات، منها:</p>
      <ul>
        <li>التوازن بين الحداثة والتراث المعماري السعودي</li>
        <li>التكيف مع الظروف المناخية القاسية</li>
        <li>تطبيق معايير الاستدامة البيئية</li>
        <li>مواكبة التطور التقني السريع</li>
      </ul>

      <h2>الاتجاهات المستقبلية</h2>
      <p>نتوقع أن نشهد في السنوات القادمة تطورات مهمة في مجال التصميم المعماري، منها:</p>

      <h3>1. العمارة الذكية</h3>
      <p>ستصبح المباني الذكية المزودة بأنظمة إنترنت الأشياء (IoT) والذكاء الاصطناعي جزءاً أساسياً من المشهد المعماري السعودي.</p>

      <h3>2. الاستدامة البيئية</h3>
      <p>ستزداد أهمية تطبيق معايير البناء الأخضر والحصول على شهادات الاستدامة مثل LEED و BREEAM.</p>

      <h3>3. التصميم المعياري</h3>
      <p>سيساعد التصميم المعياري في تسريع عمليات البناء وتقليل التكاليف مع الحفاظ على الجودة.</p>

      <h2>دور التقنية</h2>
      <p>تلعب التقنية دوراً محورياً في تطوير التصميم المعماري، من خلال:</p>
      <ul>
        <li>استخدام تقنيات الواقع الافتراضي والمعزز في التصميم</li>
        <li>تطبيق تقنيات BIM (نمذجة معلومات البناء)</li>
        <li>استخدام الطباعة ثلاثية الأبعاد في البناء</li>
        <li>تطبيق الذكاء الاصطناعي في التصميم</li>
      </ul>

      <h2>الخلاصة</h2>
      <p>مستقبل التصميم المعماري في المملكة مشرق ومليء بالفرص. مع الاستثمار المستمر في التطوير والابتكار، ومواكبة أحدث التقنيات، يمكن للمهندسين المعماريين السعوديين أن يكونوا رواداً في هذا المجال على المستوى الإقليمي والعالمي.</p>
    `,
    category: "التصميم المعماري",
    author: "المهندس أحمد السعيد",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    date: "2024-01-15",
    readTime: "5 دقائق",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop",
    tags: ["رؤية 2030", "التصميم", "المستقبل", "التقنية"],
    views: 1250,
    likes: 45,
    comments: 12,
  }

  const relatedPosts = [
    {
      id: 2,
      title: "أهمية تقنية BIM في المشاريع الإنشائية الحديثة",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop",
      date: "2024-01-10",
      readTime: "7 دقائق",
    },
    {
      id: 3,
      title: "العمارة المستدامة: بناء مستقبل أخضر",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop",
      date: "2024-01-01",
      readTime: "8 دقائق",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Article Header */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-500">
                <Link href="/" className="hover:text-gray-700">
                  الرئيسية
                </Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-gray-700">
                  المدونة
                </Link>
                <span>/</span>
                <span className="text-gray-900">المقال</span>
              </div>
            </nav>

            {/* Article Meta */}
            <div className="mb-8">
              <Badge className="mb-4 bg-gray-100 text-gray-700">{post.category}</Badge>
              <h1 className="heading-1 text-gray-900 mb-6">{post.title}</h1>
              <p className="body-large text-gray-600 mb-8">{post.excerpt}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6 space-x-reverse">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Image
                      src={post.authorImage || "/placeholder.svg"}
                      alt={post.author}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{post.author}</div>
                      <div className="text-sm text-gray-500">كاتب</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 space-x-reverse text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 ml-1" />
                      <span>{new Date(post.date).toLocaleDateString("ar-SA")}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 ml-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 ml-1" />
                      <span>{post.views}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 space-x-reverse">
                  <Button variant="outline" size="sm" className="bg-transparent">
                    <Heart className="h-4 w-4 ml-1" />
                    {post.likes}
                  </Button>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    <Share2 className="h-4 w-4 ml-1" />
                    مشاركة
                  </Button>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-96 mb-12 overflow-hidden rounded-2xl">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>

            {/* Article Content */}
            <div className="grid lg:grid-cols-4 gap-12">
              <div className="lg:col-span-3">
                <article className="prose prose-lg max-w-none">
                  <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">الكلمات المفتاحية</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Author Bio */}
                <Card className="mt-12 border-0 card-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 space-x-reverse">
                      <Image
                        src={post.authorImage || "/placeholder.svg"}
                        alt={post.author}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{post.author}</h3>
                        <p className="text-gray-600 mb-4">
                          مهندس معماري خبير مع أكثر من 15 عاماً من الخبرة في التصميم المعماري والتطوير العقاري. متخصص في
                          العمارة المستدامة والتصميم الحديث.
                        </p>
                        <div className="flex items-center space-x-4 space-x-reverse">
                          <Button variant="outline" size="sm" className="bg-transparent">
                            عرض المقالات
                          </Button>
                          <Button variant="outline" size="sm" className="bg-transparent">
                            تابع الكاتب
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Comments Section */}
                <Card className="mt-12 border-0 card-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-gray-900 flex items-center">
                        <MessageCircle className="h-5 w-5 ml-2" />
                        التعليقات ({post.comments})
                      </h3>
                    </div>

                    <div className="text-center py-12">
                      <MessageCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">قريباً</h4>
                      <p className="text-gray-600">سيتم إضافة نظام التعليقات قريباً</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Table of Contents */}
                <Card className="border-0 card-shadow sticky top-8">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">محتويات المقال</h3>
                    <nav className="space-y-2">
                      <a href="#" className="block text-gray-600 hover:text-gray-900 text-sm py-1">
                        التحديات الحالية
                      </a>
                      <a href="#" className="block text-gray-600 hover:text-gray-900 text-sm py-1">
                        الاتجاهات المستقبلية
                      </a>
                      <a href="#" className="block text-gray-600 hover:text-gray-900 text-sm py-1 pr-4">
                        العمارة الذكية
                      </a>
                      <a href="#" className="block text-gray-600 hover:text-gray-900 text-sm py-1 pr-4">
                        الاستدامة البيئية
                      </a>
                      <a href="#" className="block text-gray-600 hover:text-gray-900 text-sm py-1 pr-4">
                        التصميم المعياري
                      </a>
                      <a href="#" className="block text-gray-600 hover:text-gray-900 text-sm py-1">
                        دور التقنية
                      </a>
                      <a href="#" className="block text-gray-600 hover:text-gray-900 text-sm py-1">
                        الخلاصة
                      </a>
                    </nav>
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card className="border-0 card-shadow bg-gray-50">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">اشترك في النشرة</h3>
                    <p className="text-gray-600 text-sm mb-4">احصل على أحدث المقالات في بريدك</p>
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
        </div>
      </section>

      {/* Related Posts */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-3 text-gray-900 mb-4">مقالات ذات صلة</h2>
              <p className="text-gray-600">اكتشف المزيد من المقالات المفيدة</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card
                  key={relatedPost.id}
                  className="border-0 card-shadow hover:card-shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{relatedPost.title}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 ml-1" />
                        <span>{new Date(relatedPost.date).toLocaleDateString("ar-SA")}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 ml-1" />
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                    <Link href={`/blog/${relatedPost.id}`}>
                      <Button variant="outline" className="w-full bg-transparent">
                        اقرأ المقال
                        <ArrowRight className="mr-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/blog">
                <Button className="bg-gray-900 hover:bg-gray-800">
                  <BookOpen className="ml-2 h-4 w-4" />
                  عرض جميع المقالات
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
