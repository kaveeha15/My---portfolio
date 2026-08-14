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

      {/* Background Glow */}
      <div className="absolute top-20 left-[-180px] w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[150px]"></div>

      <div className="absolute bottom-20 right-[-180px] w-[450px] h-[450px] bg-cyan-400/10 rounded-full blur-[150px]"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-blue-400 text-sm uppercase tracking-[0.3em] mb-4">
            What I Do
          </p>

          <h1 className="text-4xl md:text-6xl font-bold">
            My{" "}
            <span className="text-blue-400">
              Services
            </span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-7">
            I create modern digital experiences and scalable web
            applications using technologies that bring ideas to life.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service) => (
            <div
              key={service.number}
              className="group relative border border-white/10 rounded-2xl bg-white/[0.03] p-7 overflow-hidden hover:border-blue-400/40 hover:-translate-y-2 transition-all duration-300"
            >

              {/* Hover Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Number */}
              <div className="flex items-center justify-between mb-8">

                <span className="text-sm text-blue-400 font-medium">
                  {service.number}
                </span>

                <span className="text-3xl text-blue-400/80 group-hover:text-blue-400 group-hover:scale-110 transition">
                  {service.icon}
                </span>

              </div>

              {/* Title */}
              <h2 className="text-xl md:text-2xl font-semibold mb-4 group-hover:text-blue-400 transition">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-7 mb-7">
                {service.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">

                {service.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="px-3 py-1.5 rounded-full text-xs text-gray-300 bg-white/[0.04] border border-white/10 group-hover:border-blue-400/20 transition"
                  >
                    {technology}
                  </span>
                ))}

              </div>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-blue-400 group-hover:w-full transition-all duration-500"></div>

            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">

          <p className="text-gray-400 text-sm mb-5">
            Have a project in mind?
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300"
          >
            Let's Work Together
            <span>→</span>
          </a>

        </div>

      </div>

    </section>
  )
}

export default Services