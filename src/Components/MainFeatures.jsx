import featuresshot from '../Images/featuresshot.png'
import { ArrowRightCircleIcon, ForwardIcon } from "@heroicons/react/24/outline";
import phoneblob from '../Images/phoneblob.svg'

export default function MainFeatures() {
    return (
        <>
            <div className="py-1 w-full flex flex-col gap-2 mt-40 relative" id='features'>
                <div className="hidden lg:block absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[35%]">
                    <img src={phoneblob} alt="green ellipse for decor" className='w-[35rem] rotate-180 -z-10 opacity-50' />
                </div>
                    <div className='flex flex-col gap-y-4 text-center justify-center items-center mb-10'>
                        <div className='six-title font-manrope font-bold tracking-tight'>
                            Abundant with Features.
                        </div>
                        <div className="text-green-700 w-1/3 font-outfit tracking-wide font-thin">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde saepe architecto consectetur soluta perferendis iusto
                        </div>
                        <div className="text-black flex items-center font-manrope font-bold tracking-wider gap-2">Learn more <ArrowRightCircleIcon className='w-6 h-6'/></div>
                    </div>
                    <div className='flex gap-x-2 lg:flex-row flex-col'>
                        <div className="w-full lg:w-1/4 items-center lg:items-end justify-center lg:justify-around flex flex-col md:flex-row lg:flex-col">
                            <div className='flex flex-col gap-1 w-max'>
                                <ForwardIcon className='h-10 w-10 p-2 bg-green-200 text-green-700 rounded-full'/>
                                <div className="text-lg font-bold font-outfit tracking-wide ">Instant Delivery Time</div>
                                <div className="text-md w-80">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, nisi. Culpa </div>
                            </div>
                            <div className='flex flex-col gap-1 h-max '>
                                <ForwardIcon className='h-10 w-10 p-2 bg-green-200 text-green-700 rounded-full'/>
                                <div className="text-lg font-bold font-outfit tracking-wide ">Instant Delivery Time</div>
                                <div className="text-md w-80">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, nisi. Culpa </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/4 z-40">
                            <img src={featuresshot} alt="features shot app mockup" className='w-full' />
                        </div>
                        <div className="w-full lg:w-1/4 items-center lg:items-start justify-center lg:justify-around flex flex-col md:flex-row lg:flex-col">
                            <div className='flex flex-col gap-1 w-max '>
                                <ForwardIcon className='h-10 w-10 p-2 bg-green-200 text-green-700 rounded-full'/>
                                <div className="text-lg font-bold font-outfit tracking-wide ">Instant Delivery Time</div>
                                <div className="text-md w-80">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, nisi. Culpa </div>
                            </div>
                            <div className='flex flex-col gap-1 w-max '>
                                <ForwardIcon className='h-10 w-10 p-2 bg-green-200 text-green-700 rounded-full'/>
                                <div className="text-lg font-bold font-outfit tracking-wide ">Instant Delivery Time</div>
                                <div className="text-md w-80">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, nisi. Culpa </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}