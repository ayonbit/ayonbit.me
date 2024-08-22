"use client";
//Dependencies
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//Internal Dependencies
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";

//Home Page
const Home = () => {
  //CV File Handler
  const downloadCvHandler = () => {
    const cvFile = "/assets/Ayon_Bit_CV.txt"; //cv url

    // Create a temporary link element and trigger the download
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Ayon_Bit_CV.txt"; // Set the default file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen overflow-hidden">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*text */}
          <div className="text-center xl:text-left order-2 xl:order-none ">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1">
              Hello I&apos;m <br />{" "}
              <span className="text-accent">Ayon Bit</span>
            </h1>
            {/* Change this context for real */}
            <p className="max-w-[500px] mb-9 text-white/80">
              Experienced software developer skilled in multiple programming
              languages, collaborative, and effective at providing technical
              guidance. Dedicated to staying current with industry trends and
              motivated to create high-quality software.
            </p>
            {/* button and social media*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={downloadCvHandler}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="grid grid-cols-4 gap-4 md:flex md:flex-row xl:flex-row"
                  iconStyles="w-9 h-9 border border-accent 
                  rounded-full flex justify-center items-center 
                  text-white hover:bg-white hover:text-primary 
                  hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo*/}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      {/* Stats*/}
      <Stats />
    </section>
  );
};

export default Home;
