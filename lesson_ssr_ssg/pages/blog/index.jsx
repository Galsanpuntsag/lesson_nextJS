import React from "react";
import Cards from "@/components/Cards";
import { useState, useEffect } from "react";

const blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://dev.to/api/articles?per_page=9");
    const data = await res.json();
    setBlogs(data);
  };
  return (
    <main className={`container mx-auto`}>
      <section>
        <h2>@All blogs</h2>
        <div className="">
          <div className="grid grid-cols-3 gap-3 my-10">
            {blogs.map((blog, i) => (
              <Cards blog={blog} />
            ))}
          </div>
          <div className="flex justify-center">
            <button className="border bg-slate-100 rounded-[20px] mt-8 p-4 font-bold text-[20px] mx-auto">
              Loud More
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default blog;
