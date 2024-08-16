"use client";
//Dependencies
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { easeIn, easeInOut, motion } from "framer-motion";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

//shopify Data function
const shopify = [
  {
    title: "Shopify Store Design & Customization",
    description: [
      "Design visually appealing and user-friendly Shopify stores using Shopify’s built-in themes.",
      "Customize themes with custom code to match your clients’ brand identity and specific requirements.",
    ],
  },
  {
    title: "Store Setup & Configuration",
    description: [
      "Set up Shopify stores from scratch, including domain setup, payment gateways, and essential apps.",
      "Configure shipping options, tax settings, and other backend details for a seamless launch.",
    ],
  },
  {
    title: "Product Sourcing & Listing",
    description: [
      "Source high-demand products for dropshipping and create detailed product listings with optimized descriptions and images.",
      "Organize product categories, manage inventory, and set up automated product imports.",
    ],
  },
  {
    title: "Order Fulfillment & Management",
    description: [
      "Automate order processing and fulfillment to ensure timely delivery to customers",
      "Manage supplier relationships and oversee the entire supply chain process",
    ],
  },
  {
    title: "Shopify Store Management",
    description: [
      "Handle daily operations, including order tracking, inventory management, and customer inquiries.",
      "Implement strategies to improve store performance and conversion rates.",
    ],
  },
  {
    title: "Chargeback Management & Customer Support",
    description: [
      "Respond to chargebacks and disputes, providing evidence and communication to resolve issues favorably.",
      "Offer customer support services, including handling inquiries, returns, and complaints to ensure customer satisfaction.",
    ],
  },
  {
    title: "Social Media Management & Marketing",
    description: [
      "Manage social media accounts to increase brand visibility and engage with the target audience.",
      "Develop and execute social media marketing campaigns to drive traffic to the Shopify store.",
    ],
  },
  {
    title: "Ads Campaign Management",
    description: [
      "Plan, create, and manage paid advertising campaigns on platforms like Facebook, Instagram, and Google Ads.",
      "Optimize ad campaigns for better ROI, including targeting, budget management, and ad creatives.",
    ],
  },

  {
    title: "Dropshipping Business Consultation",
    description: [
      "Provide expert advice on starting and scaling a dropshipping business, from niche selection to supplier management.",
      "Offer guidance on pricing strategies, profit margins, and operational efficiencies.",
    ],
  },
  {
    title: "Analytics & Reporting",
    description: [
      "Track store performance with Shopify’s analytics tools, providing regular reports on sales, traffic, and customer behavior.",
      "Use data-driven insights to make informed decisions and optimize the business.",
    ],
  },
];
//page main function
const ShopifyManagement = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto px-4">
        {/* Introductory Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold px-10 py-0 text-white ">
            Partnering with you on your Digital Journey
          </h1>
          <p className="text-white/80 font-light p-6">
            From inception to execution, to sustainment... I can help. Are you
            just beginning your digital journey? Are you moving through a
            digital transition? Do you need an extra hand in sustaining what you
            already have? I&#39;ve got you.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.4,
              duration: 0.4,
              ease: easeIn,
            },
          }}
        >
          <Accordion
            type="single"
            collapsible
            className="w-full md:w-3/4 xl:w-3/4"
          >
            {shopify.map((service, index) => (
              <AccordionItem key={index} value={service.title} className="">
                <AccordionTrigger className="flex items-center justify-between text-xl md:text-2xl font-bold py-8 text-white border-white/10 hover:text-accent">
                  {service.title}
                  <motion.div
                    initial={false}
                    animate={{ rotate: 0 }}
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl"
                  >
                    <FiChevronDown className="text-xl text-white" />
                  </motion.div>
                </AccordionTrigger>

                <AccordionContent asChild className="overflow-hidden">
                  <ul className="list-disc pl-6 pt-2   ">
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          duration: 1,
                          ease: easeInOut,
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: { duration: 0.2, ease: easeInOut },
                      }}
                    >
                      {service.description.map((desc, i) => (
                        <li
                          key={i}
                          className="text-white/80  text-bold text-md p-2"
                        >
                          {desc}
                        </li>
                      ))}
                    </motion.div>
                  </ul>
                </AccordionContent>

                {/* White Line Divider */}
                <div className="border-b border-white/20"></div>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
        <Link
          href="/contact"
          className="my-[30px] flex items-center justify-start"
        >
          <Button className="font-semibold px-8 py-6 text-primary">
            Talk to Me?
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ShopifyManagement;
