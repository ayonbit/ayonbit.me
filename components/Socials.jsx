//Dependencies
import Link from "next/link";
import {
  FaCoffee,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";

//socila icons
const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaFacebook />, path: "" },
  { icon: <FaInstagram />, path: "" },
  { icon: <FaTwitter />, path: "" },
  { icon: <FaSkype />, path: "" },
  { icon: <FaCoffee />, path: "" },
];

//Social component
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
