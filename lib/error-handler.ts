import { NextResponse } from "next/server"

export class AppError extends Error {
  statusCode: number
  isOperational: boolean

  constructor(message: string, statusCode: number) {
    super(message)
    this.statusCode = statusCode
    this.isOperational = true

    Error.captureStackTrace(this, this.constructor)
  }
}

export const handleError = (error: unknown) => {
  console.error("Application Error:", error)

  if (error instanceof AppError) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: error.statusCode },
    )
  }

  // Default error response
  return NextResponse.json(
    {
      success: false,
      message: "حدث خطأ في الخادم، يرجى المحاولة مرة أخرى",
    },
    { status: 500 },
  )
}

export const logError = (error: unknown, context?: string) => {
  const timestamp = new Date().toISOString()
  const errorMessage = error instanceof Error ? error.message : "Unknown error"
  const errorStack = error instanceof Error ? error.stack : ""

  console.error(`[${timestamp}] ${context ? `[${context}] ` : ""}${errorMessage}`)
  if (errorStack) {
    console.error(errorStack)
  }
}
