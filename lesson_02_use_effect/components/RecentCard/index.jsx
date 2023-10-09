import React from "react";
import moment from "moment";
import Link from "next/link";

const RecentCard = ({ headblog, type }) => {
  return (
    <Link href={"/blog/" + headblog?.id} className="flex-1">
      <div className={`flex  gap-2 ${type}`}>
        <img
          src={headblog?.social_image ? headblog?.social_image : "/ai.jpg"}
          className={`mb-[32px] rounded-[10px] ${
            type == "flex-col" ? "w-full h-1/2" : "w-[50%] h-full"
          }`}
        ></img>
        <div className={` ${type == "flex-col" ? "w-full" : "w-[50%]"}`}>
          <div className="text-black">
            {moment(headblog?.created_at).format("LL")}
          </div>
          <div className="mt-3"> {headblog?.title}</div>
          <div className="mt-3">{headblog?.description}</div>
        </div>
      </div>
    </Link>
  );
};

export default RecentCard;
