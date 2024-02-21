import React, { useState } from 'react'
import { HiOutlineInformationCircle } from "react-icons/hi";
import { PiClockDuotone, PiMoneyDuotone  } from "react-icons/pi";
import CareerModal from './Components/CareerModal';


const jobPostings = [
    {
      title: 'Volunteer Coordinator',
      tags: ['Volunteer', 'People Skills'], 
      location: '🌎 United States',
      description:
        "EcoEats wants your enthusiasm! As our Volunteer Coordinator, you'll lead volunteer initiatives, organize events, and foster a community dedicated to reducing food waste. Your role is to turn passion into action, connecting hearts for a shared mission. Join us in orchestrating impactful volunteer experiences and driving positive change!",
      type: 'Full-Time',
      salary: '56k - 78k',
      num: 0,
    },
    {
      title: 'App Developer',
      tags: ['Coding', 'Development', 'UI/UX'],
      location: '🌎 United States',
      description:
        "Calling coders with purpose! At EcoEats, you'll shape our tech-driven revolution. As a Programmer, your role is pivotal—craft the platform, ensure seamless experiences for food donors and recipients and revolutionize sustainable connections. Your code will redefine how communities come together!",
      type: 'Full-Time',
      salary: '100k - 118k',
      num: 1,
    },
    {
      title: 'Marketing Head',
      tags: ['Advertising', 'Marketing'],
      location: '🌎 United States',
      description:
        'Ready to be our storyteller? EcoEats is hiring a Marketing Maestro! Craft compelling narratives, spread awareness, and drive engagement. Your role is to make sustainable practices irresistible Join us in sharing the EcoEats journey, where your creativity meets a meaningful mission!',
      type: 'Full-Time',
      salary: '80k - 101k',
      num: 2,
    },
    {
        title: 'Sustainability Analyst',
        tags: ['Sustainability', 'Data Analysis', 'Environmental Science'],
        location: '🌎 United States',
        description:
          'Join EcoEats as a Sustainability Analyst! Dive into data analysis, assess environmental impact, and contribute to our sustainability goals. Your insights will guide our initiatives towards a greener future. If you have a passion for numbers and the planet, this role is for you!',
        type: 'Full-Time',
        salary: '70k - 90k',
        num: 3,
      },
      {
        title: 'Community Engagement Specialist',
        tags: ['Community Outreach', 'Public Relations', 'Event Planning'],
        location: '🌎 United States',
        description:
          'EcoEats is seeking a Community Engagement Specialist! Connect with diverse communities, plan events, and promote our mission to reduce food waste. Your interpersonal skills will drive positive change. Join us in building strong relationships and fostering a sustainable community!',
        type: 'Full-Time',
        salary: '65k - 85k',
        num: 4,
      },
      {
        title: 'Supply Chain Coordinator',
        tags: ['Supply Chain', 'Logistics', 'Operations'],
        location: '🌎 United States',
        description:
          'Become a key player in our sustainable supply chain! As a Supply Chain Coordinator, you’ll ensure efficient operations from sourcing to distribution. Join EcoEats to redefine how food reaches those in need, minimizing waste and maximizing impact.',
        type: 'Full-Time',
        salary: '75k - 95k',
        num: 5,
      },
      {
        title: 'Customer Support Representative',
        tags: ['Customer Support', 'People Skills'],
        location: '🌎 United States',
        description: 'Responsible for providing assistance to users of the EcoEats platform, answering inquiries, troubleshooting technical issues, and ensuring a positive user experience.',
        type: 'Full-Time',
        salary: '78k - 96k',
        num: 6,
      },
      {
        title: 'Graphic Designer/UX/UI Designer',
        tags: ['UI/UX', 'Development', 'Creative'],
        location: '🌎 United States',   
        description: 'Responsible for creating visual assets, user interfaces, and user experience designs for the EcoEats mobile application and website, ensuring a visually appealing and intuitive user experience.',
        type: 'Full-Time',
        salary: '64k - 92k',
        num: 6,
      },
];

