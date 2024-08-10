"use client";
//dependencies
import { ScrollArea } from "@/components/ui/scroll-area";
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
  FaCss3,
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
  SiShopify,
  SiTailwindcss,
  SiWordpress,
} from "react-icons/si";

//about data
const about = {
  title: "About Me",
  description:
    "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus ad doloremque, placeat deleniti reprehenderit.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ayon Bit",
    },
    {
      fieldName: "Email",
      fieldValue: "ayonbit@gmail.com",
    },
    {
      fieldName: "Phone",
      fieldValue: "+88 01686354606",
    },
    {
      fieldName: "Experience",
      fieldValue: "6+ years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi",
    },
    {
      fieldName: "Skype",
      fieldValue: "ayon.bit",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Avilable",
    },
    {
      fieldName: "Language",
      fieldValue: "English,Bengali, Hindi",
    },
  ],
};
//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quisquam laborum facere.",
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
      Position: "Administrive Support",
      duration: "2013-2016",
    },
    {
      Company: "Freelance Marketplace",
      Position: "Data Entry",
      duration: "2011-2013",
    },
  ],
};
//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, in! Consequatur, tempora",
  items: [
    {
      Institute: "Jahangirnagar University",
      Degree: "Msc in Information Tecnology",
      Duration: "2019 - 2021",
    },
    {
      Institute:
        "International University of Business Agriculture and Technology",
      Degree: "Bsc in EEE",
      Duration: "2011 - 2016",
    },
    {
      Institute: "Cisco Academy",
      Degree: "Cisco Certified Network Associates",
      Duration: "2020",
    },
    {
      Institute: "Bangladesh University of Engineering and Technology",
      Degree: "Cisco Certification Training",
      Duration: "2019",
    },
    {
      Institute: "Code Academy ",
      Degree: "Full Stack Web Development",
      Duration: "2017 - 2019",
    },
  ],
};

//skills
const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis vel unde add.",
  skillList: [
    {
      icons: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icons: <FaCss3 />,
      name: "Css3",
    },
    {
      icons: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icons: <FaJs />,
      name: "JavaScript",
    },
    {
      icons: <SiTailwindcss />,
      name: "Tailwind Css",
    },
    {
      icons: <SiMongodb />,
      name: "MongoDb",
    },
    {
      icons: <SiExpress />,
      name: "Express Js",
    },
    {
      icons: <FaReact />,
      name: "React Js",
    },
    {
      icons: <FaNodeJs />,
      name: "Node Js",
    },
    {
      icons: <SiNextdotjs />,
      name: "Next Js",
    },
    {
      icons: <SiFirebase />,
      name: "Firebase",
    },

    {
      icons: <FaGithub />,
      name: "Github",
    },
    {
      icons: <FaFigma />,
      name: "Figma",
    },
    {
      icons: <SiShopify />,
      name: "Shopify",
    },
    {
      icons: <SiWordpress />,
      name: "Wordpress",
    },
    {
      icons: <SiCisco />,
      name: "Cisco",
    },
  ],
};

//resume page
const resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: easeIn },
      }}
      className="min-h-[80vh] flex items-center justify-center  xl:py-0 py-12"
    >
      <div className="mx-auto container">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience </TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full ">
            {/* experience */}
            <TabsContent value="experience" className="w-full ">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-center gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.Position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60">{item.Company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full ">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[300px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-center gap-1"
                        >
                          <span className="text-accent">{item.Duration}</span>
                          <h3 className="text-sm max-w-[300px] min-h-[60px] text-left lg:text-left md:text-left">
                            {item.Degree}
                          </h3>
                          <div className="flex items-center gap-3 text-center">
                            {/* dot */}
                            <p className="text-white/60">{item.Institute}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center hover:text-accent transition-all duration-300 ">
                              <div className="text-6xl ">{skill.icons}</div>
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
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
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

export default resume;
