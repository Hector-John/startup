import type { ReactNode } from "react";
import type { Metadata } from "next";
import { companyName } from "@/lib/config";

const COMPANY_NAME = companyName;
const BASE_URL = "https://kheem.tech";

export const metadata: Metadata = {
  title: "Step254 Case Study | Kheem Tech",
  description:
    "Step254 is a curated mitumba shoe delivery app designed to solve trust and access issues in Kenya’s second-hand footwear market.",
  keywords: [ 
    "Step254",
    "mitumba app Kenya",
    "second-hand shoe delivery",
    "UX case study",
    "Kheem Tech portfolio",
  ],
  authors: [{ name: COMPANY_NAME, url: BASE_URL }],
  openGraph: {
    type: "article",
    url: `${BASE_URL}/projects/step-254`,
    title: "Step254 Case Study | Kheem Tech",
    description:
      "Discover how Kheem Tech designed a second-hand shoe delivery platform to solve real problems in Kenya's mitumba market.",
    siteName: COMPANY_NAME,
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Step254 case study preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Step254 Case Study | Kheem Tech",
    description:
      "A curated second-hand shoe shopping app, built with purpose. Designed by Kheem Tech.",
    images: [`${BASE_URL}/og-image.jpg`],
    creator: "@kheemtech",
  },
};

export default function Step254Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">

   <head>
        <link
          rel="preload"
          href="/_next/static/media/your-font-file.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>

      <body className="min-h-screen font-sans antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}
