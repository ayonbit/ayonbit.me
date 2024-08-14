"use client";

//Dependencies
import { easeIn, motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
//own dependencies

//Service
const services = [
  {
    num: "01",
    title: "Web Devlopment",
    description:
      " Crafting dynamic web applications with cutting-edge MERN stack technology. From sleek user interfaces to robust back-end solutions, I deliver high-performance web development tailored to your needs. It’s concise and effectively communicates your specialization.",
    href: "/services/webdevelopment",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      " UI/UX Design focuses on creating intuitive and visually appealing interfaces that enhance user experience. My approach combines aesthetic design with functional usability, ensuring that every project not only looks great but also provides a seamless and engaging user journey. ",
    href: "/services/uiuxdesign",
  },
  {
    num: "03",
    title: "Shopify Dropshipping",
    description:
      " Shopify Dropshipping services streamline the process of launching and managing your online store by handling product sourcing, order fulfillment, and store optimization. I leverage my expertise to set up a seamless Shopify store that maximizes efficiency and drives sales, allowing you to focus on growing your business.",
    href: "/services/shopifymanagement",
  },
  {
    num: "04",
    title: "Administrative Support",
    description:
      " Administrative Support services streamline your daily operations by managing tasks like scheduling, communication, and data entry. I provide efficient and reliable support to help you focus on your core business activities while ensuring everything runs smoothly behind the scenes.",
    href: "/services/administrativesupport",
  },
];

//Service main
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: easeIn,
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[68px]"
        >
          {services.map((services, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group overflow-hidden shadow-lg rounded-md bg-neutral-100/5 p-10 "
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div
                    className="text-5xl font-extrabold text-outline 
                  text-transparent group-hover:text-outline-hover 
                  transition-all duration-500"
                  >
                    {services.num}
                  </div>
                  <Link
                    href={services.href}
                    className="w-[70px] h-[70px] rounded-full bg-white hover:rotate-45 group-hover:bg-accent transition-all duration-500 flex justify-center items-center '
                  "
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ">
                  {services.title}
                </h2>
                {/* description */}
                <p className="text-white/80">{services.description}</p>
                {/* description */}
                <div className="border-b border-white/80 w-full"></div>

                {/* Learn More Button */}
                <Link href={services.href}>
                  <button className=" px-4 py-2 bg-primary hover:bg-accent hover:text-primary  text-white rounded-md">
                    Learn More
                  </button>
                </Link>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
