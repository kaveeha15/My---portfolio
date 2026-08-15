import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skill"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Certificates from "./components/Certificates"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/Certificates & Courses" element={<Certificates/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App