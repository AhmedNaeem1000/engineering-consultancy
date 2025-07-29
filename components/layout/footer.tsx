import { Building2, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 space-x-reverse mb-6">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                <Building2 className="h-7 w-7 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900 block">شركة الواحة الهندسية</span>
                <span className="text-gray-600">Al-Waha Engineering</span>
              </div>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed max-w-md">
              نبني المستقبل بإتقان وإبداع. شركة رائدة في مجال الاستشارات الهندسية والمعمارية منذ 18 عاماً.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                لينكد إن
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                تويتر
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                إنستغرام
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-900">خدماتنا</h4>
            <ul className="space-y-4 text-gray-600">
              <li>
                <Link href="/services/architectural" className="hover:text-gray-900 transition-colors">
                  الاستشارات المعمارية
                </Link>
              </li>
              <li>
                <Link href="/services/structural" className="hover:text-gray-900 transition-colors">
                  الهندسة الإنشائية
                </Link>
              </li>
              <li>
                <Link href="/services/project-management" className="hover:text-gray-900 transition-colors">
                  إدارة المشاريع
                </Link>
              </li>
              <li>
                <Link href="/services/supervision" className="hover:text-gray-900 transition-colors">
                  الإشراف الهندسي
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-900">تواصل معنا</h4>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-center">
                <Phone className="h-5 w-5 ml-3" />
                <span>+966 11 234 5678</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 ml-3" />
                <span>info@alwaha-engineering.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 ml-3 mt-1" />
                <span>
                  شارع الملك فهد، حي العليا
                  <br />
                  الرياض، المملكة العربية السعودية
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} شركة الواحة الهندسية. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
