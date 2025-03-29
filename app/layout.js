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
    default: "Ayon Bit - Full Stack Web Developer | Next Js Specialist",
  },
  description:
    "Experienced software developer skilled in multiple programming languages, collaborative, and effective at providing technical guidance. Dedicated to staying current with industry trends and motivated to create high-quality software.",
  keywords: [
    "Ayon Bit",
    "Full Stack Developer",
    "Web Developer",
    "MERN Stack Developer",
    "NodeJS Developer",
    "ReactJS Developer",
    "JavaScript Expert",
    "E-commerce Developer",
    "Website Design",
    "Shopify Drop Shipping Expert",
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
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
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
    emails: "your-email@example.com",
    profile: {
      firstName: "Ayon",
      lastName: "Bit",
      username: "ayonbit",
    },
  },
  other: {
    "google-site-verification": "your-verification-code",
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
    sameAs: [
      "https://twitter.com/ayonbit",
      // Add other social profiles here
    ],
    jobTitle: "Full Stack Web Developer",
    description: metadata.description,
  };

  return (
    <html lang="en" dir="ltr">
      <body className={jetbrainsMono.variable}>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

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
