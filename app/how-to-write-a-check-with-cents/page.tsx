import type { Metadata } from "next"
import HowToWriteACheckWithCentsClient from "./HowToWriteACheckWithCentsClient"

export const metadata: Metadata = {
  title: "How to Write a Check With Cents | Step-by-Step + Template",
  description:
    "Learn how to properly write a check with cents. Includes examples, formatting tips, and a downloadable printable check template.",
  openGraph: {
    title: "How to Write a Check With Cents | Step-by-Step + Template",
    description:
      "Learn how to properly write a check with cents. Includes examples, formatting tips, and a downloadable printable check template.",
    url: "https://howwriteacheck.com/how-to-write-a-check-with-cents",
    siteName: "How Write a Check",
    locale: "en_US",
    type: "website",
  },
}

export default function HowToWriteACheckWithCents() {
  return <HowToWriteACheckWithCentsClient />
}
