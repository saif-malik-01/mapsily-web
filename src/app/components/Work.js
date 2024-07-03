import Button from "./UI/Button";

export default function Work() {
  return (
    <div className="mt-16 px-28 flex flex-col items-center">
      <h2 className="text-4xl">Our Beautiful Works</h2>
      <p className="my-6">
        We help our clients grow their bottom-line with clear and professional
        websites.
      </p>
      <Button/>
      <div className="mt-16 w-full grid grid-cols-4 gap-0">
        <div className="mt-16">
            <img src="https://picsum.photos/seed/picsum/300/200" width={200} />
            <img src="https://picsum.photos/seed/picsum/300/200" width={200} />
        </div>
        <div>
            <img src="https://picsum.photos/seed/picsum/300/200" width={200} />
            <img src="https://picsum.photos/seed/picsum/300/200" width={200} />
        </div>
        <div className="mt-16">
            <img src="https://picsum.photos/seed/picsum/300/200" width={200} />
            <img src="https://picsum.photos/seed/picsum/300/200" width={200} />
        </div>
        <div>
            <img src="https://picsum.photos/seed/picsum/300/200" width={200} />
            <img src="https://picsum.photos/seed/picsum/300/200" width={200} />
        </div>
      </div>
    </div>
  );
}
