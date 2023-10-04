import React from "react";

const Navbar = () => {
  return (
    <div className="mx-auto my-[36px]">
      <div className="flex justify-between mx-[350px]">
        <div className="">
          <a href="/" className="flex w-[158px] h-[36px]">
            <img src="/Logo.png"></img>
          </a>
        </div>
        <div className="flex gap-12">
          <a href="/">Home</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="p-4 w-[134px] h-[20px]"
        ></input>
      </div>
    </div>
  );
};

export default Navbar;
