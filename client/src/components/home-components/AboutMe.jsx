import React,{useState} from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

// icons
// react
import { FaReact } from "react-icons/fa";
// django
import { TbBrandDjango } from "react-icons/tb";
// tailwind
import { RiTailwindCssFill } from "react-icons/ri";
// flutter
import { RiFlutterFill } from "react-icons/ri";

// states from slice
import { selectIsDarkMood } from "../../features/theme-feature/themeSlice";


const AboutMe = () => {
  // slice states
  const isDarkMood = useSelector(selectIsDarkMood);

  // skills
  const [skills,setSkills] = useState([
    {
      icon: FaReact,
      title: "React & NextJS",
      text: "JavaScript",
      id: uuidv4(),
    },
    {
      icon: RiTailwindCssFill,
      title: "TailwindCSS",
      text: "CSS",
      id: uuidv4(),
    },
    {
      icon: TbBrandDjango,
      title: "Django",
      text: "Python",
      id: uuidv4(),
    },
    {
      icon: RiFlutterFill,
      title: "Flutter",
      text: "Dart",
      id: uuidv4(),
    },
  ])

  return (
    <div
      className={`transition-colors ease-in-out duration-300 ${
        isDarkMood
          ? "bg-dark-light text-light-light"
          : "text-dark-dark bg-light-light"
      }`}
    >
      <div className="max-width-container relative overflow-hidden">
        {/* intro */}
        <div className="py-16 relative z-50">
          {/* title */}
          <div className="text-2xl font-bold my-3 flex items-center justify-center">
            <h1>About Me</h1>
          </div>
          {/* paragraph */}
          <div>
            <div className="text-center text-light-light max-w-[600px] opacity-85 mx-auto my-2">
              <p>
              What drives me is the ability to take a client's vision and turn it into a reality. I enjoy the challenge of understanding their needs, crafting a design that is both aesthetically pleasing and user-friendly, and then bringing it to life through clean, efficient code
              </p>
            </div>
          </div>
          {/* line */}
          <div className="flex items-center justify-center mt-5 max-w-[600px] mx-auto">
            <div className="w-[7%] h-[3px] rounded-full bg-orange-border-color my-"></div>
          </div>

          {/* image and text */}
          <div className="mt-10 flex gap-x-5">
            {/* image */}
            <div className="hidden sm:flex sm:w-[45%] items-center justify-center">
                <div className="max-w-[200px] ">
                    <img className="w-full h-full object-center object-cover" src="https://www.transparentpng.com/thumb/man/rTkJ7v-man-png-image.png" alt="" />
                </div>
            </div>
            {/* text */}
            <div className="w-[100%] sm:w-[55%]">
              {/* hi there */}
              <div className="text-2xl font-bold">
                <h1>Hi There</h1>
              </div>
              {/* first paragraph */}
              <div className="my-4">
                <p>
                  Again, I am Addis Fenta. Graduated in Software Engineering from Bahir Dar University. 
                </p>
              </div>
              {/* second paragraph */}
              <div>
                <p>
                  With excellent experience on Web Design and Development using various frameworks and libraries.
                </p>
              </div>

              {/* grid-skills */}
              <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-3">
                {/* skill */}
                {skills.map((skill) => {
                  return (
                      <div key={skill.id}>
                        {/* title */}
                        <div className="font-medium flex items-center gap-x-3 mb-1 text-orange-border-color">
                          <skill.icon className="text-2xl"/>
                          <h1>{skill.title}</h1>
                        </div>
                        {/* text */}
                        <div className="text-sm ml-10 opacity-75">
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
    </div>
  );
};

export default AboutMe;
