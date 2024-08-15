// pages/services/customer-support.jsx
"use client";
//admin data
const adminSupport = [
  {
    title: "Administrative Task Management",
    description: [
      {
        des1: "Assist with scheduling, calendar management, and email correspondence.",
        des2: "Handle routine administrative tasks, such as document preparation, filing, and organization.",
      },
    ],
  },
  {
    title: "Lead Generation",
    description: [
      {
        des1: "Identify and qualify leads using various online tools and databases.",
        des2: "Develop and execute lead generation strategies to support sales teams.",
      },
    ],
  },
  {
    title: "Web Research & Data Collection",
    description: [
      {
        des1: "Conduct thorough web research to gather information, statistics, and data on various topics.",
        des2: "Compile and organize data into actionable insights, reports, or spreadsheets.",
      },
    ],
  },
  {
    title: "Data Entry & Management",
    description: [
      {
        des1: "Accurately enter, update, and manage data in various formats, including spreadsheets, databases, and CRM systems",
        des2: "Perform data cleaning and validation to ensure data accuracy and consistency.",
      },
    ],
  },
  {
    title: "List Building & Data Mining",
    description: [
      {
        des1: "Build targeted lists for marketing or outreach purposes by mining data from various sources.",
        des2: "Organize and segment lists based on specific criteria, such as industry, location, or demographics.",
      },
    ],
  },
  {
    title: "Excel Work & Reporting",
    description: [
      {
        des1: "Create and manage complex Excel spreadsheets, including formulas, pivot tables, and charts.",
        des2: "Generate detailed reports and dashboards to track performance, sales, or other key metrics.",
      },
    ],
  },
  {
    title: "Customer Service (Non-Voice)",
    description: [
      {
        des1: "Provide customer support through email, chat, or online messaging platforms, handling inquiries, complaints, and requests.",
        des2: "Manage customer service tickets, ensuring timely responses and resolution.",
      },
    ],
  },
];
//customer support main function
const CustomerSupport = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">Customer Support</h1>
        <p className="text-lg">Detailed description for Customer Support...</p>
        {/* Add more relevant content here */}
      </div>
    </section>
  );
};

export default CustomerSupport;
