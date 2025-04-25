import type { Metadata } from "next"
import HowToWriteACheckWithThousandsAndCentsClient from "./HowToWriteACheckWithThousandsAndCentsClient"

export const metadata: Metadata = {
  title: "How to Write a Check With Thousands and Cents | Guide + Template",
  description:
    "Learn how to write a check for amounts over $1,000 with cents included. Step-by-step guide, examples, and printable check templates.",
  openGraph: {
    title: "How to Write a Check With Thousands and Cents | Guide + Template",
    description:
      "Learn how to write a check for amounts over $1,000 with cents included. Step-by-step guide, examples, and printable check templates.",
    url: "https://howwriteacheck.com/how-to-write-a-check-with-thousands-and-cents",
    siteName: "How Write a Check",
    locale: "en_US",
    type: "website",
  },
}

export default function HowToWriteACheckWithThousandsAndCents() {
  return <HowToWriteACheckWithThousandsAndCentsClient />
}
