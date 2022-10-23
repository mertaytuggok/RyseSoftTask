import { CiWallet } from "react-icons/ci";
import { Acordion } from "./Acordion";

export const BalanceCard = ({ remainder }) => {
  return (
    <div className="relative shadow-lg  w-[250px] h-[200px] bg-white rounded-2xl">
      <div className="absolute top-5 left-4">
        <CiWallet size={45} fontWeight={600} />
      </div>
      <div className="absolute top-[40%] left-[15%]">
        <p className="font-bold  text-2xl "> ${remainder}</p>
        <p className=" w-[80px] h-[50px] font-medium mt-2">Your bank balance</p>
      </div>
      <div className="absolute right-0 top-3">
        <Acordion />
      </div>
    </div>
  );
};
