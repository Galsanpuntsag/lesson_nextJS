import React from "react";
import Cards from "../Cards";
import { useState } from "react";
import { useEffect } from "react";

const Headercards = ({ blogs }) => {
  console.log("blog ", blogs[0]);
  return (
    <div className="mx-[80px]">
      <div className="grid grid-rows-4 grid-flow-col gap-4 border">
        <div class="row-span-4 gri border">
          <img
            src={
              blogs?.cover_image
                ? blogs?.cover_image
                : "/evan-wise-r3uyikznSeo-unsplash.jpg"
            }
            className="mx-auto w-10/12 h-[252px] rounded-[10px]"
          ></img>
        </div>
        <div class="row-span-2 border">02</div>
        <div class="row-span-2 border">03</div>
      </div>
      <div>04</div>
    </div>
  );
};

export default Headercards;
