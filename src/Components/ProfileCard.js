import { BsCalendar4Week } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiMessageAltDots } from "react-icons/bi";
import ProfileSvg from "../Asset/Profil.svg";
import { TodoList } from "./TodoList";
import { Meeting } from "./Meeting";
import { FormationAccordion } from "./FormationAccordion";

export const ProfileCard = ({ todo, meetings }) => {
  return (
    <div className="  mx-auto rounded-3xl   p-4 w-80 h-full  grid bg-slate-200 ">
      <div className="flex justify-center">
        <div className=" mt-3 ">
          <button>
            <BsCalendar4Week size={30} fontWeight={600} />
          </button>
        </div>
        <div className=" ml-4 mt-3 ">
          <button>
            <IoMdNotificationsOutline size={30} fontWeight={600} />
          </button>
        </div>
        <div className=" ml-4 mt-3 ">
          <button>
            <BiMessageAltDots size={30} fontWeight={600} />
          </button>
        </div>
        <button className=" ml-4 mt-3 w-[35px] h-[35px] rounded-full ">
          <img src={ProfileSvg} alt="Profile" />
        </button>
        <div className=" ml-4 mt-3">
          <FormationAccordion />
        </div>
      </div>{" "}
      <div className=" grid ml-8">
        <TodoList todo={todo} />
      </div>
      <div className=" m-2">
        <Meeting meetings={meetings} />
      </div>
    </div>
  );
};
