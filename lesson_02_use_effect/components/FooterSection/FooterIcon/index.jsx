import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const FooterIcon = () => {
  return (
    <>
      <div className="flex justify-center gap-[20px] mt-5 ml-2 lg:gap-[40px] lg:items-center">
        <BsFacebook className=" hover:bg-green-400 rounded-full w-[40px] h-[40px]" />
        <FaSquareXTwitter className=" hover:bg-green-400 rounded-full w-[40px] h-[40px]" />
        <AiFillInstagram className=" hover:bg-green-400 rounded-full w-[40px] h-[40px]" />
        <AiOutlineLinkedin className=" hover:bg-green-400 rounded-full w-[40px] h-[40px]" />
      </div>
    </>
  );
};

export default FooterIcon;
