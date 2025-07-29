"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/header";
const team = [
  {
    name: "م. أحمد السبيعي",
    position: "المدير التنفيذي والشريك المؤسس",
    bio: "خبرة أكثر من 15 سنة في إدارة المشاريع الهندسية وتطوير الأعمال." ,
  },
  {
    name: "م. سارة العتيبي",
    position: "رئيس قسم التصميم المعماري",
    bio: "متخصصة في التصاميم المستدامة والحلول الإبداعية للمباني الحديثة.",
  },
  {
    name: "م. خالد الزهراني",
    position: "رئيس قسم الهندسة الإنشائية",
    bio: "إشراف على تنفيذ مشاريع كبرى وضمان أعلى معايير الجودة والسلامة.",
  },
  {
    name: "م. ريم الحربي",
    position: "مدير إدارة المشاريع",
    bio: "إدارة فرق العمل والتنسيق بين جميع التخصصات لتحقيق أهداف العملاء.",
  },
];

export default function TeamPage() {
  return (
    <>
    
    <Header />
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="container">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-white text-gray-700 border border-gray-300">فريق العمل</Badge>
          <h1 className="heading-1 text-gray-900 mb-6">تعرف على خبرائنا</h1>
          <p className="body-large max-w-2xl mx-auto">
            يضم فريقنا نخبة من المهندسين والخبراء في مختلف التخصصات الهندسية والمعمارية، يعملون معًا لتحقيق رؤيتكم.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <Card key={idx} className="border-0 card-shadow hover:card-shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-amber-700 font-semibold mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm mb-0">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
    </>
  );
} 