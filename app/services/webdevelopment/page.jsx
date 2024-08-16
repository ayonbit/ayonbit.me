"use client";
// Dependencies
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { easeIn, easeInOut, motion } from "framer-motion";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

// Web Development Data function
const webdevelopment = [
  {
    title: "Custom Web Application",
    description: [
      "Build dynamic, responsive web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Implement complex features like real-time updates, user authentication, and data management.",
    ],
  },
  {
    title: "Next.js Development",
    description: [
      "Develop server-side rendered React applications for improved SEO and performance.",
      "Create static and dynamic web pages using Next.js’s features like API routes and incremental static regeneration.",
    ],
  },
  {
    title: "Full-Stack Solutions",
    description: [
      "Design and develop end-to-end solutions, integrating both front-end and back-end components.",
      "Implement RESTful APIs and GraphQL endpoints for seamless communication between client and server.",
    ],
  },
  {
    title: "E-Commerce Development",
    description: [
      "Build scalable e-commerce platforms with product management, shopping cart functionality, and secure checkout processes.",
    ],
  },
  {
    title: "Performance Optimization",
    description: [
      "Optimize web applications for speed and efficiency, including code splitting, lazy loading, and other performance best practices.",
    ],
  },
  {
    title: "Content Management Systems",
    description: [
      "Implement custom CMS solutions or integrate with existing platforms to manage content easily.",
    ],
  },
  {
    title: "Maintenance and Support",
    description: [
      "Provide ongoing support and maintenance, including bug fixes, updates, and performance enhancements.",
    ],
  },
  {
    title: "API Integration",
    description: [
      "Integrate third-party APIs for added functionalities such as payment gateways, social media, and analytics.",
    ],
  },
  {
    title: "Consultation and Strategy",
    description: [
      "Offer expert advice on technology stack choices, architecture design, and project planning.",
    ],
  },
];

// Web Development main Function
const WebDevelopment = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto px-4">
        {/* Introductory Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold px-10 py-0 text-white ">
            Partnering with you on your Digital Journey
          </h1>
          <p className="text-white/80 font-light p-6">
            From inception to execution, to sustainment... I can help. Are you
            just beginning your digital journey? Are you moving through a
            digital transition? Do you need an extra hand in sustaining what you
            already have? I&#39;ve got you.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.4,
              duration: 0.4,
              ease: easeIn,
            },
          }}
        >
          <Accordion
            type="single"
            collapsible
            className="w-full md:w-3/4 xl:w-3/4"
          >
            {webdevelopment.map((service, index) => (
              <AccordionItem key={index} value={service.title} className="">
                <AccordionTrigger className="flex items-center justify-between text-xl md:text-2xl font-bold py-8 text-white border-white/10 hover:text-accent">
                  {service.title}
                  <motion.div
                    initial={false}
                    animate={{ rotate: 0 }}
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl"
                  >
                    <FiChevronDown className="text-xl text-white" />
                  </motion.div>
                </AccordionTrigger>

                <AccordionContent asChild className="overflow-hidden">
                  <ul className="list-disc pl-6 pt-2   ">
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          duration: 1,
                          ease: easeInOut,
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: { duration: 0.2, ease: easeInOut },
                      }}
                    >
                      {service.description.map((desc, i) => (
                        <li
                          key={i}
                          className="text-white/80  text-bold text-md p-2"
                        >
                          {desc}
                        </li>
                      ))}
                    </motion.div>
                  </ul>
                </AccordionContent>

                {/* White Line Divider */}
                <div className="border-b border-white/20"></div>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
        <Link
          href="/contact"
          className="my-[30px] flex items-center justify-start"
        >
          <Button className="font-semibold px-8 py-6 text-primary">
            Talk to Me?
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default WebDevelopment;
