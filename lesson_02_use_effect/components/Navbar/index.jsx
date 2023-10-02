import React from "react";

const Navbar = () => {
  return (
<<<<<<< HEAD
    <div className="mx-auto my-[36px]">
      <div className="flex justify-between mx-[350px]">
        <div className="">
          <a href="/" className="flex w-[158px] h-[36px]">
            <img src="/Logo.png"></img>
          </a>
        </div>
        <div className="flex gap-12">
=======
    <div className="my-[32px]">
      <div className="flex justify-between ml-[200PX]">
        <a href="/">
          <img src="Logo.png"></img>
        </a>
        <div className="flex gap-12 mt-2">
>>>>>>> e42d18df6410fe08e1b06e184b1366ef17ce3b73
          <a href="/">Home</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </div>
        <input
          type="text"
          placeholder="Search"
<<<<<<< HEAD
          className="p-4 w-[134px] h-[20px]"
=======
          className="p-4 mt-2 h-[10px] mr-[100px]"
>>>>>>> e42d18df6410fe08e1b06e184b1366ef17ce3b73
        ></input>
      </div>
    </div>
  );
};

export default Navbar;
