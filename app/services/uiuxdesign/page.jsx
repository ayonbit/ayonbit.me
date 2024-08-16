"use client";
//Dependencies
import { easeIn, motion } from "framer-motion";
//UiUx Data Funtion
const uIuX = [
  {
    title: "UI Design and Prototyping",
    descritption: [
      {
        des1: "Use Figma to create interactive prototypes that showcase user flows and design concepts.",
        des2: "Design polished, high-fidelity interfaces that align with brand aesthetics.",
      },
    ],
  },
  {
    title: "Responsive Web Design",
    descritption: [
      {
        des1: "Implement responsive design using CSS, ensuring that interfaces adapt seamlessly across different devices.",
        des2: "Use Bootstrap and Tailwind to build flexible grid systems and responsive components.",
      },
    ],
  },
  {
    title: "Component-Based Design",
    descritption: [
      {
        des1: "Develop reusable UI components with Bootstrap and Tailwind, ensuring consistency and efficiency in design.",
        des2: "Create design systems that streamline the development process and maintain uniformity across projects.",
      },
    ],
  },
  {
    title: "Wireframing and Layout Design",
    descritption: [
      {
        des1: "Use Figma and Photoshop to create wireframes that define the layout and structure of websites or apps.",
        des2: "Design intuitive navigation and user flows that enhance usability",
      },
    ],
  },
  {
    title: "Brand Identity and Graphic Design",
    descritption: [
      {
        des1: "Design brand identities, including logos, color palettes, and typography, that resonate with target audiences.",
        des2: "Create marketing materials, social media graphics, and other visual content to support brand consistency.",
      },
    ],
  },
  {
    title: "UX Enhancements",
    descritption: [
      {
        des1: "Improve user experience by applying UX best practices to design layouts, navigation, and interactive elements.",
        des2: "Conduct usability testing and iterate on designs based on user feedback.",
      },
    ],
  },
  {
    title: "Collaboration and Handoff",
    descritption: [
      {
        des1: "Collaborate with developers using Figma's handoff tools to provide accurate design specs and assets",
        des2: "Ensure smooth implementation of designs into code, minimizing discrepancies.",
      },
    ],
  },
];
//UIux Main Function
const UIUXDesign = () => {
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
        ></motion.div>
      </div>
    </section>
  );
};

export default UIUXDesign;
