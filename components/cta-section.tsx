"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function CTASection() {
  const [showSuccess, setShowSuccess] = useState(false)

  const handlePrimaryClick = () => {
    window.open("https://builtbyagus.gumroad.com/l/gagmwe", "_blank")
  }

  const handleSecondaryClick = () => {
    window.open("https://builtbyagus.gumroad.com/l/mngjv", "_blank")
  }

  return (
    <div className="my-12 md:my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Primary CTA - Base Product ($1) */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900">Need a simple printable check?</h3>
            <p className="text-gray-600">Get a ready-to-use printable or editable check template for just $1.</p>

            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>High-quality printable PDF</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Editable version for digital completion</span>
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
                onClick={handlePrimaryClick}
              >
                Download Printable Check – $1
              </Button>

              {showSuccess && (
                <div className="mt-2 text-center text-green-600 text-sm font-medium">Success! Download starting...</div>
              )}
            </div>
          </div>
        </div>

        {/* Secondary CTA - Premium Product ($6.99) */}
        <div className="bg-gray-50 rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900">Want the complete check writing kit?</h3>
            <p className="text-gray-600">Get the full toolkit with:</p>

            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Printable and editable checks</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Step-by-step visual guide</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>VOID check sample</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Check register spreadsheet</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>All for just $6.99!</span>
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
                onClick={handleSecondaryClick}
              >
                Get the Complete Kit – $6.99
              </Button>

              {showSuccess && (
                <div className="mt-2 text-center text-green-600 text-sm font-medium">Success! Download starting...</div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Why Learn to Write Checks?</h3>
        <p className="text-gray-600 mb-4">
          Even in today's digital world, knowing how to write a check properly remains an essential financial skill.
          Checks are still commonly used for rent payments, small business transactions, gifts, and situations where
          electronic payments aren't accepted.
        </p>
        <p className="text-gray-600">
          Our guide and templates ensure you'll always be prepared when you need to write a check, helping you avoid
          errors that could lead to payment issues or even fraud.
        </p>
      </div>
    </div>
  )
}
