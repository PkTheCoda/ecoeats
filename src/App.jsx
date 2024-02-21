import Navbar from './Components/Navbar'
import Homepage from './Homepage'
import About from './About'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Youtube from './Youtube'
import Careers from './Careers';
import RulesPage from './Components/Rules';
import Benefits from './Benefits';

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
            path="/benefits"
            element={<Benefits />}
          />

        <Route 
            path="/app"
            element={<Youtube />}
          />

          <Route 
            path="/careers"
            element={<Careers />}
          />

          <Route 
            path="/rules"
            element={<RulesPage />}
          />

          
        </Routes>

        

        
      </BrowserRouter>
      <Footer />
      

    </>
  )
}

export default App
