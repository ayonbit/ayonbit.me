// pages/services/shopify-management.jsx
"use client";
//shopify Data
const shopify = [
  {
    title: "Shopify Store Design & Customization",
    description: [
      {
        des1: "Design visually appealing and user-friendly Shopify stores using Shopify’s built-in themes.",
        des2: "Customize themes with custom code to match your clients’ brand identity and specific requirements.",
      },
    ],
  },
  {
    title: "Store Setup & Configuration",
    description: [
      {
        des1: "Set up Shopify stores from scratch, including domain setup, payment gateways, and essential apps.",
        des2: "Configure shipping options, tax settings, and other backend details for a seamless launch.",
      },
    ],
  },
  {
    title: "Product Sourcing & Listing",
    description: [
      {
        des1: "Source high-demand products for dropshipping and create detailed product listings with optimized descriptions and images.",
        des2: "Organize product categories, manage inventory, and set up automated product imports.",
      },
    ],
  },
  {
    title: "Order Fulfillment & Management",
    description: [
      {
        des1: "Automate order processing and fulfillment to ensure timely delivery to customers",
        des2: "Manage supplier relationships and oversee the entire supply chain process",
      },
    ],
  },
  {
    title: "Shopify Store Management",
    description: [
      {
        des1: "Handle daily operations, including order tracking, inventory management, and customer inquiries.",
        des2: "Implement strategies to improve store performance and conversion rates.",
      },
    ],
  },
  {
    title: "Chargeback Management & Customer Support",
    description: [
      {
        des1: "Respond to chargebacks and disputes, providing evidence and communication to resolve issues favorably.",
        des2: "Offer customer support services, including handling inquiries, returns, and complaints to ensure customer satisfaction.",
      },
    ],
  },
  {
    title: "Social Media Management & Marketing",
    description: [
      {
        des1: "Manage social media accounts to increase brand visibility and engage with the target audience.",
        des2: "Develop and execute social media marketing campaigns to drive traffic to the Shopify store.",
      },
    ],
  },
  {
    title: "Ads Campaign Management",
    description: [
      {
        des1: "Plan, create, and manage paid advertising campaigns on platforms like Facebook, Instagram, and Google Ads.",
        des2: "Optimize ad campaigns for better ROI, including targeting, budget management, and ad creatives.",
      },
    ],
  },
  {
    title: "",
    description: [
      {
        des1: "",
        des2: "",
      },
    ],
  },
  {
    title: "Dropshipping Business Consultation",
    description: [
      {
        des1: "Provide expert advice on starting and scaling a dropshipping business, from niche selection to supplier management.",
        des2: "Offer guidance on pricing strategies, profit margins, and operational efficiencies.",
      },
    ],
  },
  {
    title: "Analytics & Reporting",
    description: [
      {
        des1: "Track store performance with Shopify’s analytics tools, providing regular reports on sales, traffic, and customer behavior.",
        des2: "Use data-driven insights to make informed decisions and optimize the business.",
      },
    ],
  },
];
//page main function
const ShopifyManagement = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">Shopify Management</h1>
        <p className="text-lg">
          Detailed description for Shopify Management...
        </p>
        {/* Add more relevant content here */}
      </div>
    </section>
  );
};

export default ShopifyManagement;
