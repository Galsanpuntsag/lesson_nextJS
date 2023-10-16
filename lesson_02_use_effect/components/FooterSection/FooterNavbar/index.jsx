import React from "react";

const FooterNavbar = () => {
  return (
    <>
      <div className=" flex items-center bg-slate-300 gap-5 justify-center underline p-2 md:width-[300px] md:height-[180px] lg:width-[400px] lg:height-[180px]">
        <a className=" hover:bg-yellow-300 p-1 rounded-sm" href="/">
          Home
        </a>
        <a className=" hover:bg-yellow-300 p-1 rounded-sm" href="/blog">
          Blog
        </a>
        <a className=" hover:bg-yellow-300 p-1 rounded-sm" href="/contact">
          Contact
        </a>
      </div>
    </>
  );
};

export default FooterNavbar;
