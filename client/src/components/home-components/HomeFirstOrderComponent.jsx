import { useState } from "react";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

// icons
// facebook
import { FaFacebookSquare } from "react-icons/fa";
// git hub
import { FaGithub } from "react-icons/fa";
// twitter
import { BsTwitter } from "react-icons/bs";
// telegram
import { BiLogoTelegram } from "react-icons/bi";
// linkedin
import { BiLogoLinkedin } from "react-icons/bi";
// instagram
import { BsInstagram } from "react-icons/bs";
// pdf
import { FaFilePdf } from "react-icons/fa";
// certificates
import { GrCertificate } from "react-icons/gr";

// states from slice
import { selectIsDarkMood } from "../../features/theme-feature/themeSlice";

const HomeFirstOrderComponent = () => {
  // slice states
  const isDarkMood = useSelector(selectIsDarkMood);

  // local states
  //   social links
  const [socialLinks, setSocialLinks] = useState({
    linksOption: [
      {
        icon: FaFacebookSquare,
        text: "Facebook",
        path: "#",
        id: uuidv4(),
      },
      {
        icon: FaGithub,
        text: "Github",
        path: "https://github.com/addispic",
        id: uuidv4(),
      },
      {
        icon: BiLogoTelegram,
        text: "Telegram",
        path: "https://t.me/addis_64",
        id: uuidv4(),
      },
      {
        icon: BiLogoLinkedin,
        text: "Linkedin",
        path: "#",
        id: uuidv4(),
      },
      {
        icon: BsInstagram,
        text: "Instagram",
        path: "#",
        id: uuidv4(),
      },
    ],
    selectedLink: "",
  });

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
        <div className="py-5 sm:py-10 md:py-16 relative z-50">
          {/* social links */}
          <div className="flex items-center justify-start gap-x-3 sm:gap-x-5 md:gap-x-7 mt-5 sm:mt-10 md:mt-16 mb-5">
            {socialLinks?.linksOption?.map((linkItem) => {
              return (
                <div key={linkItem?.id} className="relative">
                  {/* icon */}
                  <NavLink to={linkItem?.path}>
                    <div
                      className={`w-[28px] text-[.875rem] aspect-square rounded-full border-2 border-orange-border-color  transition-colors ease-in-out duration-300  flex items-center justify-center ${
                        isDarkMood
                          ? " hover:bg-dark-btn-color-hover"
                          : " hover:bg-light-btn-color-hover"
                      }`}
                      onMouseEnter={() => {
                        setSocialLinks((prev) => {
                          return {
                            ...prev,
                            selectedLink: linkItem?.text,
                          };
                        });
                      }}
                      onMouseLeave={() => {
                        setSocialLinks((prev) => {
                          return {
                            ...prev,
                            selectedLink: "",
                          };
                        });
                      }}
                    >
                      <linkItem.icon />
                    </div>
                  </NavLink>
                  {/* text */}
                  <div
                    className={`absolute bottom-[120%] left-1/2 text-xs px-5 py-1 rounded-tl-md rounded-br-md bg-dark-btn-color transition-transform ease-in-out duration-150 ${
                      socialLinks?.selectedLink === linkItem?.text
                        ? "scale-100"
                        : "scale-0"
                    }`}
                  >
                    <span>{linkItem?.text}</span>
                  </div>
                </div>
              );
            })}
          </div>
          {/* full name */}
          <div>
            <p className="font-black text-2xl sm:text-3xl md:text-4xl mb-5">
              I am <span className="text-light-dark font-normal">Addis</span>{" "}
              <span className="text-light-dark font-normal">Fanta</span>
            </p>
          </div>
          {/* paragraph */}
          <div className="w-[100%] md:w-[50%] mb-9">
            <p className="text-light-dark">
              Hi, I'm Addis <span className="font-black">MERN</span> stack developer with excellent
              experience on both frontend and backend development
            </p>
          </div>
          {/* buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-5">
            {/* cv */}
            <div className="w-max">
              <NavLink>
                <div className="flex items-center justify-center gap-1 border border-orange-border-color px-3 rounded-full py-0.5 transition-colors ease-in-out duration-300 hover:bg-light-light text-light-dark hover:text-dark-dark hover:border-light-light">
                  {/* text */}
                  <div className="">
                    <span>MY CV</span>
                  </div>
                  {/* icon */}
                  <div>
                    <FaFilePdf className="text-sm text-orange-border-color"/>
                  </div>
                </div>
              </NavLink>
            </div>
            {/* certificates */}
            <div className="w-max flex items-center justify-center gap-1 px-3 py-0.5 rounded-full bg-light-light text-dark-light border border-light-light transition-colors ease-in-out duration-300 hover:border-orange-border-color hover:bg-dark-light hover:text-light-dark cursor-pointer">
              {/* text */}
              <div>
                <span>CERTIFICATES</span>
              </div>
              {/* icon */}
              <div>
                <GrCertificate className="text-orange-border-color"/>
              </div>
            </div>
          </div>
        </div>
        {/* background image */}
        <div className="hidden md:absolute md:right-0 md:bottom-0 md:w-full md:h-full md:items-center md:justify-end md:flex">
            {/* image */}
            <div className="md:w-[50%] md:h-full mt-3 sm:mt-6 md:mt-10  flex items-end justify-center">
              <div className="md:w-full md:h-full">
                <img className="w-full object-center object-cover" src="https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_10094380.png" alt="" />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFirstOrderComponent;
