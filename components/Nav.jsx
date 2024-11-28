"use client";
//Dpendencies
import Link from "next/link";
import { usePathname } from "next/navigation";

//route path
const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

//Nav bar
const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all `}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
