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
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Ayon<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop Navbar & hire me button*/}

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
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