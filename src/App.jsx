import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HeroMain from './Components/HeroMain'
import Navbar from './Components/Navbar'
import Homepage from './Homepage'
import About from './About'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route 
            index 
            element={<Homepage />}
          />

        <Route 
            path="/about"
            element={<About />}
          />

          
        </Routes>

        

        
      </BrowserRouter>
      <Footer />
      

    </>
  )
}

export default App
