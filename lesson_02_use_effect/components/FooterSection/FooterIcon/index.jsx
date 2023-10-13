import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const FooterIcon = () => {
  return (
    <>
      <div className="flex gap-5 mt-2 ml-2">
        <BsFacebook />
        <FaSquareXTwitter />
        <AiFillInstagram />
        <AiOutlineLinkedin />
      </div>
    </>
  );
};

export default FooterIcon;
