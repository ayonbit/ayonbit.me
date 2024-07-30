//Dependencies
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//Internal Dependencies
import Socials from "@/components/Socials";
//Home Page
const Home = () => {
  return (
    <section className="h-full">
      {" "}
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1">
              Hello I&apos;m <br />{" "}
              <span className="text-accent">Ayon Bit</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              earum voluptates id, aliquid tenetur quae ut consequuntur rerum,
              ipsa hic excepturi asperiores quasi ea!
            </p>
            {/* button and social media*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className=" uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent 
                  rounded-full flex justify-center items-center 
                  text-white hover:bg-white hover:text-primary 
                  hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo*/}
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
