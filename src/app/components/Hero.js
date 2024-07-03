import Button from "./UI/Button";

export default function Hero() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <h1 className="text-6xl font-bold text-center max-w-[40%]">
        Bringing Your Dream Into <span className="lead">Reality</span>
      </h1>
      <p className="max-w-[40%]">
        We increase revenue and ensure sustainable long-term growth for your
        business through powerful Webflow websites.
      </p>
      <Button></Button>
      <div className="w-full flex items-center justify-center gap-6">
        <span className="h-[1px] bg-white w-[3%]"></span>
        <p>TRUSTED BY AMAZING BRANDS</p>
        <span className="h-[1px] bg-white w-[3%]"></span>
      </div>
      <div className="w-[80%] bg-gray-600 h-[100px] rounded-xl"></div>
    </div>
  );
}
