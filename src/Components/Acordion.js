import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiMoneyCnyCircleLine } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";
import { AiOutlineEye } from "react-icons/ai";

export const Acordion = () => {
  const [openAccordion, setOpenAccordion] = useState(false);

  return (
    <div>
      <button onClick={() => setOpenAccordion(!openAccordion)}>
        <BsThreeDotsVertical size={25} />
      </button>

      {openAccordion && (
        <span className="grid w-[250px] h-fit rounded-2xl shadow-md  bg-white absolute z-20 p-4">
          <button className=" flex hover:bg-slate-200 w-full p-1 rounded-2xl">
            <RiMoneyCnyCircleLine size={25} />
            <p className="ml-1">Make payment</p>
          </button>
          <button className=" flex hover:bg-slate-200 p-1 rounded-2xl">
            <GrMoney size={20} />
            <p className="ml-1">Wiev balance details</p>
          </button>
          <button className=" flex hover:bg-slate-200 p-1 rounded-2xl">
            <AiOutlineEye size={25} />
            <p className="ml-1"> Wiew accont details</p>
          </button>
        </span>
      )}
    </div>
  );
};
