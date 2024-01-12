import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import ecoanlytics from '../Images/ecoanalytics.png'
import greenellipse from '../Images/greenellipse.svg'

const features = [
  {
    name: 'Intuitive Map.',
    description: 'EcoEats provides an intuitive mapping feature that allows recipients to see and get notified when a donor posts a listing in their respective area.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Easy Listings.',
    description: 'Recipients can easily view the listings on the app and are able to sort and filter by many different categories like Expiration Date, Food, etc.',
    icon: LockClosedIcon,
  },
  {
    name: 'Volunteering Made Easy.',
    description: 'EcoEats allows users to volunteer effortlessly, whether that is posting listings or signing up to be a volunteer driver, there are many ways to help.',
    icon: ServerIcon,
  },
]

export default function Features1() {
  return (
    <div className="overflow-hidden bg-transparent py-24 sm:py-32 relative">
    
    <div className="absolute z-10 top-1/2 w-96 transform -translate-x-[20%] -translate-y-1/2 blur-3xl">
        <img src={greenellipse} alt="green ellipse for decor" className='w-96 rotate-180 -z-10 blur-3xl opacity-50' />
    </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4 flex">
            <div className="lg:max-w-lg flex flex-col justify-center z-40">
              <h2 className="text-base font-semibold leading-7 text-emerald-600">Understand <i>better</i></h2>
              <p className="mt-2 text-3xl font-bold tracking-tight font-manrope sm:text-5xl text-black">Advanced Analytics</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                EcoEats provides advanced donor analytics, allowing restauraunts and participating donors to see exactly 
                where they've made an impact!
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-emerald-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={ecoanlytics}
            alt="Product screenshot"
            className="w-[48rem] max-w-none z-40 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
