"use client";
// Dependencies
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
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const ContactForm = () => {
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

  // Form Handle Change
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
      const response = await axios.post("/api/contact/", formData);
      toast.success(response.data.message);
      // Reset form data after successful submission
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message", error);
      setErrorMessage("Failed to send message.");
      toast.error("Failed to send message.");
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
    <div className="xl:w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 p-6 sm:p-8 bg-[#27272c] rounded-xl"
      >
        {/* Info */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <Input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="First Name"
          />
          {errors.firstname && (
            <p className="text-accent">{errors.firstname}</p>
          )}
          <Input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Last Name"
          />
          {errors.lastname && <p className="text-accent">{errors.lastname}</p>}
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          {errors.email && <p className="text-accent">{errors.email}</p>}
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
          {errors.phone && <p className="text-accent">{errors.phone}</p>}
        </div>
        <Select
          name="service"
          value={formData.service}
          onValueChange={handleSelectChange}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a Service" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select a Service</SelectLabel>
              <SelectItem value="Web Development">Web Development</SelectItem>
              <SelectItem value="UiUx Design">UI/UX Design</SelectItem>
              <SelectItem value="Shopify">Shopify DropShipping</SelectItem>
              <SelectItem value="Administrative Support">
                Administrative Support
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {errors.service && <p className="text-accent">{errors.service}</p>}
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="h-[200px]"
          placeholder="Type your message here"
        />
        {errors.message && <p className="text-accent">{errors.message}</p>}
        {/* btn */}
        <Button size="md" className="w-full sm:w-auto max-w-xs mx-auto">
          Send Message
        </Button>
        {errorMessage && (
          <p className="text-accent text-center">{errorMessage}</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
