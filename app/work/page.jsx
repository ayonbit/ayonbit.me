import Work from "@/components/Work";
const baseUrl =
  process.env.BASE_URL?.replace(/\/$/, "") || "https://ayonbit.me";
export const metadata = {
  title: "Portfolio | Recent Projects",
  description:
    "Explore my portfolio of recent web development projects including full-stack applications, e-commerce solutions, and UI/UX designs. See examples of my work with Next.js, React, Shopify, and more.",
  alternates: {
    canonical: `${baseUrl}/work`,
  },
  openGraph: {
    title: "Portfolio - Ayon Bit | Web Development Projects",
    description:
      "Collection of professional web development projects showcasing full-stack applications and e-commerce solutions.",
    url: `${baseUrl}/work`,
    images: [
      {
        url: `${baseUrl}/images/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Ayon Bit Portfolio - Web Development Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ayonbit",
    creator: "@ayonbit",
    title: "Portfolio - Ayon Bit | Web Developer Projects",
    description:
      "Showcase of my recent web development work including full-stack and e-commerce projects.",
    images: [`${baseUrl}/images/opengraph-image.png`],
  },
  keywords: [
    "web developer portfolio",
    "Next.js projects",
    "React developer work",
    "e-commerce examples",
    "Shopify portfolio",
    "full stack developer projects",
    "web application examples",
    "UI/UX design portfolio",
    "JavaScript developer work",
  ],
};

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Web Development Portfolio",
  description: "Collection of professional web development projects",
  url: `${baseUrl}/work`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "CreativeWork",
        name: "E-commerce Project",
        url: `${baseUrl}/work#ecommerce-project`,
        description: "Custom Shopify store with advanced functionality",
        keywords: "Shopify, e-commerce, web development",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "CreativeWork",
        name: "Web Application",
        url: `${baseUrl}/work#web-application`,
        description: "Full-stack Next.js application with custom API",
        keywords: "Next.js, React, Node.js",
      },
    },
    // Add more projects as needed
  ],
};

const WorkPage = () => {
  return (
    <main className="portfolio-page">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />

      <Work />
    </main>
  );
};

export default WorkPage;
