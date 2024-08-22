//Dependencies
import Link from "next/link";
import {
  FaCoffee,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSkype,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

//socila icons
const socials = [
  { icon: <FaGithub />, path: "https://github.com/ayonbit" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/ayonbit" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/ayonbit" },
  { icon: <FaTwitter />, path: "https://x.com/ayonbit" },
  { icon: <FaSkype />, path: "skype:live:ayon.bit?chat" },
  {
    icon: <FaCoffee />,
    path: "https://www.upwork.com/freelancers/~01810425a438c4f0a7?mp_source=share",
  },
  { icon: <FaLinkedin />, path: "https://www.fiverr.com/suprovatbit" },
  { icon: <FaWhatsapp />, path: "" },
];

//Social component
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
