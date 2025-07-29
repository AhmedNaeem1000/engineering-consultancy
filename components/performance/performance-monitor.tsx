"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, Zap, Clock, Database } from "lucide-react"

interface PerformanceMetrics {
  loadTime: number
  renderTime: number
  memoryUsage: number
  networkRequests: number
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // قياس الأداء عند التحميل
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming
      const paintEntries = performance.getEntriesByType("paint")

      const loadTime = navigation.loadEventEnd - navigation.loadEventStart
      const renderTime = paintEntries.find((entry) => entry.name === "first-contentful-paint")?.startTime || 0

      // قياس استخدام الذاكرة (إذا كان متاحاً)
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0

      // عدد طلبات الشبكة
      const networkRequests = performance.getEntriesByType("resource").length

      setMetrics({
        loadTime: Math.round(loadTime),
        renderTime: Math.round(renderTime),
        memoryUsage: Math.round(memoryUsage / 1024 / 1024), // تحويل إلى MB
        networkRequests,
      })
    }

    // تأخير القياس للتأكد من اكتمال التحميل
    setTimeout(measurePerformance, 1000)

    // إظهار المراقب في بيئة التطوير فقط
    setIsVisible(process.env.NODE_ENV === "development")
  }, [])

  if (!isVisible || !metrics) return null

  const getPerformanceColor = (value: number, thresholds: { good: number; fair: number }) => {
    if (value <= thresholds.good) return "bg-green-100 text-green-800"
    if (value <= thresholds.fair) return "bg-yellow-100 text-yellow-800"
    return "bg-red-100 text-red-800"
  }

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <Card className="border-0 card-shadow bg-white/95 backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex items-center space-x-2 space-x-reverse mb-3">
            <Activity className="h-4 w-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-900">مراقب الأداء</span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1 space-x-reverse">
                <Clock className="h-3 w-3 text-gray-500" />
                <span>التحميل</span>
              </div>
              <Badge className={getPerformanceColor(metrics.loadTime, { good: 1000, fair: 3000 })}>
                {metrics.loadTime}ms
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1 space-x-reverse">
                <Zap className="h-3 w-3 text-gray-500" />
                <span>الرسم</span>
              </div>
              <Badge className={getPerformanceColor(metrics.renderTime, { good: 1000, fair: 2500 })}>
                {metrics.renderTime}ms
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1 space-x-reverse">
                <Database className="h-3 w-3 text-gray-500" />
                <span>الذاكرة</span>
              </div>
              <Badge className={getPerformanceColor(metrics.memoryUsage, { good: 50, fair: 100 })}>
                {metrics.memoryUsage}MB
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1 space-x-reverse">
                <Activity className="h-3 w-3 text-gray-500" />
                <span>الطلبات</span>
              </div>
              <Badge className={getPerformanceColor(metrics.networkRequests, { good: 20, fair: 50 })}>
                {metrics.networkRequests}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
