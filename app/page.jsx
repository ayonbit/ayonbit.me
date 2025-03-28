"use client";

// Dependencies
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { useCallback } from "react";
import { FiDownload } from "react-icons/fi";

// Internal Dependencies
import Photo from "@/components/Photo";

// Dynamic Imports
const Stats = dynamic(() => import("@/components/Stats"));
const Socials = dynamic(() => import("@/components/Socials"), { ssr: false });

// Home Page
const Home = () => {
  // CV File Handler
  const downloadCvHandler = useCallback(() => {
    const cvFile = "/assets/Ayon_Bit_CV.txt"; // CV url

    try {
      const link = document.createElement("a");
      link.href = cvFile;
      link.download = "Ayon_Bit_CV.txt";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading CV:", error);
      alert("There was an issue downloading the CV.");
    }
  }, []);

  return (
    <section className="min-h-screen overflow-hidden">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none ">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1">
              Hello I&apos;m <br />{" "}
              <span className="text-accent">Ayon Bit</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Experienced software developer skilled in multiple programming
              languages, collaborative, and effective at providing technical
              guidance. Dedicated to staying current with industry trends and
              motivated to create high-quality software.
            </p>
            {/* Button and Social Media */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={downloadCvHandler}
                aria-label="Download CV"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb- xl:mb-0">
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
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      {/* Stats */}
      <Stats />
    </section>
  );
};

export default Home;
