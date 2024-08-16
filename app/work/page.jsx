"use client";
//dependencies
import { easeIn, motion } from "framer-motion";
import { useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";

//own dependency
import WorkSliderBtns from "@/components/WorkSliderBtns";
//project work
const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Simple Responsive Website",
    description:
      "Designed and developed a responsive website with a clean, modern layout that adapts seamlessly to various screen sizes",
    stack: [
      { name: "HTML 5" },
      { name: "Css 3" },
      { name: "JavaScript" },
      { name: "Tailwind" },
    ],
    image: "/assets/work/thumb8.png",
    live: "",
    github: "",
  },

  {
    num: "02",
    category: "Frontend",
    title: "Furniture Shop",
    description:
      "Created a furniture shop website using the MERN stack, offering a responsive and interactive platform for browsing and purchasing products. Features include a custom product catalog, user authentication, shopping cart functionality, and secure payment processing.",
    stack: [{ name: "Tailwind" }, { name: "NodeJs" }, { name: "NextJs" }],
    image: "/assets/work/thumb6.png",
    live: "",
    github: "",
  },

  {
    num: "03",
    category: "FullStack",
    title: "E-commerce Website",
    description:
      "Developed a fully-featured e-commerce platform with a focus on user experience and performance. The site includes dynamic product displays, secure payment integration, and a streamlined checkout process, delivering a seamless online shopping experience.",
    stack: [
      { name: "MonogoDb" },
      { name: "ExpressJs" },
      { name: "ReactJs" },
      { name: "NodeJs" },
      { name: "NextJs" },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Backend",
    title: "Backend Dashboard",
    description:
      "Built a robust backend dashboard using the MERN stack, providing administrators with a comprehensive interface to manage data, monitor user activity, and generate reports. The dashboard includes secure authentication, real-time updates, and an intuitive layout for efficient data management.",
    stack: [
      { name: "MonogoDb" },
      { name: "ExpressJs" },
      { name: "ReactJs" },
      { name: "NodeJs" },
      { name: "NextJs" },
    ],
    image: "/assets/work/thumb5.png",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "Shopify",
    title: "Shopify Dropshipping Website",
    description:
      "Developed a fully functional Shopify dropshipping website, featuring a custom-designed theme tailored to the brand's identity.",
    stack: [
      { name: "Dropshipping" },
      { name: "Shopify" },
      { name: "UiUx Design" },
    ],
    image: "/assets/work/thumb7.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project based on current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: easeIn },
      }}
      className="main-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none  ">
            <div className=" flex flex-col gap-[30px] h-[50%]">
              {/*outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline ">
                {project.num}
              </div>
              {/*project title*/}
              <h4 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h4>
              {/*project category */}
              <h2 className="text-[20px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>

              {/*project description */}
              <p className="text-white/60">{project.description}</p>
              {/*stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/*remove comma from the last*/}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/*border */}
              <div className="border border-white/20"></div>
              {/*buttons */}
              <div className="flex items-center gap-4">
                {/*Live Project Button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/*Git Hub Project Button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsGithub className="text-white text-3xl group-hover:text-accent " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]  ">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div
                      className="h-[460px] relative group flex 
                    justify-center items-center bg-pink-50/20"
                    >
                      {/*overly*/}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      {/*Image*/}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover rounded-sm"
                          alt="{`${project.title} thumbnail`}"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
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
