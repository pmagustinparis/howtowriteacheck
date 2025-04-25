import type { Metadata } from "next"
import SampleHowToWriteACheckClient from "./SampleHowToWriteACheckClient"

export const metadata: Metadata = {
  title: "Sample Check – How to Write a Check (Step-by-Step Example)",
  description:
    "See a real example of how to fill out a check. Includes labeled sample image, step-by-step breakdown, and downloadable printable templates.",
  openGraph: {
    title: "Sample Check – How to Write a Check (Step-by-Step Example)",
    description:
      "See a real example of how to fill out a check. Includes labeled sample image, step-by-step breakdown, and downloadable printable templates.",
    url: "https://howwriteacheck.com/sample-how-to-write-a-check",
    siteName: "How Write a Check",
    locale: "en_US",
    type: "website",
  },
}

export default function SampleHowToWriteACheck() {
  return <SampleHowToWriteACheckClient />
}
