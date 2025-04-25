"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Footer from "@/components/footer"

export default function HowToWriteACheckFor1000Client() {
  return (
    <main className="min-h-screen bg-white">
      <section className="w-full py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            How to Write a Check for 1000 Dollars
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Learn the proper way to write a check for exactly $1,000 with our step-by-step guide and visual example.
          </p>
        </div>

        {/* Introduction */}
        <div className="my-8 bg-blue-50 rounded-lg p-6 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Writing a Check for $1,000</h2>
          <p className="text-gray-700 mb-4">
            Writing a check for $1,000 is common for many important payments like rent, tuition, deposits, or large
            purchases. While it's a round number, it's still crucial to format it correctly to prevent confusion or
            potential fraud.
          </p>
          <p className="text-gray-700">
            Since $1,000 is a significant amount, taking extra care when writing the check ensures the payment is
            processed correctly and securely. This guide will walk you through each step of writing a check for exactly
            one thousand dollars.
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

        {/* Visual Example */}
        <div className="my-12 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Example: Check for $1,000 Properly Written</h2>
          <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md bg-white">
            <Image
              src="/check-for-1000-example.png"
              alt="Example of a properly written check for $1,000"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="mt-4 space-y-2 text-gray-600">
            <p>
              <strong>Key points to notice in this example:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>The amount box clearly shows "$1,000.00" with a comma and decimal point</li>
              <li>The written amount reads "One thousand and 00/100 Dollars"</li>
              <li>A line is drawn after "Dollars" to fill the remaining space</li>
              <li>The memo line indicates what the payment is for</li>
              <li>The check is signed in the bottom right corner</li>
            </ul>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="my-12 bg-red-50 p-6 rounded-lg border border-red-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Common Mistakes to Avoid When Writing a $1,000 Check
          </h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 text-red-500 mr-3">❌</div>
              <div>
                <h3 className="font-medium text-gray-900">Forgetting the comma in $1,000</h3>
                <p className="text-gray-600">
                  <strong>Incorrect:</strong> "<span className="text-red-500">$1000.00</span>"
                </p>
                <p className="text-gray-600">
                  <strong>Correct:</strong> "<span className="text-green-500">$1,000.00</span>"
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 text-red-500 mr-3">❌</div>
              <div>
                <h3 className="font-medium text-gray-900">Omitting "and" before the cents</h3>
                <p className="text-gray-600">
                  <strong>Incorrect:</strong> "One thousand <span className="text-red-500">00/100</span> Dollars"
                </p>
                <p className="text-gray-600">
                  <strong>Correct:</strong> "One thousand <span className="text-green-500">and 00/100</span> Dollars"
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 text-red-500 mr-3">❌</div>
              <div>
                <h3 className="font-medium text-gray-900">Writing "One thousand dollars" without cents</h3>
                <p className="text-gray-600">
                  <strong>Incorrect:</strong> "<span className="text-red-500">One thousand dollars</span>"
                </p>
                <p className="text-gray-600">
                  <strong>Correct:</strong> "<span className="text-green-500">One thousand and 00/100 Dollars</span>"
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 text-red-500 mr-3">❌</div>
              <div>
                <h3 className="font-medium text-gray-900">Using numerals instead of words</h3>
                <p className="text-gray-600">
                  <strong>Incorrect:</strong> "<span className="text-red-500">1,000 and 00/100</span> Dollars"
                </p>
                <p className="text-gray-600">
                  <strong>Correct:</strong> "<span className="text-green-500">One thousand and 00/100</span> Dollars"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* When You Might Need to Write a $1,000 Check */}
        <div className="my-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Reasons to Write a $1,000 Check</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Rent or Security Deposit</h3>
              <p className="text-gray-600">
                Many rental properties require a security deposit or first month's rent of around $1,000. Landlords
                often prefer checks for these transactions as they provide a paper trail.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Tuition or Education Expenses</h3>
              <p className="text-gray-600">
                Educational institutions may require payment by check for tuition installments, course fees, or
                dormitory deposits that amount to $1,000.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Contractor Payments</h3>
              <p className="text-gray-600">
                Home repairs, renovations, or service contracts often require deposit payments of $1,000, and many
                contractors prefer payment by check.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Large Purchases</h3>
              <p className="text-gray-600">
                When buying furniture, appliances, or electronics, you might pay a $1,000 deposit or installment by
                check, especially for custom orders.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="my-12 bg-blue-50 rounded-lg shadow-md border border-blue-200 p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Need to write checks frequently?</h3>
          <p className="text-gray-600 mb-4">
            Download our printable check template to practice writing checks for different amounts, including $1,000.
          </p>
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium"
            onClick={() => window.open("https://gumroad.com/l/check-template", "_blank")}
          >
            Download Printable Template – $1
          </Button>
        </div>

        {/* Main CTA Section */}
        <div className="my-12 md:my-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Primary CTA */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Printable + Editable Check Template</h3>
                <p className="text-gray-600">
                  Get our professionally designed check template that you can print and fill out, or edit digitally
                  before printing. Perfect for practicing writing checks for $1,000 and other amounts.
                </p>

                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>High-quality printable PDF</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Editable fields for digital completion</span>
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
                    Download Printable + Editable Version
                  </Button>
                </div>
              </div>
            </div>

            {/* Secondary CTA */}
            <div className="bg-gray-50 rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Complete Check Writing Kit</h3>
                <p className="text-gray-600">
                  Our comprehensive package includes everything you need for check writing, including templates for
                  common amounts like $1,000, plus guides and examples.
                </p>

                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>10+ editable check templates</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Digital check register spreadsheet</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Visual guide with examples</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Check security tips PDF</span>
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
                    Get the Full Editable Pack + Visual Guide
                  </Button>
                </div>
              </div>
            </div>
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