const Careers = () => {

    const [open, setOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState('');
    const [activeJob, setActiveJob] = useState(null)

    const filteredJobs = jobPostings.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
        <>
            <CareerModal open={open} setOpen={setOpen} activeJob={jobPostings[activeJob]}/>
            <div className='pt-20 flex flex-col items-center font-outfit'>
                <div className="w-full pt-20 justify-center flex gap-y-10 pb-20 bg-green-900">
                    <div className='w-full lg:w-5/6 flex lg:flex-row flex-col gap-y-10'>
                        <div className="w-full lg:w-3/4 six-title font-semibold lg:items-start items-center flex flex-col gap-y-4 text-white">
                            <h1>Start doing work that <span className="underline">Matters</span>.</h1>
                            <p className='font-light w-full text-xl lg:text-start text-center lg:px-0 px-4'>
                                Join <span className="main-gradient font-semibold">EcoEats</span> for impactful work. Reduce food waste, fight food insecurity, and thrive in a flexible, diverse environment. Contribute to positive change and a sustainable future. Your purpose-driven career begins here.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/4 flex justify-center lg:justify-end">
                            <button className='w-max px-6 bg-green-600 text-white border-white py-6 text-center h-1/3 rounded-lg flex items-center justify-center'>
                                💼 Full-Time Only
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-5/6 font-outfit">
                    <div className='py-10 flex xl:flex-row flex-col gap-y-10 relative mt-10 border-t-2 border-b-2 border-slate-100'>

                        <div className="w-full xl:w-1/3 flex flex-col gap-y-3">
                            <h3 className='text-3xl'>Openings</h3>
                            <p className='text-lg text-slate-800'>View all of our current Job Openings here:</p>
                            <div className="relative xl:w-3/4">
                                <input
                                className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-green-600 focus:border-green-600 focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Search for an Opening"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <div className="absolute right-0 inset-y-0 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                </div>
                                <div className="absolute left-0 inset-y-0 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                </div>
                            </div>
                        </div>

                        <div className="w-full xl:w-2/3 flex flex-col gap-y-8 h-max">
                        {filteredJobs.map((job, index) => (
                            <>
            
                                <div className='p-2 bg-slate-100 rounded-xl transition300 hover:scale-[1.01] cursor-pointer'>
                                    <div
                                        key={index}
                                        className="flex flex-col gap-y-4 p-4 rounded-xl"
                                        onClick={() => {
                                            setOpen(true);
                                            setActiveJob(job.num);
                                          }}
                                        >
                                        <div className="flex justify-between flex-wrap gap-3">
                                            <div className="flex lg:flex-row flex-col items-center gap-2 w-max">
                                                <h3 className="text-lg">{job.title}</h3>
                                                <div className='flex gap-x-2'>
                                                    {job.tags.map((tag, index) => {
                                                        return (
                                                            <p className="text-sm px-2 py-0.5 flex items-center gap-x-1 bg-slate-200 rounded-lg">
                                                                <HiOutlineInformationCircle className="w-4 h-4" /> {tag}
                                                            </p>
                                                        )
                                                    })}
                                                </div>
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
                                        <button className='px-4 py-2 rounded-lg bg-slate-700 text-sm text-white w-max'>Apply</button>
                                    </div>
                                </div>
                            </>
                        ))}
                        </div>
                    </div>
                </div>
                <div 
                    className="bg-red-100 hi py-20 w-full bg-cover bg-center flex justify-center"
                    style={{
                        backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/030/668/415/non_2x/green-background-high-quality-free-photo.jpg)`,
                    }}
                >
                    <div className="six-title flex flex-col justify-center items-center gap-y-5 text-white font-bold font-outfit">
                        <h1 className='font-outfit'>Stay Connected</h1>
                        <button className="w-max px-6 transition300 hover:scale-[1.04] py-2 bg-green-900 text-lg rounded-xl">SIGN UP FOR JOB ALERTS</button>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Careers