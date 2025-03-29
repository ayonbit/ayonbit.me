export const metadata = {
  title: "Services",
  description:
    "Comprehensive services including dynamic web development, UI/UX design, Shopify store management, and administrative support. Custom solutions for your business needs.",
  alternates: {
    canonical: `${process.env.BASE_URL}/services`,
  },
  openGraph: {
    title: "Services - Ayon Bit | Full Stack Developer",
    description:
      "Professional web development, e-commerce solutions, and technical services tailored to your business requirements.",
    url: `${process.env.BASE_URL}/services`,
    images: [
      {
        url: `${process.env.BASE_URL}/images/services-og-image.png`,
        width: 1200,
        height: 630,
        alt: "Ayon Bit Services - Web Development & E-commerce Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ayonbit",
    creator: "@ayonbit",
    title: "Services - Ayon Bit | Web Development Expert",
    description:
      "Professional web development and e-commerce solutions including Shopify, Next.js, and custom web applications.",
    images: [`${process.env.BASE_URL}/images/services-twitter-image.png`],
  },
  keywords: [
    "web development services",
    "Shopify expert",
    "e-commerce development",
    "UI/UX design",
    "Next.js development",
    "full stack developer",
    "technical support services",
    "website maintenance",
    "custom web applications",
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Web Development Services",
  provider: {
    "@type": "Person",
    name: "Ayon Bit",
    url: `${process.env.BASE_URL}`,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development Services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Dynamic Web Development",
              description:
                "Custom web application development using modern technologies like Next.js, React, and Node.js",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "UI/UX Design",
              description:
                "User-centered interface design and experience optimization",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "E-commerce Solutions",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Shopify Management",
              description:
                "Complete Shopify store setup, customization, and ongoing management",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Support Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Administrative Support",
              description:
                "Technical administrative services and business process support",
            },
          },
        ],
      },
    ],
  },
};

export default function ServiceLayout({ children }) {
  return (
    <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {children}
    </main>
  );
}
