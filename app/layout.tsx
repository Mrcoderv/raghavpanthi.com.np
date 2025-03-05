import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import CursorEffect from "@/components/cursor-effect"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Raghav Vian Panthi | Portfolio",
  description: "Professional portfolio of Raghav Vian Panthi, a BCA student and aspiring developer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${poppins.variable} font-sans`}>
        {children}
        <CursorEffect />
      </body>
    </html>
  )
}



import './globals.css'