"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu, X, Phone, Mail, ChevronDown, MapPin, Building2 } from "lucide-react"

const navigation = [
  { name: "الرئيسية", href: "/" },
  {
    name: "من نحن",
    href: "/about",
    children: [
      { name: "نبذة عن الشركة", href: "/about" },
      { name: "فريق العمل", href: "/team" },
      { name: "رؤيتنا ورسالتنا", href: "/vision" },
    ],
  },
  {
    name: "خدماتنا",
    href: "/services",
    children: [
      { name: "الاستشارات المعمارية", href: "/services/architectural" },
      { name: "الهندسة الإنشائية", href: "/services/structural" },
      { name: "إدارة المشاريع", href: "/services/project-management" },
      { name: "التصميم الداخلي", href: "/services/interior-design" },
    ],
  },
  { name: "مشاريعنا", href: "/projects" },
  { name: "المدونة", href: "/blog" },
  { name: "تواصل معنا", href: "/contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>


      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full bg-white transition-all duration-300",
          isScrolled ? "shadow-sm border-b border-gray-200" : "",
        )}
      >
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 space-x-reverse">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                <Building2 className="h-7 w-7 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">شركة الواحة الهندسية</div>
                <div className="text-sm text-gray-500">Al-Waha Engineering</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.children ? (
                    <>
                      <button
                        className="flex items-center space-x-1 space-x-reverse text-gray-700 hover:text-gray-900 font-medium transition-colors py-2"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>

                      <div
                        className={cn(
                          "absolute top-full right-0 mt-0 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 transition-all duration-200",
                          activeDropdown === item.name
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible translate-y-2 pointer-events-none",
                        )}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-gray-900 font-medium transition-colors py-2"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
              <Button variant="outline" size="default" asChild>
                <Link href="/contact">طلب استشارة</Link>
              </Button>
              <Button size="default" className="bg-gray-900 hover:bg-gray-800" asChild>
                <Link href="/contact">تواصل معنا</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="container py-4">
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <>
                        <button
                          className="flex items-center justify-between w-full py-3 text-gray-700 font-medium"
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            className={cn("h-4 w-4 transition-transform", activeDropdown === item.name && "rotate-180")}
                          />
                        </button>
                        {activeDropdown === item.name && (
                          <div className="pr-4 space-y-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block py-3 text-gray-700 hover:text-gray-900 font-medium transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-6 space-y-3">
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/contact">طلب استشارة</Link>
                </Button>
                <Button className="w-full bg-gray-900 hover:bg-gray-800" asChild>
                  <Link href="/contact">تواصل معنا</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
