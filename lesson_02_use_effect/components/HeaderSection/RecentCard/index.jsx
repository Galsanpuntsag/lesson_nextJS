import React from "react";
import moment from "moment";
import Link from "next/link";

const RecentCard = ({ headblog, type }) => {
  return (
    <Link href={"/blog/" + headblog?.id} className="flex-1 pl-6 h-1/2">
      <div className={`flex  gap-2 ${type}`}>
        <img
          src={headblog?.social_image ? headblog?.social_image : "/ai.jpg"}
          className={`rounded-[10px] ${
            type == "flex-col" ? "w-12/12" : "w-[50%] h-[246px]"
          }`}
        ></img>
        <div
          className={` p-4 line-clamp-2 ${
            type == "flex-col"
              ? "w-full items-center]"
              : "w-[50%] h-full items-center "
          }`}
        >
          <div className="text-black max-w-[100px]">
            {moment(headblog?.created_at).format("LL")}
          </div>
          <div className="mt-3 sm:line-clamp-2"> {headblog?.title}</div>
          <div className="my-6 sm:line-clamp-2">{headblog?.description}</div>
        </div>
      </div>
    </Link>
  );
};

export default RecentCard;
