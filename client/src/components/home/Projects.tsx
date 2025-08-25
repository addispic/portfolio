import { useState } from "react";
// icons
import { SiSky } from "react-icons/si";
import { PiLinkSimpleFill } from "react-icons/pi";
import { FaSquareGithub } from "react-icons/fa6";
import { LuArrowRight } from "react-icons/lu";
export default function Projects() {
  // states
  // local
  const [projects, setProjects] = useState(() => [
    {
      icon: SiSky,
      title: "SkyTech",
      text: "Skylight Technologies Company's website",
      url: "https://www.skylightethiopia.com",
    },
    {
      icon: PiLinkSimpleFill,
      title: "ETBLink",
      text: "Connecting Ethiopian Businesses and Opportunities",
      url: "https://etblink.com",
    },
    {
      icon: FaSquareGithub,
      title: "Prosonals",
      text: "Explore more of my personal projects",
      url: "",
    },
  ]);

  return (
    <div className="mt-24">
      <div className="con-width">
        <div className="flex items-center justify-center">
          <h3 className="text-center w-max text-lg sm:text-xl md:text-2xl lg:text-3xl relative after:absolute after:left-0 after:-bottom-1.5 after:h-[.1rem] after:w-[25%] after:rounded-full after:bg-pr cursor-pointer after:transition-all after:ease-in-out after:duration-300 hover:after:w-[50%]">
            Projects
          </h3>
        </div>
        <p className="mt-10 max-w-3xl mx-auto text-center">
          Some of the projects I’ve worked on, using various technologies
          including React, Next.js, Express, MongoDB, Tailwind CSS, and
          Socket.IO.
        </p>
        <div className="flex items-center justify-center gap-16 mt-10">
          {projects.map((item, index) => {
            return (
              <div
                key={item.title}
                className="max-w-52 flex flex-col items-center justify-center"
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
