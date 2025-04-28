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

export default function HowToWriteACheckFor1000Client() {
  return (
    <main className="min-h-screen bg-white">
      <header className="sticky top-0 z-30 bg-white border-b border-gray-100 py-4 px-4 sm:px-8 flex items-center">
        <Logo />
      </header>
      <section className="w-full py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            How to Write a Check for $1,000 (Step-by-Step Guide)
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Learn the proper way to write a check for one thousand dollars to ensure your payment is processed correctly and
            securely.
          </p>
        </div>

        {/* Step-by-Step Guide */}
        <div className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            How to Write a Check for $1,000: Step-by-Step
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Write the date</h3>
                  <p className="text-gray-600 mb-3">
                    In the top right corner of the check, write the current date in MM/DD/YYYY format (e.g.,
                    04/25/2025).
                  </p>
                  <div className="mt-3 text-sm text-gray-500">
                    <strong>Tip:</strong> You can also write the date in long form (e.g., April 25, 2025) if you prefer.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Write the recipient's name</h3>
                  <p className="text-gray-600 mb-3">
                    On the "Pay to the Order of" line, write the full name of the person or company you're paying. Make
                    sure to use the correct spelling and include any business designations (Inc., LLC, etc.).
                  </p>
                  <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                    <p className="font-medium">Examples:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>John Smith</li>
                      <li>Sunshine Apartments LLC</li>
                      <li>State University</li>
                      <li>First National Bank</li>
                    </ul>
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
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Write "$1,000.00" in the amount box</h3>
                  <p className="text-gray-600 mb-3">
                    In the small box on the right side of the check (next to the dollar sign), write "$1,000.00"
                    clearly. Include the comma between the 1 and the first 0, and include the decimal point and zeros
                    for cents.
                  </p>
                  <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                    <p className="font-medium">Correct format: $1,000.00</p>
                    <div className="mt-2 space-y-2">
                      <p className="text-sm text-gray-600">
                        <strong>Important:</strong> Write the amount as close to the dollar sign as possible to prevent
                        someone from adding digits before the 1.
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Always include:</strong> The comma between thousands and the decimal point with zeros
                        for cents.
                      </p>
                    </div>
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
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Write "One thousand and 00/100" on the amount line
                  </h3>
                  <p className="text-gray-600 mb-3">
                    On the line below the recipient's name, write out the dollar amount in words: "One thousand and
                    00/100". Start writing at the far left of the line.
                  </p>
                  <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                    <p className="font-medium">Correct format: One thousand and 00/100 Dollars</p>
                    <div className="mt-2 space-y-2">
                      <p className="text-sm text-gray-600">
                        <strong>Note:</strong> The word "and" is used only to separate dollars from cents. Since this is
                        a whole dollar amount, the cents are "00/100".
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Capitalize:</strong> Capitalize the first word ("One") but not the rest unless they're
                        proper nouns.
                      </p>
                    </div>
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
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Draw a line after "One thousand and 00/100 Dollars"
                  </h3>
                  <p className="text-gray-600 mb-3">
                    After writing "One thousand and 00/100 Dollars", draw a straight line through any remaining space on
                    the line to prevent someone from adding words that could change the amount.
                  </p>
                  <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                    <p className="font-medium">Example:</p>
                    <p className="font-mono text-gray-700">
                      One thousand and 00/100 Dollars <span className="text-gray-400">~~~~~~~~</span>
                    </p>
                  </div>
                  <div className="mt-3 text-sm text-gray-500">
                    <strong>Security tip:</strong> This line prevents fraud by ensuring no one can add text after the
                    amount you've written.
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
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Add a memo (optional)</h3>
                  <p className="text-gray-600 mb-3">
                    In the memo line on the bottom left of the check, you can note what the payment is for. This is
                    optional but helpful for record-keeping.
                  </p>
                  <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                    <p className="font-medium">Examples for a $1,000 check:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>April Rent</li>
                      <li>Tuition Payment</li>
                      <li>Security Deposit</li>
                      <li>Invoice #12345</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                  <span className="text-blue-600 font-bold">7</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Sign the check</h3>
                  <p className="text-gray-600 mb-3">
                    Sign your name on the line in the bottom right corner of the check. Use the same signature that's on
                    file with your bank.
                  </p>
                  <div className="mt-3 text-sm text-gray-500">
                    <strong>Important:</strong> A check is not valid without your signature. For a $1,000 check, which
                    is a significant amount, your bank may verify your signature more carefully.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="my-8 bg-blue-50 rounded-lg p-6 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Writing Large Amounts Correctly Matters</h2>
          <p className="text-gray-700 mb-4">
            When writing a check for a large amount like $1,000, proper formatting is crucial. The difference between writing
            a check correctly and incorrectly might seem minor, but it can lead to confusion, payment errors, or even make
            your check vulnerable to fraud.
          </p>
          <p className="text-gray-700">
            Banks process millions of checks daily, and clear formatting helps ensure your payment is processed exactly as
            intended. This guide will show you exactly how to write one thousand dollars in both the numeric amount box and
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
                Always place the comma correctly in the numeric amount box. For example, write "$1,000.00" not "$1000.00".
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Omitting the Word "and"</h3>
              <p className="text-gray-600">
                Always include the word "and" before writing the cents portion. For example, write "One thousand and 00/100" not "One thousand 00/100".
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Incorrect Fraction Format</h3>
              <p className="text-gray-600">
                Write cents as a fraction with 100 as the denominator (e.g., 00/100). Don't write it as a decimal (e.g., 0.00) or as words (e.g., "zero cents").
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
