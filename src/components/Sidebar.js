import React from "react";
import {
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineWatchLater,
  MdFileDownload,
} from "react-icons/md";
import { BiLike } from "react-icons/bi";

const Sidebar = () => {
  const mainLinks = [
    {
      icon: <MdHomeFilled className="text-xl" />,
      name: "Home",
    },
    {
      icon: <MdOutlineSlowMotionVideo className="text-xl" />,
      name: "Shorts",
    },
    {
      icon: <MdSubscriptions className="text-xl"/>,
      name: "Subcriptions",
    },
  ];
  const otherLinks = [
    {
      icon: <MdOutlineVideoLibrary className="text-xl"/>,
      name: "Library",
    },
    {
      icon: <MdHistory className="text-xl"/>,
      name: "History",
    },
    {
      icon: <MdOutlineWatchLater className="text-xl"/>,
      name: "Watch Later",
    },
    {
      icon: <BiLike className="text-xl"/>,
      name: "Liked Videos",
    },
    {
        icon: <MdFileDownload className="text-xl"/>,
        name: "Downloads"
    }
  ];
  return (
    <div className="w-2/12 bg-[#212121] p-2 pr-5 pb-8 h-screen overflow-auto">
      <ul className="flex flex-col border-b-2 border-gray-700">
        {mainLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`pl-6 py-3 hover:bg-zinc-600 ${
                name === "Home" ? "bg-zinc-600" : " "
              } rounded-xl`}
            >
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className=" text-xs tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-1 border-grey-800">
        {otherLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`pl-6 py-3 hover:bg-zinc-600 ${
                name === "Home" ? "bg-slate-600" : " "
              }rounded-xl`}
            >
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className=" text-xs tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
