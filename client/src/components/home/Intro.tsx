import { useState } from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
// icons
import { FaTelegramPlane } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
export default function Intro() {
  const fpv: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 3.5,
      },
    },
  };
  const fcv: Variants = {
    hidden: {
      opacity: 0,
      scale: 4,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1,
        duration: 5,
        ease: "easeInOut",
      },
    },
  };

  const spv: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        staggerChildren: 1.75,
      },
    },
  };
  const scv: Variants = {
    hidden: {
      scale: 0.5,
      opacity: 0,
      x: "-50vw",
    },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: {
        duration: 2.5,
        staggerChildren: 1.5,
      },
    },
  };

  const bcv: Variants = {
    hidden: {
      opacity: 0,
      scale: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1.5,
      },
    },
  };
  // contacts
  const [contact, _setContact] = useState(() => [
    {
      icon: FaTelegramPlane,
      text: "Telegram",
      url: "https://t.me/adisie_fenta",
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
      <motion.div
        variants={fpv}
        initial="hidden"
        whileInView="visible"
        className="con-width py-32 relative "
      >
        {/* image */}
        <motion.div className="absolute h-full w-[65%] transition-all ease-in-out duration-300 left-0 overflow-hiddenx top-0 md:left-auto -ml-36 sm:-ml-44 md:right-0">
          <motion.img
            variants={fcv}
            className="w-full h-full object-center object-cover"
            src="/images/personal/addisfun4.jpg"
            alt="adisie fenta shiferaw"
          />
        </motion.div>
        {/* inro tex */}
        <motion.div
          variants={spv}
          initial={"hidden"}
          whileInView={"visible"}
          className="relative z-10 ml-24 sm:ml-40 md:ml-0"
        >
          <motion.h3
            variants={scv}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl"
          >
            I'm a{" "}
            <span className="font-black gradient-red-blue">
              Software Engineer
            </span>
          </motion.h3>
          <motion.p
            variants={scv}
            className="sm:text-lg md:text-xl lg:text-xl my-3 w-max font-bold"
          >
            TypeScript Developer
          </motion.p>
          <motion.p variants={scv} className="md:max-w-[55%] text-neutral-600">
            Experienced in building scalable web and mobile apps. From simple
            sites to advanced TypeScript solutions. Skilled in full-stack
            development (API design & integration) and creating responsive UIs
            using Tailwind CSS & Shadcn.
          </motion.p>
          <motion.div
            variants={scv}
            // initial={"hidden"}
            // whileInView={"visible"}
            className="mt-7 flex items-center gap-1.5 sm:gap-3 md:gap-5 lg:gap-7 "
          >
            {contact.map((item, index) => {
              return (
                <motion.button
                  variants={bcv}
                  key={item.text}
                  className={`flex items-center gap-x-1  sm:gap-x-2 md:gap-x-3 border px-1 sm:px-2 md:px-3 py-1 rounded-md transition-colors ease-in-out duration-300 cursor-pointer text-neutral-700 ${
                    index === 0
                      ? " border-transparent hover:border-sky-500/40 hover:text-sky-500"
                      : index === 1
                      ? " border-transparent hover:border-green-500/40 hover:text-green-600"
                      : " border-transparent hover:border-blue-500/40 hover:text-blue-500"
                  }`}
                  onClick={() => {
                    window.open(item.url, "_blank");
                  }}
                >
                  <item.icon />
                  <span>{item.text}</span>
                </motion.button>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
