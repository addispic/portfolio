import React from "react";
import { NavLink } from "react-router-dom";

// icons
import { PiCertificateBold } from "react-icons/pi";
import { TbFileCv } from "react-icons/tb";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";

const Home = () => {
  return (
    <div>
      {/* 1 */}
      <div className="bg-neutral-700 text-neutral-200">
        <div className="flex items-center max-width-container">
          {/* left */}
          <div className="pt-12 md:pt-24">
            <p>Hi there!</p>
            <h2 className="text-3xl font-bold">I am Developer</h2>
            <p>I make the complex simple</p>
            <div className="flex items-center gap-x-3 mt-3">
              <NavLink className={'flex items-center gap-x-1 px-3 py-1 text-neutral-200 bg-emerald-600 w-max rounded-sm overflow-hidden relative after:w-0 after:h-full after:left-0 after:top-0 after:absolute after:transition-all after:ease-in-out after:duration-300 hover:after:w-full after:bg-emerald-500 transition-colors ease-in-out duration-300 hover:text-white'}>
                <PiCertificateBold className="relative z-10"/>
                <span className="relative z-10 lowercase">Certificates</span>
              </NavLink>
              <NavLink className={'flex items-center gap-x-1 px-3 py-1 text-neutral-200 bg-emerald-600 w-max rounded-sm overflow-hidden relative after:w-0 after:h-full after:left-0 after:top-0 after:absolute after:transition-all after:ease-in-out after:duration-300 hover:after:w-full after:bg-emerald-500 transition-colors ease-in-out duration-300 hover:text-white'}>
                <TbFileCv className="relative z-10"/>
                <span className="relative z-10 lowercase">check my cv</span>
              </NavLink>
            </div>
            {/* contact info */}
            <div className="mt-10 md:mt-16 mb-7 flex items-center gap-3 flex-wrap">
                {/* email */}
                <div className="flex items-center gap-1.5">
                    {/* icon */}
                    <div>
                        <MdOutlineMarkEmailRead className="text-xl text-neutral-400"/>
                    </div>
                    {/* text */}
                    <div>
                        <h3 className="text-xs font-medium capitalize">Email</h3>
                        <p className="text-sm text-neutral-300 dmt-[-.15rem]">addispik@gmail.com</p>
                    </div>
                </div>
                {/* bar */}
                <div className="h-[42px] w-[2px] bg-neutral-500" />
                {/* phone */}
                <div className="flex items-center gap-1.5">
                    {/* icon */}
                    <div>
                        <BiPhoneCall className="text-xl text-neutral-400"/>
                    </div>
                    {/* text */}
                    <div>
                        <h3 className="text-xs font-medium capitalize">Phone</h3>
                        <p className="text-sm text-neutral-300 dmt-[-.05rem]">+251 905 915 180</p>
                    </div>
                </div>
                 {/* bar */}
                 <div className="h-[42px] w-[2px] bg-neutral-500 hidden md:inline-block" />
                {/* Location */}
                <div className="hidden md:flex flex-col md:flex-row md:items-center gap-1.5">
                    {/* icon */}
                    <div>
                        <IoLocationOutline className="text-xl text-neutral-400"/>
                    </div>
                    {/* text */}
                    <div>
                        <h3 className="text-xs font-medium capitalize">Location</h3>
                        <p className="text-sm text-neutral-300 dmt-[-.05rem]">Addis Ababa, Ethiopia</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
