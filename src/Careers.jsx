import React, { useState } from 'react'
import { HiOutlineInformationCircle } from "react-icons/hi";
import { PiClockDuotone, PiMoneyDuotone  } from "react-icons/pi";
import CareerModal from './Components/CareerModal';


const jobPostings = [
    {
      title: 'Volunteer Coordinator',
      tags: ['Design'],
      location: '🌎 United States',
      description:
        'EcoEats wants your enthusiasm! As our Volunteer Coordinator, you\'ll lead volunteer initiatives, organize events, and foster a community dedicated to reducing food waste Your role is to turn passion into action, connecting hearts for a shared mission. Join us in orchestrating impactful volunteer experiences and driving positive change!',
      type: 'Full-Time',
      salary: '80k - 100k',
    },
    {
      title: 'App Developer',
      tags: ['Design'],
      location: '🌎 United States',
      description:
        'Calling coders with purpose! At EcoEats, you\'ll shape our tech-driven revolution. As a Programmer, your role is pivotal—craft the platform, ensure seamless experiences for food donors and recipients and revolutionize sustainable connections. Your code will redefine how communities come together!',
      type: 'Full-Time',
      salary: '80k - 100k',
    },
    {
      title: 'Marketing Head',
      tags: ['Design'],
      location: '🌎 United States',
      description:
        'Ready to be our storyteller? EcoEats is hiring a Marketing Maestro! Craft compelling narratives, spread awareness, and drive engagement. Your role is to make sustainable practices irresistible Join us in sharing the EcoEats journey, where your creativity meets a meaningful mission!',
      type: 'Full-Time',
      salary: '80k - 100k',
    },
];

const Careers = () => {

    const [open, setOpen] = useState(false)
    const [activeJob, setActiveJob] = useState(null)

  return (
        <>
            <CareerModal open={open} setOpen={setOpen} activeJob={jobPostings[activeJob]}/>
            <div className='py-20 flex flex-col items-center font-outfit'>
                <div className="w-5/6 flex ">
                    <div className="w-3/4 six-title font-semibold flex flex-col gap-y-4">
                        <h1>Start doing work that <span className="underline">Matters</span>.</h1>
                        <p className='font-light w-3/4 text-xl'>
                            Here at <span className="text-green-600 font-semibold">EcoEats, we aim to help tackle the massive issue </span>
                            of food waste. By joining us, you are committing to a better and more green future for all.
                        </p>
            
                    </div>
                    <div className="w-1/4 flex justify-end">
                        <button className='w-2/3 border-2 py-2 text-center h-1/3 rounded-lg flex items-center justify-center'>
                            💼 Full-Time Only
                        </button>
                    </div>
                </div>
                <div className="w-5/6 mt-20 font-outfit">
                    <div className='py-10 flex xl:flex-row flex-col gap-y-10 mt-10 border-t-2 border-b-2 border-slate-100'>

                        <div className="w-full xl:w-1/3 flex flex-col  gap-y-3">
                            <h3 className='three-title'>Openings</h3>
                            <p className='text-lg text-slate-800'>View all of our current Job Openings here:</p>
                            <div class="relative xl:w-3/4">
                                <input
                                    class="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-green-600 focus:border-green-600 focus:shadow-outline"
                                    id="username"
                                    type="text"
                                    placeholder="Search for an Opening"
                                />
                                <div class="absolute right-0 inset-y-0 flex items-center">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                    </svg>
                                </div>
                                <div class="absolute left-0 inset-y-0 flex items-center">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="w-full xl:w-2/3 flex flex-col gap-y-8 h-max">
                        {jobPostings.map((job, index) => (
                            <>
            
                                <div
                                    key={index}
                                    className="flex flex-col gap-y-4 border-2 p-4 rounded-xl transition300 hover:scale-[1.01] cursor-pointer"
                                    onClick={() => {
                                        setOpen(true);
                                        setActiveJob(index);
                                      }}
                                    >
                                    <div className="flex justify-between">
                                        <div className="flex items-center gap-x-2 w-max">
                                        <h3 className="text-lg">{job.title}</h3>
                                        <p className="text-sm px-2 py-0.5 flex items-center gap-x-1 bg-slate-200 rounded-lg">
                                            <HiOutlineInformationCircle className="w-4 h-4" /> {job.tags.join(', ')}
                                        </p>
                                        </div>
                                        <div>
                                        <p className="text-sm px-2 py-0.5 bg-slate-200 rounded-lg">{job.location}</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-700 font-light">{job.description}</p>
                                    <div className="flex gap-x-4 text-slate-600">
                                        <div className="flex gap-x-2 items-center">
                                        <PiClockDuotone className="w-5 h-5" />
                                        <p>{job.type}</p>
                                        </div>
                                        <div className="flex gap-x-2 items-center">
                                        <PiMoneyDuotone className="w-5 h-5" />
                                        <p>{job.salary}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Careers