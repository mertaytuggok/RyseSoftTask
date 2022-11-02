import React from "react";
import { HeaderCard } from "../Components/HeaderCard";
import { Clients } from "../Components/Clients";
import { Email } from "../Components/Email";
import { Header } from "../Components/Header";
import { ProfileCard } from "../Components/ProfileCard";
import { Title } from "../Components/Title";
import { Revenue } from "../Components/Chart/Revenue";
import { CiWallet } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { SlWallet } from "react-icons/sl";
import { SlPieChart } from "react-icons/sl";

export const Main = () => {
  const data = {
    name: "James",
    balance: {
      balance: "$143,624",
      icon: <CiWallet size={45} fontWeight={600} />,
      comment: "Your bank balance",
    },
    cardSpending: {
      balance: "$3,287.49",
      icon: <SlWallet size={40} />,
      comment: " This week's card spending",
    },
    percent: <SlPieChart size={45} fontWeight={600} />,
    workingDay: {
      day: "7",
      icon: <CiCalendarDate size={45} />,
      comment: " Employees working today",
    },
    newClients: {
      title: "New Clients",
      count: "54",
      countPercent: "+2,7%",
    },
    overdue: {
      title: "Invoices overdue",
      count: "6",
      percent: "+18,54%",
    },
    mail: [
      {
        to: "Hannah Morgan",
        subj: "Meeting scheduled",
        time: "1:24 PM",
      },
      {
        to: "Megan Clark",
        subj: "Update on marketing campaign",
        time: " 12:32 PM",
      },
      {
        to: "Brandan Williams",
        subj: "Designly 2.0 is about to launch",
        time: "Yesterday at 8:57 PM",
      },
      {
        to: "Reid Smith",
        subj: "My friend Julie loves Dappr!",
        time: "Yesterday at 8:49 PM",
      },
    ],
    todo: [
      {
        title: "Run payroll",
        time: "Mar 4 at 6:00 PM",
        icon: "time",
      },
      {
        title: "Review time of request",
        time: "Mar 7 at 6:00 PM",
        icon: "list",
      },
      {
        title: "Sign board resolution",
        time: "Mar 12 at 6:00 PM",
        icon: "note",
      },
      {
        title: "Finish onboarding Tony",
        time: "Mar 12 at 6:00 PM",
        icon: "check",
      },
    ],
    meetings: [
      {
        title: "Board Meeting",
        time: "Feb 22 at 6:00 PM",
        subject:
          "You have been invited to attend a meeting of the Board Directors.",
      },
    ],
    revenueChart: [
      ["Year", "Sales", "Expenses"],
      ["Feb 14", 1000, 400],
      ["Feb 15", 1170, 460],
      ["Feb 16", 660, 1120],
      ["Feb 17", 1030, 540],
      ["Feb 18", 1170, 460],
      ["Feb 19", 950, 1000],
      ["Feb 20", 1000, 500],
    ],
  };

  return (
    <div className=" flex w-full h-full   ">
      <div className="w-[10%]">
        <Header />
      </div>
      <div className="  w-[70%] h-full ml-8 mr-8 ">
        <Title userName={data.name} />
        <div className="grid  ">
          <div className=" flex flex-row mt-20 sm:row-span-2 ">
            <HeaderCard
              remainder={data.balance.balance}
              icon={data.balance.icon}
              comment={data.balance.comment}
            />
            <div className="pl-5">
              <HeaderCard icon={data.percent} />
            </div>
            <div className="pl-5">
              <HeaderCard
                remainder={data.workingDay.day}
                icon={data.workingDay.icon}
                comment={data.workingDay.comment}
              />
            </div>
            <div className="pl-5">
              <HeaderCard
                remainder={data.cardSpending.balance}
                icon={data.cardSpending.icon}
                comment={data.cardSpending.comment}
              />
            </div>
          </div>
          <div className=" flex  mt-4">
            <div>
              <Clients
                clients={data.newClients.count}
                percent={data.newClients.countPercent}
                title={data.newClients.title}
              />
              <div className="pt-5">
                <Clients
                  clients={data.overdue.count}
                  percent={data.overdue.percent}
                  title={data.overdue.title}
                />
              </div>
            </div>
            <div className="pl-8 w-[100%] ">
              {" "}
              <Revenue chartData={data.revenueChart} />
            </div>
          </div>
          <div className="pt-3  ">
            <Email mail={data.mail} />
          </div>
        </div>
      </div>
      <div className="w-[25%]">
        <ProfileCard todo={data.todo} meetings={data.meetings} />
      </div>
    </div>
  );
};
