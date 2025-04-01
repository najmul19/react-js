import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Blog from "../Blog/Blog";
const Blogs = ({handleAddToBookmark, handleMarkAdRead}) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <h1 className="text-4xl">Blogs: {blogs.length} </h1>
      {blogs.map((blog) => (
        <Blog 
        handleMarkAdRead={handleMarkAdRead}
        handleAddToBookmark={handleAddToBookmark}
        key={blog.id} blog={blog}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
