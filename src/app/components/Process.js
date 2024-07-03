import Button from "./UI/Button";
import Triangle from "./UI/Triangle";

function Step() {
  return (
    <div>
      <div className="flex">
        <span className="flex items-center justify-center bg-white p-8 w-fit rounded-[50%]">
          <img src="./icon.svg" width={50} />
        </span>
        <Triangle />
      </div>
      <h2 className="mt-6">Subscribe & get started</h2>
      <p className="mt-4 text-gray-400">
        Submit as many design tasks as you need without worrying about
        individual project fees.
      </p>
    </div>
  );
}

export default function Process() {
  return (
    <div className="mt-16 px-28">
      <h2 className="capitalize">How We Work</h2>
      <div className="mt-2 flex gap-8">
        <p className="text-4xl">
          Get a dedicated design team at fraction of the cost.
        </p>
        <span>
          <p className="mb-4 text-gray-400">
            Grow your brand with high-quality design for a flat monthly fee.
            Work with senior designers. Subscribe and make as many requests as
            you need - no limits.
          </p>
          <Button></Button>
        </span>
      </div>
      <div className="mt-16 flex gap-8">
        <Step />
        <Step />
        <Step />
      </div>
    </div>
  );
}
