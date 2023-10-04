import React from "react";
import moment from "moment";
import RecentCard from "../RecentCard";

const Headercards = ({ headblogs }) => {
  return (
    <div className="">
      <div className="bg-slate-200 pt-5 w-11/12 rounded-[20px]">
        <h10 className="pl-5">Reacent blog posts</h10>
        <div className="flex mt-8 pl-5">
          <RecentCard headblog={headblogs[0]} type="flex-col" />

          <div className="ml-8 flex-1 pr-5">
            <RecentCard headblog={headblogs[1]} type="row" />
            <RecentCard headblog={headblogs[2]} type="row" />
          </div>
        </div>
      </div>
      <div className="w-11/12 h-[246px] mt-[50px] bg-slate-200 rounded-[20px] mb-[100px]">
        <RecentCard headblog={headblogs[3]} type="row h-[246px] gap-10 p-5" />
      </div>
    </div>
  );
};

export default Headercards;
