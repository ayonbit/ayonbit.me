"use client";
//Dependencies
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

//admin data
const adminSupport = [
  {
    title: "Administrative Task Management",
    description: [
      "Assist with scheduling, calendar management, and email correspondence.",
      "Handle routine administrative tasks, such as document preparation, filing, and organization.",
    ],
  },
  {
    title: "Lead Generation",
    description: [
      "Identify and qualify leads using various online tools and databases.",
      "Develop and execute lead generation strategies to support sales teams.",
    ],
  },
  {
    title: "Web Research & Data Collection",
    description: [
      "Conduct thorough web research to gather information, statistics, and data on various topics.",
      "Compile and organize data into actionable insights, reports, or spreadsheets.",
    ],
  },
  {
    title: "Data Entry & Management",
    description: [
      "Accurately enter, update, and manage data in various formats, including spreadsheets, databases, and CRM systems",
      "Perform data cleaning and validation to ensure data accuracy and consistency.",
    ],
  },
  {
    title: "List Building & Data Mining",
    description: [
      "Build targeted lists for marketing or outreach purposes by mining data from various sources.",
      "Organize and segment lists based on specific criteria, such as industry, location, or demographics.",
    ],
  },
  {
    title: "Excel Work & Reporting",
    description: [
      "Create and manage complex Excel spreadsheets, including formulas, pivot tables, and charts.",
      "Generate detailed reports and dashboards to track performance, sales, or other key metrics.",
    ],
  },
  {
    title: "Customer Service (Non-Voice)",
    description: [
      "Provide customer support through email, chat, or online messaging platforms, handling inquiries, complaints, and requests.",
      "Manage customer service tickets, ensuring timely responses and resolution.",
    ],
  },
];
//customer support main function
const CustomerSupport = () => {
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
            {adminSupport.map((service, index) => (
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

export default CustomerSupport;
