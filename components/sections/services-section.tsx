import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface Service {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  image: string
}

interface ServicesSectionProps {
  services: Service[]
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gray-100 text-gray-700">خدماتنا</Badge>
          <h2 className="heading-2 text-gray-900 mb-6">
            حلول هندسية شاملة
            <span className="block text-gray-700">لكل احتياجاتكم</span>
          </h2>
          <p className="body-large max-w-3xl mx-auto">
            نقدم مجموعة متكاملة من الخدمات الهندسية والمعمارية بأعلى معايير الجودة والاحترافية
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="border-0 card-shadow hover:card-shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  <Button variant="outline" className="w-full bg-transparent group-hover:bg-gray-50" asChild>
                    <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      اعرف المزيد
                      <ArrowRight className="mr-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
