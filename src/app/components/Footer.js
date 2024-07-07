import { MdMailOutline, MdOutlineLocalPhone } from "react-icons/md";
import { LuInstagram, LuFacebook, LuLinkedin, LuYoutube, LuTwitter } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative p-8 md:px-24 px-8 pt-32">
      <div className="flex flex-col gap-4 md:flex-row justify-between md:items-center">
        <span className="flex flex-col gap-4 md:w-[40%]">
          <Image alt="mapsily-logo" src="/logo.png" width={150} height={100} />
          <p className="text-gray-300 text-justify">
            Mapsily - Bringing Your Dream Into Reality the leading Marketing, An
            agency based in the India, working with top-tier clients&rsquo; from
            start-ups to enterprises.
          </p>
        </span>
        <span className="flex flex-col gap-4">
          <Link
            href="mailto:info@mapsily.com"
            className="cursor-pointer flex items-center gap-2 hover:text-[#B9FD50]"
          >
            <MdMailOutline size={20} className="hover:text-[#B9FD50]" />{" "}
            info@mapsily.com
          </Link>
          <Link
            href="tel:+919389586440"
            className="cursor-pointer flex items-center gap-2 hover:text-[#B9FD50]"
          >
            <MdOutlineLocalPhone size={20} className="hover:text-[#B9FD50]" />{" "}
            +91 9389586440
          </Link>
          <span className="flex gap-4">
            <Link href="https://www.facebook.com/mapsily" target="_blank">
              <LuFacebook size={20} className="hover:text-[#B9FD50]" />
              <span className="text-[0px]">Facebook Link</span>
            </Link>
            <Link href="https://www.instagram.com/mapsily" target="_blank">
              <LuInstagram size={20} className="hover:text-[#B9FD50]" />
              <span className="text-[0px]">Instagram Link</span>
            </Link>
            <Link href="https://www.linkedin.com/mapsily" target="_blank">
              <LuLinkedin size={20} className="hover:text-[#B9FD50]" />
              <span className="text-[0px]">Linkedin Link</span>
            </Link>
            <Link href="https://www.youtube.com/mapsily" target="_blank">
              <LuYoutube size={20} className="hover:text-[#B9FD50]" />
              <span className="text-[0px]">Youtube Link</span>
            </Link>
            <Link href="https://www.x.com/mapsily" target="_blank">
              <LuTwitter size={20} className="hover:text-[#B9FD50]" />
              <span className="text-[0px]">X Link</span>
            </Link>
          </span>
        </span>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between border-t border-gray-700 mt-8 md:pt-8 pt-6">
        <span className="flex gap-4 items-center">
          <Link href="#process" className="hover:text-[#B9FD50] text-xs md:text-base">
            Process
          </Link>
          <Link href="#benefits" className="hover:text-[#B9FD50] text-xs md:text-base">
            Benefits
          </Link>
          <Link href="#services" className="hover:text-[#B9FD50] text-xs md:text-base">
            Services
          </Link>
          <Link href="#work" className="hover:text-[#B9FD50] text-xs md:text-base">
            Portfolio
          </Link>
          <Link  href="#faq" className="hover:text-[#B9FD50] text-xs md:text-base">
            FAQ
          </Link>
        </span>
        <p className="mt-4">© 2024 Mapsily - All Right Reserved</p>
      </div>
    </footer>
  );
}
