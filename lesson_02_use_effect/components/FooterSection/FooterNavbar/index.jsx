import React from "react";

const FooterNavbar = () => {
  return (
    <>
      <div className="w-[521px] h-[236px] flex items-center flex-col md:width-[300px] md:height-[180px] lg:width-[400px] lg:height-[180px]">
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </div>
    </>
  );
};

export default FooterNavbar;
