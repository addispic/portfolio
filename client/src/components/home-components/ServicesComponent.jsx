import React,{useState} from 'react'

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
    const [myServices,setMyServices] = useState({
        serviceList: [
            {
                icon: TbWorldWww,
                title: "Web Development",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore architecto placeat earum."
            },
            {
                icon: SiAffinitydesigner,
                title: "UI/UX Designing",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore architecto placeat earum."
            },
            {
                icon: BsDatabaseFillGear,
                title: "DB Management",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore architecto placeat earum."
            },
            {
                icon: ImAndroid,
                title: "Mobile Development",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore architecto placeat earum."
            },
            {
                icon: FaGraduationCap,
                title: "Tutoring",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore architecto placeat earum."
            },
            {
                icon: GrServerCluster,
                title: "Backend Development",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore architecto placeat earum."
            },
        ]
    })
  return (
    <div className='bg-dark-dark text-light-dark py-24'>
        {/* max-content */}
        <div className='max-width-container'>
            {/* content */}
            <div>
                {/* texts */}
                <div className='max-w-[600px] mx-auto flex flex-col items-center'>
                    {/* small title */}
                    <div>
                        <div className='flex items-center justify-center text-xs text-orange-border-color'>
                            <span>SERVICES</span>
                        </div>
                    </div>
                    {/* large title */}
                    <div>
                        <div className='text-2xl font-bold my-3 flex items-center justify-center'>
                            <span>My Services</span>
                        </div>
                    </div>
                    {/* paragraph */}
                    <div>
                        <div className='text-center text-light-dark-dark-text-color'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit velit saepe alias totam, eos veniam, rerum, enim consectetur ea hic soluta fugiat deserunt perferendis.
                            </p>
                        </div>
                    </div>
                    {/* bar */}
                    <div className='w-[7%] h-[3px] rounded-full bg-orange-border-color my-5'></div>
                </div>
                {/* the grid */}
                <div className='py-7'>
                    <div className='grid grid-cols-3 gap-10'>
                        {
                            myServices?.serviceList.map((serviceItem)=>{
                                return (
                                    <div className='p-5 rounded-md bg-dark-light'>
                                        {/* icon */}
                                        <div className='my-3 text-[1.75rem] text-orange-border-color'>
                                            <serviceItem.icon />
                                        </div>
                                        {/* title */}
                                        <div className='text-lg font-bold'>
                                            <p>{serviceItem?.title}</p>
                                        </div>
                                        {/* paragraph */}
                                        <div className='my-3 text-sm'>
                                            <p>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore architecto placeat earum.
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesComponent