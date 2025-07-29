import { z } from "zod"

// Contact form validation
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "الاسم يجب أن يكون أكثر من حرفين")
    .max(50, "الاسم يجب أن يكون أقل من 50 حرف")
    .regex(/^[\u0600-\u06FFa-zA-Z\s]+$/, "الاسم يجب أن يحتوي على أحرف فقط"),

  email: z.string().email("البريد الإلكتروني غير صحيح").max(100, "البريد الإلكتروني طويل جداً"),

  phone: z
    .string()
    .regex(/^(\+971|00971|971)?[0-9]{8,9}$/, "رقم الهاتف غير صحيح")
    .optional(),

  subject: z.string().min(5, "الموضوع يجب أن يكون أكثر من 5 أحرف").max(100, "الموضوع يجب أن يكون أقل من 100 حرف"),

  message: z.string().min(10, "الرسالة يجب أن تكون أكثر من 10 أحرف").max(1000, "الرسالة يجب أن تكون أقل من 1000 حرف"),
})

// Booking form validation
export const bookingFormSchema = z.object({
  name: z.string().min(2, "الاسم مطلوب").max(50, "الاسم طويل جداً"),

  email: z.string().email("البريد الإلكتروني غير صحيح"),

  phone: z.string().regex(/^(\+971|00971|971)?[0-9]{8,9}$/, "رقم الهاتف غير صحيح"),

  service: z.string().min(1, "يرجى اختيار الخدمة"),

  date: z.string().min(1, "يرجى اختيار التاريخ"),

  time: z.string().min(1, "يرجى اختيار الوقت"),

  notes: z.string().max(500, "الملاحظات طويلة جداً").optional(),
})

// User registration validation
export const userRegistrationSchema = z
  .object({
    name: z.string().min(2, "الاسم مطلوب").max(50, "الاسم طويل جداً"),

    email: z.string().email("البريد الإلكتروني غير صحيح"),

    password: z
      .string()
      .min(8, "كلمة المرور يجب أن تكون 8 أحرف على الأقل")
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "كلمة المرور يجب أن تحتوي على أحرف كبيرة وصغيرة وأرقام"),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "كلمات المرور غير متطابقة",
    path: ["confirmPassword"],
  })

export type ContactFormData = z.infer<typeof contactFormSchema>
export type BookingFormData = z.infer<typeof bookingFormSchema>
export type UserRegistrationData = z.infer<typeof userRegistrationSchema>
