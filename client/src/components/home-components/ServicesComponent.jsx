import React, { useState } from "react";

// icons
// web
import { TbWorldWww } from "react-icons/tb";
// design
import { SiAffinitydesigner } from "react-icons/si";
// database
import { BsDatabaseFillGear } from "react-icons/bs";
// mobile
import { ImAndroid } from "react-icons/im";
// tutoring
import { FaGraduationCap } from "react-icons/fa6";
// backend
import { GrServerCluster } from "react-icons/gr";

const ServicesComponent = () => {
  // local states
  // services
  const [myServices, setMyServices] = useState({
    serviceList: [
      {
        icon: TbWorldWww,
        title: "Web Development",
        description:
          "I specialize in crafting responsive, dynamic websites that not only look great but also provide a seamless user experience",
      },
      {
        icon: SiAffinitydesigner,
        title: "UI/UX Designing",
        description:
          "From wireframing to prototyping to final design implementation, I'll ensure your digital products are optimized for maximum usability.",
      },
      {
        icon: BsDatabaseFillGear,
        title: "DB Management",
        description:
          "Extensive experience working with various database technologies, including SQL and NoSQL systems",
      },
      {
        icon: ImAndroid,
        title: "Mobile Development",
        description:
          "I can develop custom mobile applications to extend your digital reach and provide users with a truly optimized experience.",
      },
      {
        icon: GrServerCluster,
        title: "Backend Development",
        description:
          "Developing powerful, scalable backend APIs using cutting-edge technologies like Node.js and Python",
      },
      {
        icon: FaGraduationCap,
        title: "Tutoring",
        description:
          "In addition to technical services, I also offer personalized tutoring to help individuals and teams enhance their web development skills",
      },
    ],
  });
  return (
    <div className="bg-dark-dark text-light-dark py-24">
      {/* max-content */}
      <div className="max-width-container">
        {/* content */}
        <div>
          {/* texts */}
          <div className="max-w-[600px] mx-auto flex flex-col items-center">
            {/* small title */}
            <div>
              <div className="flex items-center justify-center text-xs text-orange-border-color">
                <span>SERVICES</span>
              </div>
            </div>
            {/* large title */}
            <div>
              <div className="text-2xl font-bold my-3 flex items-center justify-center">
                <span>My Services</span>
              </div>
            </div>
            {/* paragraph */}
            <div>
              <div className="text-center text-light-dark-dark-text-color">
                <p>
                As a versatile web development professional, I offer a wide range of services to help bring your digital vision to life. From building custom websites to designing intuitive user experiences and managing complex database systems, I have the expertise to tackle any web-related challenge.
                </p>
              </div>
            </div>
            {/* bar */}
            <div className="w-[7%] h-[3px] rounded-full bg-orange-border-color my-5"></div>
          </div>
          {/* the grid */}
          <div className="py-7">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-10">
              {myServices?.serviceList.map((serviceItem) => {
                return (
                  <div
                    key={serviceItem.title}
                    className="p-5 rounded-md bg-dark-light"
                  >
                    {/* icon & title */}
                    <div className="flex gap-x-3 items-center md:flex-col md:items-start">
                      {/* icon */}
                      <div className="my-3 text-[1.75rem] text-orange-border-color">
                        <serviceItem.icon />
                      </div>
                      {/* title */}
                      <div className="text-lg font-bold">
                        <p>{serviceItem?.title}</p>
                      </div>
                    </div>
                    {/* paragraph */}
                    <div className="my-3 text-sm">
                      <p>
                       {serviceItem?.description}
                      </p>
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

export default ServicesComponent;
