import { useState } from "react";
// icons
import { FaTelegramPlane } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
export default function Intro() {
  // contacts
  const [contact, _setContact] = useState(() => [
    {
      icon: FaTelegramPlane,
      text: "Telegram",
      url: "",
    },
    {
      icon: MdMarkEmailRead,
      text: "Email",
      url: "",
    },
    {
      icon: IoLogoLinkedin,
      text: "Linkedin",
      url: "",
    },
  ]);
  return (
    <div>
      <div className="con-width py-32 relative">
        {/* image */}
        <div className="absolute h-full w-[65%] overflow-hidden top-0 right-0">
          <img
            className="w-full h-full object-center object-cover"
            src="/images/personal/adisie-fenta-1.jpg"
            alt="adisie fenta shiferaw"
          />
        </div>
        {/* inro tex */}
        <div className="relative z-10">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
            I'm a{" "}
            <span className="font-black gradient-red-blue">
              Software Engineer
            </span>
          </h3>
          <p className="sm:text-lg md:text-xl lg:text-xl my-3 gradient-green-prupple w-max font-bold">
            TypeScript Developer
          </p>
          <p className="max-w-[50%] text-neutral-600">
            Software developer skilled in building scalable web and mobile apps
            — from{" "}
            <span className="uppercase font-bold gradient-red-blue">
              polished
            </span>{" "}
            UI design with Tailwind CSS to dynamic animations using{" "}
            <span className="gradient-green-prupple font-medium">
              Framer Motion
            </span>
            .
          </p>
          <div className="mt-7 flex items-center gap-10 ">
            {contact.map((item, index) => {
              return (
                <button
                  key={item.text}
                  className={`flex items-center gap-x-3 border px-3 py-1 rounded-md transition-colors ease-in-out duration-300 cursor-pointer ${
                    index === 0
                      ? "text-sky-500/50 border-transparent hover:border-sky-500/40 hover:text-sky-500"
                      : index === 1
                      ? "text-green-500/50 border-transparent hover:border-green-500/40 hover:text-green-500"
                      : "text-blue-500/50 border-transparent hover:border-blue-500/40 hover:text-blue-500"
                  }`}
                >
                  <item.icon />
                  <span>{item.text}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
