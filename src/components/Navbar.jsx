function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50  py-10 px-35">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-bold text-white">
          Kavisha<span className="text-cyan-400">.</span>
        </h1>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-gray-300 hover:text-cyan-400 transition">
            Home
          </a>

          <a href="#about" className="text-gray-300 hover:text-cyan-400 transition">
            About
          </a>

          <a href="#skills" className="text-gray-300 hover:text-cyan-400 transition">
            Skills
          </a>

          <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition">
            Projects
          </a>

          <a href="#experience" className="text-gray-300 hover:text-cyan-400 transition">
            Experience
          </a>

          <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition">
            Contact
          </a>
        </div>

        {/* Let's Talk Button */}
        <a
          href="#contact"
          className="hidden md:block px-5 py-2.5 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
        >
          Let's Talk
        </a>

      </div>
    </nav>
  )
}

export default Navbar;