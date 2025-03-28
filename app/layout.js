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
    template: "%s - Ayon Bit",
    default: "Ayon Bit",
  },
  description:
    "Experienced software developer skilled in multiple programming languages, collaborative, and effective at providing technical guidance. Dedicated to staying current with industry trends and motivated to create high-quality software.",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
  keywords: [
    "web development",
    "front end developer",
    "website design",
    "backend developer",
    "ui developer",
    "fullstack development",
    "mern stack developer",
    "e-commerce",
    "nextjs",
    "shopify store management",
  ],
  authors: [{ name: "Ayon Bit", url: baseUrl }],
  creator: "Ayon Bit",
  publisher: "Ayon Bit",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  referrer: "origin-when-cross-origin",
  twitter: {
    card: "summary_large_image",
    site: "@ayonbit",
    title: "Ayon Bit - Full Stack Web Developer",
    url: `${baseUrl}/`,
    description:
      "Experienced software developer skilled in multiple programming languages, collaborative, and effective at providing technical guidance.",
    image: `${baseUrl}/images/opengraph-image.png`,
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
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body className={jetbrainsMono.variable}>
        {/* Toast Notifications */}
        <Toaster
          reverseOrder
          position="top-right"
          toastOptions={{ duration: 4000 }}
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
