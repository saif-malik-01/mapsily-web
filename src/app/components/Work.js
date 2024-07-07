import Image from "next/image";

export default function Work() {
  return (
    <div id="work" className="bg-white text-center text-black mt-16 md:px-28 px-6 pt-16 flex flex-col items-center">
      <h2 className="md:text-4xl text-2xl font-bold">Our Beautiful Works</h2>
      <p className="md:w-[50%] my-4 md:text-md text-sm text-gray-800">
        We help our clients grow their bottom-line with clear and professional
        websites.
      </p>
      <div className="md:mt-16 mt-8 w-full grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-4">
        <div className="md:mt-16">
          <Image
            alt="mapsily-work-mamaearth"
            src="/work/1.png"
            className="w-full"
            width={200}
            height={200}
          />
          <Image
            alt="mapsily-work-fuelcab"
            src="/work/2.png"
            className="w-full mt-8"
            width={200}
            height={200}
          />
        </div>
        <div>
          <Image
            alt="mapsily-work-maizi"
            src="/work/3.png"
            className="w-full"
            width={200}
            height={200}
          />
          <Image
            alt="mapsily-work-wellminto"
            src="/work/4.png"
            className="w-full mt-8"
            width={200}
            height={200}
          />
        </div>
        <div className="md:mt-16">
          <Image
            alt="mapsily-work-beutica"
            src="/work/5.png"
            className="w-full"
            width={200}
            height={200}
          />
          <Image
            alt="mapsily-work-sharda-university"
            src="/work/6.png"
            className="w-full mt-8"
            width={200}
            height={200}
          />
        </div>
        <div>
          <Image
            alt="mapsily-work-zamato"
            src="/work/7.png"
            className="w-full"
            width={200}
            height={200}
          />
          <Image
            alt="mapsily-work-nykaa"
            src="/work/8.png"
            className="w-full mt-8"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
