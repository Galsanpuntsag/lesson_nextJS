import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { formatData } from "@/utils/functions";
import moment from "moment";

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log("Router", id);

  const [blogDetailData, setDetailData] = useState();

  const getBlogDetail = async () => {
    const res = await fetch(`https://dev.to/api/articles/${id}`);
    const data = await res.json();
    console.log("Data", data);
    setDetailData(data);
  };

  useEffect(() => {
    getBlogDetail();
  }, []);

  return (
    <div className="bg-slate-100 rounded-[20px] p-5 mx-10">
      <div className="mt-[100px] my-10">
        {blogDetailData ? (
          <>
            <div>
              <h1 className="text-4xl font-semibold text-slate-900 ">
                {blogDetailData.title}
              </h1>
              <div className="flex items-center mt-5 gap-5">
                <div className="flex items-center">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={blogDetailData?.user?.profile_image}
                    alt="avatar"
                  />
                  <h4 className="ml-2 text-lg text-gray-500">
                    {blogDetailData?.user?.name}
                  </h4>
                </div>
                <p className="text-lg text-gray-500">
                  {moment(blogDetailData.created_at).format("LL")}
                </p>
              </div>
            </div>
            <div className="my-8">
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: blogDetailData.body_html }}
              ></div>
            </div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
