import React from "react";
import logo from "../assets/logo.jpg";
import profilePhoto from "../assets/dc2ec5a571974417a5551420a4fb0587.webp";
import { TbMessages } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import Menu from "./Menu";
import { RxDashboard } from "react-icons/rx";
import { PiVideoLight } from "react-icons/pi";
import { GiAchievement } from "react-icons/gi";
import { FcMindMap } from "react-icons/fc";
const menuItems = [
  {
    title: "Dashboard",
    icon: <RxDashboard size={25} />,
  },
  {
    title: "Courses",
    icon: <PiVideoLight size={25} />,
  },
  {
    title: "Learning Lab",
    icon: <FcMindMap size={25} />,
  },
  {
    title: "Achievements",
    icon: <GiAchievement size={25} />,
  },
];
const Navbar = () => {
  return (
    <div className="flex justify-between items-center sticky top-0 z-40 p-2 w-full bg-white shadow-md shadow-gray-200">
      <div className="flex items-center">
        <div className="w-32 h-16">
          <img className="w-full h-full object-cover" src={logo} alt="logo" />
        </div>
          <div className="-ml-4 hidden flex-col relative text-blue-950 sm:flex">
            <span className="absolute -top-3 text-sm font-semibold left-4">my</span>
            <h1 className="text-lg font-semibold">favorite teacher</h1>
          </div>
      </div>
      <div className="hidden items-center gap-4 text-blue-950 sm:flex">
        {menuItems.map((item) => (
          <Menu key={item.title} title={item.title} icon={item.icon} />
        ))}
      </div>
      <div className="flex items-center gap-4">
        <div className="relative cursor-pointer">
            <div className="w-4 h-4 grid place-items-center absolute translate-x-[90%] translate-y-[-40%] text-xs rounded-sm bg-red-600 text-white">2</div>
          <TbMessages size={22} />
        </div>
        <div className="relative cursor-pointer">
            <div className="w-4 h-4 grid place-items-center absolute translate-x-[90%] translate-y-[-40%] text-xs rounded-sm bg-red-600 text-white">5</div>
          {" "}
          <IoMdNotificationsOutline size={22} />{" "}
        </div>
        <div className="w-8 h-8 ">
          <img
            className="w-full rounded-full h-full object-cover"
            src={profilePhoto}
            alt="profile"
          />
        </div>
        <span>
          {" "}
          <FaAngleDown size={15} />{" "}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
