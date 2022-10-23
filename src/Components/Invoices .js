import React from "react";

export const Invoices = ({ clients, percent }) => {
  return (
    <div className="w-[275px] h-[140px] bg-white rounded-2xl shadow-lg ">
      <p className="font-semibold text-xl flex justify-start pl-3 pt-2 ">
        Invoices overdue
      </p>
      <div className="flex justify-between pt-4  ">
        <p className=" text-6xl font-semibold pl-8 ">{clients}</p>
        <div className="w-[75px] h-[25px] justify-center items-center flex bg-red-200 mt-4 mr-6">
          <p className="font-semibold text-lg text-red-600 ">{percent}</p>
        </div>
      </div>
    </div>
  );
};
