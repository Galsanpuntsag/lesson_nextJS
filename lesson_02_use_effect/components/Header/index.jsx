import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import Headercards from "../Headercards";

function Header() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://dev.to/api/articles/latest?per_page=4");
    const data = await res.json();
    setBlogs(data);
    console.log("Data", data);
  };
  return (
    <div className="">
      <main className={`container mx-auto`}>
        <section>
          <h2>Recent blog posts</h2>
          <div className="grid grid-cols-3 gap3">
            {blogs.map((blog, i) => (
              <Headercards blog={blog} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
export default Header;
