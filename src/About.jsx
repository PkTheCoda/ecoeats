import ourimage from './assets/team.png'


export default function About() {
    return (
        <>
            <div class="bg-white sm:py-16">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-2xl lg:max-w-none">
                    <div class="text-center">
                        <h2 class="six-title text-7xl font-bold tracking-tight text-gray-900 font-manrope">
                            There is a <span className="main-gradient">Glaring Problem</span>
                        </h2>
                        <p class="mt-4 text-lg leading-8 text-gray-600">
                            Every year, millions upon millions of pounds of food go wasted - food that could be used to benefit the lives of others.
                        </p>
                    </div>
                    <dl class="mt-4 font-outfit grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                        <div class="flex flex-col bg-gray-200/50 p-8">
                        <dt class="text-md font-medium leading-6 text-gray-600">Pounds of food Wasted</dt>
                        <dd class="order-first text-4xl font-semibold tracking-tight text-gray-900">119 <span className="main-gradient">Billion</span></dd>
                        </div>
                        <div class="flex flex-col bg-gray-200/50 p-8">
                        <dt class="text-md font-medium leading-6 text-gray-600">People to be fed</dt>
                        <dd class="order-first text-4xl font-semibold tracking-tight text-gray-900">54.9 <span className="main-gradient">Million</span></dd>
                        </div>
                        <div class="flex flex-col bg-gray-200/50 p-8">
                        <dt class="text-md font-medium leading-6 text-gray-600">To feed the west coast</dt>
                        <dd class="order-first text-4xl font-semibold tracking-tight text-gray-900">Enough <span className="main-gradient">Food</span></dd>
                        </div>
                        <div class="flex flex-col bg-gray-200/50 p-8">
                        <dt class="text-md font-medium leading-6 text-gray-600">Of Food is Wasted</dt>
                        <dd class="order-first text-4xl font-semibold tracking-tight text-gray-900"><span className="main-gradient">40%</span></dd>
                        </div>
                    </dl>
                    </div>
                </div>
            </div>
            <div class="relative overflow-hidden bg-green-900 pt-16 pb-32 space-y-24">
            <div class="relative">
                    <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                        <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">

                            <div>
                                <div>
                                    <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-green-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                            class="h-8 w-8 text-white">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z">
                                            </path>
                                        </svg>
                                    </span>
                                </div>

                                <div class="mt-6 font-outfit ">
                                    <h2 class="text-3xl font-bold tracking-wide text-white">
                                        We couldn't believe it either.
                                    </h2>
                                    <p class="mt-4 text-lg text-gray-300">
                                        Which is why we came up with <span className="text-green-500">EcoEats</span>, an app that 
                                        aims to solve the problem of food waste globally. 
                                    </p>
                                    <p className="mt-4 text-lg text-gray-300">
                                        After experiencing first-hand how much perfectly fine food is thrown away at restauraunts and 
                                        grocery stores, we knew there was something better that could be done with the food.
                                    </p>
                                    <p className="mt-4 text-lg text-gray-300">
                                        The app idea is simple, yet intuitive. Food donors <span className="text-green-500">(like restauraunts and grocery stores)</span> can make a listing
                                        of food they're about to throw away. Recipients <span className="text-green-500">(like food banks & charities)</span> will get a notification of a new 
                                        listing in their area <span className="text-green-500">which they can go and pick up.</span>
                                    </p>
                                    <div class="mt-6">
                                        <a class="inline-flex rounded-lg bg-green-700 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-green-600 hover:bg-green-700 hover:ring-green-700"
                                            href="/login">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-12 sm:mt-16 lg:mt-0">
                            <div class="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                <img loading="lazy" width="647" height="486"
                                    class="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                    src="https://media.istockphoto.com/id/1283772689/video/multi-ethnic-group-of-volunteers-work-at-soup-kitchen.jpg?s=640x640&k=20&c=rrikAbGatv6JW9_z6nCVIdfKrqM_ATzAfpTCJkXt5MM="/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-20 flex flex-col gap-8 items-center justify-center">
                <div className='flex flex-col w-full items-center justify-center'>
                    <div className="five-title font-manrope tracking-tight font-bold">Meet The Team</div>
                    <div className="mt-4 text-lg text-slate-700 font-outfit w-1/2 text-center">
                        We're a group of five individuals from Richmond, Virginia. We created <span className="text-green-700">EcoEats</span>
                        because we wanted to help the evergrowing problem of food-waste globally. We hope that our innovation is able to
                        make an impact some way or another.
                    </div>
                </div>
                <img 
                    src={ourimage} 
                    alt="A picture of the five of us (the team)" 
                    className='w-4/5 rounded-xl shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'
                />
                <div className="mt-4 text-lg text-slate-700 font-outfit w-1/2 text-center">
                    From left to right: Om Tasgaonkar, Pranav Konjeti, Rohit Sangishetty, Rutam Tasgaonkar, Abhinav Arora
                </div>
            </div>
        </>
    )
}