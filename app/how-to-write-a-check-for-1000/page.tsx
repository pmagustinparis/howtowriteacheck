import type { Metadata } from "next"
import HowToWriteACheckFor1000Client from "./HowToWriteACheckFor1000Client"

export const metadata: Metadata = {
  title: "How to Write a Check for $1,000 | Example + Template",
  description:
    "Learn how to correctly write a check for 1000 dollars. Step-by-step instructions, visual example, and downloadable printable template included.",
  openGraph: {
    title: "How to Write a Check for $1,000 | Example + Template",
    description:
      "Learn how to correctly write a check for 1000 dollars. Step-by-step instructions, visual example, and downloadable printable template included.",
    url: "https://howwriteacheck.com/how-to-write-a-check-for-1000",
    siteName: "How Write a Check",
    locale: "en_US",
    type: "website",
  },
}

export default function HowToWriteACheckFor1000() {
  return <HowToWriteACheckFor1000Client />
}
