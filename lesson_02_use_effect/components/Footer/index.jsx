import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#E8E8EA] w-screen h-[495px] mt-[20px]">
      <div className="pt-[60px]">
        <div className="flex flex-row w-[1215px] h-[236px] mx-auto">
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
          <div className="w-[521px] h-[236px] flex items-center flex-col">
            <a href="/">Home</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="flex gap-5 mt-2 ml-2">
            <BsFacebook />
            <FaSquareXTwitter />
            <AiFillInstagram />
            <AiOutlineLinkedin />
          </div>
        </div>
        <div className="mx-auto border-b-[1px] border-black w-7/12 mt-5"></div>
        <div className="flex items-center justify-center mt-5">
          <img src="Logo.png" className="mr-[567px]"></img>
          <div className="flex justify-between gap-4 ">
            <h>Terms of Use</h>
            <h>Privacy Policy</h>
            <h>Cookie Pollicy</h>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
