import {
  HiOutlineHome,
  HiOutlineMail,
  HiOutlinePlay,
  HiOutlineDocumentText,
} from "react-icons/hi";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { VscGraph } from "react-icons/vsc";
import {
  IoIosPeople,
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { IconContext } from "react-icons/";
import { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

export const Header = () => {
  const [openHeader, setOpenHeader] = useState(false);

  return (
    <div
      className={classNames({
        " relative rounded-3xl mt-8 ml-4   w-24 max-w-2xl h-[90%] justify-center items-center grid bg-violet-500 duration-500 ": true,
        "w-40 justify-center items-center grid": openHeader,
      })}
    >
      <div className=" flex justify-center items-center ">
        <p className="text-zinc-50 text-xl font-bold italic ">dappr</p>
      </div>
      <IconContext.Provider value={{ color: "white" }}>
        <div className="absolute visible  top-28 right-[-16px] sm:invisible lg:visible ">
          <button onClick={() => setOpenHeader(!openHeader)}>
            {openHeader ? (
              <IoIosArrowDropleftCircle size={35} />
            ) : (
              <IoIosArrowDroprightCircle size={35} />
            )}
          </button>
        </div>
        <div className="grid grid-col-1 justify-center  colomns-8 place-content-center  items-center">
          <div className=" pt-32 md:pt-2 ">
            <Link to="/home" className="flex space-x-2">
              <HiOutlineHome size={25} />
              {openHeader && (
                <p className=" text-white font-semibold ">Ana Sayfa</p>
              )}
            </Link>
          </div>
          <div className="  pt-8  ">
            <Link to="/graph" className="flex space-x-2">
              <VscGraph size={25} />
              {openHeader && (
                <p className=" text-white font-semibold ">Grafik</p>
              )}
            </Link>
          </div>
          <div className="  pt-8">
            <Link to="/library" className="flex space-x-2">
              <HiOutlineBuildingLibrary size={25} />
              {openHeader && (
                <p className=" text-white font-semibold ">Kütüphane</p>
              )}
            </Link>
          </div>
          <div className="  pt-8">
            <Link to="/mail" className="flex space-x-2">
              <HiOutlineMail size={25} />
              {openHeader && <p className=" text-white font-semibold ">Mail</p>}
            </Link>
          </div>
          <div className="  pt-8">
            <Link to="/play" className="flex space-x-2">
              <HiOutlinePlay size={25} />
              {openHeader && <p className=" text-white font-semibold ">Play</p>}
            </Link>
          </div>
          <div className="  pt-8">
            <Link to="#" className="flex space-x-2">
              <IoIosPeople size={25} />
              {openHeader && (
                <p className=" text-white font-semibold ">Etkileşim</p>
              )}
            </Link>
          </div>{" "}
          <div className="  pt-8">
            <Link to="/document" className="flex space-x-2">
              <HiOutlineDocumentText size={25} />
              {openHeader && (
                <p className=" text-white font-semibold ">Document</p>
              )}
            </Link>
          </div>
          <div className="  pt-8">
            <Link to="/wallet" className="flex space-x-2">
              <RiMoneyDollarCircleLine size={25} />
              {openHeader && (
                <p className=" text-white font-semibold ">Cüzdan</p>
              )}
            </Link>
          </div>
          <div className=" pt-24 ">
            <Link to="/settings" className="flex space-x-2">
              <FiSettings size={25} />
              {openHeader && (
                <p className=" text-white font-semibold ">Ayarlar</p>
              )}
            </Link>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
};
