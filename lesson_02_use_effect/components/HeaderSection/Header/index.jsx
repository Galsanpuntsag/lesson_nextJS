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
    <main className="">
      <section
        className="w-11/12 flex justify-center
       items-center mt-20 mx-auto  2xl:ml-[100px]"
      >
        {headblogs && <Headercards headblogs={headblogs} />}
      </section>
    </main>
  );
}
export default Header;
