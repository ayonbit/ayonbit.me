export const metadata = {
  title: "Services - AyonBit",
  description:
    "Offering comprehensive services including dynamic web development with MERN stack, intuitive UI/UX design, Shopify dropshipping store management, and efficient administrative support to streamline operations.",
  url: `${process.env.BASE_URL}/services`,
  openGraph: {
    type: "website",
    siteName: "AyonBit",
    title: "Services - AyonBit",
    description:
      "Offering comprehensive services including dynamic web development, UI/UX design, Shopify management, and administrative support.",
    url: `${process.env.BASE_URL}/services`,
  },
  twitter: {
    card: "summary_large_image",
    site: "@ayonbit",
    title: "Services - AyonBit",
    description:
      "Offering dynamic web development, UI/UX design, Shopify management, and admin support services.",
  },
};

export default function ServiceLayout({ children }) {
  return (
    <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {children}
    </main>
  );
}
