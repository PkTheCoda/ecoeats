import React from 'react'
import { MdOutlineHealthAndSafety } from "react-icons/md";

export default function Benefits() {
    return (
        <>
            <div className='bg-green-900 py-10 mt-16'>
                <div className="container mx-auto font-outfit max-w-7xl py-10 flex flex-col gap-y-6">
                    <div className='flex flex-col gap-y-4 text-white items-center'>
                        <h1 className='text-center six-title'>
                            Benefits that <span className="underline font-bold">Matter</span>
                        </h1>
                        <p className='w-1/2 text-center'>
                            Here at <span className="main-gradient">EcoEats</span>, we believe in the value of fostering a positive 
                            work environment - helping both us and you! We offer competitive employee benefits like <span className="main-gradient font-bold">Health Insurance, Paid Time Off, and Insurance Plans!</span>
                        </p>
                    </div>

                    <section>
                        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 relative">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className='absolute -top-20 -left-32 w-1/2' xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 600 600"><path d="M188.21988368781513 356.0209146975269C178.4031290287982 348.0366261639982 179.05758230638608 346.72774758326887 160.73297572883075 332.46073403346406C142.40836915127542 318.1937204836594 95.02617081753517 304.45024870224654 78.2722442224831 270.41883339869844C61.51831762743102 236.38741809515014 60.07852626594013 162.17276380844802 60.20941615851825 128.2722422121752C60.34030605109638 94.37172061590238 56.806273865223986 84.29318998642648 79.05758357795185 67.01570382106192C101.3088932906797 49.738217655697355 162.43455069017514 34.42407924322177 193.71727443488544 24.6073252199877C224.99999817959574 14.790571196753632 230.89005478970316 5.497378015397857 266.75392604621356 8.115179681657622C302.617797302724 10.732981347917388 373.69108018032813 19.895288451392304 408.90050197394794 40.314135217546294C444.10992376756775 60.732981983700284 467.6701400354714 94.76438520737375 478.0104568079323 130.62826027858145C488.35077358039325 166.49213534978915 494.76439357551044 214.79058073349645 470.94240260871356 255.4973856447922C447.1204116419167 296.2041905560877 376.96332749478125 354.0575764813809 335.07851100715106 374.8690897463548C293.1936945195209 395.6806030113288 244.1099415694883 383.5078277427741 219.63350368293231 380.36646523463605C195.15706579637632 377.2251027264979 198.03663834683206 364.0052032310555 188.21988368781513 356.0209146975269C178.4031290287982 348.0366261639982 179.05758230638608 346.72774758326887 160.73297572883075 332.46073403346406 " fill="url(&quot;#ssshape-pattern2&quot;)" transform="matrix(1,0,0,1,14.537452697753906,61.94749450683594)" stroke-width="8" stroke="hsl(115, 86%, 20%)"></path><defs><pattern id="ssshape-pattern2" width="76" height="76" viewBox="0 0 40 40" patternUnits="userSpaceOnUse">
                                <rect width="100%" height="100%" fill="hsl(105, 45%, 68%)"></rect>
                                <path d="M0 20v20l14-20L20 0l-20 20zM20 20v20l14-20L40 0l-20 20z" fill="hsl(101, 63%, 30%)" fill-opacity="0.5"></path>
                                <path d="M0 40v-20l20-20l-10 20zM20 40v-20l20-20l-10 20zM20 20v20l-20 20l9-20zM20-20v20l-20 20l9-20zM40 20v20l-20 20l9-20zM40-20v20l-20 20l9-20z" fill="hsl(101, 63%, 30%)"></path>
                            </pattern></defs></svg>
                            <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                            <div className="relative z-10 lg:py-16">
                                <div className="relative h-64 sm:h-80 lg:h-full">
                                <img
                                    alt=""
                                    src="https://media.istockphoto.com/id/1466388010/photo/health-insurance-concept-hand-people-holding-magnifier-focus-to-plus-symbol-and-healthcare.jpg?s=612x612&w=0&k=20&c=5MVsj9AuvJcBcp-jPZlW5PCl7s2lJQT2PFRpxP-aV_0="
                                    className="absolute inset-0 h-full w-full object-cover rounded-xl"
                                />
                                </div>
                            </div>

                            <div className="relative flex items-center bg-gray-100 rounded-r-xl">
                                <span
                                className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100 rounded-l-xl"
                                ></span>

                                <div className="p-8 sm:p-16 lg:p-24">
                                <h2 className="font-bold five-title">
                                    Unparalleled <span className="main-gradient">Health Insurance</span>
                                </h2>

                                <p className="mt-4 text-gray-600">
                                    EcoEats provides a comprehensive health insurance package, including medical, dental, 
                                    and vision coverage. Medical insurance covers 80% of healthcare expenses, with employees 
                                    responsible for a 20% co-pay. Dental coverage includes preventive care, basic procedures, 
                                    and major services with a $50 deductible. Vision insurance offers coverage for eye exams, 
                                    frames, and lenses, with an annual allowance of $200 for frames and $150 for lenses.

                                </p>

                                <a
                                    href="/about"
                                    className="mt-8 inline-block rounded border transition300 border-green-600 bg-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500"
                                >
                                    Learn More
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 relative">
                            <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                                <div className="relative flex items-center bg-gray-100 rounded-l-xl">
                                    <span
                                    className="hidden lg:absolute lg:inset-y-0 lg:-end-16 lg:block lg:w-16 lg:bg-gray-100 rounded-r-xl"
                                    ></span>

                                    <div className="p-8 sm:p-16 lg:p-24">
                                    <h2 className="font-bold five-title">
                                        Flexible <span className="main-gradient block">Paid Time Off</span>
                                    </h2>

                                    <p className="mt-4 text-gray-600">
                                        Employees at EcoEats are entitled to 12 days of paid time off per year, which accrues at a 
                                        rate of 1 day per month. This PTO can be used for vacation, personal days, or sick leave, 
                                        providing flexibility and work-life balance.
                                    </p>

                                    <a
                                        href="/about"
                                        className="mt-8 inline-block rounded border transition300 border-green-600 bg-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500"
                                    >
                                        Learn More
                                    </a>
                                    </div>
                                </div>
                                <div className="relative z-10 lg:py-16">
                                    <div className="relative h-64 sm:h-80 lg:h-full">
                                    <img
                                        alt=""
                                        src="https://media.istockphoto.com/id/1765917173/vector/paid-family-leave-benefits-pfl-benefits-include-sick-time-paid-time-off-vacation-benefits.jpg?s=612x612&w=0&k=20&c=NlwAGqjjnuYvg6Nkgz1YzAIazGmHVwhDH7GhOiPwAVI="
                                        className="absolute inset-0 h-full w-full object-cover rounded-xl"
                                    />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 relative">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className='absolute -top-20 -left-32 w-1/2' xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 600 600"><path d="M188.21988368781513 356.0209146975269C178.4031290287982 348.0366261639982 179.05758230638608 346.72774758326887 160.73297572883075 332.46073403346406C142.40836915127542 318.1937204836594 95.02617081753517 304.45024870224654 78.2722442224831 270.41883339869844C61.51831762743102 236.38741809515014 60.07852626594013 162.17276380844802 60.20941615851825 128.2722422121752C60.34030605109638 94.37172061590238 56.806273865223986 84.29318998642648 79.05758357795185 67.01570382106192C101.3088932906797 49.738217655697355 162.43455069017514 34.42407924322177 193.71727443488544 24.6073252199877C224.99999817959574 14.790571196753632 230.89005478970316 5.497378015397857 266.75392604621356 8.115179681657622C302.617797302724 10.732981347917388 373.69108018032813 19.895288451392304 408.90050197394794 40.314135217546294C444.10992376756775 60.732981983700284 467.6701400354714 94.76438520737375 478.0104568079323 130.62826027858145C488.35077358039325 166.49213534978915 494.76439357551044 214.79058073349645 470.94240260871356 255.4973856447922C447.1204116419167 296.2041905560877 376.96332749478125 354.0575764813809 335.07851100715106 374.8690897463548C293.1936945195209 395.6806030113288 244.1099415694883 383.5078277427741 219.63350368293231 380.36646523463605C195.15706579637632 377.2251027264979 198.03663834683206 364.0052032310555 188.21988368781513 356.0209146975269C178.4031290287982 348.0366261639982 179.05758230638608 346.72774758326887 160.73297572883075 332.46073403346406 " fill="url(&quot;#ssshape-pattern2&quot;)" transform="matrix(1,0,0,1,14.537452697753906,61.94749450683594)" stroke-width="8" stroke="hsl(115, 86%, 20%)"></path><defs><pattern id="ssshape-pattern2" width="76" height="76" viewBox="0 0 40 40" patternUnits="userSpaceOnUse">
                                <rect width="100%" height="100%" fill="hsl(105, 45%, 68%)"></rect>
                                <path d="M0 20v20l14-20L20 0l-20 20zM20 20v20l14-20L40 0l-20 20z" fill="hsl(101, 63%, 30%)" fill-opacity="0.5"></path>
                                <path d="M0 40v-20l20-20l-10 20zM20 40v-20l20-20l-10 20zM20 20v20l-20 20l9-20zM20-20v20l-20 20l9-20zM40 20v20l-20 20l9-20zM40-20v20l-20 20l9-20z" fill="hsl(101, 63%, 30%)"></path>
                            </pattern></defs></svg>
                            <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                            <div className="relative z-10 lg:py-16">
                                <div className="relative h-64 sm:h-80 lg:h-full">
                                <img
                                    alt="insurance plan pic"
                                    src="https://media.istockphoto.com/id/1055232764/vector/fast-service-brief-solution-or-business-project-management-vector-icon-of-checklist-survey.jpg?s=612x612&w=0&k=20&c=ylt5eH1WAk4ZIUAg8b_q9utfgwzM3VLzY5jkbSvz7WM="
                                    className="absolute inset-0 h-full w-full object-cover rounded-xl"
                                />
                                </div>
                            </div>

                            <div className="relative flex items-center bg-gray-100 rounded-r-xl">
                                <span
                                className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100 rounded-l-xl"
                                ></span>

                                <div className="p-8 sm:p-16 lg:p-24">
                                <h2 className="font-bold five-title">
                                    Accomodating <span className="main-gradient">Insurance Plans</span>
                                </h2>

                                <p className="mt-4 text-gray-600">
                                    EcoEats offers a 401(k) retirement savings plan with employer matching contributions. 
                                    Employees can contribute up to 6% of their salary, and EcoEats matches 50% of contributions,
                                    up to a maximum of 3% of the employee's annual salary.
                                </p>

                                <a
                                    href="/about"
                                    className="mt-8 inline-block rounded border transition300 border-green-600 bg-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500"
                                >
                                    Learn More
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>

                    {/* <div>
                        <div class="flex gap-x-8 justify-center px-4">

                            <div class="bg-white w-1/3 rounded-lg shadow-lg p-8 flex flex-col gap-y-2">
                                <MdOutlineHealthAndSafety className='w-10 h-10'/>
                                <h2 class="text-2xl font-medium maintextcolor">2 Free Sessions</h2>
                                <p class="maintextcolor paragraph-responsive">
                                    The first week of this course is <b>completely free</b>. You only start paying if you choose to continue 
                                    <b> after that first week.</b>
                                </p>
                            </div>

                            <div class="bg-white w-1/3 rounded-lg shadow-lg p-8 flex flex-col gap-y-2">
                                <MdOutlineHealthAndSafety className='w-10 h-10'/>
                                <h2 class="text-2xl font-medium maintextcolor">2 Free Sessions</h2>
                                <p class="maintextcolor paragraph-responsive">
                                    The first week of this course is <b>completely free</b>. You only start paying if you choose to continue 
                                    <b> after that first week.</b>
                                </p>
                            </div>

                            <div class="bg-white w-1/3 rounded-lg shadow-lg p-8 flex flex-col gap-y-2">
                                <MdOutlineHealthAndSafety className='w-10 h-10'/>
                                <h2 class="text-2xl font-medium maintextcolor">2 Free Sessions</h2>
                                <p class="maintextcolor paragraph-responsive">
                                    The first week of this course is <b>completely free</b>. You only start paying if you choose to continue 
                                    <b> after that first week.</b>
                                </p>
                            </div>
                        </div>
                    </div> */}


                </div>
            </div>
        </>
    )
}