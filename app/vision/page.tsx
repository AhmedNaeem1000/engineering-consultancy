"use client";

import { Badge } from "@/components/ui/badge";
import { Lightbulb, ShieldCheck, Users, Star, Heart } from "lucide-react";
import Header from "@/components/layout/header";
const values = [
  {
    icon: <Lightbulb className="h-6 w-6 text-white" />,
    title: "الابتكار المستمر",
    desc: "نبحث دائمًا عن حلول جديدة وإبداعية لتلبية تطلعات عملائنا.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-white" />,
    title: "الالتزام بالجودة",
    desc: "نلتزم بأعلى معايير الجودة في جميع مشاريعنا وخدماتنا.",
  },
  {
    icon: <Users className="h-6 w-6 text-white" />,
    title: "روح الفريق",
    desc: "نعمل بروح الفريق لتحقيق أفضل النتائج لعملائنا.",
  },
  {
    icon: <Star className="h-6 w-6 text-white" />,
    title: "الشفافية والمصداقية",
    desc: "نؤمن بالوضوح والثقة في تعاملاتنا مع الجميع.",
  },
  {
    icon: <Heart className="h-6 w-6 text-white " />,
    title: "خدمة المجتمع",
    desc: "نحرص على أن يكون لنا أثر إيجابي في مجتمعنا.",
  },
];

export default function VisionPage() {
  return (
    <>
        <Header />

    <main className="min-h-screen bg-white py-20">
      
      <div className="container">
        {/* هيدر */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-white text-gray-700 border border-gray-300 text-lg px-6 py-2 shadow">
            رؤيتنا
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 tracking-tight">
            الريادة في الابتكار الهندسي
          </h1>
          <div className="w-20 h-1 bg-gray-700 rounded mx-auto mb-6"></div>
          <p className="body-large max-w-2xl mx-auto text-gray-800 text-lg">
            نطمح لأن نكون الخيار الأول في الاستشارات الهندسية، عبر تقديم حلول متكاملة تواكب المستقبل وتحقق التنمية المستدامة.
          </p>
        </div>

        {/* رسالة الشركة */}
        <section className="max-w-2xl mx-auto mb-20">
          <div className="bg-white border-2 border-gray-800 rounded-xl shadow p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">رسالتنا</h2>
            <p className="text-gray-700 text-lg">
              تقديم خدمات هندسية ومعمارية عالية الجودة، ترتكز على الإبداع والالتزام بأعلى معايير المهنية، لتحقيق رضا عملائنا والمساهمة في تطوير المجتمع.
            </p>
          </div>
        </section>

        {/* القيم - Timeline رأسي */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">قيمنا الأساسية</h2>
          <div className="relative border-r-4 border-gray-200 pr-8">
            {values.map((val, idx) => (
              <div key={idx} className="mb-12 flex items-start">
                <div className="flex flex-col items-center mr-4">
                  <div className="bg-gray-700 text-white rounded-full p-2 shadow">{val.icon}</div>
                  {idx < values.length - 1 && (
                    <div className="h-12 w-1 bg-gray-200 mt-1"></div>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1 mr-2">{val.title}</h3>
                  <p className="text-gray-600 text-sm mr-2">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
    </>
  );
} 