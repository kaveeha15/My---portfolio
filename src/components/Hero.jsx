import profile from "../assets/profile.jpeg"
import ParticlesBackground from "./ParticlesBackground"
import { useState } from "react"
import { useEffect } from "react"

function Hero() {
const [text, setText] = useState("")
const [isDeleting, setIsDeleting] = useState(false)
const [index, setIndex] = useState(0)

const roles = [
  "Full Stack Developer",
  "Creative Corder",
  "Web Developer",
]
useEffect(() => {
  const currentRole = roles[index]

  const typingSpeed = isDeleting ? 60 : 100

  const timer = setTimeout(() => {
    if (!isDeleting) {
      setText(currentRole.substring(0, text.length + 1))

      if (text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1200)
      }
    } else {
      setText(currentRole.substring(0, text.length - 1))

      if (text === "") {
        setIsDeleting(false)
        setIndex((prev) => (prev + 1) % roles.length)
      }
    }
  }, typingSpeed)

  return () => clearTimeout(timer)
}, [text, isDeleting, index])
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-40 pt-20 overflow-hidden bg-black"
    >
      {/* Particles Background */}
     <ParticlesBackground />

{/* Animated Background */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">

  {/* Cyan Glow */}
  <div
    className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/20  blur-[120px] animate-pulse"
    style={{
      top: "-150px",
      left: "-150px",
      animationDuration: "6s",
    }}
  ></div>

  {/* cyan Glow */}
  <div
    className="absolute w-[500px] h-[500px] rounded-full bg-cyan-600/20 blur-[120px] animate-pulse"
    style={{
      bottom: "-150px",
      right: "-150px",
      animationDuration: "6s",
    }}
  ></div>

  {/* Center Glow */}
  <div
    className="absolute w-[300px] h-[300px] rounded-full bg-cyan-400/10 blur-[100px] animate-pulse"
    style={{
      top: "40%",
      left: "45%",
      animationDuration: "4s",
    }}
  ></div>

</div>
      

      {/* Main Content */}
      <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Content */}
        <div>

          <p className="text-cyan-400 text-lg mb-4">
            Hello, I'm
          </p>

          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-6
            drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]
            hover:drop-shadow-[0_0_10px_rgba(14,200,208,0.8)]
            transition-all duration-400"
            >
            Kavisha Nimanshi
        </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
  <span className="text-cyan-400">
    {text}
  </span>
  <span className="text-cyan-400 animate-pulse">
    |
  </span>
</h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-8">
            I build modern, responsive and user-friendly web applications
            using modern technologies.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">

            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:bg-cyan-300 hover:scale-105 transition duration-300"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black hover:scale-105 transition duration-300"
            >
              Contact Me
            </a>

          </div>

        </div>

        {/* Profile Photo */}
        <div className="flex justify-center animate-float">

          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.4)] flex items-center justify-center overflow-hidden hover:scale-105 transition duration-500">

            <img
              src={profile}
              alt="Kavisha Nimanshi"
              className="w-full h-full object-cover rounded-full"
            />

          </div>

        </div>
        
      </div>
    </section>
  )
}

export default Hero