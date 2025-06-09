import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email address is required" },
        { status: 400 }
      )
    }

    console.log("Attempting to send email to:", email)

    const { data: notificationData, error: notificationError } = await resend.emails.send({
      from: "Portfolio Contact <noreply@imjackofitall.com>",
      to: ["ben@benjackal.com"],
      subject: "New Contact from Portfolio Website",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #754043;">New Contact from Portfolio Website</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <p>Someone has shown interest in connecting with you through your portfolio website!</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      `,
      text: `
        New Contact from Portfolio Website
        
        Email: ${email}
        Date: ${new Date().toLocaleString()}
        
        Someone has shown interest in connecting with you through your portfolio website!
      `
    })

    if (notificationError) {
      console.error("Notification email error:", notificationError)
      return NextResponse.json(
        { error: "Failed to send notification email", details: notificationError },
        { status: 500 }
      )
    }

    console.log("Notification email sent successfully:", notificationData)

    // Send auto-reply to the visitor (using your verified domain)  
    const { data: autoReplyData, error: autoReplyError } = await resend.emails.send({
      from: "Benjamin Doyle <noreply@imjackofitall.com>",
      to: [email],
      subject: "Thanks for reaching out! 🚀",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thanks for reaching out!</title>
        </head>
        <body style="margin: 0; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f5f5;">
          <table role="presentation" style="width: 100%; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
            <tr>
              <td style="background: linear-gradient(135deg, #754043 0%, #C19A6B 100%); padding: 40px 30px; text-align: center;">
                <img src="https://imjackofitall.com/ben-profile.jpg" alt="Benjamin Doyle" style="width: 80px; height: 80px; border-radius: 50%; border: 4px solid rgba(255,255,255,0.2); display: block; margin: 0 auto 20px auto;" />
                <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">Hey there! 👋</h1>
                <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Thanks for reaching out</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 40px 30px;">
                <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                  I'm <strong>Ben</strong>, an AI enthusiast, indie-hacker & software engineer who builds products that matter ✨
                </p>
                
                <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                  I received your message and I'm excited to connect! Whether you're looking to:
                </p>
                
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #754043;">
                  <ul style="color: #333; margin: 0; padding-left: 20px; line-height: 1.8;">
                    <li><strong>Build a custom web application</strong> from scratch</li>
                    <li><strong>Create an MVP</strong> for your startup idea</li>
                    <li><strong>Develop AI-powered tools</strong> for your business</li>
                    <li><strong>Learn</strong> about modern web development</li>
                    <li><strong>Collaborate</strong> on an exciting project</li>
                  </ul>
                </div>
                
                <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 20px 0;">
                  I can build you <strong>anything</strong> - from sleek landing pages to complex full-stack applications. 
                  I specialize in React, Next.js, Node.js, and AI integrations, but I love tackling new challenges!
                </p>
                
                <div style="background: linear-gradient(135deg, #754043 0%, #C19A6B 100%); padding: 20px; border-radius: 8px; text-align: center; margin: 30px 0;">
                  <p style="color: #ffffff; margin: 0; font-size: 16px; font-weight: 500;">
                    🚀 I'll get back to you within 24 hours with a detailed response!
                  </p>
                </div>
                
                <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 20px 0 0 0;">
                  In the meantime, feel free to check out some of my recent work:
                </p>
                
                <ul style="color: #333; margin: 20px 0; padding-left: 0; list-style: none; line-height: 1.8;">
                  <li style="margin: 8px 0;">
                    <strong>🦘 ShakkaShuffle</strong> - Planning Poker, Quokka style! 
                    <a href="https://shakkashuffle.com" style="color: #754043; text-decoration: none; font-weight: 500;">→ Visit ShakkaShuffle</a>
                  </li>
                  <li style="margin: 8px 0;">
                    <strong>📍 Guiddr</strong> - Discover the best places with your team 
                    <a href="https://guiddr.com" style="color: #754043; text-decoration: none; font-weight: 500;">→ Visit Guiddr</a>
                  </li>
                  <li style="margin: 8px 0;">
                    <strong>🌼 DZ Daisy</strong> - Restoring a '74 VW Kombi journey 
                    <a href="https://dzdaisy.com" style="color: #754043; text-decoration: none; font-weight: 500;">→ Visit DZ Daisy</a>
                  </li>
                </ul>
                
                <hr style="border: none; border-top: 1px solid #e9ecef; margin: 30px 0;">
                
                <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0;">
                  Cheers,<br>
                  <strong style="color: #754043;">Benjamin Doyle</strong><br>
                  <span style="color: #666; font-size: 14px;">AI Enthusiast, Indie-Hacker & Software Engineer</span>
                </p>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      text: `
Hey there! 👋

Thanks for reaching out! I'm Ben, an AI enthusiast, indie-hacker & software engineer who builds products that matter ✨

I received your message and I'm excited to connect! Whether you're looking to:

• Build a custom web application from scratch
• Create an MVP for your startup idea  
• Develop AI-powered tools for your business
• Learn about modern web development
• Collaborate on an exciting project

I can build you anything - from sleek landing pages to complex full-stack applications. I specialize in React, Next.js, Node.js, and AI integrations, but I love tackling new challenges!

🚀 I'll get back to you within 24 hours with a detailed response!

In the meantime, feel free to check out some of my recent work:
• ShakkaShuffle: https://shakkashuffle.com
• Guiddr: https://guiddr.com  
• DZ Daisy: https://dzdaisy.com

Cheers,
Benjamin Doyle
AI Enthusiast, Indie-Hacker & Software Engineer
      `
    })

    if (autoReplyError) {
      console.error("Auto-reply email error:", autoReplyError)
      // Still return success for notification email, but log the auto-reply error
      console.log("Notification sent but auto-reply failed")
    } else {
      console.log("Auto-reply email sent successfully:", autoReplyData)
    }

    return NextResponse.json(
      { 
        message: "Email sent successfully", 
        data: { 
          notification: notificationData, 
          autoReply: autoReplyError ? null : autoReplyData,
          autoReplyError: autoReplyError || null
        } 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: "Failed to send email. Please try again later.", details: error },
      { status: 500 }
    )
  }
} 