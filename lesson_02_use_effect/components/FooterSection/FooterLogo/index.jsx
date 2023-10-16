import React from "react";

const FooterLogo = () => {
  return (
    <>
      <div className="flex flex-col justify-around mt-5">
        <div className="mr-[300px] p-4">
          <img src="Logo.png" className=""></img>
        </div>

        <div className="flex justify-around items-center underline gap-10">
          <div>Terms of Use</div>
          <div>Privacy Policy</div>
          <div>Cookie Pollicy</div>
        </div>
      </div>
    </>
  );
};

export default FooterLogo;
