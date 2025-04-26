"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import CTASection from "@/components/cta-section"

export default function HowToWriteACheckWithCentsClient() {
  return (
    <main className="min-h-screen bg-white">
      <section className="w-full py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            How to Write a Check With Cents (Step-by-Step Guide)
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Learn the proper way to include cents when writing a check to ensure your payment is processed correctly and
            securely.
          </p>
        </div>

        {/* Introduction */}
        <div className="my-8 bg-blue-50 rounded-lg p-6 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Writing Cents Correctly Matters</h2>
          <p className="text-gray-700 mb-4">
            When writing a check, properly formatting the cents portion is crucial. The difference between writing a
            check with and without cents might seem minor, but incorrect formatting can lead to confusion, payment
            errors, or even make your check vulnerable to fraud.
          </p>
          <p className="text-gray-700">
            Banks process millions of checks daily, and clear formatting helps ensure your payment is processed exactly
            as intended. This guide will show you exactly how to write cents in both the numeric amount box and the
            written amount line.
          </p>
        </div>

        {/* Step-by-Step Guide */}
        <div className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            How to Write Cents on a Check: Step-by-Step
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Write the dollar amount in the box</h3>
                  <p className="text-gray-600 mb-3">
                    In the amount box (usually on the right side of the "Pay to the order of" line), write the dollar
                    amount followed by a decimal point and the cents amount.
                  </p>
                  <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                    <p className="font-medium">Examples:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>$45.67 (for forty-five dollars and sixty-seven cents)</li>
                      <li>$100.50 (for one hundred dollars and fifty cents)</li>
                      <li>$23.05 (for twenty-three dollars and five cents)</li>
                      <li>$1,234.56 (for one thousand two hundred thirty-four dollars and fifty-six cents)</li>
                    </ul>
                  </div>
                  <div className="mt-3 text-sm text-gray-500">
                    <strong>Important:</strong> Always include cents even if the amount is a whole dollar. For example,
                    write $100.00, not just $100.
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
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Write out the dollar amount in words</h3>
                  <p className="text-gray-600 mb-3">
                    On the line below "Pay to the order of," write out the dollar amount in words. Start at the far left
                    of the line.
                  </p>
                  <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                    <p className="font-medium">Examples:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Forty-five dollars (for $45)</li>
                      <li>One hundred dollars (for $100)</li>
                      <li>One thousand two hundred thirty-four dollars (for $1,234)</li>
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
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Add the cents as a fraction</h3>
                  <p className="text-gray-600 mb-3">
                    After writing the dollar amount in words, add the cents as a fraction over 100. Use the word "and"
                    before the fraction.
                  </p>
                  <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                    <p className="font-medium">Examples:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>
                        Forty-five <strong>and 67/100</strong> (for $45.67)
                      </li>
                      <li>
                        One hundred <strong>and 50/100</strong> (for $100.50)
                      </li>
                      <li>
                        Twenty-three <strong>and 05/100</strong> (for $23.05)
                      </li>
                      <li>
                        One thousand two hundred thirty-four <strong>and 56/100</strong> (for $1,234.56)
                      </li>
                    </ul>
                  </div>
                  <div className="mt-3 text-sm text-gray-500">
                    <strong>Note:</strong> Always write the cents as a fraction over 100, even if it's a whole dollar
                    amount (e.g., "One hundred and 00/100").
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
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Add the word "Dollars"</h3>
                  <p className="text-gray-600 mb-3">
                    After writing the dollar amount and cents fraction, add the word "Dollars" at the end.
                  </p>
                  <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                    <p className="font-medium">Complete examples:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>
                        Forty-five and 67/100 <strong>Dollars</strong>
                      </li>
                      <li>
                        One hundred and 50/100 <strong>Dollars</strong>
                      </li>
                      <li>
                        Twenty-three and 05/100 <strong>Dollars</strong>
                      </li>
                    </ul>
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
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Draw a line after the amount</h3>
                  <p className="text-gray-600 mb-3">
                    After writing the full amount, draw a line through any remaining space on the line to prevent
                    someone from altering the amount.
                  </p>
                  <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                    <p className="font-medium">Example:</p>
                    <p className="font-mono text-gray-700">
                      Forty-five and 67/100 Dollars <span className="text-gray-400">~~~~~~~~</span>
                    </p>
                  </div>
                  <div className="mt-3 text-sm text-gray-500">
                    <strong>Security tip:</strong> This prevents someone from adding words after your amount, which
                    could change the value of the check.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Example */}
        <div className="my-12 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Example: Check with Cents Properly Written</h2>
          <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md bg-white">
            <Image
              src="/check-with-cents-example.png"
              alt="Example of a check with cents properly written"
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
              <li>The amount box clearly shows "$123.45" with the decimal point and cents</li>
              <li>The written amount includes "and 45/100" after "One hundred twenty-three"</li>
              <li>A line is drawn after "Dollars" to fill the remaining space</li>
              <li>The cents are written as a fraction (45/100) rather than in words</li>
            </ul>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="my-12 bg-red-50 rounded-lg p-6 border border-red-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes to Avoid</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Incorrect Decimal Placement</h3>
              <p className="text-gray-600">
                Don't write the decimal point too small or too close to the numbers. Make it clearly visible to prevent
                confusion between dollars and cents.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Omitting the Word "and"</h3>
              <p className="text-gray-600">
                Always include the word "and" before writing the cents portion. For example, write "One hundred twenty-three
                and 45/100" not "One hundred twenty-three 45/100".
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Incorrect Fraction Format</h3>
              <p className="text-gray-600">
                Write cents as a fraction with 100 as the denominator (e.g., 45/100). Don't write it as a decimal (e.g.,
                0.45) or as words (e.g., "forty-five cents").
              </p>
            </div>
          </div>
        </div>

        {/* Quick Reference Table */}
        <div className="my-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Reference: Writing Different Cent Amounts</h2>
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
                  <td className="py-3 px-4 text-gray-700">Whole dollar amount</td>
                  <td className="py-3 px-4 text-gray-700">$100.00</td>
                  <td className="py-3 px-4 text-gray-700">One hundred and 00/100 Dollars</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">Single-digit cents</td>
                  <td className="py-3 px-4 text-gray-700">$25.05</td>
                  <td className="py-3 px-4 text-gray-700">Twenty-five and 05/100 Dollars</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">Double-digit cents</td>
                  <td className="py-3 px-4 text-gray-700">$75.50</td>
                  <td className="py-3 px-4 text-gray-700">Seventy-five and 50/100 Dollars</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">Cents only (less than $1)</td>
                  <td className="py-3 px-4 text-gray-700">$0.75</td>
                  <td className="py-3 px-4 text-gray-700">Zero and 75/100 Dollars</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">Large amount with cents</td>
                  <td className="py-3 px-4 text-gray-700">$1,234.56</td>
                  <td className="py-3 px-4 text-gray-700">One thousand two hundred thirty-four and 56/100 Dollars</td>
                </tr>
              </tbody>
            </table>
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
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
