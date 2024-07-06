import Image from "next/image";

function Card() {
  return (
    <div className="md:w-[80%] w-[90%] bg-gray-50 flex md:p-16 p-8 items-center justify-between rounded-xl border text-black">
      <div className="md:w-[60%] h-full flex flex-col justify-center">
        <Image
          alt="fuelcab-logo"
          src="https://fuelcab.com/assets/svg/logo-fuelcab.svg"
          width={150}
          height={150}
        />
        <div className="mt-6">
          <h3 className="md:text-3xl text-xl font-bold">
            Mapsilty is the best digital agency i have ever seen! Highly
            Recommended!
          </h3>
          <p className="mt-4">
            I recently hired Mapsilty for a custom web development project and
            couldn&apos;t be happier with the results. The team was able to
            bring my unique ideas to life and create a website that truly stands
            out.
          </p>
        </div>
        <div className="mt-6">
          <p className="font-bold">Sajid Obama</p>
          <span>CEO, FuelCab India</span>
        </div>
      </div>
      <Image
        alt="fuelcab-ceo-sajid-obama"
        src="/sajid-obama.png"
        className="hidden md:block rounded-[50%]"
        width={250}
        height={250}
      />
    </div>
  );
}

export default function Testimonial() {
  return (
    <div className="md:px-24 py-20 px-6 bg-white flex flex-col items-center text-black">
      <h2 className="text-xs md:text-sm">TESTIMONIAL</h2>
      <p className="mt-2 text-center font-bold md:text-4xl text-2xl md:w-[40%]">
        Customer is Our Top Priority
      </p>
      <span className="mt-2 md:text-md text-sm text-center text-gray-800 md:w-[40%]">
        We survey all of our clients, the results of which go directly to our
        CEO.
      </span>
      <div className="mt-12 flex justify-center">
        <Card />
      </div>
    </div>
  );
}
