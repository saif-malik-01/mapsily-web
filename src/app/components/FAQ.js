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
        <h4 className="md:w-[40%] text-center md:text-xl text-md text-gray-300">
          Jump on a membership and start requesting designs right away!
        </h4>
        <Button href="tel:+919389586440">Get a Quote</Button>
      </div>
    </div>
  );
}

export function Question({ question, answer }) {
  const [show, setShow] = useState(false);

  return (
    <div
      onClick={() => setShow(!show)}
      className="cursor-pointer mt-6 bg-black p-4 rounded-xl text-white gap-6 h-fit"
    >
      <div className="flex justify-between items-center">
        <p>{question}</p>
        <span className="p-1 bg-[#B9FD50] rounded-[50%]">
          {show ? (
            <LuChevronUp color="black" size={24} />
          ) : (
            <LuChevronDown color="black" size={24} />
          )}
        </span>
      </div>
      <div
        className={`${
          show ? "max-h-[1000px]" : "max-h-[0px]"
        } transition-all ease-in-out duration-400 overflow-hidden w-full text-gray-300`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative mt-18 md:px-24 px-8 py-20 bg-white flex flex-col gap-4 items-center text-black"
    >
      <p className="font-bold md:text-4xl text-2xl">FAQ&apos;s</p>
      <span className="md:text-md text-sm text-gray-600">
        Providing answers to your questions
      </span>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4 md:mb-[28%] mb-[80%]">
        <Question
          question="What is digital marketing?"
          answer="In the simplest way, we may describe digital marketing as a marketing tool that includes digital interface and/or which involves a phone, laptop, tablet, or another electronic device connected to internet for communication.
For example, a social media post, a paid ad on Google or Facebook , SEO efforts, a blog post, an email, or an app are some of the most popular mediums to carry digital marketing. "
        />
        <Question
          question="Why do you need digital marketing? "
          answer="Digital and online channels have rapidly and deeply penetrated human lives which necessitates any and every form of business to be digitally agile The reality is that the digital environment isn’t going away anytime soon and it is going to peak in coming years.
The business would need a strong and dynamic presence on world of internet to catch up with the latest generation preferences and a large chunk of consumers are using digital as the first interface of their buying journey. Besides, digital marketing has the added benefit of being measurable and flexible. "
        />
        <Question
          question="Do I really need a website?"
          answer="Yes! Word of mouth can be great, but a majority of consumers find and research companies online before making any purchases. An online presence gives your company credibility and boosts brand awareness. Plus, websites are an avenue for endless marketing strategies, including e-commerce, online customer service, and consumer engagement. "
        />
        <Question
          question="Can I do it myself or do I need an agency?"
          answer="That depends on who you are, and scale of your business. Many business owners, marketers or entrepreneurs may do some part of digital marketing themselves however it may compromise their core work. On the other hand, an agency can be helpful in terms of devising a coherent strategy, allowing you to make use of experts to get better results, and figuring out where to best spend your money.
So eventually it depends on your skills, finances and scale of business to rope in a media agency or not. "
        />
        <Question
          question="How much does digital marketing cost?"
          answer="This is the most asked question by start ups or those who are new to digital marketing and much like any other marketing campaign, costs can vary dramatically from business to business. However, unlike traditional marketing, digital marketing cost is relatively lower and marketing spend is more measurable than traditional ways. You may need to spend higher depending on nature of business, geography and competition. That said the digital spend is variable and can be controlled by businesses depending on their marketing budget.  "
        />
         <Question
          question="How much does it cost?"
          answer="Costs vary based on servcies needed, with flexible pricing to fit your budget and goals."
        />
      </div>
      <PriceCard />
    </section>
  );
}
