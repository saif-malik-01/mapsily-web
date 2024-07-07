import { LuRecycle, LuRocket } from "react-icons/lu";
import Triangle from "./UI/Triangle";
import { MdDesignServices } from "react-icons/md";

function Step({ Icon, title, subtitle }) {
  return (
    <div id="process" className="md:mt-16 mt-8 flex flex-col items-center md:items-start md:text-start text-center">
      <div className="flex md:w-full">
        <span className="flex items-center justify-center bg-[#B9FD50] p-6 w-fit rounded-[50%]">
          <Icon size={40} color="black" />
        </span>
        <Triangle />
      </div>
      <h2 className="mt-6 text-xl">{title}</h2>
      <p className="mt-4 text-md text-gray-300">{subtitle}</p>
    </div>
  );
}

export default function Steps() {
  return (
    <div className="md:mt-16 mt-8 md:px-28 px-6 flex md:flex-row flex-col md:gap-8">
      <Step
        Icon={LuRocket}
        title="Subscribe & get started"
        subtitle="Submit as many design tasks as you need without worrying about
        individual project fees."
      />
      <Step
        Icon={MdDesignServices}
        title="Polished designs - on time"
        subtitle="Our designers get to work to deliver your request. Receive your design within a few days."
      />
      <Step
        Icon={LuRecycle}
        title="Revisions made simple"
        subtitle="Custom designs, prompt replies and as many revisions as you need."
      />
    </div>
  );
}
