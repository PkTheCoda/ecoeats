import { CheckIcon } from "@heroicons/react/24/outline";

export default function StepComponent() {
  
  return (
    <>
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8" id="steps">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-2 text-xs font-semibold font-sans tracking-wider text-slate-600 uppercase rounded-full bg-teal-accent-400">
              food donation made <span className="font-semibold text-emerald-500">Simple.</span>
            </p>
          </div>
          <h2 className="max-w-xl font-manrope mb-6 text-4xl font-bold leading-none tracking-tight text-gray-900 sm:text-6xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-emerald-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="d0d83814-78b6-480f-9a5f-7f637616b267"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#d0d83814-78b6-480f-9a5f-7f637616b267)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">As Simple as</span>
            </span>{' '}
            <span className="block main-gradient">One, Two, Three</span>
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Donating extra food to those in need has <b>never been easier</b>. It&apos;s as quick as signing up, posting a listing, and waiting for a pick-up!
          </p>
        </div>
        <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 sm:grid-cols-2">
          <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
            {/* The line in between the steps component */}
            <div className="w-2 h-full bg-gray-300 lg:w-full lg:h-px" />
          </div>
          <div className="p-5 duration-300 transform bg-gradient-to-b bg-white border-2 border-dashed border-emerald-200 rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-between mb-2">
              <p className="lg:text-xl text-2xl font-manrope font-bold leading-5">Get Started.</p>
              <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-emerald-accent-400 bg-indigo-50">
                1
              </p>
            </div>
            <p className="text-md text-gray-900 tracking-wide">
              Whether you're a food donor or recipient, it all starts on our Progressive Web Application. Just sign up and select your occupation; food donors are able to post listings and recipients are able to view listings near them. Ecoeats makes this easy with our intuitive and easy-to-understand interface.
            </p>
          </div>
          <div className="p-5 duration-300 transform bg-gradient-to-b bg-white border-2 border-dashed border-emerald-400 rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-between mb-2">
              <p className="lg:text-xl text-2xl font-manrope font-bold leading-5">Post.</p>
              <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-emerald-accent-400 bg-indigo-50">
                2
              </p>
            </div>
            <p className="text-md text-gray-900 tracking-wide">
              On our app, food donors are able to make listings of food they're about to throw away. This listing will include everything from 
              expiration date, average weight of food, caloric content, any additional notes, and finally a pick-up address! The recipients 
              are able to view these listings.
              
            </p>
          </div>

          <div className="relative p-5 duration-300 transform bg-gradient-to-b bg-white border-2 border-emerald-600 transition rounded shadow-sm hover:-translate-y-2">
            <div className="absolute -top-4 -right-4"><CheckIcon className="w-8 h-8 bg-emerald-600 rounded-full p-1 text-white"/></div>
            <div className="flex items-center justify-between mb-2">
              <p className="lg:text-xl text-2xl font-manrope font-bold leading-5">View.</p>
              <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-emerald-accent-400 bg-indigo-50">
                3
              </p>
            </div>
            <p className="text-md text-gray-900 tracking-wide">
              Finally, recipients are able to view the listings near them. Recipients will be notified through SMS when a 
              listing opens up in their area. I didn't feel like writing the rest of this since im a web-developer not a WEB WRITER 
              so ill just make someone like abhinav do it or something
            </p>
          </div>

        </div>
        {/* <div className="text-center">
          <a
            href="/"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-emerald-accent-400 hover:bg-deep-emerald-accent-700 focus:shadow-outline focus:outline-none"
          >
            Learn more
          </a>
        </div> */}
      </div>
    </>


    
  );
};