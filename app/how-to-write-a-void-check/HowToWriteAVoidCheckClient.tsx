"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import CTASection from "@/components/cta-section"
import Link from "next/link"
import Logo from "@/components/logo"

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
    href: "/sample-how-to-write-a-check",
    title: "Sample: How to Write a Check",
    desc: "See a real filled-out check example and learn with a practical case."
  },
]

export default function HowToWriteAVoidCheckClient() {
  return (
    <main className="min-h-screen bg-white">
      <header className="sticky top-0 z-30 bg-white border-b border-gray-100 py-4 px-4 sm:px-8 flex items-center">
        <Logo />
      </header>
      <section className="w-full py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            How to Write a Void Check (Step-by-Step Guide)
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Learn what a void check is, when you need one, and how to properly void a check for direct deposit or
            automatic payments.
          </p>
        </div>

        {/* Step-by-Step Guide */}
        <div className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How to Write a Void Check: Step-by-Step</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Start with a blank check</h3>
                  <p className="text-gray-600 mb-3">
                    Take a blank check from your checkbook. Make sure it's a check you haven't already filled out or
                    signed.
                  </p>
                  <div className="mt-3 text-sm text-gray-500">
                    <strong>Tip:</strong> Use a check from the middle of your checkbook rather than the first one, so
                    you can keep track of which checks you've used.
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
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Write "VOID" in large letters across the front
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Using a black or blue pen, write "VOID" in large capital letters across the face of the check. Make
                    the letters large enough to cover most of the check but still allow the banking information at the
                    bottom to be readable.
                  </p>
                  <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                    <p className="font-medium">Best practices:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Use a permanent pen (not pencil)</li>
                      <li>Write "VOID" diagonally from corner to corner</li>
                      <li>Make the letters large and clear</li>
                      <li>Press firmly so the word cannot be erased</li>
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
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Optionally void individual fields for extra security
                  </h3>
                  <p className="text-gray-600 mb-3">
                    For additional security, you can also write "VOID" in smaller letters in each field of the check:
                  </p>
                  <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                    <p className="font-medium">Fields to void:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>The date line</li>
                      <li>The "Pay to the Order of" line</li>
                      <li>The amount box</li>
                      <li>The amount line</li>
                      <li>The memo line</li>
                      <li>The signature line</li>
                    </ul>
                  </div>
                  <div className="mt-3 text-sm text-gray-500">
                    <strong>Note:</strong> This step is optional but provides extra protection against potential fraud.
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
                    Do NOT sign the check or fill in other fields
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Unlike a regular check, you should not sign a void check or fill in any other information. The only
                    writing on the check should be the word "VOID" and possibly your account information if you're
                    writing it down for reference.
                  </p>
                  <div className="mt-3 text-sm text-gray-500">
                    <strong>Important:</strong> Make sure the bank routing number and account number at the bottom of
                    the check remain visible and legible.
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
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Make a copy for your records</h3>
                  <p className="text-gray-600 mb-3">
                    Before providing the void check to anyone, make a photocopy or take a clear photo of it for your
                    records. This helps you track where you've shared your banking information.
                  </p>
                  <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                    <p className="font-medium">Record-keeping tips:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Note the date you voided the check</li>
                      <li>Record who you gave the void check to</li>
                      <li>Note the purpose (direct deposit, automatic payment, etc.)</li>
                      <li>Store this information securely</li>
                    </ul>
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
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Deliver the void check securely to the recipient
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Hand-deliver the void check when possible. If you need to mail it or send it electronically, use
                    secure methods to protect your banking information.
                  </p>
                  <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                    <p className="font-medium">Secure delivery options:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Hand-deliver to a trusted representative</li>
                      <li>Use a secure encrypted email service</li>
                      <li>Use your employer's secure document upload system</li>
                      <li>Send via certified mail if postal delivery is necessary</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="my-8 bg-blue-50 rounded-lg p-6 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a Void Check?</h2>
          <p className="text-gray-700 mb-4">
            A void check is a check that has been marked with the word "VOID" across its face, making it impossible to
            use for payment. Unlike regular checks, void checks are not used to transfer money but rather to share your
            banking information safely.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Common uses for void checks include:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Setting up direct deposit with your employer</li>
            <li>Establishing automatic bill payments</li>
            <li>Linking your bank account to payment apps or services</li>
            <li>Setting up automatic transfers between accounts</li>
          </ul>
          <p className="text-gray-700 mt-4">
            The void check provides the recipient with your account number, routing number, and other banking details
            without the risk of someone using the check for payment.
          </p>
        </div>

        {/* Finding Your Account Information */}
        <div className="my-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Finding Your Account Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Physical Check Information</h3>
              <p className="text-gray-600">
                If you have a physical check, you can find your routing number and account number at the bottom of the
                check. The routing number is the first set of numbers, and your account number is the second set.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Online Banking Information</h3>
              <p className="text-gray-600">
                Many online banking platforms display your account and routing numbers in your account details section.
                You can take a screenshot or print this information, though some organizations may not accept this
                format.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section - Base Product */}
        <div className="my-12 bg-blue-50 rounded-lg shadow-md border border-blue-200 p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Need a simple printable check?</h3>
          <p className="text-gray-600 mb-4">Get a ready-to-use printable or editable check template for just $1.</p>
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium"
            onClick={() => window.open("https://builtbyagus.gumroad.com/l/gagmwe", "_blank")}
          >
            Download Printable Check – $1
          </Button>
        </div>

        {/* Main CTA Section - Both Products */}
        <CTASection />

        {/* AdSense Placeholder */}
        <div className="my-8" id="adsense-placeholder" aria-hidden="true">
          {/* AdSense will be inserted here in the future */}
        </div>

        {/* FAQ Section */}
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
