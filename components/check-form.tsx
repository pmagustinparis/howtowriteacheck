"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

// Helper function to convert number to words
const numberToWords = (num: number): string => {
  const ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ]
  const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

  if (num === 0) return "zero"

  const convertLessThanOneThousand = (num: number): string => {
    if (num < 20) {
      return ones[num]
    }

    const ten = Math.floor(num / 10) % 10
    const one = num % 10

    return ten > 0 ? tens[ten] + (one > 0 ? "-" + ones[one] : "") : ones[one]
  }

  let result = ""

  // Handle dollars
  const dollars = Math.floor(num)

  if (dollars === 0) {
    result = "zero"
  } else if (dollars < 20) {
    result = ones[dollars]
  } else if (dollars < 100) {
    const ten = Math.floor(dollars / 10)
    const one = dollars % 10
    result = tens[ten] + (one > 0 ? "-" + ones[one] : "")
  } else if (dollars < 1000) {
    const hundred = Math.floor(dollars / 100)
    const remainder = dollars % 100
    result = ones[hundred] + " hundred" + (remainder > 0 ? " and " + convertLessThanOneThousand(remainder) : "")
  } else {
    const thousands = Math.floor(dollars / 1000)
    const remainder = dollars % 1000
    result =
      convertLessThanOneThousand(thousands) +
      " thousand" +
      (remainder > 0 ? " " + convertLessThanOneThousand(remainder) : "")
  }

  // Capitalize first letter
  return result.charAt(0).toUpperCase() + result.slice(1)
}

export default function CheckForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    amount: "",
    date: "",
    memo: "",
  })

  const [amountInWords, setAmountInWords] = useState("")
  const [cents, setCents] = useState("00")

  useEffect(() => {
    // Format the current date as MM/DD/YYYY
    const today = new Date()
    const month = String(today.getMonth() + 1).padStart(2, "0")
    const day = String(today.getDate()).padStart(2, "0")
    const year = today.getFullYear()

    setFormData((prev) => ({
      ...prev,
      date: `${month}/${day}/${year}`,
    }))
  }, [])

  useEffect(() => {
    if (formData.amount) {
      const amount = Number.parseFloat(formData.amount)
      if (!isNaN(amount)) {
        const dollars = Math.floor(amount)
        const centsValue = Math.round((amount - dollars) * 100)
        setCents(centsValue.toString().padStart(2, "0"))
        setAmountInWords(numberToWords(dollars))
      }
    } else {
      setAmountInWords("")
      setCents("00")
    }
  }, [formData.amount])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="my-12 md:my-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Interactive Check Writer</h2>
      <p className="text-lg text-gray-600 mb-8">
        Fill out the form below to see how your check should look. This interactive tool will help you practice writing
        checks correctly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <h3 className="text-xl font-semibold mb-4">Enter Check Details</h3>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Pay to the Order of</Label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="Recipient's Name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount">Amount ($)</Label>
              <Input
                id="amount"
                name="amount"
                type="number"
                step="0.01"
                min="0"
                placeholder="0.00"
                value={formData.amount}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" name="date" placeholder="MM/DD/YYYY" value={formData.date} onChange={handleChange} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="memo">Memo (Optional)</Label>
              <Input
                id="memo"
                name="memo"
                placeholder="What's this payment for?"
                value={formData.memo}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Check Preview */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <h3 className="text-xl font-semibold mb-4">Check Preview</h3>

          <div className="relative w-full h-64 md:h-72 border-2 border-gray-300 rounded-lg bg-gray-50 p-4 overflow-hidden">
            {/* Bank Info */}
            <div className="absolute top-3 left-3 text-xs text-gray-600">
              <div className="font-bold">SAMPLE BANK</div>
              <div>123 Banking St, Anytown, USA</div>
            </div>

            {/* Date */}
            <div className="absolute top-3 right-3 text-sm">
              <div className="text-xs text-gray-500">DATE</div>
              <div className="font-medium">{formData.date || "MM/DD/YYYY"}</div>
            </div>

            {/* Pay To */}
            <div className="absolute top-12 left-3 right-3">
              <div className="text-xs text-gray-500">PAY TO THE ORDER OF</div>
              <div className="border-b border-gray-400 font-medium h-6 overflow-hidden">{formData.fullName || ""}</div>
            </div>

            {/* Amount Box */}
            <div className="absolute top-12 right-3 border border-gray-400 w-20 h-6 flex items-center justify-end px-1">
              <span className="font-medium">
                ${formData.amount ? Number.parseFloat(formData.amount).toFixed(2) : "0.00"}
              </span>
            </div>

            {/* Amount in Words */}
            <div className="absolute top-24 left-3 right-3">
              <div className="border-b border-gray-400 font-medium h-6 overflow-hidden text-sm">
                {amountInWords ? `${amountInWords} and ${cents}/100` : ""} DOLLARS
              </div>
            </div>

            {/* Memo */}
            <div className="absolute bottom-12 left-3 w-1/3">
              <div className="text-xs text-gray-500">MEMO</div>
              <div className="border-b border-gray-400 h-5 overflow-hidden text-sm">{formData.memo || ""}</div>
            </div>

            {/* Signature */}
            <div className="absolute bottom-12 right-3 w-1/3">
              <div className="text-xs text-gray-500 text-right">SIGNATURE</div>
              <div className="border-b border-gray-400 h-5"></div>
            </div>

            {/* Routing and Account Numbers */}
            <div className="absolute bottom-3 left-3 right-3 text-center">
              <div className="font-mono text-xs">⑆123456789⑆ ⑈987654321⑈ 0001</div>
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-500 italic">
            This is a preview of how your check should look when properly filled out.
          </p>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 rounded-lg shadow-md border border-blue-200 p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Need a simple printable check?</h3>
        <p className="text-gray-600 mb-4">Get a ready-to-use printable or editable check template for just $1.</p>
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium"
          onClick={() => window.open("https://builtbyagus.gumroad.com/l/gagmwe", "_blank")}
        >
          Download Printable Check – $1
        </Button>
      </div>

      <div className="my-8" id="adsense-placeholder" aria-hidden="true">
        {/* AdSense will be inserted here in the future */}
      </div>
    </div>
  )
}
