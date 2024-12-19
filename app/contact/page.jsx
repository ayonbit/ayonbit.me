
import ContactForm from "@/components/ContactForm";
import {  useMemo, } from "react";
import { FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

//SEO SECTION
export const metadata = {
  title: "Contact",
  description:
    "Feel free to reach out with any ideas. I'll get back to you promptly.",
  url: "/contact",
};

//Contact Page
const Contact = () => {
  // Memoized info function
  const info = useMemo(
    () => [
      {
        icon: <FaEnvelope />,
        title: "Email",
        description: "ayonbit@gmail.com",
      },
      {
        icon: <FaMapMarkedAlt />,
        title: "Address",
        description: "Incognito Solution, Bangladesh",
      },
    ],
    []
  );

  return (
    <section className="py-6 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8 xl:flex-row xl:gap-[30px]">
          {/* info */}
          <div className="flex flex-col justify-start items-start">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl text-accent">
              Let&#39;s work together
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-white/60 py-6 sm:py-8">
              I&#39;m available to take on new projects and would love to
              discuss them. Feel free to reach out with any ideas.
              <br />
              I&#39;ll get back to you promptly.
            </p>
            <div className="flex flex-1 items-center xl:justify-end mb-8 xl:mb-0">
              <ul className="flex flex-col gap-8 sm:gap-10">
                {info.map((item, index) => (
                  <li key={index} className="flex items-center gap-4 sm:gap-6">
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#27272c] text-accent rounded-md">
                      <div className="text-lg sm:text-2xl">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-base sm:text-lg">
                        {item.description}
                      </h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ContactForm/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
