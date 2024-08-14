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

import axios from "axios";
import { easeIn, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
//info function in contact data
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
  // Form data handling
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // Error handling
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstname) newErrors.firstname = "First name is required";
    if (!formData.lastname) newErrors.lastname = "Last name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.service) newErrors.service = "Service selection is required";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setErrorMessage("Please fix the errors before submitting.");
      return false;
    }
    return true;
  };

  // Form Handle Chnage
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle Select change
  const handleSelectChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      service: value,
    }));
  };

  // Form submit handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post("/api/contact", formData);
      alert(response.data.message);
    } catch (error) {
      console.error("Error sending message", error);
      setErrorMessage("Failed to send message.");
    }
  };

  // Clear error messages after 3 seconds
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => {
        setErrors({});
        setErrorMessage("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [errors]);

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
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              {/* Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="First Name"
                />
                {errors.firstname && (
                  <p className="text-red-500">{errors.firstname}</p>
                )}
                <Input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Last Name"
                />
                {errors.lastname && (
                  <p className="text-red-500">{errors.lastname}</p>
                )}
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                />
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
              </div>
              <Select
                name="service"
                value={formData.service}
                onChange={handleSelectChange}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="webdev">Web Devlopment</SelectItem>
                    <SelectItem value="uiux">UI/UX Design</SelectItem>
                    <SelectItem value="shopify">Shopify</SelectItem>
                    <SelectItem value="customer-service">
                      Customer Service
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.service && (
                <p className="text-red-500">{errors.service}</p>
              )}
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="h-[200px]"
                placeholder="Type your message here"
              />
              {errors.message && (
                <p className="text-red-500">{errors.message}</p>
              )}
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
