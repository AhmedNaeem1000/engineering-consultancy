import { Button } from "@/components/ui/button"
import { Phone, Calendar, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ContactSection() {
  return (
    <section className="section-padding bg-gray-900 text-white">
      <div className="container text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-2 mb-6">مستعد لبدء مشروعك؟</h2>
          <p className="body-large text-gray-300 mb-12">
            احصل على استشارة مجانية من خبرائنا واكتشف كيف يمكننا تحويل رؤيتك إلى واقع معماري متميز
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100" asChild>
              <Link href="/contact">
                <Phone className="ml-3 h-5 w-5" />
                اتصل بنا الآن
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 bg-transparent"
              asChild
            >
              <Link href="/booking">
                <Calendar className="ml-3 h-5 w-5" />
                احجز موعد
              </Link>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
            <div className="flex items-center justify-center space-x-2 space-x-reverse">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>استشارة مجانية</span>
            </div>
            <div className="flex items-center justify-center space-x-2 space-x-reverse">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>رد خلال 24 ساعة</span>
            </div>
            <div className="flex items-center justify-center space-x-2 space-x-reverse">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>ضمان الجودة</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
