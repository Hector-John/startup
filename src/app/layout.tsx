import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const COMPANY_NAME = "Kheem Tech";
const BASE_URL = "https://kheem.tech"; // Replace with your actual domain

// Fonts optimized for performance
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_NAME} | Web & Mobile Development Experts`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    "Cutting-edge web and mobile app development. We build scalable, performant solutions for startups and enterprises.",
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: BASE_URL,
  },
  keywords: [
    "web development",
    "mobile app development",
    "React",
    "Next.js",
    "UI/UX design",
    "tech consulting",
    "software development",
    "Python programming ",
  ],
  authors: [{ name: COMPANY_NAME, url: BASE_URL }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} | Technology Solutions Built for Growth`,
    description: "Engineering digital experiences that drive results.",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} website preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} | Tech Development Experts`,
    description: "We build the digital tools your business needs to scale.",
    images: [`${BASE_URL}/og-image.jpg`],
    creator: "@kheemtech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  // verification: { google: "..." }, // Uncomment when ready
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Preload fonts */}
        <link
          rel="preload"
          href="/_next/static/media/your-font-file.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Schema.org for better SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: COMPANY_NAME,
            url: BASE_URL,
            logo: `${BASE_URL}/logo.png`,
            sameAs: [
              "https://github.com/kheemtech",
              "https://linkedin.com/company/kheemtech",
            ],
            description:
              "Technology development company specializing in web, desktop, mobile and industrial solutions.",
          })}
        </script>
      </head>
      <body className="min-h-screen font-sans antialiased bg-gray-950 text-gray-50">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
