import React from "react";
import Cards from "@/components/Cards";
import { useState, useEffect } from "react";
import { getData } from "@/utils/functions";
import Loader from "@/components/Loader";
import Layout from "@/components/Layout";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [pages, setPages] = useState(6);

  const [blogList, setBlogList] = useState(blogs);
  // const [searchTitle, setSearchTitle ] = useState("hoho");

  const searchBlog = (searchTitle) => {
    const findBlog = blogs.filter((blog) => blog.title.includes(searchTitle));
    setBlogList(findBlog);
  }

  const getBlogs = async () => {
    try {
      const data = await getData(
        `https://dev.to/api/articles?per_page=${pages}`
      );
      setBlogs(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      setError("aldaa garlaa dahin oroldono uu?");
    }
  };

  const handleNext = () => {
    console.log("daraagiin huudas ruu daragdlaa.");
    setPages(pages + 3);
  };

  useEffect(() => {
    getBlogs();
  }, [pages]);

  return (
    <Layout setSearchTitle={searchBlog}>
    <main className={`container mx-auto`}>
      <section>
        {isLoading && <Loader />}
        {error && (
          <h1 className="text-blue-800 text-3xl text-center my-10">{error}</h1>
        )}
        {!isLoading && !error && (
          <div>
            <h2>@All blogs</h2>
            <div className="flex flex-col p-5 lg:grid grid-cols-3 gap-3">
              {blogs.map((blog, i) => (
                <Cards blog={blog} />
              ))}
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleNext}
                className="border bg-slate-100 rounded-[20px] mt-8 p-4 font-bold text-[20px] mx-auto"
              >
                Loud More ...
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
    </Layout>
  );
};

export default BlogPage;
