import { motion } from "motion/react";
import type { Variants } from "motion/react";
// icons
import { IoIosChatboxes } from "react-icons/io";
// hooks
import { useAppDispatch } from "../hooks";
// slices
import { newUpdate } from "../features/trackers/trackers.slice";

export default function Header() {
  const pv: Variants = {
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
  const cv: Variants = {
    hidden: {
      opacity: 0.5,
      scale: 0,
      y: "-10vh",
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };
  // hooks
  const dispatch = useAppDispatch();

  // handlers
  const newUpdateHandler = (flag: number) => {
    dispatch(newUpdate(1));
  };
  return (
    <header>
      <motion.div
        variants={pv}
        initial="hidden"
        whileInView={"visible"}
        className="flex items-center justify-between con-width py-3"
      >
        <motion.h3
          variants={cv}
          className="text-lg sm:text-xl md:text-xl font-medium text-neutral-700"
        >
          addis<span className="font-black text-pr cursor-pointer">pic</span>
        </motion.h3>
        <motion.button
          variants={cv}
          className="flex items-center gap-x-1.5 px-3 py-1 rounded-sm text-sm border border-neutral-900 text-neutral-600 transition-colors ease-in-out duration-300 hover:text-pr hover:border-pr cursor-pointer"
          onClick={() => {
            newUpdateHandler(1);
            window.open("https://t.me/adisie_fenta", "_blank");
          }}
        >
          <IoIosChatboxes className="text-lg" />
          <span className="hidden sm:block">Message</span>
        </motion.button>
      </motion.div>
    </header>
  );
}
