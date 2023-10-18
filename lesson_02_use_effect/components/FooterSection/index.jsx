import React from "react";
import FooterText from "./FooterText";
import FooterNavbar from "./FooterNavbar";
import FooterIcon from "./FooterIcon";
import FooterLogo from "./FooterLogo";

const ParentFooter = () => {
  return (
    <div className="bg-slate-200 flex flex-col justify-center items-center mt-10 rounded-[20px] ">
      <div className="flex flex-col p-5 lg:flex-row lg:gap-20">
        <FooterText />
        <FooterNavbar />
        <FooterIcon />
      </div>
      <div className="flex flex-col px-5 md:flex sm:flex-row mb-10">
        <FooterLogo />
      </div>
    </div>
  );
};

export default ParentFooter;
