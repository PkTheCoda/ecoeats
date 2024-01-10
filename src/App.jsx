import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HeroMain from './Components/HeroMain'
import Navbar from './Components/Navbar'
import MainFeatures from './Components/MainFeatures'
import Features1 from './Components/Features1'
import StepComponent from './Components/StepsComponent'
import FinalCTA from './Components/FinalCTA'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <HeroMain />
      <MainFeatures />
      <Features1 />
      <StepComponent />
      <FinalCTA />
      <Footer />
    </>
  )
}

export default App
