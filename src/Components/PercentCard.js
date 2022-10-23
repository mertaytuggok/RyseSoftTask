import { SlPieChart } from "react-icons/sl";
import { Acordion } from "./Acordion";

export const PercentCard = () => {
  return (
    <div className="relative shadow-lg  w-[250px] h-[200px] bg-white rounded-xl">
      <div className="absolute top-5 left-4">
        <SlPieChart size={45} fontWeight={600} />
      </div>
      <div className="absolute top-[40%] left-[15%]">
        <p className="font-bold  text-2xl "></p>
        <p className=" w-[80px] h-[50px] font-medium"></p>
      </div>
      <div className="absolute right-0 top-3">
        <Acordion />
      </div>
    </div>
  );
};
