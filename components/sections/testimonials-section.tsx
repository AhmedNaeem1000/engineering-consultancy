"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  name: string
  position: string
  content: string
  rating: number
  project: string
  image: string
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
  currentTestimonial: number
  setCurrentTestimonial: (index: number) => void
}

export default function TestimonialsSection({
  testimonials,
  currentTestimonial,
  setCurrentTestimonial,
}: TestimonialsSectionProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gray-100 text-gray-700">
            <Star className="h-4 w-4 ml-2" />
            آراء عملائنا
          </Badge>
          <h2 className="heading-2 text-gray-900 mb-6">
            كلمات من القلب
            <span className="block text-gray-700">من عملائنا الكرام</span>
          </h2>
          <p className="body-large max-w-3xl mx-auto">
            نفتخر بثقة عملائنا وآرائهم الإيجابية التي تحفزنا على تقديم الأفضل دائماً
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 card-shadow-lg">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-3">
                  <div className="flex justify-start mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-xl leading-relaxed text-gray-700 mb-8">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-gray-600">{testimonials[currentTestimonial].position}</p>
                    <p className="text-gray-500 text-sm">{testimonials[currentTestimonial].project}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8 space-x-2 space-x-reverse">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? "bg-gray-900" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
