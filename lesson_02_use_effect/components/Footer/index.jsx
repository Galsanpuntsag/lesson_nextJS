import React from "react";

const Footer = () => {
  return (
    <div className="bg-[grey] w-screen h-[495px] mt-[100px]">
      <div className="pt-[60px]">
        <div className="flex flex-row w-[1215px] h-[236px] bg-[blue] mx-auto">
          <div className="w-[289px] h-[236px] flex flex-col">
            <h23 className="mb-3">About</h23>
            <h24 className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </h24>
            <h>
              Email:<span>info@jstemplate.net</span>
            </h>
            <h>
              Phone:<span>880 123 456 789</span>
            </h>
          </div>
          <div className="w-[521px] h-[236px] flex items-center flex-col bg-[brown]">
            <a href="/">Home</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="">1.3</div>
        </div>
        <div className="">02</div>
      </div>
    </div>
  );
};

export default Footer;
