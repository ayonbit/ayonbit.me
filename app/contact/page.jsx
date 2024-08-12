"use client";
//dependencies
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { easeIn, motion } from "framer-motion";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";

//info function in contact
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+880) XXXX XXXXXX",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "mkdir39A@proton.me",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Incognito Solution,Bangladesh",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: easeIn },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* info */}
          <div className=" flex flex-col justify-start items-start">
            <h3 className="text-4xl text-accent ">Let&#39;s work together</h3>
            <p className="text-white/60 py-10">
              I&#39;m available to take on new projects and would love to
              discuss them. Feel free to reach out with any ideas.
              <br />
              I&#39;ll get back to you promptly.
            </p>
            <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col  gap-10">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className=" flex items-center justify-center w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md  ">
                        <div className="text-[28px] ">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* from */}
          <div className="xl:w-[100%]  order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              {/* info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="First Name" />
                <Input type="text" placeholder="Last Name" />
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Phone" />
              </div>
              {/* Select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="est">Web Devlopment</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Shopify</SelectItem>
                    <SelectItem value="nst">Customer Service</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Text Area */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here"
              />

              {/* btn */}
              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
