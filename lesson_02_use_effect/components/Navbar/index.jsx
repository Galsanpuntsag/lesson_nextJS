import React from "react";

const Navbar = () => {
  return (
    <div className="my-[32px]">
      <div className="flex justify-between ml-[200PX]">
        <a href="/">
          <img src="Logo.png"></img>
        </a>
        <div className="flex gap-12 mt-2">
          <a href="/">Home</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="p-4 mt-2 h-[10px] mr-[100px]"
        ></input>
      </div>
    </div>
  );
};

export default Navbar;
