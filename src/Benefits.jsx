import React from 'react'
import { MdOutlineHealthAndSafety } from "react-icons/md";

export default function Benefits() {
    return (
        <>
            <div className='bg-green-900 py-10'>
                <div className="container mx-auto font-outfit max-w-7xl py-10 flex flex-col gap-y-6">
                    <div className='flex flex-col gap-y-4 text-white items-center'>
                        <h1 className='text-center six-title'>
                            Benefits that <span className="underline font-bold">Matter</span>
                        </h1>
                        <p className='w-1/2 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ut ipsam, 
                            architecto tempora animi sunt delectus eos soluta? Soluta perferendis facilis 
                            voluptatum veniam quaerat sint ipsum voluptates iste cumque doloribus.
                        </p>
                    </div>

                    <div>
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
                    </div>
                </div>
            </div>
        </>
    )
}