import siteMetadata from "@/utils/siteMetaData";
import { allBlogs } from "contentlayer/generated";
import { slug } from "github-slugger";

export default function sitemap() {
  const blogsSiteMapData = allBlogs.map((blog) => {
    return {
      url: `${siteMetadata.siteUrl}/blogs/${slug(blog.title, true)}`,
      lastModified: blog.updatedAt || blog.publishedAt,
      changeFrequency: "weekly",
    };
  });

  return [
    {
      url: "https://mapsily.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...blogsSiteMapData,
  ];
}
