import React from "react";
import RecentCard from "../RecentCard";

const Headercards = ({ headblogs }) => {
  return (
    <div className="">
      <div className="bg-slate-200 w-full rounded-[20px] ">
        <h10 className="pl-5 text-[15px] hover:text-orange-400 ">
          @Reacent blog posts
        </h10>
        <div className="flex flex-col mt-8">
          <RecentCard
            headblog={headblogs[0]}
            type="flex-col"
            className="flex-1 ml-4"
          />

          <div className="ml-4 flex-1 pb-10">
            <RecentCard
              className="flex-1 rounded-4 "
              headblog={headblogs[1]}
              type="row"
            />
            <RecentCard className="flex-1" headblog={headblogs[2]} type="row" />
          </div>
        </div>
      </div>
      <div className="w-12/12 h-1/2 mt-[30px] bg-slate-200 rounded-[20px] mb-[80px] pb-[20px]">
        <RecentCard
          className="h-[210px] pb-[20px]"
          headblog={headblogs[3]}
          type="row gap-10 p-4"
        />
      </div>
    </div>
  );
};

export default Headercards;
