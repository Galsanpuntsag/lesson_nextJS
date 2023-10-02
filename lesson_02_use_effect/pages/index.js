import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import Cards from "@/components/Cards";
import Header from "@/components/Header";

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://dev.to/api/articles?per_page=9");
    const data = await res.json();
    setBlogs(data);
    console.log("Data", data);
  };
  return (
    <div className="">
      <Header />
      <main className={`container mx-auto`}>
        <section>
          <h2>@All blogs</h2>
          <div className="grid grid-cols-3 gap3 mb-[20px] p-4">
            {blogs.map((blog, i) => (
              <Cards blog={blog} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
export default Home;
