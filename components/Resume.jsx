"use client";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"; // Adjust import path if necessary
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { easeIn, motion } from "framer-motion";
import {
  FaBootstrap,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiCisco,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiShopify,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";

const about = {
  title: "About Me",
  description:
    "I'm Ayon Bit, a full-stack developer specializing in NodeJS, ReactJS, JavaScript, and the MERN stack. With 6 years of experience as a DropShipping Expert in the e-commerce industry, I thrive on challenges—whether it's late-night problem-solving or embracing the growth that comes with experience. ",
  info: [
    { fieldName: "Name", fieldValue: "Ayon Bit" },
    { fieldName: "Email", fieldValue: "ayonbit@gmail.com" },
    { fieldName: "Phone", fieldValue: "(+880) XXXX XXXXXX" },
    { fieldName: "Experience", fieldValue: "6+ years" },
    { fieldName: "Nationality", fieldValue: "Bangladesh" },
    { fieldName: "Skype", fieldValue: "ayon.bit" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Language", fieldValue: "English, Bengali, Hindi" },
  ],
};

const experience = {
  title: "My Experience",
  description:
    "With over a decade of experience, I specialize in full-stack development, technical support, and e-commerce operations. Currently, I lead web application development at Incognito Solution Inc, using the latest technologies. My background includes managing support teams at Jot Form Inc and optimizing Shopify stores at Fly Limited Corp. I’m passionate about delivering high-quality solutions that drive business success.",
  items: [
    {
      Company: "Incognito Solution Inc",
      Position: "Full Stack Developer",
      duration: "2023-Present",
    },
    {
      Company: "Jot Form Inc",
      Position: "Technical Support Manager",
      duration: "2021-2023",
    },
    {
      Company: "Fly Limited Corp",
      Position: "Shopify Store Manager",
      duration: "2016-2021",
    },
    {
      Company: "Freelance Market Place",
      Position: "Administrative Support",
      duration: "2013-2016",
    },
    {
      Company: "Freelance Marketplace",
      Position: "Data Entry",
      duration: "2011-2013",
    },
  ],
};

const education = {
  title: "My Education",
  description:
    "I’m a full-stack developer with an MSc in IT and extensive experience in web development, technical support, and e-commerce optimization. I’m dedicated to delivering innovative and high-quality solutions.",
  items: [
    {
      Institute: "Jahangirnagar University",
      Degree: "MSc in Information Technology",
      Duration: "2019 - 2021",
    },
    {
      Institute:
        "International University of Business Agriculture and Technology",
      Degree: "BSc in EEE",
      Duration: "2011 - 2016",
    },
    {
      Institute: "Cisco Academy",
      Degree: "Cisco Certified Network Associate",
      Duration: "2020",
    },
    {
      Institute: "Bangladesh University of Engineering and Technology",
      Degree: "Cisco Certification Training",
      Duration: "2019",
    },
    {
      Institute: "Code Academy",
      Degree: "Full Stack Web Development",
      Duration: "2017 - 2019",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: (
    <>
      As a seasoned <strong>full-stack developer</strong> focusing on{" "}
      <strong>NodeJS, ReactJS, JavaScript</strong>, and the{" "}
      <strong>MERN stack</strong>, I bring a wealth of experience in building
      robust, scalable web applications. My journey over the past six years as a{" "}
      <strong>DropShipping Expert</strong> in the e-commerce industry has honed
      my technical skills and deepened my understanding of the digital
      marketplace.
    </>
  ),
  skillList: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiPrisma />, name: "Prisma" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <SiShopify />, name: "Shopify" },
    { icon: <SiWordpress />, name: "WordPress" },
    { icon: <SiCisco />, name: "Cisco" },
  ],
};

const Resume = () => {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0 }}
      animate={
        prefersReducedMotion
          ? {}
          : {
              opacity: 1,
              transition: { delay: 2.4, duration: 0.4, ease: easeIn },
            }
      }
      className="min-h-[80vh] flex items-center justify-center xl:py-0 py-12"
    >
      <div className="mx-auto container">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/*experience*/}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ScrollBar orientation="vertical" />
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
                      >
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.Position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.Company}</p>
                        </div>
                        <p className="text-white/60">{item.duration}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/*education*/}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ScrollBar orientation="vertical" />
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
                      >
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.Degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.Institute}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/*skills*/}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left w-full">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className=" text-white/60  mx-auto xl:mx-0 leading-loose">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center hover:text-accent transition-all duration-300 shadow-lg ">
                              <div className="flex flex-col justify-center items-center">
                                <div className="text-6xl ">{skill.icon}</div>
                                <p className="capitalize">{skill.name}</p>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/*about*/}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className=" text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-md ">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
