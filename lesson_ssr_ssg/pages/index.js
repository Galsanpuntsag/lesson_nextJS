import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import Cards from "@/components/Cards";
import Header from "@/components/Header";
import Loader from "@/components/Loader";

function Home() {
  const [blogs, setBlogs] = useState([]);
  console.log("BLOGS", blogs);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [pages, setPages] = useState(6);

  const fetchData = async () => {
    try {
      const data = await fetch(
        `https://dev.to/api/articles/latest?per_page=${pages}`
      );
      console.log("dataa", data);
      setBlogs(data);
    } catch (err) {
      setError("Aldaa garlaa dahin oroldonuu!");
    } finally {
      setIsLoading(false);
    }
  };

  function handleNext() {
    setPages(pages + 3);
  }

  useEffect(() => {
    fetchData();
  }, [pages]);

  return (
    <main className={`container mx-auto`}>
      <section>
        {isLoading && <Loader />}
        {error && (
          <h1 className="text-red-700 text-3xl text-center my-10">{error}</h1>
        )}
        {!isLoading && !error && (
          <>
            <h2>@All blogs</h2>
            <div className="">
              <div className="grid grid-cols-3 gap-3 my-10">
                {blogs.map((blog, i) => (
                  <Cards blog={blog} />
                ))}
              </div>
              <div className="flex justify-center">
                <button className="border bg-slate-100 rounded-[20px] mt-8 p-4 font-bold text-[20px] mx-auto">
                  Loud More ...
                </button>
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
export default Home;
