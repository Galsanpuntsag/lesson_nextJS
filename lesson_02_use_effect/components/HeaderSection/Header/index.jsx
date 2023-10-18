import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import Headercards from "../Headercards";

function Header() {
  const [headblogs, setHeadblogs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://dev.to/api/articles/latest?per_page=4");
    const data = await res.json();
    setHeadblogs(data);
    console.log("headerDataBlogs", data);
  };
  return (
    <main className="flex flex-col sm:flex-row">
      <section className="mt-[80px] mx-5">
        {headblogs && <Headercards headblogs={headblogs} />}
      </section>
    </main>
  );
}
export default Header;
