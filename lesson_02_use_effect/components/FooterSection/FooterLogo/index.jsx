import React from "react";

const FooterLogo = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className=" p-4">
          <img src="Logo.png" className="mb-5"></img>
        </div>

        <div className="flex justify-center items-center underline gap-3">
          <div>Terms of Use</div>
          <div>Privacy Policy</div>
          <div>Cookie Pollicy</div>
        </div>
      </div>
    </>
  );
};

export default FooterLogo;
