import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
function App() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default App