import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-10 px-35">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-white">
          Kavisha<span className="text-cyan-400">.</span>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">

          <Link
            to="/"
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            About
          </Link>

          <Link
            to="/skills"
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            Skills
          </Link>

          <Link
            to="/projects"
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            Projects
          </Link>

          <Link
            to="/experience"
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            Experience
          </Link>

          <Link
            to="/education"
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            Education
          </Link>
          <Link
            to="/services"
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            Services
          </Link>

        </div>

        {/* Let's Talk Button */}
        <Link
          to="/contact"
          className="hidden md:block px-5 py-2.5 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
        >
          Let's Talk
        </Link>

      </div>
    </nav>
  )
}

export default Navbar