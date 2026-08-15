import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 py-5 sm:py-6 lg:py-8">
      
      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between">

          {/* =============================== */}
          {/* LOGO */}
          {/* =============================== */}

          <Link
            to="/"
            onClick={closeMenu}
            className="
              text-lg
              sm:text-xl
              md:text-2xl
              font-bold
              text-white
              animate-logo-fade
              whitespace-nowrap
            "
          >
            Kavisha<span className="text-cyan-400">.</span>
          </Link>


          {/* =============================== */}
          {/* DESKTOP NAVIGATION */}
          {/* =============================== */}

          <div className="hidden xl:flex items-center gap-5 2xl:gap-8">

            <Link
              to="/"
              className="text-sm 2xl:text-base text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-sm 2xl:text-base text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              About
            </Link>

            <Link
              to="/skills"
              className="text-sm 2xl:text-base text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              Skills
            </Link>

            <Link
              to="/experience"
              className="text-sm 2xl:text-base text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              Experience
            </Link>

            <Link
              to="/education"
              className="text-sm 2xl:text-base text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              Education
            </Link>

            <Link
              to="/Certificates & Courses"
              className="text-sm 2xl:text-base text-gray-300 hover:text-cyan-400 transition duration-300 whitespace-nowrap"
            >
              Certificates & Courses
            </Link>

            <Link
              to="/projects"
              className="text-sm 2xl:text-base text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              Projects
            </Link>

            <Link
              to="/services"
              className="text-sm 2xl:text-base text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              Services
            </Link>

          </div>


          {/* =============================== */}
          {/* DESKTOP LET'S TALK */}
          {/* =============================== */}

          <a
            href="/contact"
            className="
              hidden
              xl:block
              px-4
              2xl:px-5
              py-2
              2xl:py-2.5
              rounded-full
              border
              border-cyan-400
              text-cyan-400
              text-sm
              2xl:text-base
              hover:bg-cyan-400
              hover:text-black
              transition
              duration-300
              whitespace-nowrap
            "
          >
            Let's Talk
          </a>


          {/* =============================== */}
          {/* MOBILE / TABLET MENU BUTTON */}
          {/* =============================== */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              xl:hidden
              relative
              w-10
              h-10
              sm:w-11
              sm:h-11
              flex
              flex-col
              items-center
              justify-center
              gap-1.5
              rounded-lg
              border
              border-cyan-400/20
              bg-black/40
              backdrop-blur-md
              transition
              duration-300
            "
            aria-label="Toggle navigation menu"
          >

            {/* Top Line */}
            <span
              className={`
                block
                w-5
                sm:w-6
                h-0.5
                bg-cyan-400
                transition-all
                duration-300
                ${isOpen ? "rotate-45 translate-y-2" : ""}
              `}
            ></span>

            {/* Middle Line */}
            <span
              className={`
                block
                w-5
                sm:w-6
                h-0.5
                bg-cyan-400
                transition-all
                duration-300
                ${isOpen ? "opacity-0" : "opacity-100"}
              `}
            ></span>

            {/* Bottom Line */}
            <span
              className={`
                block
                w-5
                sm:w-6
                h-0.5
                bg-cyan-400
                transition-all
                duration-300
                ${isOpen ? "-rotate-45 -translate-y-2" : ""}
              `}
            ></span>

          </button>

        </div>


        {/* =============================== */}
        {/* MOBILE / TABLET MENU */}
        {/* =============================== */}

        <div
          className={`
            xl:hidden
            overflow-hidden
            transition-all
            duration-500
            ease-in-out
            ${
              isOpen
                ? "max-h-[650px] opacity-100 mt-4"
                : "max-h-0 opacity-0 mt-0"
            }
          `}
        >

          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-black/90
              backdrop-blur-xl
              shadow-[0_15px_50px_rgba(0,0,0,0.6)]
              p-4
              sm:p-5
            "
          >

            <div className="flex flex-col gap-1">

              {/* Home */}
              <Link
                to="/"
                onClick={closeMenu}
                className="
                  px-4
                  py-3
                  sm:py-3.5
                  rounded-xl
                  text-sm
                  sm:text-base
                  text-gray-300
                  hover:text-cyan-400
                  hover:bg-cyan-400/5
                  transition
                  duration-300
                "
              >
                Home
              </Link>


              {/* About */}
              <Link
                to="/about"
                onClick={closeMenu}
                className="
                  px-4
                  py-3
                  sm:py-3.5
                  rounded-xl
                  text-sm
                  sm:text-base
                  text-gray-300
                  hover:text-cyan-400
                  hover:bg-cyan-400/5
                  transition
                  duration-300
                "
              >
                About
              </Link>


              {/* Skills */}
              <Link
                to="/skills"
                onClick={closeMenu}
                className="
                  px-4
                  py-3
                  sm:py-3.5
                  rounded-xl
                  text-sm
                  sm:text-base
                  text-gray-300
                  hover:text-cyan-400
                  hover:bg-cyan-400/5
                  transition
                  duration-300
                "
              >
                Skills
              </Link>


              {/* Experience */}
              <Link
                to="/experience"
                onClick={closeMenu}
                className="
                  px-4
                  py-3
                  sm:py-3.5
                  rounded-xl
                  text-sm
                  sm:text-base
                  text-gray-300
                  hover:text-cyan-400
                  hover:bg-cyan-400/5
                  transition
                  duration-300
                "
              >
                Experience
              </Link>


              {/* Education */}
              <Link
                to="/education"
                onClick={closeMenu}
                className="
                  px-4
                  py-3
                  sm:py-3.5
                  rounded-xl
                  text-sm
                  sm:text-base
                  text-gray-300
                  hover:text-cyan-400
                  hover:bg-cyan-400/5
                  transition
                  duration-300
                "
              >
                Education
              </Link>


              {/* Certificates */}
              <Link
                to="/Certificates & Courses"
                onClick={closeMenu}
                className="
                  px-4
                  py-3
                  sm:py-3.5
                  rounded-xl
                  text-sm
                  sm:text-base
                  text-gray-300
                  hover:text-cyan-400
                  hover:bg-cyan-400/5
                  transition
                  duration-300
                "
              >
                Certificates & Courses
              </Link>


              {/* Projects */}
              <Link
                to="/projects"
                onClick={closeMenu}
                className="
                  px-4
                  py-3
                  sm:py-3.5
                  rounded-xl
                  text-sm
                  sm:text-base
                  text-gray-300
                  hover:text-cyan-400
                  hover:bg-cyan-400/5
                  transition
                  duration-300
                "
              >
                Projects
              </Link>


              {/* Services */}
              <Link
                to="/services"
                onClick={closeMenu}
                className="
                  px-4
                  py-3
                  sm:py-3.5
                  rounded-xl
                  text-sm
                  sm:text-base
                  text-gray-300
                  hover:text-cyan-400
                  hover:bg-cyan-400/5
                  transition
                  duration-300
                "
              >
                Services
              </Link>


              {/* =============================== */}
              {/* MOBILE LET'S TALK */}
              {/* =============================== */}

              <a
                href="/contact"
                onClick={closeMenu}
                className="
                  mt-3
                  text-center
                  px-5
                  py-3
                  sm:py-3.5
                  rounded-full
                  border
                  border-cyan-400
                  text-cyan-400
                  text-sm
                  sm:text-base
                  hover:bg-cyan-400
                  hover:text-black
                  transition
                  duration-300
                "
              >
                Let's Talk
              </a>

            </div>

          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;