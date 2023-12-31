import React from "react";
import Link from "next/link";
import moment from "moment";

const Cards = ({ blog }) => {
  return (
    <Link href={"/blog/" + blog.id}>
      <div className="border flex flex-col p-3 w-[392px] h-[488px] rounded-[20px] mx-3 mb-3">
        <img
          src={blog?.cover_image ? blog?.cover_image : "/ai.jpg"}
          className="w-[360px] h-[240px] rounded-[10px]"
        ></img>
        <div className="flex flex-col my-4 p-2 w-[360px] h-[200px]">
          <span className="text-[#4B6BFB] border w-[97px] h-[29px] text-center rounded-[10px] bg-slate-100 mt-[8px]">
            {blog?.type_of}
          </span>
          <span className="w-[344px] h-[100px] p-3 font-bold text-[22px] text-[#181A2A] mb-6 line-clamp-3">
            {blog?.title}
          </span>
          <div className="flex items-center">
            <img
              src={blog?.user?.profile_image}
              className="w-[40px] h-[40px] rounded-full"
            />
            <p className="ml-[12px]">{blog?.user?.name}</p>
            <p className="ml-[22px]">{moment(blog?.created_at).format("LL")}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Cards;
