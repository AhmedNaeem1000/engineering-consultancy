"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Users,
  Calendar,
  MessageSquare,
  TrendingUp,
  Eye,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter,
  Download,
  Settings,
} from "lucide-react"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const stats = [
    {
      title: "إجمالي المشاريع",
      value: "450",
      change: "+12%",
      icon: Building2,
      color: "text-blue-600",
    },
    {
      title: "العملاء النشطون",
      value: "280",
      change: "+8%",
      icon: Users,
      color: "text-green-600",
    },
    {
      title: "المواعيد هذا الشهر",
      value: "45",
      change: "+15%",
      icon: Calendar,
      color: "text-purple-600",
    },
    {
      title: "الاستفسارات الجديدة",
      value: "23",
      change: "+5%",
      icon: MessageSquare,
      color: "text-orange-600",
    },
  ]

  const recentProjects = [
    {
      id: 1,
      name: "مجمع الرياض التجاري",
      client: "شركة الرياض للاستثمار",
      status: "قيد التنفيذ",
      progress: 75,
      date: "2024-01-15",
    },
    {
      id: 2,
      name: "فيلا العائلة الملكية",
      client: "عميل خاص",
      status: "مكتمل",
      progress: 100,
      date: "2024-01-10",
    },
    {
      id: 3,
      name: "مستشفى الملك فهد",
      client: "وزارة الصحة",
      status: "قيد التصميم",
      progress: 30,
      date: "2024-01-05",
    },
  ]

  const recentBookings = [
    {
      id: 1,
      client: "أحمد محمد السعيد",
      service: "استشارة معمارية",
      date: "2024-02-01",
      time: "10:00",
      status: "مؤكد",
    },
    {
      id: 2,
      client: "فاطمة عبدالله النعيمي",
      service: "استشارة إنشائية",
      date: "2024-02-02",
      time: "14:00",
      status: "في الانتظار",
    },
    {
      id: 3,
      client: "خالد إبراهيم الزعابي",
      service: "استشارة عامة",
      date: "2024-02-03",
      time: "11:00",
      status: "مؤكد",
    },
  ]

  const blogPosts = [
    {
      id: 1,
      title: "مستقبل التصميم المعماري في المملكة",
      author: "المهندس أحمد السعيد",
      date: "2024-01-15",
      status: "منشور",
      views: 1250,
    },
    {
      id: 2,
      title: "أهمية تقنية BIM في المشاريع الحديثة",
      author: "الدكتورة فاطمة النعيمي",
      date: "2024-01-10",
      status: "مسودة",
      views: 0,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "مكتمل":
      case "منشور":
      case "مؤكد":
        return "bg-green-100 text-green-800"
      case "قيد التنفيذ":
      case "في الانتظار":
        return "bg-yellow-100 text-yellow-800"
      case "قيد التصميم":
      case "مسودة":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">لوحة التحكم</h1>
                <p className="text-sm text-gray-500">شركة الواحة الهندسية</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <Button variant="outline" size="sm" className="bg-transparent">
                <Settings className="h-4 w-4 ml-2" />
                الإعدادات
              </Button>
              <Button size="sm" className="bg-gray-900 hover:bg-gray-800">
                عرض الموقع
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-6 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <Card className="border-0 card-shadow">
              <CardContent className="p-6">
                <nav className="space-y-2">
                  {[
                    { id: "overview", name: "نظرة عامة", icon: TrendingUp },
                    { id: "projects", name: "المشاريع", icon: Building2 },
                    { id: "bookings", name: "المواعيد", icon: Calendar },
                    { id: "blog", name: "المدونة", icon: MessageSquare },
                    { id: "clients", name: "العملاء", icon: Users },
                  ].map((item) => {
                    const Icon = item.icon
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center space-x-3 space-x-reverse px-3 py-2 rounded-lg text-right transition-colors ${
                          activeTab === item.id ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        <span>{item.name}</span>
                      </button>
                    )
                  })}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-8">
                {/* Stats Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                      <Card key={index} className="border-0 card-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                              <p className="text-sm text-green-600">{stat.change}</p>
                            </div>
                            <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center`}>
                              <Icon className={`h-6 w-6 ${stat.color}`} />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>

                {/* Recent Activity */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Recent Projects */}
                  <Card className="border-0 card-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-gray-900">المشاريع الحديثة</h3>
                        <Button variant="outline" size="sm" className="bg-transparent">
                          عرض الكل
                        </Button>
                      </div>
                      <div className="space-y-4">
                        {recentProjects.map((project) => (
                          <div key={project.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900">{project.name}</h4>
                              <p className="text-sm text-gray-600">{project.client}</p>
                              <div className="flex items-center mt-2">
                                <div className="w-32 bg-gray-200 rounded-full h-2 ml-3">
                                  <div
                                    className="bg-gray-900 h-2 rounded-full"
                                    style={{ width: `${project.progress}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm text-gray-600">{project.progress}%</span>
                              </div>
                            </div>
                            <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recent Bookings */}
                  <Card className="border-0 card-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-gray-900">المواعيد القادمة</h3>
                        <Button variant="outline" size="sm" className="bg-transparent">
                          عرض الكل
                        </Button>
                      </div>
                      <div className="space-y-4">
                        {recentBookings.map((booking) => (
                          <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div>
                              <h4 className="font-semibold text-gray-900">{booking.client}</h4>
                              <p className="text-sm text-gray-600">{booking.service}</p>
                              <p className="text-sm text-gray-500">
                                {new Date(booking.date).toLocaleDateString("ar-SA")} - {booking.time}
                              </p>
                            </div>
                            <Badge className={getStatusColor(booking.status)}>{booking.status}</Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Projects Tab */}
            {activeTab === "projects" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="heading-3 text-gray-900">إدارة المشاريع</h2>
                  <Button className="bg-gray-900 hover:bg-gray-800">
                    <Plus className="h-4 w-4 ml-2" />
                    مشروع جديد
                  </Button>
                </div>

                <Card className="border-0 card-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 space-x-reverse">
                        <div className="relative">
                          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <input
                            type="text"
                            placeholder="ابحث في المشاريع..."
                            className="pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                          />
                        </div>
                        <Button variant="outline" size="sm" className="bg-transparent">
                          <Filter className="h-4 w-4 ml-2" />
                          فلتر
                        </Button>
                      </div>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <Download className="h-4 w-4 ml-2" />
                        تصدير
                      </Button>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-right py-3 px-4 font-semibold text-gray-900">اسم المشروع</th>
                            <th className="text-right py-3 px-4 font-semibold text-gray-900">العميل</th>
                            <th className="text-right py-3 px-4 font-semibold text-gray-900">الحالة</th>
                            <th className="text-right py-3 px-4 font-semibold text-gray-900">التقدم</th>
                            <th className="text-right py-3 px-4 font-semibold text-gray-900">التاريخ</th>
                            <th className="text-right py-3 px-4 font-semibold text-gray-900">الإجراءات</th>
                          </tr>
                        </thead>
                        <tbody>
                          {recentProjects.map((project) => (
                            <tr key={project.id} className="border-b border-gray-100">
                              <td className="py-3 px-4 font-medium text-gray-900">{project.name}</td>
                              <td className="py-3 px-4 text-gray-600">{project.client}</td>
                              <td className="py-3 px-4">
                                <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                              </td>
                              <td className="py-3 px-4">
                                <div className="flex items-center">
                                  <div className="w-20 bg-gray-200 rounded-full h-2 ml-2">
                                    <div
                                      className="bg-gray-900 h-2 rounded-full"
                                      style={{ width: `${project.progress}%` }}
                                    ></div>
                                  </div>
                                  <span className="text-sm text-gray-600">{project.progress}%</span>
                                </div>
                              </td>
                              <td className="py-3 px-4 text-gray-600">
                                {new Date(project.date).toLocaleDateString("ar-SA")}
                              </td>
                              <td className="py-3 px-4">
                                <div className="flex items-center space-x-2 space-x-reverse">
                                  <Button variant="ghost" size="sm">
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Blog Tab */}
            {activeTab === "blog" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="heading-3 text-gray-900">إدارة المدونة</h2>
                  <Button className="bg-gray-900 hover:bg-gray-800">
                    <Plus className="h-4 w-4 ml-2" />
                    مقال جديد
                  </Button>
                </div>

                <Card className="border-0 card-shadow">
                  <CardContent className="p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-right py-3 px-4 font-semibold text-gray-900">العنوان</th>
                            <th className="text-right py-3 px-4 font-semibold text-gray-900">الكاتب</th>
                            <th className="text-right py-3 px-4 font-semibold text-gray-900">الحالة</th>
                            <th className="text-right py-3 px-4 font-semibold text-gray-900">المشاهدات</th>
                            <th className="text-right py-3 px-4 font-semibold text-gray-900">التاريخ</th>
                            <th className="text-right py-3 px-4 font-semibold text-gray-900">الإجراءات</th>
                          </tr>
                        </thead>
                        <tbody>
                          {blogPosts.map((post) => (
                            <tr key={post.id} className="border-b border-gray-100">
                              <td className="py-3 px-4 font-medium text-gray-900">{post.title}</td>
                              <td className="py-3 px-4 text-gray-600">{post.author}</td>
                              <td className="py-3 px-4">
                                <Badge className={getStatusColor(post.status)}>{post.status}</Badge>
                              </td>
                              <td className="py-3 px-4 text-gray-600">{post.views}</td>
                              <td className="py-3 px-4 text-gray-600">
                                {new Date(post.date).toLocaleDateString("ar-SA")}
                              </td>
                              <td className="py-3 px-4">
                                <div className="flex items-center space-x-2 space-x-reverse">
                                  <Button variant="ghost" size="sm">
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Bookings Tab */}
            {activeTab === "bookings" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="heading-3 text-gray-900">إدارة المواعيد</h2>
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <Button variant="outline" className="bg-transparent">
                      <Download className="h-4 w-4 ml-2" />
                      تصدير
                    </Button>
                    <Button className="bg-gray-900 hover:bg-gray-800">
                      <Plus className="h-4 w-4 ml-2" />
                      موعد جديد
                    </Button>
                  </div>
                </div>

                <Card className="border-0 card-shadow">
                  <CardContent className="p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-right py-3 px-4 font-semibold text-gray-900">العميل</th>
                            <th className="text-right py-3 px-4 font-semibold text-gray-900">الخدمة</th>
                            <th className="text-right py-3 px-4 font-semibold text-gray-900">التاريخ</th>
                            <th className="text-right py-3 px-4 font-semibold text-gray-900">الوقت</th>
                            <th className="text-right py-3 px-4 font-semibold text-gray-900">الحالة</th>
                            <th className="text-right py-3 px-4 font-semibold text-gray-900">الإجراءات</th>
                          </tr>
                        </thead>
                        <tbody>
                          {recentBookings.map((booking) => (
                            <tr key={booking.id} className="border-b border-gray-100">
                              <td className="py-3 px-4 font-medium text-gray-900">{booking.client}</td>
                              <td className="py-3 px-4 text-gray-600">{booking.service}</td>
                              <td className="py-3 px-4 text-gray-600">
                                {new Date(booking.date).toLocaleDateString("ar-SA")}
                              </td>
                              <td className="py-3 px-4 text-gray-600">{booking.time}</td>
                              <td className="py-3 px-4">
                                <Badge className={getStatusColor(booking.status)}>{booking.status}</Badge>
                              </td>
                              <td className="py-3 px-4">
                                <div className="flex items-center space-x-2 space-x-reverse">
                                  <Button variant="ghost" size="sm">
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Clients Tab */}
            {activeTab === "clients" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="heading-3 text-gray-900">إدارة العملاء</h2>
                  <Button className="bg-gray-900 hover:bg-gray-800">
                    <Plus className="h-4 w-4 ml-2" />
                    عميل جديد
                  </Button>
                </div>

                <Card className="border-0 card-shadow">
                  <CardContent className="p-6">
                    <div className="text-center py-16">
                      <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">قريباً</h3>
                      <p className="text-gray-600">سيتم إضافة إدارة العملاء قريباً</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
