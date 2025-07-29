import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Users, Target, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const values = [
  {
    icon: Award,
    title: "التميز",
    description: "نسعى للتميز في كل مشروع نعمل عليه",
  },
  {
    icon: Users,
    title: "العمل الجماعي",
    description: "نؤمن بقوة العمل الجماعي والتعاون",
  },
  {
    icon: Target,
    title: "الدقة",
    description: "نهتم بأدق التفاصيل في جميع أعمالنا",
  },
  {
    icon: Shield,
    title: "الثقة",
    description: "نبني علاقات طويلة الأمد مع عملائنا",
  },
]

export default function AboutSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <Badge className="mb-4 bg-gray-100 text-gray-700">من نحن</Badge>
              <h2 className="heading-2 text-gray-900 mb-6">
                نبني المستقبل
                <span className="block text-gray-700">بإتقان وإبداع</span>
              </h2>
              <p className="body-large mb-6">
                شركة الواحة الهندسية هي شركة رائدة في مجال الاستشارات الهندسية والمعمارية، تأسست عام 2006 برؤية واضحة
                لتقديم حلول هندسية مبتكرة ومتطورة.
              </p>
              <p className="text-gray-600 leading-relaxed">
                نفتخر بفريقنا المتخصص من المهندسين والمعماريين ذوي الخبرة الواسعة، والذين يعملون بشغف لتحويل رؤى عملائنا
                إلى واقع معماري متميز يجمع بين الجمال والوظيفة والاستدامة.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-gray-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <Button className="bg-gray-900 hover:bg-gray-800" asChild>
              <Link href="/about">
                اعرف المزيد عنا
                <ArrowRight className="mr-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop"
                alt="فريق العمل"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating Stats */}
            <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl p-6 border border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">18+</div>
                <div className="text-sm text-gray-600">سنة خبرة</div>
              </div>
            </Card>

            <Card className="absolute -top-6 -right-6 bg-white shadow-xl p-6 border border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">247+</div>
                <div className="text-sm text-gray-600">مشروع مكتمل</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
