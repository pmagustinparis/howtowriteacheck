import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center space-x-2 select-none group" aria-label="Go to homepage">
      <span className="text-2xl font-extrabold tracking-tight text-blue-700 group-hover:text-blue-900 transition-colors">HowTo</span>
      <span className="text-2xl font-extrabold tracking-tight text-gray-900 group-hover:text-blue-700 transition-colors">WriteACheck</span>
    </Link>
  )
} 