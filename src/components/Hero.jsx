import profile from "../assets/profile.jpeg"

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-black"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Large Cyan Glow */}
        <div className="absolute w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[120px] -top-40 -left-40 animate-glow-one"></div>

        <div className="absolute w-[450px] h-[450px] bg-cyan-400/10 rounded-full blur-[120px] -bottom-40 -right-40 animate-glow-two"></div>

        {/* Moving Lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-[900px] h-[2px] bg-cyan-400 blur-sm rotate-[25deg] top-[25%] -left-[200px] animate-line-one"></div>

          <div className="absolute w-[900px] h-[1px] bg-cyan-300 blur-sm rotate-[25deg] top-[55%] -left-[300px] animate-line-two"></div>

          <div className="absolute w-[900px] h-[1px] bg-cyan-400 blur-sm rotate-[25deg] top-[75%] -left-[200px] animate-line-three"></div>
        </div>

        {/* Small Glowing Dots */}
        <span className="absolute w-1 h-1 bg-cyan-400 rounded-full top-[20%] left-[20%] shadow-[0_0_15px_#22d3ee] animate-particle-one"></span>

        <span className="absolute w-1.5 h-1.5 bg-cyan-300 rounded-full top-[70%] left-[35%] shadow-[0_0_15px_#22d3ee] animate-particle-two"></span>

        <span className="absolute w-1 h-1 bg-cyan-400 rounded-full top-[35%] right-[20%] shadow-[0_0_15px_#22d3ee] animate-particle-three"></span>

        <span className="absolute w-1.5 h-1.5 bg-cyan-300 rounded-full bottom-[20%] right-[30%] shadow-[0_0_15px_#22d3ee] animate-particle-four"></span>
        {/* Animated Particles */}
<div className="absolute inset-0">

  <span className="absolute w-1 h-1 bg-cyan-400 rounded-full top-[15%] left-[10%] shadow-[0_0_12px_#22d3ee] animate-particle-one"></span>

  <span className="absolute w-1.5 h-1.5 bg-cyan-300 rounded-full top-[25%] left-[25%] shadow-[0_0_15px_#22d3ee] animate-particle-two"></span>

  <span className="absolute w-1 h-1 bg-cyan-400 rounded-full top-[40%] left-[8%] shadow-[0_0_12px_#22d3ee] animate-particle-three"></span>

  <span className="absolute w-1 h-1 bg-cyan-300 rounded-full top-[60%] left-[20%] shadow-[0_0_12px_#22d3ee] animate-particle-four"></span>

  <span className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full top-[75%] left-[40%] shadow-[0_0_15px_#22d3ee] animate-particle-one"></span>

  <span className="absolute w-1 h-1 bg-cyan-300 rounded-full top-[20%] right-[25%] shadow-[0_0_12px_#22d3ee] animate-particle-two"></span>

  <span className="absolute w-1 h-1 bg-cyan-400 rounded-full top-[35%] right-[10%] shadow-[0_0_12px_#22d3ee] animate-particle-three"></span>

  <span className="absolute w-1.5 h-1.5 bg-cyan-300 rounded-full top-[55%] right-[25%] shadow-[0_0_15px_#22d3ee] animate-particle-four"></span>

  <span className="absolute w-1 h-1 bg-cyan-400 rounded-full bottom-[15%] right-[10%] shadow-[0_0_12px_#22d3ee] animate-particle-one"></span>

  <span className="absolute w-1 h-1 bg-cyan-300 rounded-full bottom-[25%] left-[30%] shadow-[0_0_12px_#22d3ee] animate-particle-three"></span>

  <span className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full top-[10%] right-[45%] shadow-[0_0_15px_#22d3ee] animate-particle-two"></span>

  <span className="absolute w-1 h-1 bg-cyan-300 rounded-full bottom-[10%] left-[10%] shadow-[0_0_12px_#22d3ee] animate-particle-four"></span>
{/* Animated Particles */}
<div className="absolute inset-0">

  <span className="absolute w-1 h-1 bg-cyan-400 rounded-full top-[15%] left-[10%] shadow-[0_0_12px_#22d3ee] animate-particle-one"></span>

  <span className="absolute w-1.5 h-1.5 bg-cyan-300 rounded-full top-[25%] left-[25%] shadow-[0_0_15px_#22d3ee] animate-particle-two"></span>

  <span className="absolute w-1 h-1 bg-cyan-400 rounded-full top-[40%] left-[8%] shadow-[0_0_12px_#22d3ee] animate-particle-three"></span>

  <span className="absolute w-1 h-1 bg-cyan-300 rounded-full top-[60%] left-[20%] shadow-[0_0_12px_#22d3ee] animate-particle-four"></span>

  <span className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full top-[75%] left-[40%] shadow-[0_0_15px_#22d3ee] animate-particle-one"></span>

  <span className="absolute w-1 h-1 bg-cyan-300 rounded-full top-[20%] right-[25%] shadow-[0_0_12px_#22d3ee] animate-particle-two"></span>

  <span className="absolute w-1 h-1 bg-cyan-400 rounded-full top-[35%] right-[10%] shadow-[0_0_12px_#22d3ee] animate-particle-three"></span>

  <span className="absolute w-1.5 h-1.5 bg-cyan-300 rounded-full top-[55%] right-[25%] shadow-[0_0_15px_#22d3ee] animate-particle-four"></span>

  <span className="absolute w-1 h-1 bg-cyan-400 rounded-full bottom-[15%] right-[10%] shadow-[0_0_12px_#22d3ee] animate-particle-one"></span>

  <span className="absolute w-1 h-1 bg-cyan-300 rounded-full bottom-[25%] left-[30%] shadow-[0_0_12px_#22d3ee] animate-particle-three"></span>

  <span className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full top-[10%] right-[45%] shadow-[0_0_15px_#22d3ee] animate-particle-two"></span>

  <span className="absolute w-1 h-1 bg-cyan-300 rounded-full bottom-[10%] left-[10%] shadow-[0_0_12px_#22d3ee] animate-particle-four"></span>

</div>
</div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Content */}
        <div>

          <p className="text-cyan-400 text-lg mb-4">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Kavisha Nimanshi
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
            Full Stack Developer
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