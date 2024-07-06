import { LuPlus } from "react-icons/lu";
import Button from "./UI/Button";

function Card() {
  return (
    <div className="bg-[#222222] flex flex-col p-8 gap-8 rounded-xl border border-lime-700 text-white">
      <div className="flex flex-col gap-4 border-b border-lime-700 pb-8">
        <h3 className="text-2xl font-bold">Standard</h3>
        <p className="text-gray-300">
          One request at a time. For companies who need on-going design support.
        </p>
      </div>
      <div className="flex flex-col gap-4 border-b border-lime-700 pb-8">
        <h3 className="text-4xl text-[#B9FD50] font-bold">$2,995/m</h3>
        <p className="text-gray-300">Pause or cancel anytime</p>
      </div>
      <ul className="flex flex-col gap-4">
        <li className="flex items-center gap-2">
          <LuPlus color="#B9FD50"/> asdasdasd
        </li>
        <li className="flex items-center gap-2">
          <LuPlus color="#B9FD50"/> asdasdasd
        </li>
        <li className="flex items-center gap-2">
          <LuPlus color="#B9FD50"/> asdasdasd
        </li>
        <li className="flex items-center gap-2">
          <LuPlus color="#B9FD50"/> asdasdasd
        </li>
      </ul>
      <Button>
        Book Now
      </Button>
    </div>
  );
}

export default function Pricing() {
  return (
    <div className="mt-18 md:px-24 px-8 py-20 flex flex-col gap-2 items-center text-center text-white">
      <h2 className="md:text-sm text-xs text-[#B9FD50] capitalize">
        CLEAR & SIMPLE PRICING
      </h2>
      <p className="font-bold md:text-4xl text-2xl">
        Simple pricing to level up your brand.
      </p>
      <span className="md:w-[40%] md:text-md text-xs text-gray-200 text-center">
        Senior experts. On-demand requests. Fast turnarounds. Flat monthly fee.
        Cancel anytime.
      </span>
      <div className="mt-16 grid md:grid-cols-3 grid-cols-1 gap-8">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
