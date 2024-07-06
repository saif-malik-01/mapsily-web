import Image from "next/image";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="w-full border-gray-200">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto py-8 md:px-16 px-8">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image alt="mapsily-logo" src="/logo.png" width={120} height={120} />
        </a>
        <div className="flex gap-16 items-center">
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-link-container"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <a
                  href="/"
                  aria-current="page"
                  className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="tel:+919389586440"
                  className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <Button href="tel:+919389586440">Get Started</Button>
        </div>
      </div>
    </nav>
  );
}
