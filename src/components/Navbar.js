import React from "react";
import { SlMenu } from "react-icons/sl";
import { BsYoutube } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { MdKeyboardVoice } from "react-icons/md";
import {RiVideoAddLine} from "react-icons/ri";
import {BsBellFill} from "react-icons/bs"
const Navbar = () => {
  return (
    <div className="flex justify-between px-14 h-14 text-white item-center bg-[#212121] opecity-95 sticky">
      <div className="flex gap-8 items-center text-2xl">
        <div>
          <SlMenu />
        </div>
        <div className="flex gap-2 items-center justify-center">
          <BsYoutube className="text-3xl text-red-600" />
          <span className="text-2xl">Youtube</span>
        </div>
        </div>
        <div className="flex items-center justify-center gap-5">
          <form>
            <div className="flex bg-zinc-900 item-center h-10 px-4 pr-0 rounded-3xl">
              <div className="flex gap-5 items-center pr-5">
                <input
                  type="text"
                  placeholder="Search"
                  className=" w-96 bg-zinc-900 focus:outline-none border-none"
                />
              </div>
              <button className="h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-3xl">
                <GoSearch className="text-xl" />
              </button>
            </div>
          </form>
          <div className="text-xl p-3 bg-zinc-900 rounded-full">
            <MdKeyboardVoice className="text-white gap-6" />
          </div>
          </div>
          <div className="flex gap-8 items-center text-xl">
            <RiVideoAddLine/>
            <div className="relative">
            <BsBellFill/>
            <span className="absolute bottom-2 left-2 rounded-full px-1 bg-red-600 text-xs">9+</span>
            </div>
            <img src="https://gweb-research-imagen.web.app/compositional/An%20oil%20painting%20of%20a%20British%20Shorthair%20cat%20wearing%20a%20cowboy%20hat%20and%20red%20shirt%20skateboarding%20on%20a%20beach./1_.jpeg" alt="profile logo" className="w-9 h-9 rounded-full"/>
          </div>
    

    </div>
  );
};

export default Navbar;
