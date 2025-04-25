"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Footer from "@/components/footer"

export default function HowToWriteACheckWithThousandsAndCentsClient() {
  return (
    <main className="min-h-screen bg-white">
      <section className="w-full py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            How to Write a Check With Thousands and Cents
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Learn how to properly write checks for large amounts with cents included, ensuring your payments are secure
            and processed correctly.
          </p>
        </div>

        {/* Introduction */}
        <div className="my-8 bg-blue-50 rounded-lg p-6 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Writing Large Check Amounts Correctly</h2>
          <p className="text-gray-700 mb-4">
            Writing checks for amounts over $1,000 that also include cents requires careful formatting to prevent errors
            or potential fraud. This situation is common when paying rent, settling invoices, making tuition payments,
            or purchasing big-ticket items.
          </p>
          <p className="text-gray-700">
            Banks process these larger checks with extra scrutiny, so proper formatting is essential to ensure your
            payment is processed exactly as intended. This guide will show you exactly how to write both thousands and
            cents correctly on your check.
          </p>
        </div>

        {/* Step-by-Step Guide */}
        <div className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            How to Write a Check With Thousands and Cents: Step-by-Step
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

        {/* Visual Example */}
        <div className="my-12 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Example: Check with Thousands and Cents Properly Written
          </h2>
          <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md bg-white">
            <Image
              src="/check-with-thousands-example.png"
              alt="Example of a check with thousands and cents properly written"
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
              <li>The amount box clearly shows "$1,234.56" with a comma and decimal point</li>
              <li>The written amount includes "One thousand two hundred thirty-four" for the dollars portion</li>
              <li>The word "and" is used only before the cents portion ("and 56/100")</li>
              <li>A line is drawn after "Dollars" to fill the remaining space</li>
            </ul>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="my-12 bg-red-50 p-6 rounded-lg border border-red-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes to Avoid</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 text-red-500 mr-3">❌</div>
              <div>
                <h3 className="font-medium text-gray-900">Using "and" in the wrong place</h3>
                <p className="text-gray-600">
                  <strong>Incorrect:</strong> "One thousand <span className="text-red-500">and</span> two hundred
                  thirty-four and 56/100 Dollars"
                </p>
                <p className="text-gray-600">
                  <strong>Correct:</strong> "One thousand two hundred thirty-four{" "}
                  <span className="text-green-500">and 56/100</span> Dollars"
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 text-red-500 mr-3">❌</div>
              <div>
                <h3 className="font-medium text-gray-900">Forgetting the comma in the number box</h3>
                <p className="text-gray-600">
                  <strong>Incorrect:</strong> "<span className="text-red-500">$1234.56</span>"
                </p>
                <p className="text-gray-600">
                  <strong>Correct:</strong> "<span className="text-green-500">$1,234.56</span>"
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 text-red-500 mr-3">❌</div>
              <div>
                <h3 className="font-medium text-gray-900">Using numerals instead of words</h3>
                <p className="text-gray-600">
                  <strong>Incorrect:</strong> "<span className="text-red-500">1,234</span> and 56/100 Dollars"
                </p>
                <p className="text-gray-600">
                  <strong>Correct:</strong> "
                  <span className="text-green-500">One thousand two hundred thirty-four</span> and 56/100 Dollars"
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 text-red-500 mr-3">❌</div>
              <div>
                <h3 className="font-medium text-gray-900">Incorrect hyphenation</h3>
                <p className="text-gray-600">
                  <strong>Incorrect:</strong> "One thousand two hundred{" "}
                  <span className="text-red-500">thirty four</span> and 56/100 Dollars"
                </p>
                <p className="text-gray-600">
                  <strong>Correct:</strong> "One thousand two hundred{" "}
                  <span className="text-green-500">thirty-four</span> and 56/100 Dollars"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Reference Table */}
        <div className="my-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Quick Reference: Writing Different Thousand Dollar Amounts
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-4 text-left text-gray-700 font-medium border-b">Amount</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-medium border-b">In the Box</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-medium border-b">Written Out</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-gray-700">One thousand dollars</td>
                  <td className="py-3 px-4 text-gray-700">$1,000.00</td>
                  <td className="py-3 px-4 text-gray-700">One thousand and 00/100 Dollars</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">Five thousand with cents</td>
                  <td className="py-3 px-4 text-gray-700">$5,000.25</td>
                  <td className="py-3 px-4 text-gray-700">Five thousand and 25/100 Dollars</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">Ten thousand with cents</td>
                  <td className="py-3 px-4 text-gray-700">$10,500.75</td>
                  <td className="py-3 px-4 text-gray-700">Ten thousand five hundred and 75/100 Dollars</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">Twenty-five thousand</td>
                  <td className="py-3 px-4 text-gray-700">$25,000.00</td>
                  <td className="py-3 px-4 text-gray-700">Twenty-five thousand and 00/100 Dollars</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">One hundred thousand</td>
                  <td className="py-3 px-4 text-gray-700">$100,000.00</td>
                  <td className="py-3 px-4 text-gray-700">One hundred thousand and 00/100 Dollars</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="my-12 bg-blue-50 rounded-lg shadow-md border border-blue-200 p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Need to write checks for large amounts frequently?
          </h3>
          <p className="text-gray-600 mb-4">
            Download our printable check template to practice writing checks with thousands and cents.
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
                  before printing. Perfect for practicing writing checks with large amounts.
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
                  Our comprehensive package includes everything you need for check writing, including special templates
                  for writing checks with large amounts and cents.
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
