import { useState } from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
// icons
import { FaBalanceScaleLeft } from "react-icons/fa";
import { PiLinkSimpleFill } from "react-icons/pi";
import { FaSquareGithub } from "react-icons/fa6";
import { LuArrowRight } from "react-icons/lu";
export default function Projects() {
  // states
  // local
  const [projects, setProjects] = useState(() => [
    {
      icon: PiLinkSimpleFill,
      title: "ETBLink",
      text: "Connecting Businesses and Opportunities",
      url: "https://etblink.com",
    },
    {
      icon: FaBalanceScaleLeft,
      title: "MAKUTA",
      text: "Law Management System In Ethiopia",
      url: "https://www.makutalawfirm.com",
    },
    {
      icon: FaSquareGithub,
      title: "Prosonals",
      text: "Explore more of my personal projects",
      url: "",
    },
  ]);

  const v1: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        staggerChildren: 1.5,
      },
    },
  };

  const v2: Variants = {
    hidden: {
      opacity: 0,
      scale: 0,
      x: 32,
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

  return (
    <div className="mt-24">
      <div className="con-width">
        <div className="flex items-center justify-center">
          <motion.h3
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 1.5,
                // type: "spring",
                // stiffness: 70,
              },
            }}
            className="text-center w-max text-lg sm:text-xl md:text-2xl lg:text-3xl relative after:absolute after:left-0 after:-bottom-1.5 after:h-[.1rem] after:w-[25%] after:rounded-full after:bg-pr cursor-pointer after:transition-all after:ease-in-out after:duration-300 hover:after:w-[50%]"
          >
            Projects
          </motion.h3>
        </div>
        <motion.p
          initial={{
            scale: 0,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: {
              duration: 1.5,
              delay: 1,
            },
          }}
          className="mt-10 max-w-3xl mx-auto text-center text-neutral-600"
        >
          Some of the projects I’ve worked on, using various technologies
          including React, Next.js, Express, MongoDB, Tailwind CSS, and
          Socket.IO.
        </motion.p>
        <motion.div
          variants={v1}
          initial={"hidden"}
          whileInView={"visible"}
          className="grid grid-cols-2 sm:grid-cols-3 max-w-2xl mx-auto gap-7 sm:gap-16 mt-10"
        >
          {projects.map((item, index) => {
            return (
              <motion.div
                variants={v2}
                key={item.title}
                className="max-w-52 flex flex-col items-center justify-center last:col-span-2 sm:last:col-span-1 last:max-w-[100%]  sm:last:max-w-52"
              >
                <item.icon
                  className={`text-3xl ${
                    index === 0
                      ? "text-sky-600"
                      : index === 1
                      ? "text-purple-800"
                      : "text-green-700"
                  }`}
                />

                <h3 className="mt-3 text-neutral-500 font-medium">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 text-center my-3">
                  {item.text}
                </p>
                <button
                  className={`border w-7 aspect-square shrink-0 rounded-full flex items-center justify-center border-neutral-900 text-neutral-700 transition-colors ease-in-out duration-300 cursor-pointer ${
                    index === 0
                      ? "hover:border-sky-900 hover:text-sky-500"
                      : index === 1
                      ? "hover:border-purple-950 hover:text-purple-700"
                      : "hover:border-green-900 hover:text-green-600"
                  }`}
                  onClick={() => {
                    window.open(item.url, "_blank");
                  }}
                >
                  <LuArrowRight />
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
