import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//external dependencies
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Toaster } from "react-hot-toast";
//fonts config
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || "http://localhost:3000"),
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
    "react",
    "tailwindcss",
    "website development",
    "backend developer",
    "ui developer",
    "web development company",
    "front end back end developer",
    "fullstack development",
    "web dev",
    "shopify developer",
    "shopify dropshipping",
    "dropshipping",
    "customer support",
    "shopify store",
    "shopify website",
    "shopify design",
    "shopify website design",
    "shopify store design",
    "shopify store management",
    "shopify management",
    "shopify store setup",
    "react",
    "nextjs",
    "fullstack",
    "e-commerce",
    "mern stack",
    "mern stack developer",
    "mern stack development",
    "mern stack development company",
  ],
  authors: [{ name: "Ayon Bit", url: `${process.env.BASE_URL}` }],
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
    url: `${process.env.BASE_URL}/`,
    description:
      "Experienced software developer skilled in multiple programming languages, collaborative, and effective at providing technical guidance. Dedicated to staying current with industry trends and motivated to create high-quality software.",
    image: `${process.env.BASE_URL}/images/opengraph-image.png`,
  },
  facebook: {
    card: "summary_large_image",
    site: "@ayonbit",
    title: "Ayon Bit - Full Stack Web Developer",
    url: `${process.env.BASE_URL}/`,
    description:
      "Experienced software developer skilled in multiple programming languages, collaborative, and effective at providing technical guidance. Dedicated to staying current with industry trends and motivated to create high-quality software.",
    image: `${process.env.BASE_URL}/images/opengraph-image.png`,
  },
  openGraph: {
    type: "website",
    siteName: "Ayon Bit - Full Stack Web Developer",
    locale: "en_US",
    url: `${process.env.BASE_URL}/`,
    title: "Ayon Bit - Full Stack Web Developer",
    description:
      "Experienced software developer skilled in multiple programming languages, collaborative, and effective at providing technical guidance. Dedicated to staying current with industry trends and motivated to create high-quality software.",
    images: [
      {
        url: `${process.env.BASE_URL}/images/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Ayon Bit - Full Stack Web Developer",
      },
    ],
  },
  linkedin: {
    card: "summary_large_image",
    site_name: "Incognito Solutions",
    url: `${process.env.BASE_URL}/`,
    title: "Incognito Solutions",
    description: "Next Generation Web Development",
    image: `${process.env.BASE_URL}/images/opengraph-image.png`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Toaster
          reverseOrder={true}
          position="top-right"
          toastOptions={{ duration: 4000 }}
        />
        <StairTransition />
        <Header />

        <PageTransition>{children}</PageTransition>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
