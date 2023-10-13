import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { formatData } from "@/utils/functions";
import moment from "moment";

const BlogDetail = ({ article }) => {
  return (
    <div className="container bg-slate-100 p-12 rounded-[20px] mx-auto mt-24 max-w-4xl">
      <div>
        <div className="flex items-center mt-5 gap-5">
          <div className="flex items-center">
            <img
              className="w-8 h-8 rounded-full"
              src={article?.user?.profile_image}
              alt="avatar"
            />
            <h4 className="ml-2 text-lg text-gray-500">
              {article?.user?.name}
            </h4>
          </div>
          <p className="text-lg text-gray-500">
            {moment(article.created_at).format("LL")}
          </p>
        </div>
      </div>
      <div className="my-8">
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: article.body_html }}
        ></div>
      </div>
    </div>
  );
};

export default BlogDetail;

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://dev.to/api/articles/${id}`);
  const article = await res.json();
  console.log(id);
  return {
    props: {
      article,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`https://dev.to/api/articles?per_page=5`);
  const articles = await res.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
}
