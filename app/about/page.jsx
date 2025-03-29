import Resume from "@/components/Resume";
const baseUrl = process.env.BASE_URL?.replace(/\/$/, "") || "https://ayonbit.me";
export const metadata = {
  title: "About",
  description:
    "With over a decade of experience, I specialize in full-stack development, technical support, and e-commerce operations. Currently, I lead web application development at Incognito Solution Inc, using the latest technologies. My background includes managing support teams at Jot Form Inc and optimizing Shopify stores at Fly Limited Corp. I'm passionate about delivering high-quality solutions that drive business success.",
  alternates: {
    canonical: `${baseUrl}/about`,
  },
  openGraph: {
    title: "About - Ayon Bit | Full Stack Developer",
    description:
      "Professional background and experience of Ayon Bit, Full Stack Developer with over a decade in web development and technical leadership.",
    url: `${baseUrl}/about`,
    images: [
      {
        url: `${baseUrl}/images/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Ayon Bit - Professional Profile",
      },
    ],
  },
  twitter: {
    title: "About - Ayon Bit | Full Stack Developer",
    description:
      "Professional background and experience of Ayon Bit, Full Stack Developer with over a decade in web development.",
    images: [`${baseUrl}/images/opengraph-image.png`],
  },
  keywords: [
    "Full Stack Developer",
    "Web Development Experience",
    "Technical Leadership",
    "E-commerce Specialist",
    "Shopify Expert",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Technical Support Management",
  ],
};

const AboutPage = () => {
  const resumeSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ayon Bit",
    jobTitle: "Full Stack Developer",
    url: `${baseUrl}/about`,
    sameAs: [
      "https://twitter.com/ayonbit",
      // Add other professional profiles (LinkedIn, GitHub, etc.)
    ],
    workLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dhaka",
        addressRegion: "Dhaka",
        addressCountry: "Bangladesh",
      },
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Developer",
      description:
        "Specializing in JavaScript, React, Node.js, and modern web technologies",
      skills: [
        "JavaScript",
        "React",
        "Node.js",
        "Next.js",
        "Shopify",
        "Technical Leadership",
        "E-commerce",
      ],
      yearsOfExperience: "6+",
    },
  };

  return (
    <div className="about-page">
      {/* Structured Data for Resume */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resumeSchema) }}
      />

      <Resume />
    </div>
  );
};

export default AboutPage;
