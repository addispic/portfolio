import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { Pagination, FreeMode } from "swiper/modules";

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

// tools
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";

// collections
import { IoIosWarning } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import { FaFilePdf } from "react-icons/fa";

// languages
import { TbBrandJavascript } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoPython } from "react-icons/io";
import { SiDart } from "react-icons/si";

// links
import { LiaUserSolid } from "react-icons/lia";
import { TbSettingsCode } from "react-icons/tb";
import { RiToolsLine } from "react-icons/ri";
import { RiSlideshow3Line } from "react-icons/ri";
import { PiCodeThin } from "react-icons/pi";

// addis resume
import addisResume from "../documents/addispic-resume.pdf";

const Home = () => {
  // states
  // links
  const [links, setLinks] = useState({
    options: [
      {
        icon: LiaUserSolid,
        text: "About me",
      },
      {
        icon: TbSettingsCode,
        text: "Skills",
      },
      {
        icon: RiToolsLine,
        text: "Tools",
      },
      {
        icon: RiSlideshow3Line,
        text: "UI Demo",
      },
      {
        icon: PiCodeThin,
        text: "Languages",
      },
    ],
    selected: "",
  });
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
  // tools
  const [tools, setTolls] = useState([
    {
      icon: VscVscode,
      title: "VS Code",
      text: "My primary code editor, offering powerful features like IntelliSense, debugging tools, and a wide range of extensions to enhance productivity and streamline development.",
    },
    {
      icon: SiPostman,
      title: "Postman",
      text: "Used for testing and debugging APIs, allowing me to quickly send requests, analyze responses, and ensure smooth communication between the frontend and backend.",
    },
    {
      icon: FaGitAlt,
      title: "Git",
      text: "Essential for version control, helping me manage and track code changes, collaborate with teams, and maintain an organized development process.",
    },
  ]);

  // demos
  const [demos, setDemos] = useState([
    {
      image: "/dashboard-i.png",
      site: "https://ui-demo-0uv1.onrender.com",
      git: "https://github.com/addispic/uidemo/tree/dashboard-i",
    },
    {
      image: "/landing-page-i.png",
      site: "https://explore-ethiopia.onrender.com",
      git: "https://github.com/addispic/ui-demo/tree/explore-ethiopia",
    },
  ]);

  // languages
  const [languages, setLanguages] = useState([
    {
      language: "JavaScript",
      icon: TbBrandJavascript,
      percent: 85,
    },
    {
      language: "TypeScript",
      icon: BiLogoTypescript,
      percent: 75,
    },
    {
      language: "HTML5",
      icon: IoLogoHtml5,
      percent: 95,
    },
    {
      language: "CSS3",
      icon: IoLogoCss3,
      percent: 80,
    },
    {
      language: "Python",
      icon: IoLogoPython,
      percent: 35,
    },
    {
      language: "Dart",
      icon: SiDart,
      percent: 25,
    },
  ]);

  // references
  const meRef = useRef(null);
  const skillRef = useRef(null);
  const toolRef = useRef(null);
  const demoRef = useRef(null);
  const lanRef = useRef(null);

  // scroll into ref handler
  const scrollIntRefHandler = (refText) => {
    if (refText === "About me") {
      if (meRef.current) {
        meRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } else if (refText === "Skills") {
      if (skillRef.current) {
        skillRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } else if (refText === "Tools") {
      if (toolRef.current) {
        toolRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } else if (refText === "UI Demo") {
      if (demoRef.current) {
        demoRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } else if (refText === "Languages") {
      if (lanRef.current) {
        lanRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="relative">
      {/* links */}
      <div className="fixed z-50 right-0 top-1/2 -translate-y-1/2 p-[20px]">
        <div className="border-r-[1px] border-neutral-200 py-1.5">
          {links.options.map((item) => {
            return (
              <div
                key={item.text}
                className="relative"
                onClick={() => {
                  scrollIntRefHandler(item.text);
                }}
                onMouseEnter={() => {
                  setLinks((prev) => {
                    return {
                      ...prev,
                      selected: item.text,
                    };
                  });
                }}
                onMouseLeave={() => {
                  setLinks((prev) => {
                    return {
                      ...prev,
                      selected: "",
                    };
                  });
                }}
              >
                <div
                  className={`absolute hidden lg:inline-block top-1/2 transition-all ease-in-out duration-150 -translate-y-1/2 whitespace-nowrap left-[-80px] text-sm text-neutral-700 bg-white p-1 ${
                    links.selected === item.text ? "scale-100" : "scale-0"
                  }`}
                >
                  <span>{item.text}</span>
                </div>
                {/* icon */}
                <div className="w-[32px] mr-[-16px] my-3 cursor-pointer aspect-square shrink-0 border border-neutral-200 rounded-full bg-white flex items-center justify-center">
                  <item.icon />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* 1 */}
      <div
        ref={meRef}
        className="py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 bg-gradient-to-r from-white to-neutral-50"
      >
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
            <div className="my-3">
              <a
                className="w-max"
                href={addisResume}
                download={"addispic-resume"}
              >
                <div className="flex items-center gap-x-1.5 px-2 py-1 rounded-sm bg-neutral-100 w-max transition-colors ease-in-out duration-150 hover:bg-neutral-200">
                  <FaFilePdf className="text-red-600" />
                  <span className="text-sm">My Resume</span>
                </div>
              </a>
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
      <div
        ref={skillRef}
        className="py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 bg-gradient-to-r from-white to-neutral-50"
      >
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
            <h3 className="header-iii">Technical Proficiencies</h3>
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
      {/* 4 */}
      <div
        ref={toolRef}
        className="py-12 bg-gradient-to-r from-neutral-50 to-white"
      >
        <div className="main-padding">
          <div className="flex items-center justify-center">
            <h3 className="header-iii">Tools That Power My Work</h3>
          </div>
          <div className="max-w-[720px] mx-auto my-5 text-neutral-700 text-center">
            <p>
              To streamline my development process, I rely on the following
              tools that help me write efficient code, test APIs, and manage
              version control
            </p>
          </div>
          {/* grid */}
          <div className="grid grid-cols-1 gap-y-5 sm:grid-cols-3 gap-x-5 sm:gap-x-7 md:gap-x-9 lg:gap-x-12 mt-5 px-5">
            {tools.map((tool) => {
              return (
                <div key={tool.title}>
                  {/* header */}
                  <header
                    className={`flex items-center gap-x-3 my-3 ${
                      tool.title === "VS Code"
                        ? "text-cyan-600"
                        : tool.title === "Postman"
                        ? "text-orange-600"
                        : "text-red-500"
                    }`}
                  >
                    {/* icon */}
                    <div>
                      <tool.icon className="text-2xl" />
                    </div>
                    {/* title */}
                    <div className="font-bold">
                      <p>{tool.title}</p>
                    </div>
                  </header>
                  {/* text */}
                  <div className="text-sm">
                    <p>{tool.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* 5 */}
      <div
        ref={demoRef}
        className="py-7 md:py-12 bg-gradient-to-r from-white to-neutral-50"
      >
        <div className="main-padding">
          <div className="flex items-center justify-center gap-x-3">
            <div className="w-[10%] md:w-[30%] h-[1px] rounded-full bg-neutral-400" />
            <div className="text-3xl px-5 py-1.5 border border-neutral-400 rounded-full overflow-hidden whitespace-nowrap">
              <span>UI/UX Demo</span>
            </div>
            <div className="w-[10%] md:w-[30%] h-[1px] rounded-full bg-neutral-400" />
          </div>

          <div className="my-10 text-center text-neutral-700">
            <p>
              These UI demos are designed to showcase my skills as an
              experienced web developer. Visitors can view the live sites to
              experience the design and functionality, explore the source code
              to see the implementation, and test the responsiveness by
              adjusting screen sizes. Please note that these demos are created
              solely for demonstration purposes and do not represent real-world
              content.
            </p>
          </div>

          {/* pictures */}
          <Swiper
            breakpoints={{
              450: {
                slidesPerView: 1,
                spaceBetween: 12,
              },
              700: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, FreeMode]}
          >
            {demos.map((demo, index) => {
              return (
                <SwiperSlide key={demo.site}>
                  <div className="mb-10 w-full relative">
                    {/* info container */}
                    <div className="relative w-max bg-white shadow-lg p-5 rounded-md rounded-bl-none flex items-center gap-x-12">
                      <NavLink
                        target="_blank"
                        to={demo.site}
                        className="flex items-center gap-x-1.5 text-sm text-neutral-400 transition-colors ease-in-out duration-150 hover:text-green-500 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:rounded-full after:bg-green-500 after:transition-all after:ease-in-out after:duration-150 hover:after:w-full"
                      >
                        <CiGlobe />
                        <span>Visit site</span>
                      </NavLink>
                      <NavLink
                        target="_blank"
                        to={demo.git}
                        className="flex items-center gap-x-1.5 text-sm text-neutral-400 transition-colors ease-in-out duration-150 hover:text-green-500 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:rounded-full after:bg-green-500 after:transition-all after:ease-in-out after:duration-150 hover:after:w-full"
                      >
                        <IoLogoGithub />
                        <span>Source code</span>
                      </NavLink>
                    </div>
                    {/* image */}
                    <div className="w-[100%] h-[450px]m rounded-xl rounded-tl-none border border-neutral-400 overflow-hidden">
                      <img
                        className="w-full h-full object-center object-contain"
                        src={demo.image}
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="max-w-[720px] mx-auto my-5 p-5 border border-red-500 rounded-md bg-red-50  flex flex-col md:flex-row gap-y-3 items-center gap-x-1.5">
            {/* icon */}
            <div className="w-[32px] aspect-square rounded-full shrink-0 border border-red-500 text-lg text-red-500 flex items-center justify-center">
              <IoIosWarning />
            </div>
            {/* text */}
            <div className="text-sm italic text-center md:text-left">
              <p>
                The above UI designs are conceptual and created solely for
                demonstration purposes to showcase my skills and experience as a
                web developer.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 6 */}
      <div
        ref={lanRef}
        className="py-12 bg-gradient-to-r from-neutral-50 to-white"
      >
        <div className="main-padding">
          <div className="flex items-center ">
            <h3 className="header-iii">Languages Summary</h3>
          </div>
          <div className="max-w-[720px] my-5 text-neutral-700">
            <p>
              This section highlights the programming languages I use, along
              with my proficiency levels in each. It reflects my expertise in
              foundational and advanced technologies essential for modern web
              development.
            </p>
          </div>
          {/* languages */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-10">
            {languages.map((item, index) => {
              return (
                <div
                  key={item.language}
                  className="bg-white shadow-md border-2 border-white relative flex items-center justify-center rounded-md p-5"
                >
                  {/* icon */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-[-18px] w-[36px] aspect-square rounded-full flex items-center justify-center text-xl bg-neutral-200 text-neutral-700">
                    <item.icon />
                  </div>
                  <div
                    className={`flex flex-col items-center justify-center ${
                      item.language === "JavaScript"
                        ? "text-yellow-500"
                        : item.language === "TypeScript"
                        ? "text-blue-500"
                        : item.language === "HTML5"
                        ? "text-orange-500"
                        : item.language === "CSS3"
                        ? "text-pink-500"
                        : item.language === "Python"
                        ? "text-emerald-500"
                        : "text-cyan-500"
                    }`}
                  >
                    <p>{item.language}</p>
                    <p className="text-2xl">{item.percent}%</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* 7 */}
      <div className="pt-12 pb-5 bg-gradient-to-r from-neutral-50 to-white">
        <div className="main-padding">
          <div className="flex items-center gap-x-5">
            <div className="flex-1 h-[1px] bg-neutral-300" />
            <div className="shrink-0 w-[20px] aspect-square border-[1px] border-neutral-300 rotate-45" />
            <div className="flex-1 h-[1px] bg-neutral-300" />
          </div>
          {/* socials */}
          <div className="flex items-center justify-center gap-x-5 mt-10">
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
          <div className="flex items-center justify-center mt-5">
            <p className="text-neutral-500">
              Powered by{" "}
              <span className="font-bold text-neutral-300">addis</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
