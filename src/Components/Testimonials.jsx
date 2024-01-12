import logounited from '../assets/logo1.png'

export default function Testimonials() {
    return (
        <>
            <div className="w-full flex flex-col items-center justify-center bg-slate-100 py-8">
                <div className="six-title font-bold font-manrope py-10">
                    <span className="main-gradient">Market Research</span> & Testimonials
                </div>
                <div className="flex w-full flex-col md:flex-row px-5 lg:w-10/12 gap-2 lg:gap-10">
                    <figure class="relative rounded-xl bg-white p-6 shadow-xl shadow-slate-900/10 w-full md:w-1/2">
                        <svg aria-hidden="true" width="105" height="78" class="absolute top-6 left-6 fill-slate-200/80">
                            <path
                                d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                            </path>
                        </svg>
                        <blockquote class="relative">
                            <p class="text-lg tracking-tight text-slate-900 font-outfit">
                                Keep reaching out like this. We are happy to talk on the phone as well or meet in person. We are excited about more partnerships and believe that your solution has the potential to help many in need. Thank you.
                            </p>
                        </blockquote>
                        <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                            <div>
                                <div class="font-display text-base text-slate-900">United Methodist Church</div>
                                <div class="mt-1 text-sm text-slate-500">Food Bank</div>
                            </div>
                            <div class="overflow-hidden rounded-full bg-slate-50">
                                <img alt="" src="https://images.squarespace-cdn.com/content/v1/5ddb4620546b0626de1eaf4f/4ebeb6fe-5de1-46ba-9ce0-b9e5f4b9b759/Untitled+design+%286%29.jpg" class="h-14 w-14 object-cover" loading="lazy" width="56" height="56" />
                            </div>
                        </figcaption>
                    </figure>
                    <figure class="relative rounded-xl bg-white p-6 shadow-xl shadow-slate-900/10 w-full md:w-1/2">
                        <svg aria-hidden="true" width="105" height="78" class="absolute top-6 left-6 fill-slate-200/80">
                            <path
                                d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                            </path>
                        </svg>
                        <blockquote class="relative">
                            <p class="text-lg tracking-tight text-slate-900 font-outfit">
                            I think if we could find a solution to reduce food waste and food insecurity at the same time by connecting resources to needs as quickly, efficiently, relationally, and carefully, as possible, that would yield benefits
                            </p>
                        </blockquote>
                        <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                            <div>
                                <div class="font-display text-base text-slate-900">Noodles and Company</div>
                                <div class="mt-1 text-sm text-slate-500">Restauraunt</div>
                            </div>
                            <div class="overflow-hidden rounded-full bg-slate-50">
                                <img alt="" src="data:image/png;base64,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" class="h-14 w-14 object-cover" loading="lazy" width="56" height="56" />
                            </div>
                        </figcaption>
                    </figure>
                </div>

                <div className="bg-slate-100 w-full py-10 ">
                <div className="mx-auto w-full px-6 lg:px-8">
                    <h2 className="text-center text-lg font-semibold leading-8 text-gray-700 font-outfit">
                        Trusted and Supported by:
                    </h2>
                    <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="https://cdn.cookielaw.org/logos/0d1b297a-e5e0-4ff1-8168-93433dbc3d5c/ef733708-0238-4ec5-a536-2ebcbf0abd49/df4c6a3c-f992-4be3-8433-4fadc95749f0/MOD_Logo_for_nav_(3).png"
                        alt="Transistor"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="https://cdn.freebiesupply.com/logos/large/2x/noodles-and-company-logo-svg-vector.svg"
                        alt="Reform"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src={logounited}
                        alt="Tuple"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                        src="https://hrfoodbank.org/wp-content/uploads/virginia-peninsula-foodbank-logo-1.png"
                        alt="SavvyCal"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Caritas_Austria-logo.svg/1200px-Caritas_Austria-logo.svg.png"
                        alt="Statamic"
                        width={158}
                        height={48}
                    />
                    </div>
                </div>
            </div>

            </div>
        </>
    )
}