import ecoeats from '../assets/ecoeatsreal.png'

export default function Footer() {
    return (
        <>
            <footer className="bg-gray-50 pb-10">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex justify-center text-teal-600 sm:justify-start">
                        <img src={ecoeats} className="w-10" alt="a picture of our logo" />
                    </div>

                    <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                        Copyright &copy; 2024. All rights reserved.
                    </p>
                    </div>
                </div>
                <div className="text-center text-sm text-gray-500 lg:mt-0 flex flex-col">
                    {/* <div>
                        This website was made by <a href="https://pranavk.vercel.app" className="hover:underline text-blue-500">Pranav Konjeti </a>
                        for <a href="https://www.conradchallenge.org/" className="hover:underline text-blue-500">the Conrad Challenge</a>.
                    </div> */}
                    <div>This website was made for the Conrad Challenge. Team members include <a href="https://pranavk.vercel.app" className='text-blue-700 hover:underline' target='_blank'>Pranav Konjeti</a>, Rutam Tasgaonkar, Om Tasgaonkar, Rohit Sangishetty, Abhinav Arora</div>
                </div>
                
            </footer>
        </>
    )
}