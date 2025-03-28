import Resume from "@/components/Resume";
export const metadata = {
  title: "About",
  description:
    "With over a decade of experience, I specialize in full-stack development, technical support, and e-commerce operations. Currently, I lead web application development at Incognito Solution Inc, using the latest technologies. My background includes managing support teams at Jot Form Inc and optimizing Shopify stores at Fly Limited Corp. I’m passionate about delivering high-quality solutions that drive business success.",
  url: `${process.env.BASE_URL}/about`,
};
const AboutPage = () => {
  return (
    <div>
      <Resume />
    </div>
  );
};

export default AboutPage;
