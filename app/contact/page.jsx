import ContactForm from "@/components/ContactForm";
import { FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
const baseUrl =
  process.env.BASE_URL?.replace(/\/$/, "") || "https://ayonbit.me";
export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Ayon Bit, Full Stack Developer. Available for new projects and collaborations. Contact via email or the provided form.",
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
  openGraph: {
    title: "Contact - Ayon Bit | Full Stack Developer",
    description:
      "Contact Ayon Bit for web development projects, technical consultations, or collaboration opportunities.",
    url: `${baseUrl}/contact`,
    images: [
      {
        url: `${baseUrl}/images/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Contact Ayon Bit - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - Ayon Bit | Full Stack Developer",
    description:
      "Get in touch with Ayon Bit for web development projects and technical consultations.",
    images: [`${baseUrl}/images/opengraph-image.png`],
  },
  keywords: [
    "contact web developer",
    "hire full stack developer",
    "web development consultation",
    "technical support contact",
    "e-commerce developer contact",
    "Next.js developer contact",
  ],
};

const contactInfo = [
  {
    icon: <FaEnvelope className="text-xl sm:text-2xl" aria-hidden="true" />,
    title: "Email",
    description: "ayonbit@gmail.com",
    href: "mailto:ayonbit@gmail.com",
    schemaType: "email",
  },

  {
    icon: <FaMapMarkedAlt className="text-xl sm:text-2xl" aria-hidden="true" />,
    title: "Address",
    description: "Incognito Solution, Bangladesh",
    schemaType: "Dhaka,Bangladesh",
  },
];

const Contact = () => {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Ayon Bit",
    description: metadata.description,
    url: `${baseUrl}/contact`,
    potentialAction: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "ayonbit@gmail.com",

      areaServed: "Worldwide",
      availableLanguage: "English",
    },
  };

  return (
    <section
      className="py-6 px-4 sm:px-6 md:px-8"
      aria-labelledby="contact-heading"
    >
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      <div className="container mx-auto">
        <div className="flex flex-col gap-8 xl:flex-row xl:gap-[30px]">
          {/* Contact Info Section */}
          <div className="flex flex-col justify-start items-start">
            <h1
              className="text-2xl sm:text-3xl lg:text-4xl text-accent font-bold"
              id="contact-heading"
            >
              Let&#39;s work together
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 py-6 sm:py-8">
              I'm available to take on new projects and would love to discuss
              them. Feel free to reach out with any ideas, and I&#39;ll get back
              to you promptly.
            </p>
            <div className="flex flex-1 items-center xl:justify-end mb-8 xl:mb-0">
              <ul className="flex flex-col gap-8 sm:gap-10">
                {contactInfo.map((item, index) => (
                  <li key={index} className="flex items-center gap-4 sm:gap-6">
                    {/* Icon Container */}
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 text-accent rounded-md">
                      {item.icon}
                    </div>
                    {/* Contact Details */}
                    <div className="flex-1">
                      <p className="text-white/70 font-medium">{item.title}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-base sm:text-lg font-semibold hover:text-accent transition-colors"
                          itemProp={item.schemaType}
                        >
                          {item.description}
                        </a>
                      ) : (
                        <span
                          className="text-base sm:text-lg font-semibold"
                          itemProp={item.schemaType}
                        >
                          {item.description}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
