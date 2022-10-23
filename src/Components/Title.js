import React from "react";

export const Title = ({ userName }) => {
  return (
    <div className="absolute  top-8 ">
      <div className=" container  2xl:text-4xl md:text-2xl  font-semibold w-full h-fit">
        Good Morning, {userName}!
      </div>
    </div>
  );
};
