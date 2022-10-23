import React from "react";

export const Meeting = ({ meetings }) => {
  return (
    <div className="  w-auto p-4 h-fit bg-slate-50 rounded-2xl shadow-md flex justify-center items-center  ">
      <div className=" flex space-x-4">
        <div className=" w-[30px] h-[20px] mt-5 rounded-full bg-violet-500" />
        <div className=" grid ">
          {meetings.map((item, key) => (
            <div key={key}>
              <p className=" text-md font-semibold">{item.title}</p>
              <p className="text-xs text-slate-500">{item.time}</p>
              <p className="text-xs text-slate-400 pt-3">{item.subject}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
