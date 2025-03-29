import Resume from "@/components/Resume";

export const metadata = {
  title: "About",
  description:
    "With over a decade of experience, I specialize in full-stack development, technical support, and e-commerce operations. Currently, I lead web application development at Incognito Solution Inc, using the latest technologies. My background includes managing support teams at Jot Form Inc and optimizing Shopify stores at Fly Limited Corp. I'm passionate about delivering high-quality solutions that drive business success.",
  alternates: {
    canonical: `${process.env.BASE_URL}/about`,
  },
  openGraph: {
    title: "About - Ayon Bit | Full Stack Developer",
    description:
      "Professional background and experience of Ayon Bit, Full Stack Developer with over a decade in web development and technical leadership.",
    url: `${process.env.BASE_URL}/about`,
    images: [
      {
        url: `${process.env.BASE_URL}/images/about-og-image.png`,
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
    images: [`${process.env.BASE_URL}/images/about-twitter-image.png`],
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
    url: `${process.env.BASE_URL}/about`,
    sameAs: [
      "https://twitter.com/ayonbit",
      // Add other professional profiles (LinkedIn, GitHub, etc.)
    ],
    workLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Your City",
        addressRegion: "Your State/Region",
        addressCountry: "Your Country",
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
      yearsOfExperience: "10+",
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
