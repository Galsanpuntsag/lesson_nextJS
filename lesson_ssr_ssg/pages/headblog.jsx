import { useEffect } from "react";
import { useState } from "react";
import React from "react";

function headblog() {
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
    <main className={`container mx-auto`}>
      <section className="mt-[80px]"></section>
    </main>
  );
}
export default headblog;
