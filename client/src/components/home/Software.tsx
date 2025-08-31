import { useState } from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";

// icons
import { FaLaptopCode } from "react-icons/fa";
import { MdMobileFriendly } from "react-icons/md";
import { TbPlugConnectedX } from "react-icons/tb";
import { FiArrowRight } from "react-icons/fi";

export default function Software({
  scrollHandler,
}: {
  scrollHandler: () => void;
}) {
  // software
  const [software, _setSoftware] = useState(() => [
    {
      icon: FaLaptopCode,
      title: "Website Development",
      text: "Building responsive and dynamic websites using React, Next.js, Node.js, Express, and modern databases like MongoDB and PostgreSQL.",
    },
    {
      icon: MdMobileFriendly,
      title: "Mobile App Development",
      text: "Developing cross-platform mobile applications with React Native that are performant, user-friendly, and scalable",
    },
    {
      icon: TbPlugConnectedX,
      title: "API & SDK Integration",
      text: "Seamlessly integrating third-party APIs and SDKs to enhance functionality and streamline workflows.",
    },
  ]);

  const fv: Variants = {
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
  const sv1: Variants = {
    hidden: {
      // scaleX: 0,
      originX: 0,
      x: "-100vw",
    },
    visible: {
      originX: 0,
      // scaleX: 1,
      x: 0,
      transition: {
        duration: 3.5,
      },
    },
  };
  const sv2: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const tv: Variants = {
    hidden: {
      x: "100vw",
      opacity: 0,
      scale: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
      },
    },
  };

  return (
    <div className="mt-12 sm:mt-24 md:mt-36">
      {/* content */}
      <motion.div
        variants={fv}
        initial={"hidden"}
        whileInView={"visible"}
        className="con-width grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        <motion.div className="h-full overflow-hidden rounded-3xl rounded-tr-none rounded-bl-none  relative z-0">
          <motion.img
            variants={sv1}
            className="w-full h-full object-center object-cover"
            src="/images/personal/software-team.jpg"
            alt="software developer tea"
          />
        </motion.div>
        <motion.div
          variants={sv2}
          initial={"hidden"}
          whileInView={"visible"}
          className=" relative z-20"
        >
          <motion.h3
            variants={tv}
            className="w-max text-lg sm:text-xl md:text-2xl lg:text-3xl relative after:absolute after:left-0 after:-bottom-1.5 after:h-[.1rem] after:w-[25%] after:rounded-full after:bg-pr cursor-pointer after:transition-all after:ease-in-out after:duration-300 hover:after:w-[50%]"
          >
            Web & Mobile Solutions
          </motion.h3>
          <motion.p variants={tv} className="text-neutral-500 my-5">
            Building scalable web and mobile applications with seamless user
            experiences, including smooth integration of third-party APIs and
            SDKs to extend functionality.
          </motion.p>
          {software.map((item, index) => {
            return (
              <motion.div
                variants={tv}
                key={item.title}
                className="mt-5 flex items-center gap-5"
              >
                {/* icon */}
                <div className="shrink-0 w-10 aspect-square rounded-full flex items-center justify-center bg-pr/50 text-white">
                  <item.icon className="text-xl" />
                </div>
                {/* text */}
                <div>
                  <h3 className=" font-medium mb-1 text-pr/75">{item.title}</h3>
                  <p className="text-sm">{item.text}</p>
                </div>
              </motion.div>
            );
          })}
          <motion.button
            variants={tv}
            className="mt-7 w-max flex items-center gap-x-1.5 px-3 py-1 rounded-sm text-sm border border-neutral-900 text-neutral-600 transition-colors ease-in-out duration-300 hover:text-pr hover:border-pr cursor-pointer"
            onClick={scrollHandler}
          >
            <span>Projects</span>
            <FiArrowRight className="text-lg" />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
