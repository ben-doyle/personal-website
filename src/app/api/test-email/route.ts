import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    console.log("Testing email with verified domain...")

    // Simple test email
    const { data, error } = await resend.emails.send({
      from: "Test <noreply@imjackofitall.com>",
      to: ["ben@benjackal.com"],
      subject: "Test Email",
      html: "<h1>Test Email</h1><p>This is a test email from your verified domain.</p>",
      text: "Test Email - This is a test email from your verified domain."
    })

    if (error) {
      console.error("Detailed error:", error)
      return NextResponse.json(
        { error: "Email failed", details: error },
        { status: 500 }
      )
    }

    console.log("Email sent successfully:", data)
    return NextResponse.json(
      { message: "Test email sent successfully", data },
      { status: 200 }
    )

  } catch (error) {
    console.error("Catch error:", error)
    return NextResponse.json(
      { error: "Failed to send test email", details: error },
      { status: 500 }
    )
  }
} 