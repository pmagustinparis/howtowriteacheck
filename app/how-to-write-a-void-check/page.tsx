import type { Metadata } from "next"
import HowToWriteAVoidCheckClient from "./HowToWriteAVoidCheckClient"

export const metadata: Metadata = {
  title: "How to Write a Void Check | Step-by-Step With Example",
  description:
    "Learn how to properly void a check. See examples, when to use one, and download a printable void check template.",
  openGraph: {
    title: "How to Write a Void Check | Step-by-Step With Example",
    description:
      "Learn how to properly void a check. See examples, when to use one, and download a printable void check template.",
    url: "https://howwriteacheck.com/how-to-write-a-void-check",
    siteName: "How Write a Check",
    locale: "en_US",
    type: "website",
  },
}

export default function HowToWriteAVoidCheck() {
  return <HowToWriteAVoidCheckClient />
}
