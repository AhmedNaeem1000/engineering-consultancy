"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Send } from "lucide-react"
import { trackEvent } from "@/components/analytics/google-analytics"
import { Building2 } from "lucide-react"


interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
  options?: { text: string; action: string }[]
}

const botResponses = {
  greeting: {
    text: "مرحباً بك في شركة الواحة الهندسية! \n\nأنا مساعدك الافتراضي وسأكون سعيداً لمساعدتك.\nكيف يمكنني خدمتك اليوم؟",
    options: [
      { text: "الخدمات المتاحة", action: "services" },
      { text: "معلومات التواصل", action: "contact" },
      { text: "حجز استشارة", action: "booking" },
      { text: "المشاريع السابقة", action: "projects" },
    ],
  },
  services: {
    text: "نقدم خدمات هندسية شاملة ومتميزة:\n\nالتصميم المعماري\n• تصميم المباني السكنية والتجارية\n• التصميم الداخلي والخارجي\n\nالهندسة الإنشائية\n• التصميم الإنشائي\n• حساب الأحمال والمقاومة\n\nإدارة المشاريع\n• التخطيط والمتابعة\n• ضمان الجودة والمواعيد\n\nالاستشارات الهندسية\n• دراسات الجدوى\n• التقييم الفني",
    options: [
      { text: "تواصل معنا للتفاصيل", action: "contact" },
      { text: "احجز استشارة مجانية", action: "booking" },
      { text: "معلومات الأسعار", action: "pricing" },
      { text: "العودة للقائمة الرئيسية", action: "greeting" },
    ],
  },
  contact: {
    text: "يسعدنا تواصلك معنا! إليك جميع طرق التواصل:\n\nالهاتف: +966 11 234 5678\nالجوال: +966 50 123 4567\nالبريد الإلكتروني: info@alwaha-engineering.com\nالعنوان: شارع الملك فهد، الرياض، المملكة العربية السعودية\n\nأوقات العمل:\nالأحد - الخميس: 8:00 ص - 6:00 م\nالجمعة - السبت: مغلق\n\nنرد على استفساراتكم خلال ساعة واحدة في أوقات العمل",
    options: [
      { text: "حجز موعد", action: "booking" },
      { text: "معلومات الخدمات", action: "services" },
      { text: "إرسال رسالة", action: "send_message" },
      { text: "العودة للقائمة الرئيسية", action: "greeting" },
    ],
  },
  booking: {
    text: "ممتاز! \n\nيمكنك حجز استشارة مجانية معنا بسهولة.\nسأوجهك الآن إلى صفحة الحجز حيث يمكنك:\n\nاختيار نوع الخدمة\nتحديد التاريخ والوقت المناسب\nإدخال تفاصيل مشروعك\nتأكيد الحجز فوراً\n\nهل تريد الانتقال لصفحة الحجز الآن؟",
    options: [
      { text: "نعم، انتقل لصفحة الحجز", action: "redirect_booking" },
      { text: "أفضل الاتصال المباشر", action: "contact" },
      { text: "أسئلة حول الحجز", action: "booking_help" },
      { text: "العودة للقائمة الرئيسية", action: "greeting" },
    ],
  },
  projects: {
    text: "لدينا خبرة واسعة في تنفيذ مشاريع متنوعة ومتميزة:\n\nالمباني التجارية\n• مراكز التسوق والمكاتب\n• الفنادق والمطاعم\n\nالمجمعات السكنية\n• الفلل والشقق\n• المجمعات السكنية الكبيرة\n\nالمنشآت الصناعية\n• المصانع والمستودعات\n• المرافق الصناعية\n\nالمباني الطبية\n• المستشفيات والعيادات\n• المراكز الطبية المتخصصة\n\nالمؤسسات التعليمية\n• المدارس والجامعات\n• مراكز التدريب",
    options: [
      { text: "شاهد معرض المشاريع", action: "redirect_projects" },
      { text: "احجز استشارة لمشروعك", action: "booking" },
      { text: "تحدث مع مهندس", action: "contact" },
      { text: "العودة للقائمة الرئيسية", action: "greeting" },
    ],
  },
  pricing: {
    text: "أسعارنا تنافسية ومدروسة بعناية:\n\nالاستشارة الأولى: مجانية تماماً\nالتصميم المعماري: يبدأ من 50 ريال/م²\nالتصميم الإنشائي: يبدأ من 30 ريال/م²\nإدارة المشاريع: 3-5% من قيمة المشروع\n\nالسعر النهائي يعتمد على:\nحجم وتعقيد المشروع\nنوع الخدمة المطلوبة\nالمدة الزمنية للتنفيذ\n\nعروض خاصة للمشاريع الكبيرة!",
    options: [
      { text: "احجز استشارة للتسعير", action: "booking" },
      { text: "تحدث مع المبيعات", action: "contact" },
      { text: "معلومات الخدمات", action: "services" },
      { text: "العودة للقائمة الرئيسية", action: "greeting" },
    ],
  },
  booking_help: {
    text: "إليك كل ما تحتاج معرفته عن الحجز:\n\nكيف أحجز؟\n• اختر نوع الخدمة\n• حدد التاريخ والوقت\n• أدخل معلوماتك\n• أكد الحجز\n\nكم يستغرق الموعد؟\n• الاستشارة العامة: 30 دقيقة\n• الاستشارة المتخصصة: 60 دقيقة\n\nهل الاستشارة مجانية؟\n• الاستشارة الأولى مجانية تماماً\n\nمتى يمكنني الحجز؟\n• متاح الحجز من الأحد للخميس\n• من 8 صباحاً حتى 6 مساءً",
    options: [
      { text: "احجز الآن", action: "redirect_booking" },
      { text: "اتصل بنا مباشرة", action: "contact" },
      { text: "العودة للقائمة الرئيسية", action: "greeting" },
    ],
  },
  send_message: {
    text: "يمكنك إرسال رسالة مباشرة عبر:\n\nالبريد الإلكتروني: info@alwaha-engineering.com\nواتساب: +966 50 123 4567\nالهاتف: +966 11 234 5678\n\nأو يمكنك كتابة رسالتك هنا وسأحرص على إيصالها للفريق المختص.",
    options: [
      { text: "اكتب رسالة هنا", action: "write_message" },
      { text: "اتصل مباشرة", action: "contact" },
      { text: "العودة للقائمة الرئيسية", action: "greeting" },
    ],
  },
  write_message: {
    text: "تفضل، اكتب رسالتك في الحقل أدناه وسأحرص على إيصالها للفريق المختص.\n\nسنرد عليك خلال ساعة واحدة في أوقات العمل!",
    options: [
      { text: "أفضل الاتصال المباشر", action: "contact" },
      { text: "حجز موعد بدلاً من ذلك", action: "booking" },
      { text: "العودة للقائمة الرئيسية", action: "greeting" },
    ],
  },
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        handleBotResponse("greeting")
      }, 500)
    }
  }, [isOpen])

  const handleBotResponse = (action: string) => {
    const response = botResponses[action as keyof typeof botResponses]
    if (response) {
      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        const botMessage: Message = {
          id: Date.now().toString(),
          text: response.text,
          isBot: true,
          timestamp: new Date(),
          options: response.options,
        }
        setMessages((prev) => [...prev, botMessage])
      }, 1000)
    }
  }

  const handleOptionClick = (action: string, text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: text,
      isBot: false,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])

    trackEvent("chatbot_option_click", "chatbot", action)

    if (action === "redirect_booking") {
      setTimeout(() => {
        setIsOpen(false)
        router.push("/booking")
      }, 1000)
      setTimeout(() => {
        const confirmMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: "جاري توجيهك لصفحة الحجز...",
          isBot: true,
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, confirmMessage])
      }, 500)
      return
    } else if (action === "redirect_projects") {
      setTimeout(() => {
        setIsOpen(false)
        router.push("/projects")
      }, 1000)
      setTimeout(() => {
        const confirmMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: "جاري توجيهك لمعرض المشاريع...",
          isBot: true,
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, confirmMessage])
      }, 500)
      return
    }

    setTimeout(() => {
      handleBotResponse(action)
    }, 800)
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    const messageText = inputValue
    setInputValue("")

    trackEvent("chatbot_message_sent", "chatbot", "user_message")

    setTimeout(() => {
      let responseAction = "greeting"
      const lowerMessage = messageText.toLowerCase()

      if (lowerMessage.includes("خدمات") || lowerMessage.includes("خدمة") || lowerMessage.includes("تصميم")) {
        responseAction = "services"
      } else if (lowerMessage.includes("حجز") || lowerMessage.includes("موعد") || lowerMessage.includes("استشارة")) {
        responseAction = "booking"
      } else if (
        lowerMessage.includes("تواصل") ||
        lowerMessage.includes("هاتف") ||
        lowerMessage.includes("عنوان") ||
        lowerMessage.includes("اتصال")
      ) {
        responseAction = "contact"
      } else if (
        lowerMessage.includes("سعر") ||
        lowerMessage.includes("تكلفة") ||
        lowerMessage.includes("أسعار") ||
        lowerMessage.includes("مال")
      ) {
        responseAction = "pricing"
      } else if (lowerMessage.includes("مشاريع") || lowerMessage.includes("مشروع") || lowerMessage.includes("أعمال")) {
        responseAction = "projects"
      } else {
        setIsTyping(true)
        setTimeout(() => {
          setIsTyping(false)
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            text: "شكراً لك على رسالتك!\n\nلقد تم تسجيل استفسارك وسيتواصل معك أحد مختصينا قريباً.\n\nفي الوقت الحالي، يمكنك استخدام الخيارات أدناه للحصول على مساعدة فورية:",
            isBot: true,
            timestamp: new Date(),
            options: botResponses.greeting.options,
          }
          setMessages((prev) => [...prev, botMessage])
        }, 1200)
        return
      }

      handleBotResponse(responseAction)
    }, 800)
  }

  const toggleChatbot = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      trackEvent("chatbot_opened", "chatbot", "open")
    } else {
      trackEvent("chatbot_closed", "chatbot", "close")
    }
  }

  return (
    <>
      <Button
        onClick={toggleChatbot}
        className="fixed bottom-6 left-6 z-50 h-14 w-14 rounded-full bg-gray-900 hover:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <Card className="fixed bottom-24 left-6 z-50 w-96 max-w-[calc(100vw-3rem)] shadow-2xl border-0">
          <CardHeader className="bg-gray-900 text-white rounded-t-lg p-4">
            <CardTitle className="text-lg flex items-center gap-3">
                                <Building2 className="h-7 w-7 text-white" />

            
              <div>
                <div className="font-semibold"> الواحة الهندسية</div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex flex-col h-96">
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                  <div
                    className={`max-w-[85%] p-3 rounded-lg shadow-sm ${
                      message.isBot ? "bg-white text-gray-800 border border-gray-200" : "bg-gray-900 text-white"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                    {message.options && (
                      <div className="mt-3 space-y-2">
                        {message.options.map((option, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            className="w-full text-xs justify-start bg-transparent hover:bg-gray-100 text-gray-700 border-gray-300 rounded-md"
                            onClick={() => handleOptionClick(option.action, option.text)}
                          >
                            {option.text}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="اكتب رسالتك هنا..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  disabled={isTyping}
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-gray-900 hover:bg-gray-800"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}