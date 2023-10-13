import React from "react";
import Cards from "../Cards";
import { useState, useEffect } from "react";
import { getData } from "@/utils/functions";
import Loader from "../Loader";

const CardsRespo = () => {
  const [blogs, setBlogs] = useState([]);
  console.log("BLOGS", blogs);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [pages, setPages] = useState(6);

  const getBlogs = async () => {
    try {
      const data = await getData(
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
    getBlogs();
  }, [pages]);

  return (
    <>
      <section className="flex flex-col justify-center items-cemter">
        {isLoading && <Loader />}
        {error && (
          <h1 className="text-red-700 text-3xl text-center my-10">{error}</h1>
        )}
        {!isLoading && !error && (
          <>
            <h2 className="ml-[50px]">@All blogs</h2>
            <div className="flex flex-col justify-center items-center">
              <div className="grid xl:grid-cols-3 gap-6 my-10 md:grid-cols-2 sm:grid-cols-1 ">
                {blogs.map((blog, i) => (
                  <Cards blog={blog} />
                ))}
              </div>
              <div className="flex justify-center">
                <button
                  onClick={handleNext}
                  className="border bg-slate-100 rounded-[20px] p-4 font-bold text-[20px] mx-auto"
                >
                  Loud More ...
                </button>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default CardsRespo;
