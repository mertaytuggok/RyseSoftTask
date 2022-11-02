import { Acordion } from "./Acordion";

export const HeaderCard = ({ remainder, icon, comment }) => {
  return (
    <div className="relative shadow-lg  w-[250px] h-[200px] bg-white rounded-2xl">
      <div className="absolute top-5 left-4">{icon}</div>
      <div className="absolute top-[40%] left-[15%]">
        <p className="font-bold  text-2xl "> {remainder}</p>
        <p className=" w-[120px] font-medium mt-2">{comment}</p>
      </div>
      <div className="absolute right-0 top-3">
        <Acordion />
      </div>
    </div>
  );
};
