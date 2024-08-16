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
//UiUx Data Funtion
const uIuX = [
  {
    title: "UI Design and Prototyping",
    descritption: [
      "Use Figma to create interactive prototypes that showcase user flows and design concepts.",
      "Design polished, high-fidelity interfaces that align with brand aesthetics.",
    ],
  },
  {
    title: "Responsive Web Design",
    descritption: [
      "Implement responsive design using CSS, ensuring that interfaces adapt seamlessly across different devices.",
      "Use Bootstrap and Tailwind to build flexible grid systems and responsive components.",
    ],
  },
  {
    title: "Component-Based Design",
    descritption: [
      "Develop reusable UI components with Bootstrap and Tailwind, ensuring consistency and efficiency in design.",
      "Create design systems that streamline the development process and maintain uniformity across projects.",
    ],
  },
  {
    title: "Wireframing and Layout Design",
    descritption: [
      "Use Figma and Photoshop to create wireframes that define the layout and structure of websites or apps.",
      "Design intuitive navigation and user flows that enhance usability",
    ],
  },
  {
    title: "Brand Identity and Graphic Design",
    descritption: [
      "Design brand identities, including logos, color palettes, and typography, that resonate with target audiences.",
      "Create marketing materials, social media graphics, and other visual content to support brand consistency.",
    ],
  },
  {
    title: "UX Enhancements",
    descritption: [
      "Improve user experience by applying UX best practices to design layouts, navigation, and interactive elements.",
      "Conduct usability testing and iterate on designs based on user feedback.",
    ],
  },
  {
    title: "Collaboration and Handoff",
    descritption: [
      "Collaborate with developers using Figma's handoff tools to provide accurate design specs and assets",
      "Ensure smooth implementation of designs into code, minimizing discrepancies.",
    ],
  },
];
//UIux Main Function
const UIUXDesign = () => {
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
            {uIuX.map((service, index) => (
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
                      {service.descritption.map((desc, i) => (
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

export default UIUXDesign;
