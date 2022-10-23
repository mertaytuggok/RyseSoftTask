import { CiCalendarDate } from "react-icons/ci";
import { Acordion } from "./Acordion";

export const DayCard = ({ day }) => {
  return (
    <div className="relative shadow-lg  w-[250px] h-[200px] bg-white rounded-2xl z-10">
      <div className="absolute top-5 left-4">
        <CiCalendarDate size={45} />
      </div>
      <div className="absolute top-[40%] left-[15%]">
        <p className="font-bold  text-2xl ">{day}</p>
        <p className=" w-[120px] h-[50px] font-medium mt-2">
          Employees working today
        </p>
      </div>
      <div className="absolute right-0 top-3">
        <Acordion />
      </div>
    </div>
  );
};
