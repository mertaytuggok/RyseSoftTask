import ProfileSvg from "../Asset/Profil.svg";

export const Email = ({ mail }) => {
  return (
    <div className=" w-[90%] h-fit p-3 bg-white rounded-2xl shadow-lg  ">
      <p className="font-semibold text-2xl flex justify-start p-1     ">
        Recent emails
      </p>
      <div className="flex justify-between text-sm text-slate-500 ">
        <ul className="p-5 w-full">
          {mail.map((item, key) => (
            <li
              key={key}
              className="transition ease-in-out delay-250 hover:rounded-2xl hover:-translate-y-0.5 hover:scale-80 hover:bg-zinc-50 duration-300  "
            >
              <div className="flex w-full justify-between space-x-28 pt-1 ">
                <div className=" w-[40px] h-[40px] rounded-full  ">
                  <img src={ProfileSvg} alt="Profile" />
                </div>
                <p className="w-[15%] text-md font-medium">{item.to}</p>
                <p className="w-[15%] text-md font-medium">{item.subj}</p>
                <p className="w-[15%] text-md font-medium">{item.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
