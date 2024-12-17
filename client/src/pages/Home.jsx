import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// icons
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";

const Home = () => {
  // states
  // social links
  const [socialLinks, setSocialLinks] = useState({
    options: [
      {
        icon: IoLogoGithub,
        text: "GitHub",
        path: "https://github.com/addispic",
      },
      {
        icon: IoLogoLinkedin,
        text: "Linkedin",
        path: "https://www.linkedin.com/in/addispic",
      },
      {
        icon: FaTelegramPlane,
        text: "Telegram",
        path: "https://t.me/addis_pik",
      },
    ],
    selected: "",
  });
  return (
    <div>
      {/* 1 */}
      <div className="py-20 bg-gradient-to-r from-white to-neutral-50">
        <div className="flex items-center main-padding">
          {/* left */}
          <div className="w-1/2 bg-red-200">left</div>
          {/* right */}
          <div className="w-1/2 flex items-center justify-center">
            {/* about me */}
            <div className="bg-white rounded-3xl rounded-bl-none rounded-tr-none overflow-hidden p-5 shadow-lg">
              {/* image & detail */}
              <div className="flex items-center gap-x-3">
                {/* image */}
                <div className="w-[50px] aspect-square rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-center object-cover"
                    src="/addis-i.jpg"
                    alt=""
                  />
                </div>
                {/* detail */}
                <div>
                  {/* name */}
                  <p className="font-medium text-neutral-700">Addis Fenta</p>
                  <p className="text-sm text-neutral-500 -mt-1">
                    Software Engineer
                  </p>
                </div>
              </div>
              {/* line */}
              <div className="w-[75%] mx-auto relative h-[1px] bg-neutral-200 my-2">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[10px] aspect-square rounded-full bg-inherit" />
              </div>
              {/* intro */}
              <div className="max-w-52 text-sm text-neutral-500 italic text-center">
                <p>Graduated from Bahir Dar University in 2022.</p>
              </div>
              {/* social links */}
              <div className="flex items-center justify-center gap-x-5 mt-3">
                {socialLinks.options.map((socialItem) => {
                  return (
                    <NavLink
                      to={socialItem.path}
                      key={socialItem.text}
                      target="_blank"
                      className={"relative"}
                      onMouseEnter={() => {
                        setSocialLinks((prev) => {
                          return {
                            ...prev,
                            selected: socialItem.text,
                          };
                        });
                      }}
                      onMouseLeave={() => {
                        setSocialLinks((prev) => {
                          return {
                            ...prev,
                            selected: "",
                          };
                        });
                      }}
                    >
                      {/* icon */}
                      <div>
                        <socialItem.icon
                          className={`text-lg ${
                            socialItem.text === "GitHub"
                              ? "text-emerald-600"
                              : socialItem.text === "Linkedin"
                              ? "text-blue-600"
                              : "text-cyan-600"
                          }`}
                        />
                      </div>
                      {/* text */}
                      <div
                        className={`absolute left-1/2 text-xs rounded-md rounded-bl-none transition-transform ease-in-out duration-150  top-[-24px] px-1 py-0.5 text-white ${
                          socialItem.text === "GitHub"
                            ? "bg-emerald-600"
                            : socialItem.text === "Linkedin"
                            ? "bg-blue-600"
                            : "bg-cyan-600"
                        } ${
                          socialLinks.selected === socialItem.text
                            ? "scale-100"
                            : "scale-0"
                        }`}
                      >
                        <span>{socialItem.text}</span>
                      </div>
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
