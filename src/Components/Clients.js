import React from "react";

export const Clients = ({ clients, percent }) => {
  return (
    <div className="w-[275px] h-[130px] bg-white rounded-2xl shadow-lg ">
      <p className="font-semibold text-xl flex justify-start pl-3 pt-2 ">
        New Clients
      </p>
      <div className="flex justify-between pt-4 ">
        <p className=" text-6xl font-semibold pl-8 ">{clients}</p>
        <div className="w-[75px] h-[25px] justify-center items-center flex bg-green-200 mt-4 mr-6">
          <p className="font-semibold text-lg text-green-600 ">+18.7%</p>
        </div>
      </div>
    </div>
  );
};
