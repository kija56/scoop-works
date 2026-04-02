import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Schibsted_Grotesk } from "next/font/google"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "Scoop - Enterprise Systems That Scale With You",
  description:
    "Scoop provides powerful enterprise systems including ERP, HRM, CRM, SCM, Accounting, Project Management, and Inventory Management to streamline your business operations.",
}

export const viewport: Viewport = {
  themeColor: "#350d4f",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${schibstedGrotesk.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}
