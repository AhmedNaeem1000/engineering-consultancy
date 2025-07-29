"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building2, Menu, X, Phone, Mail, MapPin, Award, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDropdownEnter = (dropdown: string) => {
    setActiveDropdown(dropdown)
  }

  const handleDropdownLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6 space-x-reverse">
              <div className="flex items-center">
                <Phone className="h-4 w-4 ml-2" />
                <span>+971 4 123 4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 ml-2" />
                <span>info@emirates-engineering.ae</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 ml-2" />
                <span>دبي، الإمارات العربية المتحدة</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <Badge className="bg-amber-600 text-white">
                <Award className="h-3 w-3 ml-1" />
                معتمدون من ISO 9001:2015
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`fixed top-0 md:top-10 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-xl border-b border-amber-200"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 space-x-reverse group">
            <div className="relative">
              <Building2 className="h-12 w-12 text-slate-800 group-hover:text-amber-600 transition-colors duration-300" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 rounded-full animate-pulse-slow"></div>
            </div>
            <div>
              <span className="text-2xl font-bold text-slate-900 block leading-tight">مجموعة الإمارات</span>
              <span className="text-sm text-amber-600 font-semibold">للاستشارات الهندسية</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 space-x-reverse">
            <Link
              href="/"
              className="text-slate-700 hover:text-amber-600 transition-colors font-semibold text-lg relative group"
            >
              الرئيسية
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("about")}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="flex items-center text-slate-700 hover:text-amber-600 transition-colors font-semibold text-lg">
                من نحن
                <ChevronDown
                  className={`h-4 w-4 mr-1 transition-transform duration-300 ${
                    activeDropdown === "about" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute top-full right-0 mt-0 pt-2 w-64 bg-white rounded-xl shadow-2xl border border-amber-100 transition-all duration-300 ${
                  activeDropdown === "about"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-2 pointer-events-none"
                }`}
                style={{ pointerEvents: 'auto' }}
              >
                <div className="p-4 space-y-2">
                  <Link
                    href="/about"
                    className="block px-4 py-3 text-slate-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                  >
                    قصة الشركة
                  </Link>
                  <Link
                    href="/team"
                    className="block px-4 py-3 text-slate-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                  >
                    فريق العمل
                  </Link>
                  <Link
                    href="/certifications"
                    className="block px-4 py-3 text-slate-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                  >
                    الشهادات والاعتمادات
                  </Link>
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("services")}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="flex items-center text-slate-700 hover:text-amber-600 transition-colors font-semibold text-lg">
                خدماتنا
                <ChevronDown
                  className={`h-4 w-4 mr-1 transition-transform duration-300 ${
                    activeDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-amber-100 transition-all duration-300 ${
                  activeDropdown === "services"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-2 pointer-events-none"
                }`}
              >
                <div className="p-4 space-y-2">
                  <Link
                    href="/services/architectural"
                    className="block px-4 py-3 text-slate-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                  >
                    الاستشارات المعمارية
                  </Link>
                  <Link
                    href="/services/structural"
                    className="block px-4 py-3 text-slate-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                  >
                    الهندسة الإنشائية
                  </Link>
                  <Link
                    href="/services/project-management"
                    className="block px-4 py-3 text-slate-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                  >
                    إدارة المشاريع
                  </Link>
                  <Link
                    href="/services/supervision"
                    className="block px-4 py-3 text-slate-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                  >
                    الإشراف الهندسي
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/projects"
              className="text-slate-700 hover:text-amber-600 transition-colors font-semibold text-lg relative group"
            >
              مشاريعنا
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="/blog"
              className="text-slate-700 hover:text-amber-600 transition-colors font-semibold text-lg relative group"
            >
              المدونة
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="/contact"
              className="text-slate-700 hover:text-amber-600 transition-colors font-semibold text-lg relative group"
            >
              تواصل معنا
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
            <Button
              asChild
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
            >
              <Link href="/contact">احصل على استشارة</Link>
            </Button>
            <Button
              asChild
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/contact">عرض سعر مجاني</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-amber-200 shadow-xl">
            <div className="px-4 py-6 space-y-4">
              <Link
                href="/"
                className="block py-3 text-slate-700 hover:text-amber-600 transition-colors font-semibold text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </Link>
              <Link
                href="/about"
                className="block py-3 text-slate-700 hover:text-amber-600 transition-colors font-semibold text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                من نحن
              </Link>
              <Link
                href="/services"
                className="block py-3 text-slate-700 hover:text-amber-600 transition-colors font-semibold text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                خدماتنا
              </Link>
              <Link
                href="/projects"
                className="block py-3 text-slate-700 hover:text-amber-600 transition-colors font-semibold text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                مشاريعنا
              </Link>
              <Link
                href="/blog"
                className="block py-3 text-slate-700 hover:text-amber-600 transition-colors font-semibold text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                المدونة
              </Link>
              <Link
                href="/contact"
                className="block py-3 text-slate-700 hover:text-amber-600 transition-colors font-semibold text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                تواصل معنا
              </Link>
              <div className="pt-4 space-y-3">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
                >
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    احصل على استشارة
                  </Link>
                </Button>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white"
                >
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    عرض سعر مجاني
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
