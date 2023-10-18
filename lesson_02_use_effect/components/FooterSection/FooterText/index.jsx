import React from "react";

const FooterText = () => {
  return (
    <>
      <div className="max-w-[400px] text-center h-[236px] flex flex-col justify-center ">
        <h23 className="mb-3">About</h23>
        <h24 className="mb-6 max-w-[300px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </h24>
        <div className="text-centerx flex flex-col">
          {" "}
          <h>
            Email:<span>info@jstemplate.net</span>
          </h>
          <h>
            Phone:<span>880 123 456 789</span>
          </h>
        </div>
      </div>
    </>
  );
};

export default FooterText;
