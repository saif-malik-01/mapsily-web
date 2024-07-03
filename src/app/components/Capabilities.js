import Button from "./UI/Button";

export default function Capabilities() {
  return (
    <div className="mt-16 px-28 flex flex-col items-center">
      <h2 className="capitalize text-md">OUR CAPABILITIES</h2>
      <p className="text-4xl my-6">
      We can help you with...
      </p>
      <div className="flex gap-2">
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      </div>
    </div>
  );
}
