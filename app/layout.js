import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// External Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Toaster } from "react-hot-toast";

// Font Configuration
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
  display: "swap",
});

// Base URL with fallback
const baseUrl =
  process.env.BASE_URL?.replace(/\/$/, "") || "https://ayonbit.me";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: "%s | Ayon Bit - Full Stack Web Developer",
    default: "Ayon Bit - Full Stack Web Developer",
  },
  description:
    "Experienced software developer skilled in multiple programming languages, collaborative, and effective at providing technical guidance.",
  keywords: [
    "Ayon Bit",
    "Full Stack Developer",
    "ReactJS Developer",
    "NodeJS Developer",
    "Next.js Specialist",
    "JavaScript Expert",
    "MERN Stack Developer",
    "Website Design",
    "E-commerce Developer",
  ],
  authors: [{ name: "Ayon Bit", url: baseUrl }],
  creator: "Ayon Bit",
  publisher: "Ayon Bit",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: `${baseUrl}/`,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ayonbit",
    creator: "@ayonbit",
    title: "Ayon Bit - Full Stack Web Developer",
    url: `${baseUrl}/`,
    description:
      "Experienced software developer skilled in multiple programming languages, collaborative, and effective at providing technical guidance.",
    images: [
      {
        url: `${baseUrl}/images/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Ayon Bit - Full Stack Web Developer",
      },
    ],
  },
  openGraph: {
    type: "website",
    siteName: "Ayon Bit - Full Stack Web Developer",
    locale: "en_US",
    url: `${baseUrl}/`,
    title: "Ayon Bit - Full Stack Web Developer",
    description:
      "Experienced software developer skilled in multiple programming languages, collaborative, and effective at providing technical guidance.",
    images: [
      {
        url: `${baseUrl}/images/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Ayon Bit - Full Stack Web Developer",
      },
    ],
    profile: {
      firstName: "Ayon",
      lastName: "Bit",
      username: "ayonbit",
    },
  },
  other: {
    "google-site-verification": "YOUR-ACTUAL-VERIFICATION-CODE",
    referrer: "strict-origin-when-cross-origin",
    "x-ua-compatible": "IE=edge,chrome=1",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ayon Bit",
    url: baseUrl,
    image: `${baseUrl}/images/opengraph-image.png`, // Add your profile image
    sameAs: [
      "https://twitter.com/ayonbit",
      "https://github.com/ayonbit",
      "https://www.linkedin.com/in/ayonbit",
    ],
    jobTitle: "Full Stack Web Developer",
    worksFor: {
      "@type": "Organization",
      name: "Incognito Solution",
      url: baseUrl,
    },
    description: metadata.description,
  };

  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={jetbrainsMono.variable}>
        {/* Toast Notifications */}
        <Toaster
          reverseOrder
          position="top-right"
          toastOptions={{ duration: 2000 }}
        />

        {/* Page Transitions & Header */}
        <StairTransition />
        <Header />
        <PageTransition>{children}</PageTransition>

        {/* Vercel Analytics & Speed Insights */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
