"use client";
// Dependencies
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { easeIn, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

// Project work
const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Responsive Website",
    description:
      "Designed and developed a responsive website with a clean, modern layout that adapts seamlessly to various screen sizes",
    stack: ["HTML5", "CSS3", "JavaScript", "Tailwind"],
    image: "/assets/work/Responsive_Website.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Furniture Shop",
    description:
      "Created a furniture shop website using the MERN stack, offering a responsive and interactive platform for browsing and purchasing products.",
    stack: ["Tailwind", "NodeJs", "NextJs"],
    image: "/assets/work/Furniture_shop.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "FullStack",
    title: "E-commerce Website",
    description:
      "Developed a fully-featured e-commerce platform with a focus on user experience and performance.",
    stack: ["MongoDB", "ExpressJs", "ReactJs", "NodeJs", "NextJs"],
    image: "/assets/work/ecomWeb.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "FullStack",
    title: "School Management Dashboard",
    description:
      "Built a robust full stack school management dashboard using NextJs with role-based authentication and real-time updates.",
    stack: ["NextJs", "Clerk Auth", "Prisma ORM", "PostgreSQL", "ReCharts"],
    image: "/assets/work/School_management_1x.png",
    live: "https://academymangements.vercel.app/list/events",
    github: "https://github.com/ayonbit/school-management",
  },
  {
    num: "05",
    category: "Shopify",
    title: "Shopify Dropshipping Website",
    description:
      "Developed a fully functional Shopify dropshipping website, featuring a custom-designed theme tailored to the brand's identity.",
    stack: ["Dropshipping", "Shopify", "UI/UX Design"],
    image: "/assets/work/Shopify.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: easeIn },
      }}
      className="main-h-[80vh] flex flex-col justify-center py-6 md:py-8 xl:py-12 overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-6">
          <div className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-4 h-[50%]">
              <div className="text-6xl font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h4 className="text-3xl font-bold text-white capitalize">
                {project.title}
              </h4>
              <h2 className="text-xl font-bold text-white capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-lg text-accent">
                    {item}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {project.live && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-12 h-12 rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-2xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project.github && (
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-12 h-12 rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-2xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="h-[460px] relative flex justify-center items-center bg-pink-50/20">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-fit rounded-sm"
                      priority={index === 0}
                    />
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0
              bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between
              xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px]
                w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
