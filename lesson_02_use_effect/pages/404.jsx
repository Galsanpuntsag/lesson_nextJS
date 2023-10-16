import React from "react";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[20px] bg-slate-200 mt-5 rounded-[10px] mb-0">
      <div className="text-7xl mt-5">404</div>
      <div className=" border-b-[3px] border-black w-[60px]"></div>
      <div className=""></div>
      <div className="lg:w-[392px] lg:h-[188px] flex flex-col justify-center text-center">
        <h className="mb-3 ">Page Not Found</h>
        <h2 className="mb-3 text-start max-w-[250px]">
          We're sorry, This page is unknown or does not exist the page you are
          looking for.
        </h2>
        <div>
          {" "}
          <Link
            href="/"
            className="text-center hover:bg-slate-600 animate-ping text-red-700 w-[98px] h-[20px] bg-slate-300 rounded-[10px]"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
