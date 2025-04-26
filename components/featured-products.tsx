import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function FeaturedProducts() {
  return (
    <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Check Writing Templates & Resources</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get our professionally designed templates and guides to make check writing easy and secure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Basic Template */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Basic Check Template</h3>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  $1.00
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                A simple, printable check template perfect for practicing or occasional use. Includes all necessary fields and formatting guidelines.
              </p>
              <ul className="space-y-3 mb-8">
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
                  <span>Instant download</span>
                </li>
              </ul>
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                onClick={() => window.open("https://builtbyagus.gumroad.com/l/gagmwe", "_blank")}
              >
                Get Basic Template
              </Button>
            </div>
          </div>

          {/* Complete Kit */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Complete Check Writing Kit</h3>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  $6.99
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Everything you need for professional check writing. Includes templates, guides, and security tips.
              </p>
              <ul className="space-y-3 mb-8">
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
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                onClick={() => window.open("https://gumroad.com/l/check-bundle", "_blank")}
              >
                Get Complete Kit
              </Button>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">"The templates made check writing so much easier. Worth every penny!"</p>
            <p className="text-sm text-gray-500">- Sarah M.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">"The complete kit saved me hours of research. Very comprehensive!"</p>
            <p className="text-sm text-gray-500">- John D.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">"Perfect for my small business. The security tips were especially helpful."</p>
            <p className="text-sm text-gray-500">- Lisa T.</p>
          </div>
        </div>
      </div>
    </section>
  )
} 