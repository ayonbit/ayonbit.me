"use client";
import { easeIn, motion } from "framer-motion";
//Web Devlopment Data funtion
const webdevlopment = [
  {
    title: "Custom Web Application Development",
    description: [
      {
        des1: "Build dynamic, responsive web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      },
      {
        des2: "Implement complex features like real-time updates, user authentication, and data management.",
      },
    ],
  },
  {
    title: "Next.js Development",
    description: [
      {
        des1: "Develop server-side rendered React applications for improved SEO and performance.",
      },
      {
        des2: "Create static and dynamic web pages using Next.js’s features like API routes and incremental static regeneration.",
      },
    ],
  },
  {
    title: "Full-Stack Solutions",
    description: [
      {
        des1: "Design and develop end-to-end solutions, integrating both front-end and back-end components.",
      },
      {
        des2: "Implement RESTful APIs and GraphQL endpoints for seamless communication between client and server.",
      },
    ],
  },
  {
    title: "E-Commerce Development",
    description: [
      {
        des1: "Build scalable e-commerce platforms with product management, shopping cart functionality, and secure checkout processes.",
      },
    ],
  },
  {
    title: "Performance Optimization",
    description: [
      {
        des1: "Optimize web applications for speed and efficiency, including code splitting, lazy loading, and other performance best practices.",
      },
    ],
  },
  {
    title: "Content Management Systems (CMS)",
    description: [
      {
        des1: "Implement custom CMS solutions or integrate with existing platforms to manage content easily.",
      },
    ],
  },
  {
    title: "Maintenance and Support",
    description: [
      {
        des1: "Provide ongoing support and maintenance, including bug fixes, updates, and performance enhancements.",
      },
    ],
  },
  {
    title: "API Integration",
    description: [
      {
        des1: "Integrate third-party APIs for added functionalities such as payment gateways, social media, and analytics.",
      },
    ],
  },
  {
    title: "Consultation and Strategy",
    description: [
      {
        des1: "Offer expert advice on technology stack choices, architecture design, and project planning.",
      },
    ],
  },
];
//WebDevlopemtn main Fucntion
const WebDevelopment = () => {
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

export default WebDevelopment;
