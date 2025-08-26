import { useState } from "react";

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

  return (
    <div className="mt-36">
      {/* content */}
      <div className="con-width grid grid-cols-2 gap-12">
        <div className="h-full overflow-hidden rounded-xl">
          <img
            className="w-full h-full object-center object-cover"
            src="/images/personal/dark-fixed.jpg"
            alt=""
          />
        </div>
        <div>
          <h3 className="w-max text-lg sm:text-xl md:text-2xl lg:text-3xl relative after:absolute after:left-0 after:-bottom-1.5 after:h-[.1rem] after:w-[25%] after:rounded-full after:bg-pr cursor-pointer after:transition-all after:ease-in-out after:duration-300 hover:after:w-[50%]">
            Web & Mobile Solutions
          </h3>
          <p className="text-neutral-500 my-5">
            Building scalable web and mobile applications with seamless user
            experiences, including smooth integration of third-party APIs and
            SDKs to extend functionality.
          </p>
          {software.map((item, index) => {
            return (
              <div key={item.title} className="mt-5 flex items-center gap-5">
                {/* icon */}
                <div className="shrink-0 w-10 aspect-square rounded-full flex items-center justify-center bg-pr/50 text-white">
                  <item.icon className="text-xl" />
                </div>
                {/* text */}
                <div>
                  <h3 className=" font-medium mb-1 text-pr/75">{item.title}</h3>
                  <p className="text-sm">{item.text}</p>
                </div>
              </div>
            );
          })}
          <button
            className="mt-7 w-max flex items-center gap-x-1.5 px-3 py-1 rounded-sm text-sm border border-neutral-900 text-neutral-600 transition-colors ease-in-out duration-300 hover:text-pr hover:border-pr cursor-pointer"
            onClick={scrollHandler}
          >
            <span>Projects</span>
            <FiArrowRight className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}
