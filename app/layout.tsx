import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import GoogleAnalytics from "@/components/google-analytics"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "How to Write a Check (With Example) – 2025 Step-by-Step Guide",
  description:
    "Learn how to properly write a check in 7 simple steps. Includes a visual example, interactive preview, and downloadable printable templates for practice.",
  metadataBase: new URL("https://howwriteacheck.com"),
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-7284807519318213" />
        <link rel="canonical" href="https://www.howwriteacheck.com/" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7284807519318213"
          crossorigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
