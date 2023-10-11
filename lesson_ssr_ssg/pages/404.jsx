import React from "react";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center gap-[30px]">
      <div className="text-7xl">404</div>
      <div className=" border-l-[3px] border-black h-[60px]"></div>
      <div className=""></div>
      <div className="w-[392px] h-[188px] flex flex-col justify-center">
        <h className="mb-5">Page Not Found</h>
        <h2 className="mb-5">
          We're sorry, This page is unknown or does not exist the page you are
          looking for.
        </h2>
        <div>
          {" "}
          <Link
            href="/"
            className="text-center hover:bg-slate-600 animate-ping text-red-700 w-[98px] h-[20px] bg-slate-300 rounded-[10px] p-2"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
