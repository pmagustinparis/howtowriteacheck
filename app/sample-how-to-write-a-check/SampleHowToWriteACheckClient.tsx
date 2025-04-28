"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Footer from "@/components/footer"
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
    href: "/how-to-write-a-void-check",
    title: "How to Void a Check",
    desc: "When and how to void a check for deposits or payments."
  },
]

export default function SampleHowToWriteACheckClient() {
  return (
    <main className="min-h-screen bg-white">
      <header className="sticky top-0 z-30 bg-white border-b border-gray-100 py-4 px-4 sm:px-8 flex items-center">
        <Logo />
      </header>
      <section className="w-full py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Sample: How to Write a Check (Filled-Out Example)
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            See a complete, filled-out check example with detailed explanations of each part to help you write your own
            checks confidently.
          </p>
        </div>

        {/* Detailed Breakdown of Each Part */}
        <div className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Detailed Breakdown of Each Part</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">1. Date</h3>
              <p className="text-gray-600">
                The date is written in the top right corner. You can use either the numerical format (MM/DD/YYYY) or
                write it out (Month Day, Year). Always use the current date unless you're post-dating the check.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">2. Payee</h3>
              <p className="text-gray-600">
                The "Pay to the Order of" line is where you write the name of the person or company you're paying. Make
                sure to use their full, correct name as it appears on their bank account.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">3. Amount in Numbers</h3>
              <p className="text-gray-600">
                The amount box is where you write the numerical amount. Include both dollars and cents, and make sure to
                write clearly. For example, "$123.45" not "$123.45 dollars".
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">4. Amount in Words</h3>
              <p className="text-gray-600">
                Write out the amount in words on the line below the payee. Start with a capital letter and end with
                "Dollars". For cents, write them as a fraction (e.g., "and 45/100"). Draw a line to fill any remaining
                space.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">5. Memo</h3>
              <p className="text-gray-600">
                The memo line is optional but helpful for record-keeping. Write what the check is for, like "Rent for
                April" or "Birthday gift".
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">6. Signature</h3>
              <p className="text-gray-600">
                Sign your name exactly as it appears on your bank account. This is crucial - without a proper signature,
                the check is invalid.
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="my-8 bg-blue-50 rounded-lg p-6 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Learning from a Real Example</h2>
          <p className="text-gray-700 mb-4">
            Many people find it easier to learn how to write a check by seeing a clear, properly filled-out example.
            Visual learning helps you understand exactly where each piece of information goes and how it should be
            formatted.
          </p>
          <p className="text-gray-700">
            Below, we've provided a complete sample check with every field filled out correctly. We'll break down each
            component step-by-step so you can understand the purpose of each field and how to fill it out properly on
            your own checks.
          </p>
        </div>

        {/* Additional Information About the Check */}
        <div className="my-12 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Other Parts of the Check</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Check Number</h3>
              <p className="text-gray-600">
                In our sample, the check number (#1001) appears in the top right corner and is repeated at the bottom of
                the check. This helps with record-keeping and tracking which checks have been used.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Routing Number</h3>
              <p className="text-gray-600">
                The nine-digit number on the bottom left of the check (123456789 in our sample) is the routing number,
                which identifies your bank in the U.S. banking system.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Account Number</h3>
              <p className="text-gray-600">
                The series of numbers after the routing number (987654321 in our sample) is your account number, which
                identifies your specific account at the bank.
              </p>
            </div>
          </div>
        </div>

        {/* Step-by-Step Recap */}
        <div className="my-12 bg-blue-50 p-6 rounded-lg border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Recap: Steps to Write a Check</h2>
          <ol className="list-decimal pl-5 space-y-2 text-gray-700">
            <li>
              <strong>Write the date</strong> in the top right corner (e.g., "April 15, 2025" or "04/15/2025").
            </li>
            <li>
              <strong>Write the recipient's name</strong> on the "Pay to the Order of" line.
            </li>
            <li>
              <strong>Write the amount in numbers</strong> in the small box on the right (e.g., "$123.45").
            </li>
            <li>
              <strong>Write the amount in words</strong> on the line below the recipient's name (e.g., "One hundred
              twenty-three and 45/100 Dollars").
            </li>
            <li>
              <strong>Add a memo</strong> (optional) in the bottom left corner to note what the payment is for.
            </li>
            <li>
              <strong>Sign the check</strong> in the bottom right corner with your signature.
            </li>
          </ol>
          <p className="mt-4 text-gray-700">
            Following these steps and referring to our sample check will help you write checks correctly and
            confidently.
          </p>
        </div>

        {/* Common Check Writing Mistakes */}
        <div className="my-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Check Writing Mistakes to Avoid</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Forgetting to Sign the Check</h3>
              <p className="text-gray-600">
                A check without a signature is invalid. Always remember to sign your check before giving it to the
                recipient.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Mismatched Amounts</h3>
              <p className="text-gray-600">
                Make sure the numerical amount ($123.45) matches the written amount (One hundred twenty-three and
                45/100). If they don't match, banks typically go by the written amount.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Incorrect Date</h3>
              <p className="text-gray-600">
                Using the wrong date can cause problems with processing. Double-check the date, especially at the
                beginning of a new month or year.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Not Drawing a Line After the Amount</h3>
              <p className="text-gray-600">
                Failing to draw a line after the written amount leaves space that could be used to alter the check.
                Always draw a line through any unused space.
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
        <div className="my-12 md:my-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Primary CTA */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Printable Sample Check Template</h3>
                <p className="text-gray-600">
                  Get our professionally designed check template that you can print and practice with. Includes sample
                  fields and guidelines to help you learn how to write checks correctly.
                </p>

                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>High-quality printable PDF</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Editable fields for practice</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Instant download - no login required</span>
                  </li>
                </ul>

                <div className="pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-gray-900">$1.00</span>
                    <span className="text-sm text-gray-500 line-through">$2.99</span>
                  </div>

                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium text-lg"
                    onClick={() => window.open("https://gumroad.com/l/check-template", "_blank")}
                  >
                    Download Sample Check Template
                  </Button>
                </div>
              </div>
            </div>

            {/* Secondary CTA */}
            <div className="bg-gray-50 rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Complete Check Writing Kit</h3>
                <p className="text-gray-600">
                  Our comprehensive package includes everything you need for check writing, including sample checks,
                  practice templates, and a detailed visual guide.
                </p>

                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>10+ editable check templates</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Sample checks for different amounts</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Visual guide with examples</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Check register for tracking</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Lifetime updates</span>
                  </li>
                </ul>

                <div className="pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-gray-900">$6.99</span>
                    <span className="text-sm text-gray-500 line-through">$14.99</span>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 py-2 px-4 rounded-md font-medium text-lg"
                    onClick={() => window.open("https://gumroad.com/l/check-bundle", "_blank")}
                  >
                    Get the Full Check Writing Kit
                  </Button>
                </div>
              </div>
            </div>
          </div>
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
        {/* AdSense Placeholder */}
        <div className="my-8" id="adsense-placeholder" aria-hidden="true">
          {/* AdSense will be inserted here in the future */}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
