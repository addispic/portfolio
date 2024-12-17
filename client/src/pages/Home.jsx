import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// icons
// social icons
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
// quotes
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";
// skills
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoDjango } from "react-icons/bi";

const Home = () => {
  // states
  // social links
  const [socialLinks, setSocialLinks] = useState({
    options: [
      {
        icon: IoLogoGithub,
        text: "GitHub",
        path: "https://github.com/addispic",
      },
      {
        icon: IoLogoLinkedin,
        text: "Linkedin",
        path: "https://www.linkedin.com/in/addispic",
      },
      {
        icon: FaTelegramPlane,
        text: "Telegram",
        path: "https://t.me/addis_pik",
      },
    ],
    selected: "",
  });
  // skills
  const [skills, setSkills] = useState([
    {
      icon: FaReact,
      title: "React",
      text: "Responsive user interfaces with React, focusing on clean components, efficient state management, and optimized performance for seamless experiences.",
    },
    {
      icon: RiNextjsFill,
      title: "Next JS",
      text: "Develop fast, scalable web applications with Next.js, using server-side rendering, static site generation, and API routes to enhance performance and SEO.",
    },
    {
      icon: FaNodeJs,
      title: "Node",
      text: "Build scalable backends with Node.js, focusing on RESTful APIs, real-time functionality, and seamless database integration.",
    },
    {
      icon: SiExpress,
      title: "Express",
      text: "Create robust and flexible APIs with Express.js, emphasizing clean routing, middleware integration, and fast, efficient request handling.",
    },
    {
      icon: SiMongodb,
      title: "MongoDB",
      text: "Design scalable databases with MongoDB, focusing on efficient data modeling, queries, and optimized performance.",
    },
    {
      icon: RiTailwindCssFill,
      title: "Tailwind CSS",
      text: "Responsive, modern designs with Tailwind CSS, leveraging utility-first classes for fast styling and consistent layouts.",
    },
    // {
    //     icon: BiLogoDjango,
    //     title: "Django",
    //     text: "",
    // },
  ]);

  return (
    <div>
      {/* 1 */}
      <div className="py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 bg-gradient-to-r from-white to-neutral-50">
        <div className="flex flex-col gap-y-5 sm:gap-y-7 md:gap-y-9 lg:gap-y-12 md:flex-row items-center main-padding">
          {/* left */}
          <div className="w-full md:w-1/2">
            {/* intro */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
              I'm <span className="font-black text-neutral-400">Addis</span>
            </p>
            <div className="mt-3 text-neutral-700">
              <p>
                <span className="font-medium">Full Stack</span> Developer
                passionate about building dynamic and scalable web applications.
                I specialize in the <span className="font-medium">MERN</span>{" "}
                stack to deliver end-to-end solutions, and I occasionally use{" "}
                <span className="font-medium">Django</span> to build robust
                back-end systems.
              </p>
            </div>
          </div>
          {/* right */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            {/* about me */}
            <div className="bg-white rounded-3xl rounded-bl-none rounded-tr-none overflow-hidden p-5 shadow-lg">
              {/* image & detail */}
              <div className="flex items-center gap-x-3">
                {/* image */}
                <div className="w-[50px] aspect-square rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-center object-cover"
                    src="/addis-i.jpg"
                    alt=""
                  />
                </div>
                {/* detail */}
                <div>
                  {/* name */}
                  <p className="font-medium text-neutral-700">Addis Fenta</p>
                  <p className="text-sm text-neutral-500 -mt-1">
                    Software Engineer
                  </p>
                </div>
              </div>
              {/* line */}
              <div className="w-[75%] mx-auto relative h-[1px] bg-neutral-200 my-2">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[10px] aspect-square rounded-full bg-inherit" />
              </div>
              {/* intro */}
              <div className="max-w-52 text-sm text-neutral-500 italic text-center">
                <p>Graduated from Bahir Dar University in 2022.</p>
              </div>
              {/* social links */}
              <div className="flex items-center justify-center gap-x-5 mt-3">
                {socialLinks.options.map((socialItem) => {
                  return (
                    <NavLink
                      to={socialItem.path}
                      key={socialItem.text}
                      target="_blank"
                      className={"relative"}
                      onMouseEnter={() => {
                        setSocialLinks((prev) => {
                          return {
                            ...prev,
                            selected: socialItem.text,
                          };
                        });
                      }}
                      onMouseLeave={() => {
                        setSocialLinks((prev) => {
                          return {
                            ...prev,
                            selected: "",
                          };
                        });
                      }}
                    >
                      {/* icon */}
                      <div>
                        <socialItem.icon
                          className={`text-lg ${
                            socialItem.text === "GitHub"
                              ? "text-emerald-600"
                              : socialItem.text === "Linkedin"
                              ? "text-blue-600"
                              : "text-cyan-600"
                          }`}
                        />
                      </div>
                      {/* text */}
                      <div
                        className={`absolute left-1/2 text-xs rounded-md rounded-bl-none transition-transform ease-in-out duration-150  top-[-24px] px-1 py-0.5 text-white ${
                          socialItem.text === "GitHub"
                            ? "bg-emerald-600"
                            : socialItem.text === "Linkedin"
                            ? "bg-blue-600"
                            : "bg-cyan-600"
                        } ${
                          socialLinks.selected === socialItem.text
                            ? "scale-100"
                            : "scale-0"
                        }`}
                      >
                        <span>{socialItem.text}</span>
                      </div>
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="py-7 bg-gradient-to-r from-neutral-50 to-white">
        <div className="main-padding text-center">
          {/* left quote */}
          <div className="w-full flex items-center justify-start pl-12 my-3 text-3xl text-neutral-300">
            <BiSolidQuoteAltLeft />
          </div>
          <p className="max-w-[1020px] mx-auto text-center text-neutral-600">
            With a strong emphasis on writing clean, maintainable code, crafting
            seamless user experiences, and adhering to modern design principles,
            I strive to build intuitive and efficient applications that not only
            meet user needs but also stand the test of time. By blending
            creativity with technical expertise, I aim to transform innovative
            ideas into impactful digital solutions that drive value and inspire
            users.
          </p>
          {/* right quote */}
          <div className="w-full flex items-center justify-end pr-12 my-3 text-3xl text-neutral-300">
            <BiSolidQuoteAltRight />
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 bg-gradient-to-r from-white to-neutral-50">
        <div className="main-padding flex flex-col gap-y-10 md:flex-row gap-x-10">
          {/* left */}
          <div className="md:w-[40%] shrink-0 rounded-md md:rounded-3xl overflow-hidden">
            <div className="w-full h-full">
              <img
                className="w-full h-full object-center object-cover"
                src="/addis-iii.jpg"
                alt=""
              />
            </div>
          </div>
          {/* right */}
          <div className="flex-1">
            <h3 className="header-iii">
              Technical Proficiencies
            </h3>
            <p className="my-5 text-smc text-neutral-700">
              I specialize in building full-stack applications using React,
              Next.js, Node.js, Express, and MongoDB, with Tailwind CSS for
              responsive designs.
            </p>
            {/* skills */}
            <div className="ml-[16px] py-3 rounded-sm border-l border-neutral-300">
              {skills.map((skill) => {
                return (
                  <div key={skill.title}>
                    {/* header */}
                    <header className="flex items-center gap-x-5">
                      {/* icon */}
                      <div className="w-[32px] ml-[-16px] aspect-square rounded-full border border-neutral-400 flex items-center justify-center bg-white text-lg text-neutral-500">
                        <skill.icon />
                      </div>
                      {/* title */}
                      <div>
                        <h3 className="text-xl text-neutral-700">
                          {skill.title}
                        </h3>
                      </div>
                    </header>
                    {/* content */}
                    <div className="ml-[36px] mb-3">
                      <p>{skill.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
