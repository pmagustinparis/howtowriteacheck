import type { Metadata } from "next"
import CheckForm from "@/components/check-form"
import StepByStepGuide from "@/components/step-by-step-guide"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
// Add the import for the FAQ section
import FAQSection from "@/components/faq-section"
import CommonMistakes from "@/components/common-mistakes"

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

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            How to Write a Check: Step-by-Step Guide with Example
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Learn how to properly fill out a check with our easy-to-follow guide. Complete with visual examples and a
            free interactive template.
          </p>
        </div>

        {/* Step by Step Guide */}
        <StepByStepGuide />

        {/* Interactive Check Form */}
        <CheckForm />

        {/* CTA Section */}
        <CTASection />

        {/* Common Mistakes Section */}
        <CommonMistakes />

        {/* FAQ Section */}
        <FAQSection />

        {/* Explore More Guides Section */}
        <section className="mt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore More Guides</h2>
          <div className="space-y-2">
            <a href="/how-to-write-a-check-with-cents" className="block p-2 text-blue-600 hover:underline">
              How to Write a Check with Cents
            </a>
            <a href="/how-to-write-a-check-with-thousands-and-cents" className="block p-2 text-blue-600 hover:underline">
              How to Write a Check with Thousands and Cents
            </a>
            <a href="/how-to-write-a-void-check" className="block p-2 text-blue-600 hover:underline">
              How to Write a Void Check
            </a>
            <a href="/how-to-write-a-check-for-1000" className="block p-2 text-blue-600 hover:underline">
              How to Write a Check for 1000
            </a>
            <a href="/sample-how-to-write-a-check" className="block p-2 text-blue-600 hover:underline">
              Sample How to Write a Check
            </a>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </section>
    </main>
  )
}
