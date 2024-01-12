import HeroMain from './Components/HeroMain'
import MainFeatures from './Components/MainFeatures'
import Features1 from './Components/Features1'
import StepComponent from './Components/StepsComponent'
import FinalCTA from './Components/FinalCTA'
import Testimonials from './Components/Testimonials'

export default function Homepage() {
    return (
        <>
            <HeroMain />
            <MainFeatures />
            <Features1 />
            <StepComponent />
            <Testimonials />
            <FinalCTA />
        </>
    )
}