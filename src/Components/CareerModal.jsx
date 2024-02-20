import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { BriefcaseIcon } from '@heroicons/react/24/outline'

export default function CareerModal({open, setOpen, activeJob}) {

  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto font-outfit">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg  bg-white text-left shadow-xl transition-all sm:my-40 w-2/3">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <BriefcaseIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        {activeJob !== undefined && 
                            <div className='four-title'>Apply for <span className="main-gradient">{activeJob.title}</span></div>
                        }
                    </Dialog.Title>
                    <div className="mt-2">
                        <p className="text-base text-gray-500">
                        Thank you for taking the time to apply to the{' '}
                        <span className="font-semibold">{activeJob !== undefined && activeJob.title} role!</span> We look forward to your application and hearing from you.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="p-4 mt-4 rounded-md">
                    {/* Personal Information */}
                    <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2">Personal Information:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                            Full Name:
                        </label>
                        <input type="text" id="fullName" className="mt-1 p-2 w-full border rounded-md" />
                        </div>
                        <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address:
                        </label>
                        <input type="email" id="email" className="mt-1 p-2 w-full border rounded-md" />
                        </div>
                        <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Phone Number:
                        </label>
                        <input type="tel" id="phone" className="mt-1 p-2 w-full border rounded-md" />
                        </div>
                        <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                            Address:
                        </label>
                        <input type="text" id="address" className="mt-1 p-2 w-full border rounded-md" />
                        </div>
                        <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                            Role Applying For:
                        </label>
                        <input type="text" id="role" className="mt-1 p-2 w-full border rounded-md" />
                        </div>
                    </div>
                    </div>

                    {/* Previous Experience */}
                    <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2">Previous Experience:</h4>
                    <div>
                        <label htmlFor="workExperience" className="block text-sm font-medium text-gray-700">
                        Please list any relevant work experience related to the role you are applying for.
                        </label>
                        <textarea id="workExperience" className="mt-1 p-2 w-full border rounded-md"></textarea>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="previousPosition" className="block text-sm font-medium text-gray-700">
                        Have you previously worked in a similar position? If so, please provide details.
                        </label>
                        <textarea id="previousPosition" className="mt-1 p-2 w-full border rounded-md"></textarea>
                    </div>
                    </div>

                    {/* Education */}
                    <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2">Education:</h4>
                    <div>
                        <label htmlFor="educationLevel" className="block text-sm font-medium text-gray-700">
                        What is your highest level of education?
                        </label>
                        <input type="text" id="educationLevel" className="mt-1 p-2 w-full border rounded-md" />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="qualifications" className="block text-sm font-medium text-gray-700">
                        Do you have any relevant certifications or qualifications?
                        </label>
                        <input type="text" id="qualifications" className="mt-1 p-2 w-full border rounded-md" />
                    </div>
                    </div>

                    {/* Skills and Qualifications */}
                    <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2">Skills and Qualifications:</h4>
                    <div>
                        <label htmlFor="candidateSkills" className="block text-sm font-medium text-gray-700">
                        What skills or qualifications make you a suitable candidate for this role?
                        </label>
                        <textarea id="candidateSkills" className="mt-1 p-2 w-full border rounded-md"></textarea>
                    </div>
                    {activeJob !== undefined && activeJob.title === 'Volunteer Coordinator' && (
                        <div className="mt-4">
                        <label htmlFor="programmingSkills" className="block text-sm font-medium text-gray-700">
                            Have you managed Volunteers in the past? If so, how was that experience?
                        </label>
                        <input type="text" id="programmingSkills" className="mt-1 p-2 w-full border rounded-md" />
                        </div>
                    )}
                    {activeJob !== undefined && activeJob.title === 'App Developer' && (
                        <div className="mt-4">
                        <label htmlFor="programmingSkills" className="block text-sm font-medium text-gray-700">
                            Are you proficient in any specific programming languages or software tools?
                        </label>
                        <input type="text" id="programmingSkills" className="mt-1 p-2 w-full border rounded-md" />
                        </div>
                    )}
                    {activeJob !== undefined && activeJob.title === 'Marketing Head' && (
                        <div className="mt-4">
                        <label htmlFor="marketingSkills" className="block text-sm font-medium text-gray-700">
                            Have you worked with any marketing tools or platforms?
                        </label>
                        <input type="text" id="marketingSkills" className="mt-1 p-2 w-full border rounded-md" />
                        </div>
                    )}
                    </div>

                    {/* Availability */}
                    <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2">Availability:</h4>
                    <div>
                        <label htmlFor="workAvailability" className="block text-sm font-medium text-gray-700">
                        Are you available to work full-time or part-time?
                        </label>
                        <select id="workAvailability" className="mt-1 p-2 w-full border rounded-md">
                        <option value="full-time">Full-Time</option>
                        <option value="part-time">Part-Time</option>
                        </select>
                    </div>
                    </div>
                </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md transition300 bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => {setOpen(false);}}
                  >
                    Remove
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md transition300 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
