import Button from "./UI/Button";

export default function Process({ id, title, subtitle, description }) {
  return (
    <section
      id={id}
      className="pt-20 md:px-28 px-6 flex flex-col md:items-start md:text-start text-center items-center"
    >
      <h2 className="text-xs md:text-sm text-font text-[#B9FD50] capitalize">
        {title}
      </h2>
      <div className="mt-2 flex md:flex-row flex-col md:gap-8 gap-2">
        <p className="text-2xl md:text-4xl font-bold md:text-start text-center">
          {subtitle}
        </p>
        <span className="md:w-[60%] md:text-start text-center">
          <p className="mb-10 text-sm md:text-[1.125rem] text-gray-300 text-justify leading-[1.5rem]">{description}</p>
          <Button href="tel:+919389586440">Get a Quote</Button>
        </span>
      </div>
    </section>
  );
}
