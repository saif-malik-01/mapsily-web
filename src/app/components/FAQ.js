"use client";

import { useState } from "react";
import Button from "./UI/Button";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

function PriceCard() {
  return (
    <div className="absolute md:mx-[40px] mx-8 -bottom-16 flex items-center justify-center">
      <div className="flex gap-4 flex-col items-center justify-center md:p-16 p-8 rounded-xl bg-[#1E2008] text-white">
        <h3 className="md:w-[60%] font-bold md:text-6xl text-2xl text-center">
          Become part of the design revolution
        </h3>
        <h4 className="md:w-[40%] text-center text-gray-300">
          Jump on a membership and start requesting designs right away!
        </h4>
        <Button>See Pricing</Button>
      </div>
    </div>
  );
}

export function Question() {
  const [show, setShow] = useState(false);

  return (
    <div
      onClick={() => setShow(!show)}
      className="cursor-pointer mt-6 bg-black p-4 rounded-xl text-white gap-6"
    >
      <div className="flex justify-between items-center">
        <p>Do you have specific princing plans to show?</p>
        <span className="p-1 bg-[#B9FD50] rounded-[50%]">
          {show ? <LuChevronUp color="black" size={24} /> :  <LuChevronDown color="black" size={24} />}
        </span>
      </div>
      <div
        className={`${
          show ? "block" : "hidden"
        } text-gray-300 mt-4`}
      >
        <p>asda asd asd asd asd asd asd asd</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="relative mt-18 md:px-24 px-8 py-20 bg-white flex flex-col gap-4 items-center text-black">
      <p className="font-bold md:text-4xl text-2xl">FAQ's</p>
      <span className="md:text-md text-sm text-gray-600">
        Providing answers to your questions
      </span>
      <div className="md:w-[38%] w-[90%] md:mb-[28%] mb-[80%]">
        <Question />
        <textarea
          className="mt-6 w-full p-8 border-black outline-none border rounded-xl"
          placeholder="Ash us what you want to know..."
          multiple
        />
        <span className="mt-4 gap-8 flex justify-between items-center">
          <p className="text-sm text-gray-400">
            We will answer your questions via email within 48 hours.
          </p>
          <Button>Send</Button>
        </span>
      </div>
      <PriceCard />
    </div>
  );
}
