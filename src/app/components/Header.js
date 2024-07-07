import Image from "next/image";
import Button from "./UI/Button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-gray-200">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto py-8 md:px-16 px-8">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image alt="mapsily-logo" src="/logo.png" width={140} height={140} />
        </Link>
        <div className="flex gap-16 items-center">
          <nav
            className="hidden w-full md:block md:w-auto"
            id="navbar-link-container"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <Link
                  href="/"
                  aria-current="page"
                  className="relative text-[1.125rem] w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#process"
                  className="relative text-[1.125rem] w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="relative text-[1.125rem] w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+919389586440"
                  className="relative text-[1.125rem] w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <Button href="tel:+919389586440">Get Started</Button>
        </div>
      </div>
    </header>
  );
}
