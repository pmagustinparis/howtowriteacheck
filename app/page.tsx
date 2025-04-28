import type { Metadata } from "next"
import CheckForm from "@/components/check-form"
import StepByStepGuide from "@/components/step-by-step-guide"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import FAQSection from "@/components/faq-section"
import CommonMistakes from "@/components/common-mistakes"
import Link from "next/link"
import Logo from "@/components/logo"

export const metadata: Metadata = {
  title: "How to Write a Check (With Example) – 2025 Step-by-Step Guide",
  description:
    "Learn how to properly write a check in 7 simple steps. Includes a visual example, interactive preview, and downloadable printable templates for practice.",
  openGraph: {
    title: "How to Write a Check (With Example) – 2025 Step-by-Step Guide",
    description:
      "Learn how to properly write a check in 7 simple steps. Includes a visual example, interactive preview, and downloadable printable templates for practice.",
    url: "https://howwriteacheck.com",
    siteName: "How Write a Check",
    locale: "en_US",
    type: "website",
  },
}

const guides = [
  {
    href: "/how-to-write-a-check-with-cents",
    title: "How to Write a Check with Cents",
    desc: "Step-by-step guide for writing checks that include cents."
  },
  {
    href: "/how-to-write-a-check-for-1000",
    title: "How to Write a Check for $1,000",
    desc: "Instructions and visual example for $1,000 checks."
  },
  {
    href: "/how-to-write-a-check-with-thousands-and-cents",
    title: "How to Write a Check with Thousands and Cents",
    desc: "Learn to write large checks with cents correctly."
  },
  {
    href: "/how-to-write-a-void-check",
    title: "How to Void a Check",
    desc: "When and how to void a check for deposits or payments."
  },
  {
    href: "/sample-how-to-write-a-check",
    title: "Sample: How to Write a Check",
    desc: "See a real filled-out check example and learn with a practical case."
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <header className="sticky top-0 z-30 bg-white border-b border-gray-100 py-4 px-4 sm:px-8 flex items-center">
        <Logo />
      </header>
      <section className="w-full py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            How to Write a Check: Step-by-Step Guide with Example
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Learn how to properly fill out a check with our easy-to-follow guide. Complete with visual examples and a
            free interactive template.
          </p>
        </div>

        <StepByStepGuide />
        <div className="my-12" />
        <CheckForm />
        <div className="my-12" />
        <CTASection />
        <div className="my-12" />
        <CommonMistakes />
        <div className="my-12" />
        <FAQSection />
        <div className="my-12" />
        {/* Explore More Guides */}
        <div className="my-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Explore More Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="block bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">{guide.title}</h3>
                <p className="text-gray-600">{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
