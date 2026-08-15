import profile from "../assets/profile.jpeg"
import ParticlesBackground from "./ParticlesBackground"
import { useState, useEffect } from "react"

function Hero() {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [index, setIndex] = useState(0)

  const roles = [
    "Full Stack Developer",
    "Creative Coder",
    "Web Developer",
  ]

  /* =========================================
     ROLE TYPING EFFECT
  ========================================= */

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


  /* =========================================
     HERO DESCRIPTION
  ========================================= */

  const descriptions = [
    "I build modern and responsive web applications.",
    "I create clean and user-friendly digital experiences.",
    "I develop interactive interfaces using modern technologies.",
    "I turn creative ideas into functional web solutions.",
    "I continuously learn and improve my software development skills.",
  ]

  const [descriptionIndex, setDescriptionIndex] = useState(0)
  const [descriptionVisible, setDescriptionVisible] = useState(true)

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setDescriptionVisible(false)
    }, 3200)

    const changeTextTimer = setTimeout(() => {
      setDescriptionIndex(
        (prev) => (prev + 1) % descriptions.length
      )

      setDescriptionVisible(true)
    }, 3900)

    return () => {
      clearTimeout(fadeOutTimer)
      clearTimeout(changeTextTimer)
    }
  }, [descriptionIndex])


  /* =========================================
     BOTTOM TAGLINES
  ========================================= */

  const taglines = [
    "Turning Ideas Into Digital Experiences",
    "Building With Creativity & Technology",
    "Designing. Developing. Creating.",
    "Bringing Ideas To Life Through Code",
  ]

  const [taglineIndex, setTaglineIndex] = useState(0)
  const [taglineVisible, setTaglineVisible] = useState(true)

  useEffect(() => {
    const fadeOut = setTimeout(() => {
      setTaglineVisible(false)
    }, 3500)

    const changeText = setTimeout(() => {
      setTaglineIndex(
        (prev) => (prev + 1) % taglines.length
      )

      setTaglineVisible(true)
    }, 4300)

    return () => {
      clearTimeout(fadeOut)
      clearTimeout(changeText)
    }
  }, [taglineIndex])


  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        px-5
        sm:px-6
        md:px-12
        lg:px-20
        xl:px-32
        pt-28
        sm:pt-24
        pb-24
        overflow-hidden
        bg-black
      "
    >

      {/* =========================================
          PARTICLES
      ========================================= */}

      <ParticlesBackground />


      {/* =========================================
          ANIMATED BACKGROUND
      ========================================= */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Top Left Glow */}

        <div
          className="
            absolute
            w-[280px]
            h-[280px]
            sm:w-[400px]
            sm:h-[400px]
            md:w-[500px]
            md:h-[500px]
            rounded-full
            bg-cyan-500/15
            blur-[100px]
            md:blur-[130px]
            animate-pulse
          "
          style={{
            top: "-120px",
            left: "-120px",
            animationDuration: "7s",
          }}
        ></div>


        {/* Bottom Right Glow */}

        <div
          className="
            absolute
            w-[280px]
            h-[280px]
            sm:w-[400px]
            sm:h-[400px]
            md:w-[500px]
            md:h-[500px]
            rounded-full
            bg-cyan-600/15
            blur-[100px]
            md:blur-[130px]
            animate-pulse
          "
          style={{
            bottom: "-150px",
            right: "-130px",
            animationDuration: "9s",
          }}
        ></div>


        {/* Center Glow */}

        <div
          className="
            absolute
            w-[200px]
            h-[200px]
            sm:w-[250px]
            sm:h-[250px]
            md:w-[300px]
            md:h-[300px]
            rounded-full
            bg-cyan-400/10
            blur-[80px]
            md:blur-[100px]
            animate-pulse
          "
          style={{
            top: "42%",
            left: "45%",
            animationDuration: "5s",
          }}
        ></div>


        {/* Small Floating Glow */}

        <div
          className="
            absolute
            w-24
            h-24
            sm:w-32
            sm:h-32
            rounded-full
            bg-cyan-400/10
            blur-3xl
            animate-pulse
          "
          style={{
            top: "18%",
            right: "12%",
            animationDuration: "4s",
          }}
        ></div>

      </div>


      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          w-full
          mx-auto
          grid
          grid-cols-1
          md:grid-cols-2
          gap-14
          sm:gap-16
          md:gap-10
          lg:gap-16
          items-center
        "
      >

        {/* =========================================
            LEFT CONTENT
        ========================================= */}

        <div className="max-w-2xl text-center md:text-left">

          {/* Hello */}

          <p
            className="
              text-cyan-400
              text-sm
              sm:text-base
              md:text-lg
              mb-3
              tracking-wide
            "
          >
            Hello, I'm
          </p>


          {/* NAME */}

          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              xl:text-7xl
              font-bold
              text-white
              mb-5
              leading-tight
              drop-shadow-[0_0_15px_rgba(34,211,238,0.25)]
              hover:drop-shadow-[0_0_30px_rgba(34,211,238,0.55)]
              transition-all
              duration-700
            "
          >
            Kavisha Nimanshi
          </h1>


          {/* =====================================
              ROLE
          ===================================== */}

          <div className="h-9 sm:h-10 mb-5">

            <h2
              className="
                text-lg
                sm:text-2xl
                md:text-3xl
                font-semibold
                text-gray-300
              "
            >

              <span className="text-cyan-400">
                {text}
              </span>

              <span className="text-cyan-400 animate-pulse ml-1">
                |
              </span>

            </h2>

          </div>


          {/* =====================================
              AUTO DESCRIPTION
          ===================================== */}

          <div
            className="
              max-w-xl
              mx-auto
              md:mx-0
              min-h-[78px]
              sm:min-h-[65px]
              mb-7
            "
          >

            <p
              className={`
                text-gray-400
                text-sm
                sm:text-base
                md:text-lg
                leading-7
                sm:leading-relaxed
                transition-all
                duration-1000
                ease-in-out
                ${
                  descriptionVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }
              `}
            >
              {descriptions[descriptionIndex]}
            </p>

          </div>


          {/* =====================================
              BUTTONS
          ===================================== */}

          <div
            className="
              flex
              flex-col
              sm:flex-row
              flex-wrap
              justify-center
              md:justify-start
              gap-3
              sm:gap-4
            "
          >

            {/* View Work */}

            <a
              href="/projects"
              className="
                group
                w-full
                sm:w-auto
                text-center
                px-6
                py-3
                rounded-full
                bg-cyan-400
                text-black
                font-semibold
                shadow-[0_0_20px_rgba(34,211,238,0.25)]
                hover:bg-cyan-300
                hover:scale-105
                hover:shadow-[0_0_35px_rgba(34,211,238,0.5)]
                transition-all
                duration-300
              "
            >
              View My Work

              <span
                className="
                  ml-2
                  inline-block
                  group-hover:translate-x-1
                  transition
                "
              >
                →
              </span>

            </a>


            {/* Contact */}

            <a
              href="/contact"
              className="
                w-full
                sm:w-auto
                text-center
                px-6
                py-3
                rounded-full
                border
                border-cyan-400
                text-cyan-400
                hover:bg-cyan-400
                hover:text-black
                hover:scale-105
                hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
                transition-all
                duration-300
              "
            >
              Contact Me
            </a>


            {/* CV */}

            <a
              href="/KAVISHA NIMANSHI.pdf"
              download
              className="
                w-full
                sm:w-auto
                text-center
                px-6
                py-3
                rounded-full
                border
                border-cyan-400/50
                text-cyan-400
                hover:bg-cyan-400
                hover:text-black
                hover:scale-105
                hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
                transition-all
                duration-300
              "
            >
              Download CV
            </a>

          </div>

        </div>


        {/* =========================================
            PROFILE IMAGE
        ========================================= */}

        <div
          className="
            flex
            justify-center
            md:justify-end
            mt-2
            md:mt-0
          "
        >

          <div className="relative flex items-center justify-center">

            {/* Outer Glow */}

            <div
              className="
                absolute
                w-[270px]
                h-[270px]
                sm:w-[320px]
                sm:h-[320px]
                md:w-[420px]
                md:h-[420px]
                rounded-full
                bg-cyan-400/10
                blur-3xl
                animate-pulse
              "
              style={{
                animationDuration: "5s",
              }}
            ></div>


            {/* Rotating Ring */}

            <div
              className="
                absolute
                w-[255px]
                h-[255px]
                sm:w-[305px]
                sm:h-[305px]
                md:w-[405px]
                md:h-[405px]
                rounded-full
                border
                border-cyan-400/25
                animate-spin
              "
              style={{
                animationDuration: "18s",
              }}
            ></div>


            {/* Second Ring */}

            <div
              className="
                absolute
                w-[275px]
                h-[275px]
                sm:w-[325px]
                sm:h-[325px]
                md:w-[425px]
                md:h-[425px]
                rounded-full
                border
                border-cyan-400/10
                animate-spin
              "
              style={{
                animationDuration: "26s",
                animationDirection: "reverse",
              }}
            ></div>


            {/* Profile */}

            <div
              className="
                relative
                w-56
                h-56
                sm:w-64
                sm:h-64
                md:w-80
                md:h-80
                lg:w-[350px]
                lg:h-[350px]
                rounded-full
                border-2
                border-cyan-400
                shadow-[0_0_50px_rgba(34,211,238,0.4)]
                overflow-hidden
                animate-float
                hover:scale-105
                transition-transform
                duration-700
              "
            >

              <img
                src={profile}
                alt="Kavisha Nimanshi"
                className="
                  w-full
                  h-full
                  object-cover
                  rounded-full
                "
              />

            </div>

          </div>

        </div>

      </div>


      {/* =========================================
          BOTTOM LIVE TAGLINE
      ========================================= */}

      <div
        className="
          absolute
          bottom-5
          sm:bottom-7
          left-1/2
          -translate-x-1/2
          w-full
          px-4
          sm:px-6
          text-center
          pointer-events-none
        "
      >

        <div className="flex items-center justify-center gap-2 sm:gap-3">

          {/* Left Line */}

          <span
            className="
              hidden
              xs:block
              sm:block
              w-8
              sm:w-12
              md:w-20
              h-px
              bg-gradient-to-r
              from-transparent
              to-cyan-400/40
            "
          ></span>


          {/* Tagline */}

          <p
            className={`
              text-[9px]
              sm:text-xs
              md:text-sm
              uppercase
              tracking-[0.15em]
              sm:tracking-[0.25em]
              font-medium
              whitespace-nowrap
              transition-all
              duration-1000
              ease-in-out
              ${
                taglineVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }
            `}
          >

            <span className="text-gray-500">
              {taglines[taglineIndex]
                .split(" ")
                .slice(0, 2)
                .join(" ")}
            </span>

            <span className="text-cyan-400 ml-1">
              {taglines[taglineIndex]
                .split(" ")
                .slice(2)
                .join(" ")}
            </span>

          </p>


          {/* Right Line */}

          <span
            className="
              hidden
              sm:block
              w-8
              sm:w-12
              md:w-20
              h-px
              bg-gradient-to-l
              from-transparent
              to-cyan-400/40
            "
          ></span>

        </div>

      </div>

    </section>
  )
}

export default Hero