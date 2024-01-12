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
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
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
                                            href="https://www.rts.com/wp-content/uploads/2021/04/RTS_Food_Waste_Guide_2021.pdf"
                                            target='_blank'
                                        >
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
                                    src="https://regenbrampton.com/wp-content/uploads/2022/09/do-shelters-provide-food-for-those-experiencing-homelessness-hero-1-1-1024x672.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-20 flex flex-col gap-8 items-center justify-center">
                <div className='flex flex-col w-full items-center justify-center'>
                    <div className="five-title font-manrope tracking-tight font-bold">Meet The Team</div>
                    <div className="mt-4 text-lg text-slate-700 font-outfit w-9/12 text-center">
                        <span className="text-green-700">Each and every one of us</span> have had negative experiences with food waste, which makes our passion for EcoEats that much stronger. Rohit has worked at a local MOD pizza location, tasked with throwing away whole pizzas, drinks, and ingredients at the end of each day. 
                        Additionally, at our school we notice many students throwing away their food during lunch, some students not even eating their meals and trashing them at the end of the period. These reasons, as well as many more instances, fuel our drive and motivation to make EcoEats a reality. <span className="text-green-700">Food waste is affecting our lives in more ways than one, and we wanted to do something about it.</span>

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