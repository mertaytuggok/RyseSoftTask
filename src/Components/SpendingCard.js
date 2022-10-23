import { SlWallet } from "react-icons/sl";
import { Acordion } from "./Acordion";

export const SpendingCard = ({ spending }) => {
  return (
    <div className="relative  shadow-lg w-[250px] h-[200px] bg-white rounded-2xl">
      <div className="absolute top-5 left-4">
        <SlWallet size={40} />
      </div>
      <div className="absolute top-[40%] left-[15%]">
        <p className="font-bold  text-2xl ">{spending}</p>
        <p className=" w-[110px] h-[50px] font-medium mt-2  ">
          This week's card spending
        </p>
      </div>
      <div className="absolute right-0 top-3">
        <Acordion />
      </div>
    </div>
  );
};
