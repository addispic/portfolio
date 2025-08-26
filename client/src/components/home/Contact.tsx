import { motion } from "motion/react";
// icons
import { IoIosChatboxes } from "react-icons/io";
export default function Contact() {
  return (
    <div className="my-12">
      <div className="con-width flex items-center justify-center">
        <motion.button
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 3,
              delay: 1.5,
            },
          }}
          className="flex items-center gap-x-1.5 px-3 py-1 rounded-sm text-sm border border-neutral-900 text-neutral-600 transition-colors ease-in-out duration-300 hover:text-pr hover:border-pr cursor-pointer"
          onClick={() => {
            window.open("https://t.me/adisie_fenta", "_blank");
          }}
        >
          <IoIosChatboxes className="text-lg" />
          <span>Message</span>
        </motion.button>
      </div>
    </div>
  );
}
