import React from "react";

const Navbar = () => {
  return (
    <div className="mx-auto mt-[50px]">
      <div className="flex justify-between ml-[200PX]">
        <a href="/">
          <img src="/Union (1).png"></img>
        </a>
        <div className="flex gap-12">
          <a href="/">Home</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </div>
        <input type="text" placeholder="Search" className="p-4"></input>
      </div>
    </div>
  );
};

export default Navbar;
