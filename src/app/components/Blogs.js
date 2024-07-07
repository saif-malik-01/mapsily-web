import Image from "next/image";

function Card({ src, title, subtitle, description }) {
  return (
    <div className="cursor-pointer flex md:flex-row flex-col gap-6 items-center justify-between rounded-xl border border-lime-700 text-white">
      <Image alt={"blog-" + title} src={src} width={220} height={220} className="md:w-auto w-full" />
      <div className="flex flex-col gap-2 p-4">
        <span className="md:text-sm text-xs font-medium text-[#B9FD50]">
          {title}
        </span>
        <h3 className="md:text-2xl text-xl font-bold">{subtitle}</h3>
        <p className="md:text-md text-sm text-gray-400">{description}</p>
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
        <Card
          src="/article-1.png"
          title="BRANDING"
          subtitle="What is the branding, 
and what we need it?"
          description="On the other hand, we denounce with righteous indignation and…"
        />
        <Card
          src="/article-2.png"
          title="SOCIAL MEDIA MANAGEMENT"
          subtitle="How to use social media for good?"
          description="Now a days social media is at boom, everyone has at least one..."
        />
      </div>
    </div>
  );
}
