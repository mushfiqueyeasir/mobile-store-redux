import React from "react";

const StaticPageWithTitle = ({page}) => {
  return (
    <div className="w-screen min-h-[90vh] flex justify-center items-center overflow-hidden">
      <h1 className="text-5xl font-bold capitalize">{page}</h1>
    </div>
  );
};

export default StaticPageWithTitle;
