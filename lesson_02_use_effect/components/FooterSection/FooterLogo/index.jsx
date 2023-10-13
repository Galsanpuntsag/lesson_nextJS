import React from "react";

const FooterLogo = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-5">
        <img src="Logo.png" className=""></img>
        <div className="flex justify-between gap-4 ">
          <h>Terms of Use</h>
          <h>Privacy Policy</h>
          <h>Cookie Pollicy</h>
        </div>
      </div>
    </>
  );
};

export default FooterLogo;
