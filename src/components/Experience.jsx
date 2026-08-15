function Experience() {
  const technologies = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "REST API",
    "Git",
    "GitHub",
  ];

  const responsibilities = [
    "Developed responsive and user-friendly web applications using React.js.",
    "Built backend services and REST APIs using Node.js and Express.js.",
    "Worked with MongoDB for database design and data management.",
    "Integrated frontend applications with backend REST APIs.",
    "Implemented authentication and application functionality.",
    "Worked with reusable and modular components for scalable applications.",
    "Used Git and GitHub for version control and project collaboration.",
  ];

  const highlights = [
    {
      number: "01",
      title: "Frontend Development",
      text: "Built responsive interfaces using React.js and modern UI practices.",
    },
    {
      number: "02",
      title: "Backend Development",
      text: "Developed APIs and backend functionality using Node.js and Express.js.",
    },
    {
      number: "03",
      title: "Database Management",
      text: "Worked with MongoDB for storing and managing application data.",
    },
  ];

  const skillsGained = [
    "Full Stack Development",
    "REST API Development",
    "Database Management",
    "Authentication",
    "Git & GitHub",
    "Problem Solving",
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen bg-black text-white px-6 pt-32 pb-24 overflow-hidden"
    >
      {/* ================================= */}
      {/* BACKGROUND GLOW */}
      {/* ================================= */}

      <div className="absolute top-20 left-[-180px] w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[150px] animate-about-glow"></div>

      <div className="absolute bottom-10 right-[-180px] w-[450px] h-[450px] bg-cyan-400/10 rounded-full blur-[150px] animate-about-glow-2"></div>

      {/* Small Background Light */}
      <div className="absolute top-[35%] right-[15%] w-32 h-32 bg-blue-400/5 rounded-full blur-[80px]"></div>

      {/* ================================= */}
      {/* MAIN CONTAINER */}
      {/* ================================= */}

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ================================= */}
        {/* HEADING */}
        {/* ================================= */}

        <div className="text-center mb-20">

          <p className="text-blue-400 text-sm uppercase tracking-[0.3em] mb-4">
            My Experience
          </p>

          {/* Professional Journey */}

          <div className="relative overflow-hidden py-2">

            <h1 className="text-4xl md:text-6xl font-bold animate-journey-title">

              My Professional{" "}

              <span className="text-blue-400 animate-journey-glow">
                Journey
              </span>

            </h1>

          </div>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-7">
            A six-month industrial training experience that helped me
            strengthen my software engineering knowledge and gain
            practical full stack development experience.
          </p>

        </div>

        {/* ================================= */}
        {/* MAIN EXPERIENCE */}
        {/* ================================= */}

        <div className="relative">

          {/* Timeline */}

          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400/70 via-blue-400/20 to-transparent md:-translate-x-1/2"></div>

          {/* Timeline Dot */}

          <div className="absolute left-4 md:left-1/2 top-10 w-5 h-5 rounded-full bg-blue-400 border-4 border-black shadow-[0_0_20px_rgba(96,165,250,0.6)] md:-translate-x-1/2 z-20 animate-pulse"></div>

          <div className="grid md:grid-cols-2 gap-10">

            {/* ================================= */}
            {/* LEFT SIDE */}
            {/* ================================= */}

            <div className="pl-12 md:pl-0 md:pr-10">

              {/* Duration */}

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/20 bg-blue-400/10 text-blue-400 text-sm mb-6">

                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>

                6 Months

              </div>

              {/* Role */}

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">

                Full Stack Software
                <br />

                <span className="text-gray-300">
                  Engineering Intern
                </span>

              </h2>

              {/* Company */}

              <h3 className="text-xl text-blue-400 font-medium mb-3">
                AFFIXTRO (PVT) LTD
              </h3>

              <p className="text-gray-500 text-sm mb-6">
                Industrial Training
              </p>

              {/* Summary Card */}

              <div className="group border border-white/10 rounded-2xl bg-white/[0.03] p-6 mb-6 hover:border-blue-400/40 hover:bg-blue-400/[0.03] hover:-translate-y-1 transition-all duration-300">

                <p className="text-gray-400 text-sm leading-7">
                  During my industrial training, I worked on practical
                  software development tasks and gained hands-on
                  experience across frontend, backend and database
                  technologies.
                </p>

              </div>

              {/* Highlights */}

              <div className="space-y-4">

                {highlights.map((item) => (

                  <div
                    key={item.number}
                    className="group flex gap-4 border border-white/10 rounded-xl p-4 bg-white/[0.02] hover:border-blue-400/30 hover:bg-blue-400/[0.03] hover:translate-x-1 transition-all duration-300"
                  >

                    <span className="text-blue-400 font-semibold text-sm">
                      {item.number}
                    </span>

                    <div>

                      <h4 className="text-gray-200 text-sm font-semibold mb-1 group-hover:text-blue-400 transition">
                        {item.title}
                      </h4>

                      <p className="text-gray-500 text-xs leading-5">
                        {item.text}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>


            {/* ================================= */}
            {/* RIGHT SIDE */}
            {/* ================================= */}

            <div className="pl-12 md:pl-10">

              <div className="group border border-white/10 rounded-2xl bg-white/[0.03] backdrop-blur-sm p-7 hover:border-blue-400/40 hover:bg-blue-400/[0.03] transition-all duration-300">

                {/* Responsibilities */}

                <div>

                  <div className="flex items-center gap-3 mb-6">

                    <div className="w-10 h-10 rounded-lg bg-blue-400/10 border border-blue-400/20 flex items-center justify-center group-hover:scale-110 transition duration-300">

                      <span className="text-blue-400 text-lg">
                        ✦
                      </span>

                    </div>

                    <h3 className="text-xl font-semibold">
                      Responsibilities
                    </h3>

                  </div>

                  <div className="space-y-4">

                    {responsibilities.map((item, index) => (

                      <div
                        key={index}
                        className="flex gap-3 text-gray-400 text-sm leading-6"
                      >

                        <span className="text-blue-400 mt-1">
                          ▹
                        </span>

                        <p className="hover:text-gray-300 transition">
                          {item}
                        </p>

                      </div>

                    ))}

                  </div>

                </div>


                {/* Divider */}

                <div className="border-t border-white/10 my-8"></div>


                {/* Technologies */}

                <div>

                  <h3 className="text-gray-200 font-semibold mb-5">
                    Technologies Used
                  </h3>

                  <div className="flex flex-wrap gap-2">

                    {technologies.map((technology) => (

                      <span
                        key={technology}
                        className="px-3 py-1.5 rounded-full text-xs bg-blue-400/10 text-blue-300 border border-blue-400/20 hover:bg-blue-400/20 hover:border-blue-400/40 hover:-translate-y-0.5 transition-all duration-300"
                      >
                        {technology}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* ================================= */}
        {/* SKILLS GAINED */}
        {/* ================================= */}

        <div className="mt-24">

          <div className="text-center mb-10">

            <p className="text-blue-400 text-sm uppercase tracking-[0.25em] mb-3">
              What I Gained
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">

              Skills &{" "}

              <span className="text-blue-400">
                Experience
              </span>

            </h2>

          </div>


          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

            {skillsGained.map((skill) => (

              <div
                key={skill}
                className="group border border-white/10 rounded-xl p-5 text-center bg-white/[0.03] hover:border-blue-400/40 hover:bg-blue-400/[0.04] hover:-translate-y-2 transition-all duration-300"
              >

                <p className="text-sm text-gray-300 group-hover:text-blue-300 transition">
                  {skill}
                </p>

              </div>

            ))}

          </div>

        </div>


        {/* ================================= */}
        {/* BOTTOM LINE */}
        {/* ================================= */}

        <div className="mt-20 flex justify-center">

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>

        </div>

      </div>

    </section>
  );
}

export default Experience;