"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Footer from "@/components/footer"
import Link from "next/link"
import Logo from "@/components/logo"
import CTASection from "@/components/cta-section"
import FAQSection from "@/components/faq-section"

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

export default function HowToWriteACheckWithThousandsAndCentsClient() {
  return (
    <main className="min-h-screen bg-white">
      <header className="sticky top-0 z-30 bg-white border-b border-gray-100 py-4 px-4 sm:px-8 flex items-center">
        <Logo />
      </header>
      <section className="w-full py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            How to Write a Check with Thousands and Cents (Step-by-Step Guide)
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Learn how to properly write a check for amounts in the thousands with cents, ensuring your payment is processed correctly and securely.
          </p>
        </div>

        {/* Step-by-Step Guide */}
        <div className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            How to Write a Check with Thousands and Cents: Step-by-Step
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Write the date and recipient's name</h3>
                  <p className="text-gray-600 mb-3">
                    Begin by writing the current date in the top right corner and the recipient's name on the "Pay to
                    the order of" line. These steps are the same regardless of the check amount.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Write the dollar amount in the box with commas and cents
                  </h3>
                  <p className="text-gray-600 mb-3">
                    In the amount box (usually on the right side of the "Pay to the order of" line), write the dollar
                    amount with a comma separating the thousands and a decimal point for cents.
                  </p>
                  <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                    <p className="font-medium">Examples:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>$1,234.56 (one thousand two hundred thirty-four dollars and fifty-six cents)</li>
                      <li>$5,000.75 (five thousand dollars and seventy-five cents)</li>
                      <li>$12,345.00 (twelve thousand three hundred forty-five dollars and zero cents)</li>
                    </ul>
                  </div>
                  <div className="mt-3 text-sm text-gray-500">
                    <strong>Important:</strong> Always include the comma between thousands and always include cents even
                    if the amount is a whole dollar (e.g., $5,000.00).
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Write out the thousands in words on the amount line
                  </h3>
                  <p className="text-gray-600 mb-3">
                    On the line below "Pay to the order of," write out the dollar amount in words. For thousands, spell
                    out each part clearly. Start at the far left of the line.
                  </p>
                  <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                    <p className="font-medium">Examples for thousands:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>
                        <strong>$1,234:</strong> One thousand two hundred thirty-four
                      </li>
                      <li>
                        <strong>$5,000:</strong> Five thousand
                      </li>
                      <li>
                        <strong>$12,345:</strong> Twelve thousand three hundred forty-five
                      </li>
                      <li>
                        <strong>$123,456:</strong> One hundred twenty-three thousand four hundred fifty-six
                      </li>
                    </ul>
                  </div>
                  <div className="mt-3 text-sm text-gray-500">
                    <strong>Note:</strong> Do not use the word "and" between the thousands, hundreds, or tens places.
                    Save "and" for separating dollars from cents.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Add the cents as a fraction</h3>
                  <p className="text-gray-600 mb-3">
                    After writing the dollar amount in words, add the word "and" followed by the cents as a fraction
                    over 100.
                  </p>
                  <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                    <p className="font-medium">Complete examples with thousands and cents:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>
                        <strong>$1,234.56:</strong> One thousand two hundred thirty-four <strong>and 56/100</strong>
                      </li>
                      <li>
                        <strong>$5,000.75:</strong> Five thousand <strong>and 75/100</strong>
                      </li>
                      <li>
                        <strong>$12,345.00:</strong> Twelve thousand three hundred forty-five{" "}
                        <strong>and 00/100</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-3 text-sm text-gray-500">
                    <strong>Remember:</strong> The word "and" in check writing is ONLY used to separate dollars from
                    cents, not to separate thousands from hundreds.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                  <span className="text-blue-600 font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Add "Dollars" and draw a line</h3>
                  <p className="text-gray-600 mb-3">
                    After writing the full amount with cents, add the word "Dollars" and draw a line through any
                    remaining space on the line to prevent fraud.
                  </p>
                  <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                    <p className="font-medium">Complete examples:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>
                        One thousand two hundred thirty-four and 56/100 <strong>Dollars</strong>{" "}
                        <span className="text-gray-400">~~~~~~~~</span>
                      </li>
                      <li>
                        Five thousand and 75/100 <strong>Dollars</strong>{" "}
                        <span className="text-gray-400">~~~~~~~~</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-3 text-sm text-gray-500">
                    <strong>Security tip:</strong> The line after "Dollars" prevents someone from adding words that
                    could change the amount of your check.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                  <span className="text-blue-600 font-bold">6</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Sign the check</h3>
                  <p className="text-gray-600 mb-3">
                    Complete the check by signing your name in the bottom right corner. For larger amounts, some banks
                    may verify your signature more carefully, so be sure to sign consistently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="my-8 bg-blue-50 rounded-lg p-6 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Writing Large Amounts with Cents Correctly Matters</h2>
          <p className="text-gray-700 mb-4">
            When writing a check for amounts in the thousands with cents, proper formatting is crucial. The difference between writing
            a check correctly and incorrectly might seem minor, but it can lead to confusion, payment errors, or even make
            your check vulnerable to fraud.
          </p>
          <p className="text-gray-700">
            Banks process millions of checks daily, and clear formatting helps ensure your payment is processed exactly as
            intended. This guide will show you exactly how to write amounts in the thousands with cents in both the numeric amount box and
            the written amount line.
          </p>
        </div>

        {/* Check Form */}
        <div className="my-12">
          {/* Add CheckForm component here */}
        </div>

        {/* CTA Section */}
        <div className="my-12">
          <CTASection />
        </div>

        {/* Common Mistakes */}
        <div className="my-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes to Avoid</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Incorrect Comma Placement</h3>
              <p className="text-gray-600">
                Always place the comma correctly in the numeric amount box. For example, write "$1,234.56" not "$1234.56".
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Omitting the Word "and"</h3>
              <p className="text-gray-600">
                Always include the word "and" before writing the cents portion. For example, write "One thousand two hundred thirty-four and 56/100" not "One thousand two hundred thirty-four 56/100".
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Incorrect Fraction Format</h3>
              <p className="text-gray-600">
                Write cents as a fraction with 100 as the denominator (e.g., 56/100). Don't write it as a decimal (e.g., 0.56) or as words (e.g., "fifty-six cents").
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="my-12">
          <FAQSection />
        </div>

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

      {/* Footer */}
      <Footer />
    </main>
  )
}
