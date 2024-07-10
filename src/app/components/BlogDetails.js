import React from "react";

const BlogDetails = ({ blog }) => {
  return (
    <div className="mb-8 mt-4 md:mt-0 px-2 md:px-10 bg-white text-black py-2 flex items-center justify-around flex-wrap text-sm sm:text-xl font-medium mx-5 md:mx-10 rounded-lg">
      <time className="m-3">{new Date(blog.publishedAt).toLocaleDateString("en-US")}</time>
      <span className="m-3">10+</span>
      <div className="m-3">{blog.readingTime.text}</div>
      <span className="m-3 capitalize">{blog.tags[0]}</span>
    </div>
  );
};

export default BlogDetails;
