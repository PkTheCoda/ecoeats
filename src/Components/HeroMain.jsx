import heroimage from '../Images/heromain.svg'

export default function HeroMain() {
    return (
        <>
            <div class="mx-auto flex flex-col gap-y-1 max-w-7xl px-4 sm:px-6 lg:px-8 pb-10 text-center pt-10">
                <p class="mx-auto -mt-4 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">Solving Food Waste
                    <span class="border-b border-dotted border-slate-300 ml-1">One Meal at a Time</span>
                </p>

                <h1 class="mx-auto max-w-4xl font-display font-manrope font-semibold text-5xl tracking-tight text-slate-900 sm:text-7xl">
                    <span class="inline-block">A 
                        <span class="relative whitespace-nowrap text-green-600">
                        <svg aria-hidden="true" viewBox="0 0 418 42" class="absolute top-2/3 left-0 h-[0.58em] w-full fill-green-300/70" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
                        <span class="relative px-3">Better Way</span></span>
                    </span>
                    <span class="inline-block">To Give Back</span>
                </h1>

                <p class="mx-auto font-outfit mt-9 max-w-2xl text-xl tracking-tight text-slate-700 sm:mt-6">
                    <span class="inline-block">
                        EcoEats is a revolutionary app that connects food banks and charities with food. 
                    </span>
                </p>

                <div class="mt-12 flex flex-col justify-center gap-y-5 sm:mt-4 sm:flex-row sm:gap-y-0 sm:gap-x-6">
                    <a class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-lg font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900 animate-fade-in-left"
                        href="/about">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 flex-none">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                        </svg>


                        
                        <span class="ml-3">About Us</span>
                    </a>
                    <a href='#features' class="relative flex flex-1 flex-col items-stretch sm:flex-none" data-headlessui-state="">
                        <button class="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-lg focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right" id="headlessui-menu-button-:r4:" aria-haspopup="true" aria-expanded="false" data-headlessui-state="" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                        </svg>

                            <span class="ml-3">Explore Features</span>
                        </button>
                    </a>
                </div>

            </div>

            <div className='w-full flex justify-center px-3'>
                <div className='w-full max-w-7xl p-2 rounded-lg bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500 via-emerald-500 to-teal-500'>
                    <img src={heroimage} alt="hero image" className='rounded-md'/>
                </div>
            </div>
        </>
    )
}