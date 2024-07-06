export default function Work() {
  return (
    <div className="bg-white text-center text-black mt-16 md:px-28 px-6 pt-16 flex flex-col items-center">
      <h2 className="md:text-4xl text-2xl font-bold">Our Beautiful Works</h2>
      <p className="md:w-[50%] my-4 md:text-md text-sm text-gray-800">
        We help our clients grow their bottom-line with clear and professional
        websites.
      </p>
      <div className="md:mt-16 mt-8 w-full grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-4">
        <div className="md:mt-16">
          <img src="./work/1.png" className="w-full" />
          <img src="./work/2.png" className="w-full mt-8" />
        </div>
        <div>
          <img src="./work/3.png" className="w-full" />
          <img src="./work/4.png" className="w-full mt-8" />
        </div>
        <div className="md:mt-16">
          <img src="./work/5.png" className="w-full" />
          <img src="./work/6.png" className="w-full mt-8" />
        </div>
        <div>
          <img src="./work/1.png" className="w-full" />
          <img src="./work/2.png" className="w-full mt-8" />
        </div>
      </div>
    </div>
  );
}
