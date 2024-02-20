import featuresshot from '../Images/featuresshot.png'
import { ArrowRightCircleIcon, DevicePhoneMobileIcon, HandThumbUpIcon, ChatBubbleLeftRightIcon, CheckBadgeIcon   } from "@heroicons/react/24/outline";
import phoneblob from '../Images/phoneblob.svg'

export default function MainFeatures() {
    return (
        <>
            <div className='flex mt-40 -skew-y-2'>
                <div className='py-5 w-3/4' style={{ background: 'linear-gradient(to right, #dcfce7, #60a159)' }}></div>
                <div className="w-1/4 bg-[#60a159] "></div>
            </div>
            <div className="py-28 bg-[#60a159] -skew-y-2 w-full flex flex-col gap-2 relative" id='features'>
                <div className="hidden lg:block absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[35%]">
                    <img src={phoneblob} alt="green ellipse for decor" className='w-[35rem] rotate-180 -z-10 opacity-50' />
                </div>
                    <div className='flex flex-col gap-y-4 text-center justify-center items-center mb-10 skew-y-2'>
                        <div className='six-title font-outfit text-white font-semibold'>
                            Abundant with Features.
                        </div>
                        <div className="text-white w-2/3 lg:w-1/3 font-outfit tracking-wide font-light">
                            EcoEats provides a slew of features to allow a seamless and efficient food donation process ensuring a hassle-free experience for both donors and recipients.
                        </div>
                        <a href="/about" className="text-white flex transition transform duration-300 hover:scale-105 items-center font-manrope font-semibold tracking-wider gap-2">
                            Learn more <ArrowRightCircleIcon className='w-6 h-6'/>
                        </a>
                    </div>
                    <div className='flex gap-8 lg:flex-row flex-col skew-y-2 z-40'>
                        <div className="lg:px-0 px-8 w-full lg:w-1/4 items-center lg:items-end gap-8 justify-center lg:justify-center flex flex-col md:flex-row lg:flex-col">
                            <div className='flex flex-col gap-1 w-9/12 bg-white shadow-lg p-4 rounded-md'>
                                <DevicePhoneMobileIcon className='h-10 w-10 p-2 bg-green-200 text-green-700 rounded-full'/>
                                <div className="text-lg font-outfit tracking-wide font-semibold">Available <span className="main-gradient ">Everywhere</span></div>
                                <div className="text-md font-outfit">
                                    EcoEats is available on both IOS and Android, allowing anyone to download and contribute! 
                                </div>
                            </div>
                            <div className='flex flex-col gap-1 w-9/12 h-max bg-white shadow-lg p-4 rounded-md'>
                                <HandThumbUpIcon className='h-10 w-10 p-2 bg-green-200 text-green-700 rounded-full'/>
                                <div className="text-lg font-semibold font-outfit tracking-wide ">Contribute <span className="main-gradient font-semibold">Easier.</span></div>
                                <div className="text-md font-outfit">
                                    Whether you're a student or an adult, EcoEats allows anyone to contribute to their local community
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/4 z-40">
                            <img src={featuresshot} alt="features shot app mockup" className='w-full' />
                        </div>
                        <div className="lg:px-0 px-8 w-full lg:w-1/4 items-center gap-8 lg:items-start justify-center lg:justify-center flex flex-col md:flex-row lg:flex-col">
                            <div className='flex flex-col gap-1 w-9/12 bg-white shadow-lg p-4 rounded-md'>
                                <ChatBubbleLeftRightIcon className='h-10 w-10 p-2 bg-green-200 text-green-700 rounded-full'/>
                                <div className="text-lg font-semibold font-outfit tracking-wide ">Donate <span className="main-gradient font-semibold">Easier</span></div>
                                <div className="text-md font-outfit">
                                    Easily sign-up up to be a donor on our platform and post listings allowing recipients to view and claim! 
                                </div>
                            </div>
                            <div className='flex flex-col gap-1 w-9/12 bg-white shadow-lg p-4 rounded-md'>
                                <CheckBadgeIcon className='h-10 w-10 p-2 bg-green-200 text-green-700 rounded-full'/>
                                <div className="text-lg font-semibold font-outfit tracking-wide ">Recieve <span className="main-gradient font-semibold">Easier</span></div>
                                <div className="text-md font-outfit">
                                    Recipients can easily view and claim listings near them and have a volunteer pick them up
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className='flex -skew-y-2'>
                <div className="w-1/4 bg-[#60a159] "></div>
                <div className='py-5 w-3/4' style={{ background: 'linear-gradient(to left, #dcfce7, #60a159)' }}></div>
            </div>
        </>
    )
}