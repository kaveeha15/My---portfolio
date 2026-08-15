function Services() {
  const services = [
    {
      number: "01",
      title: "Web Development",
      description:
        "Building modern, responsive and user-friendly websites using modern frontend technologies.",
      icon: "◈",
      technologies: ["React.js", "JavaScript", "Tailwind CSS"],
    },
    {
      number: "02",
      title: "Full Stack Development",
      description:
        "Developing complete web applications with frontend, backend, APIs and database integration.",
      icon: "⌘",
      technologies: ["React.js", "Node.js", "Express.js"],
    },
    {
      number: "03",
      title: "Frontend Development",
      description:
        "Creating interactive and responsive user interfaces with clean, reusable and scalable components.",
      icon: "◇",
      technologies: ["React.js", "JavaScript", "Tailwind CSS"],
    },
    {
      number: "04",
      title: "Backend Development",
      description:
        "Building reliable backend services and REST APIs with database integration and authentication.",
      icon: "⬡",
      technologies: ["Node.js", "Express.js", "MongoDB"],
    },
    {
      number: "05",
      title: "Firebase Development",
      description:
        "Integrating authentication, Firestore database and cloud storage for modern web applications.",
      icon: "✦",
      technologies: ["Firebase", "Firestore", "Storage"],
    },
    {
      number: "06",
      title: "UI & Web Design",
      description:
        "Designing clean, modern and visually appealing interfaces focused on usability and user experience.",
      icon: "✧",
      technologies: ["Figma", "Responsive UI", "UX"],
    },
  ]

  return (
    <section
      id="services"
      className="relative min-h-screen bg-black text-white px-6 pt-32 pb-24 overflow-hidden"
    >

      {/* ================= BACKGROUND GLOWS ================= */}

      <div className="absolute top-10 left-[-180px] w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[150px] animate-services-glow"></div>

      <div className="absolute bottom-10 right-[-180px] w-[450px] h-[450px] bg-cyan-400/10 rounded-full blur-[150px] animate-services-glow-2"></div>

      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-500/[0.03] rounded-full blur-[120px] animate-services-center-glow"></div>


      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative z-10 max-w-7xl mx-auto">


        {/* ================= HEADING ================= */}

        <div className="text-center mb-16">

          <p className="text-blue-400 text-sm uppercase tracking-[0.3em] mb-4">
            What I Do
          </p>


          {/* Continuously Animated Title */}

          <div className="overflow-hidden py-2">

            <h1 className="text-4xl md:text-6xl font-bold animate-services-title">

              My{" "}

              <span className="text-blue-400">
                Services
              </span>

            </h1>

          </div>


          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-7">
            I create modern digital experiences and scalable web
            applications using technologies that bring ideas to life.
          </p>

        </div>


        {/* ================= SERVICES GRID ================= */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, index) => (

            <div
              key={service.number}
              className="
                group
                relative
                border
                border-white/10
                rounded-2xl
                bg-white/[0.03]
                p-7
                overflow-hidden

                hover:border-blue-400/40
                hover:bg-blue-400/[0.025]
                hover:-translate-y-2

                transition-all
                duration-500
              "
            >

              {/* ================= CARD GLOW ================= */}

              <div
                className="
                  absolute
                  -top-24
                  -right-24
                  w-48
                  h-48
                  bg-blue-400/10
                  rounded-full
                  blur-3xl

                  opacity-0
                  group-hover:opacity-100

                  transition
                  duration-700
                "
              ></div>


              {/* ================= MOVING TOP LIGHT ================= */}

              <div className="absolute top-0 left-0 w-full h-px overflow-hidden">

                <div
                  className="
                    w-1/3
                    h-full
                    bg-gradient-to-r
                    from-transparent
                    via-blue-400
                    to-transparent
                    animate-service-line
                  "
                ></div>

              </div>


              {/* ================= TOP ROW ================= */}

              <div className="flex items-center justify-between mb-8">

                {/* Number */}

                <span className="text-sm text-blue-400 font-medium tracking-wider">
                  {service.number}
                </span>


                {/* Icon */}

                <div
                  className="
                    w-11
                    h-11
                    rounded-xl
                    border
                    border-blue-400/20
                    bg-blue-400/10
                    flex
                    items-center
                    justify-center

                    text-2xl
                    text-blue-400

                    group-hover:scale-110
                    group-hover:rotate-6

                    transition-all
                    duration-500
                  "
                >
                  {service.icon}
                </div>

              </div>


              {/* ================= TITLE ================= */}

              <h2
                className="
                  text-xl
                  md:text-2xl
                  font-semibold
                  mb-4

                  group-hover:text-blue-400

                  transition-colors
                  duration-500
                "
              >
                {service.title}
              </h2>


              {/* ================= DESCRIPTION ================= */}

              <p
                className="
                  text-gray-400
                  text-sm
                  leading-7
                  mb-7
                  animate-service-description
                "
                style={{
                  animationDelay: `${index * 0.7}s`,
                }}
              >
                {service.description}
              </p>


              {/* ================= TECHNOLOGIES ================= */}

              <div className="flex flex-wrap gap-2">

                {service.technologies.map((technology) => (

                  <span
                    key={technology}
                    className="
                      px-3
                      py-1.5
                      rounded-full
                      text-xs
                      text-gray-300
                      bg-white/[0.04]
                      border
                      border-white/10

                      group-hover:border-blue-400/30
                      group-hover:text-blue-300

                      transition-all
                      duration-300
                    "
                  >
                    {technology}
                  </span>

                ))}

              </div>


              {/* ================= BOTTOM LINE ================= */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  w-0
                  h-px

                  bg-gradient-to-r
                  from-transparent
                  via-blue-400
                  to-transparent

                  group-hover:w-full

                  transition-all
                  duration-700
                "
              ></div>

            </div>

          ))}

        </div>


        {/* ================= BOTTOM CTA ================= */}

        <div className="mt-20 text-center">

          <p className="text-gray-400 text-sm mb-5">
            Have a project in mind?
          </p>


          <a
            href="/contact"
            className="
              group
              inline-flex
              items-center
              gap-3

              px-7
              py-3
              rounded-full

              border
              border-blue-400/50

              text-blue-400

              hover:bg-blue-400
              hover:text-black

              hover:shadow-[0_0_30px_rgba(96,165,250,0.25)]

              transition-all
              duration-500
            "
          >

            Let's Work Together

            <span
              className="
                group-hover:translate-x-1
                transition-transform
                duration-300
              "
            >
              →
            </span>

          </a>

        </div>

      </div>

    </section>
  )
}

export default Services