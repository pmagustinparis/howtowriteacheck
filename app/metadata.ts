import { Metadata } from "next"

export function generateMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  return {
    title,
    description,
    metadataBase: new URL("https://www.howwriteacheck.com"),
    alternates: {
      canonical: path,
    },
  }
} 