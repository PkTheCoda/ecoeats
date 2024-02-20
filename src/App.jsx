import Navbar from './Components/Navbar'
import Homepage from './Homepage'
import About from './About'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Youtube from './Youtube'
import Careers from './Careers';

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

        <Route 
            path="/app"
            element={<Youtube />}
          />

          <Route 
            path="/careers"
            element={<Careers />}
          />

          
        </Routes>

        

        
      </BrowserRouter>
      <Footer />
      

    </>
  )
}

export default App
