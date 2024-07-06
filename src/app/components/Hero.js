import Image from "next/image";
import Button from "./UI/Button";

export default function Hero() {
  return (
    <div className="mt-4 flex text-center md:px-0 px-6 flex-col gap-8 items-center justify-center text-center">
      <h1 className="md:text-6xl text-4xl font-bold text-center md:max-w-[40%]">
        Bringing Your Dream Into{" "}
        <span className="text-[#B9FD50] italic">Reality</span>
      </h1>
      <p className="md:text-sm text-xs md:max-w-[40%] text-gray-100">
        We increase revenue and ensure sustainable long-term growth for your
        business through powerful Webflow websites.
      </p>
      <Button href="tel:+919389586440">Book A Meeting</Button>
      <div className="w-full flex items-center justify-center md:gap-6 gap-4">
        <span className="h-[1px] bg-[#B9FD50] md:w-[3%] w-[4%]"></span>
        <p className="font-bold md:text-sm text-xs">
          TRUSTED BY AMAZING BRANDS
        </p>
        <span className="h-[1px] bg-[#B9FD50] md:w-[3%] w-[4%]"></span>
      </div>
      <div className="w-[80%] bg-zinc-800 h-[120px] flex items-center px-8 justify-evenly rounded-xl">
        <Image
          alt="mapsily-client-maizi"
          src="/company-2.png"
          width={100}
          height={100}
        />
        <Image
          alt="mapsily-client-fuelcab"
          src="/company-1.png"
          width={120}
          height={120}
        />
        <Image
          alt="mapsily-client-airo"
          src="/company-3.png"
          width={80}
          height={80}
        />
        <Image
          alt="mapsily-client-mamacash"
          src="/company-4.png"
          width={70}
          height={70}
        />
        <Image
          alt="mapsily-client-nexos"
          src="/company-5.png"
          width={80}
          height={80}
        />
        <Image
          alt="mapsily-client-unibe"
          src="/company-6.png"
          width={80}
          height={80}
        />
        <Image
          alt="mapsily-client-zamato"
          src="/company-7.png"
          width={80}
          height={80}
        />
      </div>
    </div>
  );
}
