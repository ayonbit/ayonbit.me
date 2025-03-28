import Work from "@/components/Work";

export const metadata = {
  title: "Work - AyonBit",
  description: "Check out some of my recent projects.",
  url: `${process.env.BASE_URL}/work`, // Ensures consistency
  openGraph: {
    type: "website",
    siteName: "AyonBit",
    title: "Work - AyonBit",
    description: "Check out some of my recent projects.",
    url: `${process.env.BASE_URL}/work`, // Ensures consistency
  },
  twitter: {
    card: "summary_large_image",
    site: "@ayonbit",
    title: "Work - AyonBit",
    description: "Check out some of my recent projects.",
  },
};

const WorkPage = () => {
  return (
    <div>
      <Work />
    </div>
  );
};

export default WorkPage;
