export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full py-6 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-gray-500">
          <p className="mb-2">© {currentYear} HowWriteaCheck.com. All rights reserved.</p>
          <p>
            This site is for educational purposes only. The information provided is accurate to the best of our
            knowledge, but we recommend consulting with your bank for specific check-writing requirements.
          </p>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Contact Us
            </a>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <a href="https://www.producthunt.com/posts/how-write-a-check?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-how&#0045;write&#0045;a&#0045;check" target="_blank" rel="noopener noreferrer">
            <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=958641&theme=dark&t=1745855048061" alt="How Write a Check - The easiest way to learn how to properly write a check | Product Hunt" style={{ width: 250, height: 54 }} width="250" height="54" />
          </a>
        </div>
      </div>
    </footer>
  )
}
