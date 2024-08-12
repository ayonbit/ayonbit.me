//dpendencies
import Link from "next/link";

//External import
import Nav from "@/components/Nav";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";

//Header component
const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
      <div className="container mx-auto flex justify-between items-center">
        {/*logo here */}
        <Link href="/" aria-label="Home">
          <h1 className="text-4xl font-semibold">
            Ayon<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop Navbar & hire me button*/}

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link
            href="https://www.upwork.com/freelancers/~013d3ec6c65c896873?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hire me - UpWork"
          >
            <Button> Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
