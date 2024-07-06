import { MdMailOutline, MdOutlineLocalPhone } from "react-icons/md";
import { LuInstagram, LuFacebook, LuLinkedin } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="relative p-8 md:px-24 px-8 pt-32">
      <div className="flex flex-col gap-4 md:flex-row justify-between md:items-center">
        <span className="flex flex-col gap-4 md:w-[40%]">
          <img src="./logo.png" width={150} />
          <p className="text-gray-300">
            Kornix - the leading digital agency based in the UK, working with
            top-tier clients, from start-ups to enterprises.
          </p>
        </span>
        <span className="flex flex-col gap-4">
          <span className="flex items-center gap-2">
            <MdMailOutline size={20}/> <p>info@mapsily.com</p>
          </span>
          <span className="flex items-center gap-2">
            <MdOutlineLocalPhone size={20}/> <p>+91 9389586440</p>
          </span>
          <span className="flex gap-4">
            <LuFacebook size={20} />
            <LuInstagram size={20} />
            <LuLinkedin size={20} />
          </span>
        </span>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between border-t border-gray-700 mt-8 md:pt-8 pt-6">
        <span className="flex gap-4 items-center">
          <a className="text-xs md:text-base">Process</a>
          <a className="text-xs md:text-base">Benefits</a>
          <a className="text-xs md:text-base">Services</a>
          <a className="text-xs md:text-base">Portfolio</a>
          <a className="text-xs md:text-base">FAQ</a>
        </span>
        <p className="mt-4">© 2024 mapsily - All Right Reserved</p>
      </div>
    </footer>
  );
}
