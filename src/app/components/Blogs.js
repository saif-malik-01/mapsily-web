function Card() {
  return (
    <div className="flex md:flex-row flex-col p-8 gap-8 items-center justify-between rounded-xl border border-lime-700 text-white">
      <img src="./icon.svg" width={200} />
      <div className="flex flex-col gap-2">
        <span className="md:text-sm text-xs font-medium text-[#B9FD50]">
          BRANDING
        </span>
        <h3 className="md:text-2xl text-xl font-bold">
          What is the branding, and what we need it?
        </h3>
        <p className="md:text-md text-sm text-gray-400">
          On the other hand, we denounce with righteous indignation and…
        </p>
      </div>
    </div>
  );
}

export default function Blogs() {
  return (
    <div className="mt-18 md:px-24 px-8 py-20 flex flex-col gap-2 items-center text-white">
      <h2 className="text-sm text-[#B9FD50]">BLOGS</h2>
      <p className="font-bold text-4xl">News & Articles</p>
      <span className="text-gray-200">Best Articles to get started</span>
      <div className="mt-16 grid md:grid-cols-2 grid-cols-1 gap-8">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <button className="mt-8 md:px-6 px-4 py-4 border border-lime-700 text-[#A5D96F] rounded-md">
        LOAD MORE
      </button>
    </div>
  );
}
