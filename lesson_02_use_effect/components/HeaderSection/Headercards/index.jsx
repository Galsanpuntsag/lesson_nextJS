import React from "react";
import RecentCard from "../RecentCard";

const Headercards = ({ headblogs }) => {
  return (
    <div className="">
      <div className="bg-slate-200 pt-5 w-12/12 rounded-[20px]">
        <h10 className="pl-5">@Reacent blog posts</h10>
        <div className="flex mt-8">
          <RecentCard
            headblog={headblogs[0]}
            type="flex-col"
            className="flex-1 ml-4"
          />

          <div className="ml-4 flex-1">
            <RecentCard className="{" headblog={headblogs[1]} type="row" />
            <RecentCard headblog={headblogs[2]} type="row" />
          </div>
        </div>
      </div>
      <div className="w-12/12 mt-[30px] bg-slate-200 rounded-[20px] mb-[80px]">
        <RecentCard
          headblog={headblogs[3]}
          type="row gap-10 p-4 items-center"
        />
      </div>
    </div>
  );
};

export default Headercards;
