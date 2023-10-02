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
    const res = await fetch("https://dev.to/api/articles/latest?per_page=3");
    const data = await res.json();
    setBlogs(data);
    console.log("Data", data);
  };
  return (
    <main className={`container mx-auto`}>
      <section>
        <h10>Reacent blog posts</h10>
        <div className="">{blogs && <Headercards blogs={blogs} />}</div>
      </section>
    </main>
  );
}
export default Header;
