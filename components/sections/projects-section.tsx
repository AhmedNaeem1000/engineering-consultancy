import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  location: string;
  year: string;
  area: string;
  client: string;
  features: string[];
  status: string;
}

interface ProjectsSectionProps {
  projects: Project[]
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-white text-gray-700 border border-gray-300">مشاريعنا</Badge>
          <h2 className="heading-2 text-gray-900 mb-6">إنجازات نفتخر بها</h2>
          <p className="body-large max-w-3xl mx-auto">
            اكتشف مجموعة من أبرز مشاريعنا المكتملة التي تعكس خبرتنا وإبداعنا في مختلف القطاعات
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-0 card-shadow hover:card-shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-gray-700">{project.category}</Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                <Button variant="outline" className="w-full bg-transparent group-hover:bg-gray-50" asChild>
                  <Link href={`/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    اكتشف المشروع
                    <ArrowRight className="mr-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gray-900 hover:bg-gray-800" asChild>
            <Link href="/projects">
              عرض جميع المشاريع
              <ArrowRight className="mr-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
