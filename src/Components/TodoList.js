import { CgNotes } from "react-icons/cg";
import { BiTimeFive } from "react-icons/bi";
import { SlNotebook } from "react-icons/sl";
import { HiOutlineClipboardCheck } from "react-icons/hi";

export const TodoList = ({ todo }) => {
  return (
    <div>
      <div>
        <p className=" font-semibold text-[24px]">Your to-Do List</p>
      </div>
      <div className=" mt-8">
        <ul className=" grid space-y-2 ">
          {todo.map((item, key) => (
            <li
              key={key}
              className="flex justify-start items-center  space-x-4  "
            >
              <div className=" rounded-2xl w-[45px] h-[45px]   bg-gray-300 items-center justify-center flex ">
                {item.icon == "time" ? (
                  <BiTimeFive size={30} />
                ) : item.icon == "list" ? (
                  <CgNotes size={30} />
                ) : item.icon == "note" ? (
                  <SlNotebook size={30} />
                ) : (
                  <HiOutlineClipboardCheck size={30} />
                )}
              </div>
              <div>
                <p className=" font-medium">{item.title}</p>
                <p className=" text-xs text-slate-500"> {item.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
