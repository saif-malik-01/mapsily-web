import { notFound } from "next/navigation";

import BlogDetails from "@/app/components/BlogDetails";
import { allBlogs } from "contentlayer/generated";
import siteMetadata from "@/utils/siteMetaData";
import Header from "@/app/components/Header";
import Script from "next/script";
import Link from "next/link";

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({ id: blog._raw.flattenedPath }));
}

export async function generateMetadata({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.id);
  if (!blog) {
    return;
  }

  const publishedAt = new Date(blog.publishedAt).toISOString();
  const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();

  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
        : blog.image;
  }
  const ogImages = imageList.map((img) => {
    return { url: img.includes("http") ? img : siteMetadata.siteUrl + img };
  });

  const authors = blog?.author ? [blog.author] : siteMetadata.author;

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: siteMetadata.siteUrl + blog.url,
      siteName: siteMetadata.title,
      locale: "en_US",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: ogImages,
    },
    keywords: [
      "digital marketing agency",
      "social media platforms",
      "influencer marketing",
      "brand awareness",
      "brand building",
      "brand management",
      "content strategy",
      "brand image",
      "content calendar",
      "brand personality",
      "brand elements",
      "social media branding",
      "brand storytelling",
      "digital marketing meaning",
    ],
  };
}

export default function BlogPage({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.id);

  if (!blog) {
    notFound();
  }

  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
        : blog.image;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: blog.title,
    description: blog.description,
    image: imageList,
    datePublished: new Date(blog.publishedAt).toISOString(),
    dateModified: new Date(blog.updatedAt || blog.publishedAt).toISOString(),
    author: [
      {
        "@type": "Person",
        name: blog?.author ? [blog.author] : siteMetadata.author,
        url: siteMetadata.twitter,
      },
    ],
  };

  return (
    <main className="bg-black">
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <article className="border-t">
        <div className="pt-8 md:pt-0 md:h-[50vh] flex flex-col gap-4 justify-center items-center text-center w-full">
          <span className="text-white inline-block py-2 sm:py-3 px-6 sm:px-10 rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition-all ease duration-200 text-sm sm:text-base">
            {blog.tags[0]}
          </span>
          <h1 className="text-white inline-block font-semibold capitalize text-2xl md:text-3xl lg:text-5xl !leading-normal w-5/6">
            {blog.title}
          </h1>
        </div>
        <BlogDetails blog={blog} />
        <div className="pt-16 bg-white prose lg:prose-xl max-w-fit grid grid-cols-12 gap-y-8 lg:gap-8 sxl:gap-16 px-5 md:px-10">
          <div className="col-span-4 hidden md:block">
            <details
              className="border-[1px] border-solid border-dark text-dark rounded-lg p-4 sticky top-6 max-h-[90vh] overflow-hidden overflow-y-auto"
              open
            >
              <summary className="text-lg font-semibold capitalize cursor-pointer">
                Table Of Content
              </summary>
              <ul className="mt-4 font-in text-base">
                {blog.toc.map((heading) => {
                  return (
                    <li key={`#${heading.slug}`} className="py-1">
                      <a
                        href={`#${heading.slug}`}
                        data-level={heading.level}
                        className="data-[level=two]:pl-0  data-[level=two]:pt-2
                                       data-[level=two]:border-t border-solid border-dark/40
                                       data-[level=three]:pl-4
                                       sm:data-[level=three]:pl-6
                                       flex items-center justify-start
                                       "
                      >
                        {heading.level === "three" ? (
                          <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
                            &nbsp;
                          </span>
                        ) : null}

                        <span className="hover:underline">{heading.text}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </details>
          </div>
          <div
            className="col-span-12 md:col-span-8"
            dangerouslySetInnerHTML={{ __html: blog.body.html }}
          ></div>
        </div>
        <div className="p-4 text-center">
          <Link
            className="hover:"
            href="https://www.mapsily.com"
            target="_blank"
          >
            Grow your business with{" "}
            <span className="text-[#B9FD50] font-bold">Mapsily.</span>
          </Link>
        </div>
      </article>
    </main>
  );
}
