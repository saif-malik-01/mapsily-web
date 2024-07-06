import Button from "./UI/Button";

export default function Process({ title, subtitle, description }) {
  return (
    <div className="mt-20 md:px-28 px-6 flex flex-col md:items-start md:text-start text-center items-center">
      <h2 className="text-xs md:text-sm text-font text-[#B9FD50] capitalize">{title}</h2>
      <div className="mt-2 flex md:flex-row flex-col md:gap-8 gap-2">
        <p className="text-2xl md:text-4xl font-bold md:text-start text-center">{subtitle}</p>
        <span className="md:w-[60%] md:text-start text-center">
          <p className="mb-4 text-sm md:text-md text-gray-300">{description}</p>
          <Button>See Pricing</Button>
        </span>
      </div>
    </div>
  );
}
