import React from "react";
import moment from "moment";

const Headercards = ({ headblogs }) => {
  return (
    <div className="">
      <div className="bg-[grey] w-[1236px] h-[432px] ">
        <div className="flex w-[1236px] h-[432px] bg-[brown] mt-8">
          <div className="w-[592px] h-[432px] bg-[yellow] ">
            <img
              src={
                headblogs?.profile_image ? headblogs?.profile_image : "/ai.jpg"
              }
              className="w-[592px] h-[272px] mb-[32px]"
            ></img>
            <h20 className="text-black">
              {moment(headblogs?.created_at).format("LL")}
            </h20>
            <h21> {headblogs?.user?.name}</h21>
          </div>
          <div className="ml-8">
            <div className="w-[592px] h-[200px] bg-[blue]">02</div>
            <div className="w-[592px] h-[200px] bg-[red] mt-8">03</div>
          </div>
        </div>
      </div>
      <div className="w-[1236px] h-[246px] mt-[100px] bg-[purple] mb-[100px]">
        04
      </div>
    </div>
  );
};

export default Headercards;
