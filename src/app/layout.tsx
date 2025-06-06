import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Poppins, DM_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/providers/ThemeProvider"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Benjamin Doyle - AI enthusiast, Indie-Hacker & Software Engineer",
  description: "Portfolio of Benjamin Doyle, an AI enthusiast, Indie-Hacker and Software Engineer building products that matter.",
  keywords: ["Benjamin Doyle", "AI", "Indie Hacker", "Software Engineer", "Portfolio", "Full Stack Developer", "React", "Next.js"],
  authors: [{ name: "Benjamin Doyle" }],
  creator: "Benjamin Doyle",
  metadataBase: new URL('https://imjackofitall.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://imjackofitall.com',
    siteName: 'Benjamin Doyle Portfolio',
    title: "Benjamin Doyle - AI enthusiast, Indie-Hacker & Software Engineer",
    description: "Portfolio of Benjamin Doyle, an AI enthusiast, Indie-Hacker and Software Engineer building products that matter.",
    images: [
      {
        url: '/ben_profile.png',
        width: 1024,
        height: 1024,
        alt: 'Benjamin Doyle - AI enthusiast, Indie-Hacker & Software Engineer',
        type: 'image/png',
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${dmSans.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
