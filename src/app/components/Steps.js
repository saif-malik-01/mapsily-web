import Triangle from "./UI/Triangle";

function Step() {
  return (
    <div className="md:mt-16 mt-8 flex flex-col items-center md:items-start md:text-start text-center">
      <div className="flex md:w-full">
        <span className="flex items-center justify-center bg-[#B9FD50] p-8 w-fit rounded-[50%]">
          <img src="./icon.svg" width={50} />
        </span>
        <Triangle />
      </div>
      <h2 className="mt-6 text-xl">Subscribe & get started</h2>
      <p className="mt-4 text-md text-gray-300">
        Submit as many design tasks as you need without worrying about
        individual project fees.
      </p>
    </div>
  );
}

export default function Steps() {
  return (
    <div className="md:mt-16 mt-8 md:px-28 px-6 flex md:flex-row flex-col md:gap-8">
      <Step />
      <Step />
      <Step />
    </div>
  );
}
