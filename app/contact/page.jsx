import ContactForm from "@/components/ContactForm";
import { FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

// SEO Metadata
export const metadata = {
  title: "Contact - AyonBit",
  description:
    "Feel free to reach out with any ideas. I'll get back to you promptly.",
  url: `${process.env.BASE_URL}/contact`,
  openGraph: {
    type: "website",
    siteName: "AyonBit",
    title: "Contact - AyonBit",
    description:
      "Feel free to reach out with any ideas. I'll get back to you promptly.",
    url: `${process.env.BASE_URL}/contact`,
  },
  twitter: {
    card: "summary_large_image",
    site: "@ayonbit",
    title: "Contact - AyonBit",
    description:
      "Feel free to reach out with any ideas. I'll get back to you promptly.",
  },
};

// Static Contact Info Data
const contactInfo = [
  {
    icon: <FaEnvelope className="text-xl sm:text-2xl" aria-hidden="true" />,
    title: "Email",
    description: "ayonbit@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt className="text-xl sm:text-2xl" aria-hidden="true" />,
    title: "Address",
    description: "Incognito Solution, Bangladesh",
  },
];

const Contact = () => {
  return (
    <section className="py-6 px-4 sm:px-6 md:px-8">
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
                      <h3 className="text-base sm:text-lg font-semibold">
                        {item.description}
                      </h3>
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
