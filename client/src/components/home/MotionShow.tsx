import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// icons
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoIosChatboxes } from "react-icons/io";

export default function MotionShow() {
  const [isVisible, setIsVisible] = useState(true);

  const items = [
    "Software Developer",
    "Full stack engineer",
    "Frontend Developer",
    "Backend Developer",
  ];

  // Total animation time: 0.8s per item + 0.5s gap ≈ 5s total
  // Add 3s pause
  useEffect(() => {
    const totalDuration = items.length * 800 + 3000; // ms
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, totalDuration * 2); // Back and forth

    return () => clearInterval(interval);
  }, []);

  const myStuff = [
    "_image",
    "_name",
    "_line",
    "_intro",
    "TypeScript Developer",
    "CI/CD Specialist",
    "Prisma & Mongoose ORM",
    "UI/UX Designer",
    "PostgreSQL & MongoDB",
    "_btn",
  ];

  return (
    <div className="relative h-[315px] w-full px-3 py-1.5 rounded-md overflow-hidden bg-dark-4 text-neutral-400">
      {myStuff.map((item, index) => {
        const delay = index * 0.5; // seconds
        const reverseDelay = (items.length - 1 - index) * 0.5;
        if (item === "_image") {
          return (
            <motion.div
              key={"_image"}
              initial={{
                left: 0,
                top: 0,
                width: "100%",
                height: "315px",
                borderRadius: 0,
              }}
              animate={
                isVisible
                  ? {
                      left: 5,
                      top: 5,
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      transition: {
                        delay,
                        duration: 1.5,
                        ease: "easeOut",
                      },
                    }
                  : {
                      left: 0,
                      top: 0,
                      width: "100%",
                      height: "315px",
                      borderRadius: 0,
                      transition: {
                        delay: reverseDelay + 3, // 3s pause before exit
                        duration: 1.5,
                        ease: "easeIn",
                      },
                    }
              }
              className="absolute z-20 left-0 top-0 w-full h-full overflow-hidden"
            >
              <img
                src="/images/personal/adisie.jpg"
                className="w-full h-full object-center object-cover"
                alt="addis pic"
              />
            </motion.div>
          );
        } else if (item === "_name") {
          return (
            <motion.div
              key={"_name"}
              initial={{
                x: 64,
                scale: 0,
                opacity: 0,
              }}
              animate={
                isVisible
                  ? {
                      x: 0,
                      scale: 1,
                      opacity: 1,
                      transition: {
                        delay,
                        duration: 1.5,
                        ease: "easeInOut",
                      },
                    }
                  : {
                      x: 64,
                      scale: 0,
                      opacity: 0,
                      transition: {
                        delay: reverseDelay + 3,
                        duration: 1.5,
                        ease: "easeInOut",
                      },
                    }
              }
              className="absolute top-1.5 left-12"
            >
              <p className="font-medium text-sm">Adisie Fenta Shiferaw</p>
              <p className="text-xs text-neutral-500">Software Engineer</p>
            </motion.div>
          );
        } else if (item === "_line") {
          return (
            <motion.div
              key={"_line"}
              initial={{
                scaleX: 0,
                originX: 0,
              }}
              animate={
                isVisible
                  ? {
                      scaleX: 1,
                      originX: 0,
                      transition: {
                        delay,
                        duration: 1.5,
                        ease: "easeOut",
                      },
                    }
                  : {
                      scaleX: 0,
                      originX: 0,
                      transition: {
                        delay: reverseDelay + 3,
                        duration: 1.5,
                        ease: "easeIn",
                      },
                    }
              }
              className="relative pt-12 pb-1.5 w-full"
            >
              <div className="w-full h-[.05rem] bg-pr/50" />
            </motion.div>
          );
        } else if (item === "_intro") {
          return (
            <motion.p
              key={"_intro"}
              initial={{
                x: 64,
                scale: 0,
                opacity: 0,
              }}
              animate={
                isVisible
                  ? {
                      x: 0,
                      scale: 1,
                      opacity: 1,
                      transition: {
                        delay,
                        duration: 1.5,
                        ease: "easeInOut",
                      },
                    }
                  : {
                      x: 64,
                      scale: 0,
                      opacity: 0,
                      transition: {
                        delay: reverseDelay + 3,
                        duration: 1.5,
                        ease: "easeInOut",
                      },
                    }
              }
              className="text-sm italic text-neutral-600 p-1 bg-dark-1 rounded-sm my-1.5"
            >
              Full-stack engineer creating scalable, user-focused digital
              solutions.
            </motion.p>
          );
        } else if (item === "_btn") {
          return (
            <motion.div
              key={"_btn"}
              initial={{
                x: 64,
                scale: 0,
                opacity: 0,
              }}
              animate={
                isVisible
                  ? {
                      x: 0,
                      scale: 1,
                      opacity: 1,
                      transition: {
                        delay,
                        duration: 1.5,
                        ease: "easeInOut",
                      },
                    }
                  : {
                      x: 64,
                      scale: 0,
                      opacity: 0,
                      transition: {
                        delay: reverseDelay + 3,
                        duration: 1.5,
                        ease: "easeInOut",
                      },
                    }
              }
              className=" mt-3.5"
            >
              <button
                className="flex items-center gap-x-1.5 px-3 py-1 rounded-sm text-xs border border-neutral-900 text-neutral-600 transition-colors ease-in-out duration-300 hover:text-pr hover:border-pr cursor-pointer"
                onClick={() => {
                  window.open("https://t.me/adisie_fenta", "_blank");
                }}
              >
                <IoIosChatboxes />
                <span>Message</span>
              </button>
            </motion.div>
          );
        } else {
          return (
            <motion.div
              initial={{
                x: 64,
                scale: 0,
                opacity: 0,
              }}
              animate={
                isVisible
                  ? {
                      x: 0,
                      scale: 1,
                      opacity: 1,
                      transition: {
                        delay,
                        duration: 1.5,
                        ease: "easeInOut",
                      },
                    }
                  : {
                      x: 64,
                      scale: 0,
                      opacity: 0,
                      transition: {
                        delay: reverseDelay + 3,
                        duration: 1.5,
                        ease: "easeInOut",
                      },
                    }
              }
              className=" text-neutral-600 text-sm mb-1.5 flex items-center gap-1.5 ml-3"
              key={item}
            >
              <IoMdCheckmarkCircleOutline className="text-lg text-pr/50 mt-1.5" />
              <p className="px-3 py-1 rounded-full w-max bg-dark-1 text-xs text-neutral-500">
                {item}
              </p>
            </motion.div>
          );
        }
      })}
    </div>
  );
}
