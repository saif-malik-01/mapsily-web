import { allBlogs } from "contentlayer/generated";
import { slug } from "github-slugger";
import Image from "next/image";
import Link from "next/link";

function Card({ src, title, subtitle, description }) {
  return (
    <Link
      href={"blogs/" + slug(subtitle, true)}
      className="max-w-[400px] cursor-pointer flex flex-col gap-6 items-center justify-between rounded-xl border border-lime-700 text-white"
    >
      <Image
        alt={"blog-" + title}
        src={src}
        width={220}
        height={220}
        className="w-full rounded-t-xl"
      />
      <div className="flex flex-col gap-2 p-4">
        <span className="capitalize md:text-sm text-xs font-medium text-[#B9FD50]">
          {title}
        </span>
        <h3 className="md:text-2xl text-xl font-bold">{subtitle}</h3>
        <p className="md:text-md text-sm text-gray-400">{description}</p>
      </div>
    </Link>
  );
}

export default function Blogs() {
  return (
    <div className="mt-18 md:px-24 px-8 py-20 flex flex-col gap-2 items-center text-white">
      <h2 className="text-sm text-[#B9FD50]">BLOGS</h2>
      <p className="font-bold text-4xl">News & Articles</p>
      <span className="text-gray-200">Best Articles to get started</span>
      <div className="mt-16 flex justify-evenly md:flex-nowrap flex-wrap gap-8">
        {allBlogs.map((blog) => {
          return (
            <Card
              key={blog.title}
              src={blog.image.filePath.replace("../public", "")}
              title={blog.tags[0]}
              subtitle={blog.title}
              description={blog.description}
            />
          );
        })}
      </div>
    </div>
  );
}
