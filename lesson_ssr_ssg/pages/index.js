import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import Cards from "@/components/Cards";
import Loader from "@/components/Loader";
import { getData } from "@/utils/functions";

function Home({ blogs }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <main className={`container mx-auto`}>
        <section>
          <>
            <h2>@All blogs</h2>
            <div className="flex flex-col items-center mx-auto">
              <div className="grid grid-cols-3 gap-3 my-10 ">
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
          </>
        </section>
      </main>
    </div>
  );
}
export default Home;

export async function getServerSideProps() {
  const res = await fetch(`https://dev.to/api/articles/latest?per_page=9`);
  const blogs = await res.json();

  return {
    props: { blogs },
  };
}
