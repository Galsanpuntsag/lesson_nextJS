import React from "react";
import moment from "moment";
import Link from "next/link";

const RecentCard = ({ headblog, type }) => {
  return (
    <Link href={"/blog/" + headblog?.id} className="flex-1 pl-6">
      <div className={`flex text-[15px] gap-6 ${type}`}>
        <img
          src={headblog?.social_image ? headblog?.social_image : "/ai.jpg"}
          className={`rounded-[10px] ${
            type == "flex-col"
              ? "w-11/12 h-[200px] mt-[20px]"
              : "w-[60%] h-[200px]"
          }`}
        ></img>
        <div
          className={` p-4 line-clamp-2 ${
            type == "flex-col" ? "w-full items-center]" : "w-[50%] "
          }`}
        >
          <div className="text-black text-[12px]">
            {moment(headblog?.created_at).format("LL")}
          </div>
          <div className="line-clamp-2 "> {headblog?.title}</div>
          <div className="my-6 line-clamp-2">{headblog?.description}</div>
        </div>
      </div>
    </Link>
  );
};

export default RecentCard;
