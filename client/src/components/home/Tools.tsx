import { useState } from "react";
import Marquee from "react-fast-marquee";

// icons
import { GrHtml5 } from "react-icons/gr";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

export default function Tools() {
  // states
  // local
  const [tools, _setTools] = useState(() => [
    {
      icon: GrHtml5,
      color: "text-[#E34F26]", // HTML5 Orange
      title: "HTML5",
      text: "Markup language",
    },
    {
      icon: IoLogoCss3,
      color: "text-[#1572B6]", // CSS3 Blue
      title: "CSS3",
      text: "Styling web",
    },
    {
      icon: TbBrandJavascript,
      color: "text-[#F7DF1E]", // JavaScript Yellow
      title: "JavaScript",
      text: "Dynamic scripts",
    },
    {
      icon: FaReact,
      color: "text-[#61DAFB]", // React Cyan
      title: "React",
      text: "UI library",
    },
    {
      icon: RiTailwindCssFill,
      color: "text-[#38B2AC]", // Tailwind Teal
      title: "Tailwind CSS",
      text: "Utility CSS",
    },
    {
      icon: FaNodeJs,
      color: "text-[#68A063]", // Node.js Green
      title: "Node JS",
      text: "Backend runtime",
    },
    {
      icon: SiExpress,
      color: "text-[#ba2b00]", // Express Black
      title: "Express JS",
      text: "Web framework",
    },
    {
      icon: RiNextjsFill,
      color: "text-[#a1a1a1]", // Next.js Black
      title: "Next JS",
      text: "React framework",
    },
    {
      icon: SiMongodb,
      color: "text-[#47A248]", // MongoDB Green
      title: "MongoDB",
      text: "NoSQL database",
    },
    {
      icon: BiLogoPostgresql,
      color: "text-[#336791]", // PostgreSQL Blue
      title: "PostgreSQL",
      text: "Relational DB",
    },
    {
      icon: FaGithub,
      color: "text-[#27a346]", // GitHub Black
      title: "Git",
      text: "Version control",
    },
    {
      icon: FaDocker,
      color: "text-[#2496ED]", // Docker Blue
      title: "Docker",
      text: "Containerization",
    },
    {
      icon: SiAdobephotoshop,
      color: "text-[#31A8FF]", // Photoshop Blue
      title: "Adobe Photoshop",
      text: "Image editing",
    },
    {
      icon: BiLogoTypescript,
      color: "text-[#3178C6]", // TypeScript Blue
      title: "TypeScript",
      text: "Typed JS",
    },
  ]);

  return (
    <div className="bg-dark-2 mt-20">
      <div className="con-width py-3 relative">
        {/* left */}
        {/* <div className="absolute left-0 top-0 w-24 z-20 h-full bg-gradient-to-r from-dark-2 to-transparent" /> */}
        <Marquee speed={12} gradient={false} pauseOnHover={true}>
          {tools.map((toolItem, index) => {
            return (
              <div
                key={`${toolItem.title}-${index}`}
                className="flex items-center gap-3 mx-5"
              >
                {/* icon */}
                <div className="shrink-0 w-7 aspect-square flex items-center justify-center border border-neutral-900 rounded-full">
                  <toolItem.icon className={`${toolItem.color}`} />
                </div>
                {/* text */}
                <div className="text-xs">
                  <h4 className="">{toolItem.title}</h4>
                  <p className={`text-[.7rem] text-neutral-500 opacity-50`}>
                    {toolItem.text}
                  </p>
                </div>
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
}
