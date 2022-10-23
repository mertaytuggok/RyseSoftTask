import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export const FormationAccordion = () => {
  const [openFormAccordion, setOpenFormAccordion] = useState(false);

  return (
    <div>
      <button onClick={() => setOpenFormAccordion(!openFormAccordion)}>
        <MdOutlineKeyboardArrowDown size={25} />
      </button>

      {openFormAccordion && (
        <span className="grid w-[400px] h-fit ml-[-400px] rounded-2xl shadow-md  bg-white absolute z-20 p-4">
          <p className=" font-bold text-3xl p-2">Formation status</p>
          <p className=" font-medium text-lg  pb-4">In progress</p>
          <div className=" w-full h-[25px] bg-slate-200 rounded-2xl  ">
            <div className=" w-[80%] h-[25px] rounded-2xl bg-violet-500 " />
          </div>
          <p className=" text-center font-semibold text-lg pt-6">
            Estimated processing
          </p>
          <p className=" text-center font-normal text-lg">4-5 business days</p>
          <button className="w-[100%] h-[50px] text-white text-lg font-semibold mt-6 rounded-2xl bg-violet-500 ">
            View Profile
          </button>
        </span>
      )}
    </div>
  );
};
