import React from "react";
import { useSelector } from "react-redux";

// states from slice
import { selectIsDarkMood } from "../../features/theme-feature/themeSlice";

const AboutMe = () => {
  // slice states
  const isDarkMood = useSelector(selectIsDarkMood);

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
            <div className="text-center text-light-light max-w-[600px] mx-auto my-2">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloribus accusamus autem voluptates repudiandae deserunt.
                Reiciendis, laborum?
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
            <div className="w-[45%] flex items-center justify-center">
                <div className="max-w-[200px] ">
                    <img className="w-full h-full object-center object-cover" src="https://www.transparentpng.com/thumb/man/rTkJ7v-man-png-image.png" alt="" />
                </div>
            </div>
            {/* text */}
            <div className="w-[55%]">
              {/* hi there */}
              <div className="text-2xl font-bold">
                <h1>Hi There</h1>
              </div>
              {/* first paragraph */}
              <div className="my-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aspernatur, similique animi? Fugiat impedit incidunt aliquid
                  a.
                </p>
              </div>
              {/* second paragraph */}
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  commodi qui molestiae culpa repellat.
                </p>
              </div>

              {/* grid-skills */}
              <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-3">
                {/* skill */}
                {[...Array(4)].map((item, index) => {
                  return (
                      <div key={index}>
                        {/* title */}
                        <div className="font-semibold text-orange-border-color">
                          <h1>JavaScript</h1>
                        </div>
                        {/* text */}
                        <div className="text-sm">
                          <p>frontend & backend</p>
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
