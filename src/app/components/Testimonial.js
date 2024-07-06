function Card() {
  return (
    <div className="md:w-[80%] w-[90%] bg-gray-50 flex md:p-16 p-8 items-center justify-between rounded-xl border text-black">
      <div className="md:w-[60%] h-full flex flex-col justify-center">
        <h3>Logo</h3>
        <div className="mt-6">
          <h3 className="md:text-3xl text-xl font-bold">
            Kornix is the best digital agency i have ever seen! Highly
            Recommended!
          </h3>
          <p className="mt-4">
            I recently hired Ideapeel for a custom web development project and
            couldn't be happier with the results. The team was able to bring my
            unique ideas to life and create a website that truly stands out.
          </p>
        </div>
        <div className="mt-6">
          <p className="font-bold">Loreza</p>
          <span>Director of Gymstory</span>
        </div>
      </div>
      <img src="./icon.svg" className="hidden md:block" width={200} />
    </div>
  );
}

export default function Testimonial() {
  return (
    <div className="md:px-24 py-20 px-6 bg-white flex flex-col items-center text-black">
      <h2 className="text-xs md:text-sm">TESTIMONIAL</h2>
      <p className="mt-2 text-center font-bold md:text-4xl text-2xl md:w-[40%]">
        Customer is Our Top Priority
      </p>
      <span className="mt-2 md:text-md text-sm text-center text-gray-800 md:w-[40%]">
        We survey all of our clients, the results of which go directly to our
        CEO.
      </span>
      <div className="mt-12 flex justify-center">
        <Card />
      </div>
    </div>
  );
}
