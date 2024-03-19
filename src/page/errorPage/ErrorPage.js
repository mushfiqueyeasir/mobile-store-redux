import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[90vh] gap-y-8 xl:w-[25rem] mx-auto text-center overflow-hidden">
      <h1 className="text-4xl font-bold">Sorry, Page Not Found!</h1>

      <Link
        to="/"
        className="bg-black py-3 px-4 rounded-lg text-white font-medium "
      >
        Go Back
      </Link>
    </div>
  );
};

export default ErrorPage;
