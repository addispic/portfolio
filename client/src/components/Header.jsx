import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// icons
// message
import { BiSolidMessageRounded } from "react-icons/bi";
// sun
import { BsSunFill } from "react-icons/bs";
// moon
import { BsMoonFill } from "react-icons/bs";
// help
import { AiFillQuestionCircle } from "react-icons/ai";
// close
import { AiFillCloseCircle } from "react-icons/ai";

// slices
// theme slice
import {
  themeSwitcher,
  selectIsDarkMood,
} from "../features/theme-feature/themeSlice";

const Header = ({ scrollHandler }) => {
  // slice state
  const isDarkMood = useSelector(selectIsDarkMood);
  // hooks
  const dispatch = useDispatch();

  // is me
  const [isMe, setIsMe] = useState(false);

  return (
    <header
      className={`py-3  transition-colors ease-in-out duration-300 relative z-20 ${
        isDarkMood
          ? "bg-dark-dark text-light-dark"
          : "text-dark-dark bg-light-dark"
      }`}
    >
      {/* container */}
      <div className="max-width-container">
        <div className="flex items-center justify-between">
          {/* left site logo */}
          <div>
            <h1 className="cursor-pointer">
              <span className="font-black text-lg opacity-65">addis</span>
              <span className="text-xl font-black text-orange-border-color">
                Pic
              </span>
            </h1>
          </div>
          {/* right controllers */}
          <div className="flex items-center justify-end gap-x-3">
            {/* controllers */}
            {/* demo link */}
            {/* message button */}
            <div className="flex items-center gap-1 cursor-pointer">
              {/* text */}
              <div
                className={`px-3 py-0.5 rounded-sm text-sm transition-colors ease-in-out duration-150  ${
                  isDarkMood
                    ? "bg-dark-btn-color hover:bg-dark-btn-color-hover"
                    : "bg-light-btn-color hover:bg-light-btn-color-hover"
                }`}
                onClick={scrollHandler}
              >
                <span>message me</span>
              </div>
              {/* icon */}
              <div className="flex items-center">
                <BiSolidMessageRounded />
              </div>
            </div>
            {/* help */}
            <div className="cursor-pointer relative md:hidden">
              {/* pop up image */}
              <div
                className={`transition-transform ease-in-out duration-150 bg-light-light absolute z-30 right-0 top-[2rem] w-[200px] h-max rounded-md overflow-hidden ${
                  isMe ? "scale-100" : "scale-0"
                }`}
              >
                {/* image 1 */}
                <div>
                  <img src="/addispic-3.png" alt="" />
                </div>
                {/* image 2 */}
                <div>
                  <img src="/addispic-1.png" alt="" />
                </div>
              </div>
              {isMe ? (
                <AiFillCloseCircle
                  className="cursor-pointer"
                  onClick={() => setIsMe(!isMe)}
                />
              ) : (
                <AiFillQuestionCircle
                  className="cursor-pointer"
                  onClick={() => setIsMe(!isMe)}
                />
              )}
            </div>
            {/* theme switcher */}
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => {
                // dispatch(themeSwitcher());
                console.log({ isDarkMood });
              }}
            >
              <div className="flex items-center">{/* <BsSunFill /> */}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
