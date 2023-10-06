import React from "react";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div>
      <h>Page Not Found</h>
      <h2>
        We're sorry, This page is unknown or does not exist the page you are
        looking for.
      </h2>
      <Link href="/" className="text-center w-">
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
