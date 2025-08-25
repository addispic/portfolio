import { useMemo, useState } from "react";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import ReactApexChart from "react-apexcharts";
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

// css
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Shows() {
  // states
  // local
  const [tools, _setTools] = useState(() => [
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
      icon: BiLogoPostgresql,
      color: "text-[#336791]", // PostgreSQL Blue
      title: "PostgreSQL",
      text: "Relational DB",
    },
  ]);
  const series = useMemo(
    () => [
      {
        name: "Active",
        data: [31, 32, 28, 71, 42, 109, 60],
      },
      {
        name: "Pending",
        data: [11, 32, 70, 12, 90, 52, 41],
      },
      {
        name: "Closed",
        data: [90, 32, 50, 32, 14, 72, 31],
      },
    ],
    []
  );
  const options = {
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    // fill: {
    //   type: "solid",
    //   opacity: 0.05,
    // },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0,
        opacityFrom: 0.25,
        opacityTo: 0.15,
        stops: [0, 100],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 1,
    },
    colors: ["#10eb05", "#575757", "#eb0505"],

    grid: {
      xaxis: {
        lines: {
          show: false, // keep vertical lines
        },
      },
      yaxis: {
        lines: {
          show: false, // remove horizontal lines
        },
      },
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], // Days of the week
      axisBorder: {
        show: false, // Remove the base x-axis line
      },
      axisTicks: {
        show: false, // Remove tick marks
      },
      labels: {
        show: true, // Keep day labels visible
      },
    },
    legend: {
      show: true,
      labels: {
        colors: ["#03a311", "#575757", "#eb0505"], // Change this to your desired text color
      },
      markers: {
        strokeColor: "transparent", // Makes the border transparent
        strokeWidth: 0, // Ensures no visible outline
      },
    },
  };
  return (
    <div className="mt-24">
      <div className="con-width">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={3}
          spaceBetween={25}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 5000,
          }}
          pagination={{
            clickable: true,
            el: ".latest-news-pagination-bullet",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            728: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="w-full"
        >
          {/* statics */}
          <SwiperSlide>
            <div className="w-full ">
              <header className="w-full px-3 py-3 text-center">
                <h3 className="uppercase text-lg">Data</h3>
                <p className="text-neutral-700">Display & Analytics</p>
              </header>
              <div className="bg-dark-4 rounded-md overflow-hidden">
                <ReactApexChart
                  series={series}
                  options={options}
                  type="area"
                  height={300}
                />
              </div>
            </div>
          </SwiperSlide>
          {/* motion */}
          <SwiperSlide>
            <div className="w-full h-full ">
              <header className="w-full px-3 py-3 text-center">
                <h3 className="uppercase text-lg">Framer</h3>
                <p className="text-neutral-700">Motion & Animation</p>
              </header>
              <div className="px-3 py-1.5 rounded-md overflow-hidden bg-dark-4 text-neutral-400">
                <div className="flex items-center gap-3 mb-2 pb-2.5 border-b border-neutral-900">
                  <div className="shrink-0 w-12 aspect-square rounded-full overflow-hidden">
                    <img
                      className="w-full object-center object-cover"
                      src="/images/personal/addis-i.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="mb-1 text-neutral-400 text-sm">
                      Adisie Fenta Shiferaw
                    </h3>
                    <p className="text-xs bg-neutral-400 text-neutral-900 rounded-full px-3 py-1 w-max">
                      Software Engineer
                    </p>
                  </div>
                </div>
                <h3 className="font-medium mb-1 text-neutral-500">
                  Tools & Technologies
                </h3>
                {tools.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 ml-3 mb-2"
                    >
                      {/* icon */}
                      <div className="w-8 text-pr aspect-square rounded-full flex items-center justify-center bg-neutral-900/50">
                        <item.icon />
                      </div>
                      {/* text */}
                      <div>
                        <h3 className="text-neutral-400 text-sm">
                          {item.title}
                        </h3>
                        <p className="text-xs text-neutral-400 bg-pr w-max px-3 py-1 rounded-sm">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full ">
              <header className="w-full px-3 py-3 text-center">
                <h3 className="uppercase text-lg">Integration</h3>
                <p className="text-neutral-700">APIs & SDK</p>
              </header>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="latest-news-pagination-bullet w-full" />
      </div>
    </div>
  );
}
