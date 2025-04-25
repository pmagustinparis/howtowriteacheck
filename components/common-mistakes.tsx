import { AlertTriangle } from "lucide-react"

export default function CommonMistakes() {
  return (
    <div className="my-12 md:my-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Common Mistakes When Writing a Check</h2>

      <p className="text-lg text-gray-600 mb-8">
        Writing a check may seem simple, but many people make small mistakes that can lead to problems or even cause the
        check to be rejected. Here are the most common issues to avoid:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 text-red-500 mr-3">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Leaving blank spaces</h3>
              <p className="text-gray-600">
                Always draw a line after the written amount to prevent unauthorized edits. Blank spaces can be used to
                alter the check amount or add additional text.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 text-red-500 mr-3">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Incorrect cents format</h3>
              <p className="text-gray-600">
                Use the "xx/100" format for cents (e.g., 56/100), not decimals or full words. Writing "and fifty-six
                cents" instead of "and 56/100" can cause confusion.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 text-red-500 mr-3">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Forgetting to sign the check</h3>
              <p className="text-gray-600">
                Unsigned checks are invalid. Don't forget to sign it in the bottom-right corner. Banks will reject
                checks without a valid signature that matches their records.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 text-red-500 mr-3">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Using pencil or erasable ink</h3>
              <p className="text-gray-600">
                Always use blue or black permanent ink to prevent alterations. Pencil or erasable ink makes it easy for
                someone to change the check details after you've written it.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:col-span-2">
          <div className="flex items-start">
            <div className="flex-shrink-0 text-red-500 mr-3">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Post-dating the check</h3>
              <p className="text-gray-600">
                Writing a future date can result in the check being declined or delayed by the bank. Many people don't
                realize that banks can choose to process a check regardless of the date written on it. If you need to
                delay payment, discuss alternatives with the recipient.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
