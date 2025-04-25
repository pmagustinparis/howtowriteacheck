import Image from "next/image"

export default function StepByStepGuide() {
  return (
    <div className="my-12 md:my-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Step-by-Step Guide to Writing a Check</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Date the check</h3>
                <p className="text-gray-600">
                  Write the current date in the top right corner. Format it as MM/DD/YYYY (e.g., 04/25/2025). You can
                  also write out the date (e.g., April 25, 2025).
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
                <h3 className="text-lg font-medium text-gray-900 mb-2">Write the recipient's name</h3>
                <p className="text-gray-600">
                  On the "Pay to the Order of" line, write the full name of the person or company you're paying. Make
                  sure to use the correct spelling and include any business designations (Inc., LLC, etc.).
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Write the payment amount in numbers</h3>
                <p className="text-gray-600">
                  In the small box on the right, write the amount using numbers. Start writing close to the dollar sign
                  to prevent alterations. Include cents even if it's a whole dollar amount (e.g., $100.00).
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                <span className="text-blue-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Write the payment amount in words</h3>
                <p className="text-gray-600">
                  On the line below the recipient's name, write out the dollar amount in words. For cents, write them as
                  a fraction over 100 (e.g., "One hundred and 00/100"). Draw a line through any unused space to prevent
                  alterations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                <span className="text-blue-600 font-bold">5</span>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Add a memo (optional)</h3>
                <p className="text-gray-600">
                  In the memo line on the bottom left, note the purpose of the check. This could be an account number,
                  invoice number, or simply what the payment is for.
                </p>
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
                <p className="text-gray-600">
                  Sign your name on the line in the bottom right corner. Use the same signature that's on file with your
                  bank. A check is not valid without your signature.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                <span className="text-blue-600 font-bold">7</span>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Record the check in your register</h3>
                <p className="text-gray-600">
                  Keep track of the check in your checkbook register or banking app. Note the check number, date,
                  recipient, and amount to help balance your account later.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Important Tips</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Always use blue or black ink when writing checks</li>
              <li>Write clearly and legibly to avoid confusion</li>
              <li>Never sign a blank check</li>
              <li>Keep your checkbook in a secure location</li>
              <li>Regularly monitor your account for cleared checks</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="text-xl font-medium text-gray-900 mb-4">Example of a Properly Filled Check</h3>
        <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md">
          <Image
            src="/check-anatomy.png"
            alt="The Anatomy of a Personal Check - detailed diagram showing all parts of a check"
            fill
            className="object-contain"
            priority
          />
        </div>
        <p className="mt-4 text-sm text-gray-500 italic">
          This diagram shows the anatomy of a properly completed check with all key elements labeled. Notice how each
          field is filled out clearly and correctly.
        </p>
      </div>
    </div>
  )
}
