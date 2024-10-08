"use client";
//dependencies
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./ui/button";
//dependencies from internal component
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { v4 as uuidv4 } from "uuid"; // Import uuid library for unique ID generation

//routes for mobile view
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
    name: "resume",
    path: "/resume",
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

//Mobile Nav menu
const MobileNav = () => {
  const pathname = usePathname();
  const uniqueId = uuidv4(); // Generate a unique ID for this instance

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent
        className="flex flex-col"
        aria-labelledby={`dialog-title-${uniqueId}`}
        aria-describedby={`dialog-description-${uniqueId}`}
      >
        {/*logo here */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/" aria-label="Home">
            <h1
              id={`dialog-title-${uniqueId}`}
              className="text-white text-4xl font-semibold"
            >
              Ayon<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* mobile nav */}

        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={` ${
                link.path === pathname && "text-accent border-b-2 border-accent"
              } text-xl capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="https://www.upwork.com/freelancers/~013d3ec6c65c896873?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hire me - UpWork"
          >
            <Button> Hire me</Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
