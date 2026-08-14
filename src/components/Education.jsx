function Education() {
  const education = [
    {
      year: "2023 – Present",
      title: "Higher National Diploma in Information Technology",
      institution: "SLIATE",
      location: "Galle, Sri Lanka",
      description:
        "Currently pursuing the Higher National Diploma in Information Technology with a focus on software development, web technologies, databases and modern IT practices.",
      tags: [
        "Software Development",
        "Web Development",
        "Database",
        "Information Technology",
      ],
    },

    {
      year: "2021",
      title: "G.C.E. Advanced Level Examination",
      institution: "MR/Mahinda Rajapaksha College",
      location: "Matara, Sri Lanka",
      description:
        "Completed the G.C.E. Advanced Level Examination in the Technology Stream with ICT, BST and SFT.",
    },

    {
      year: "2018",
      title: "G.C.E. Ordinary Level Examination",
      institution: "MR/Godapitiya Central College",
      location: "Akuressa, Sri Lanka",
      description:
        "Completed the G.C.E. Ordinary Level Examination in the Technology Stream.",
    },
  ]

  return (
    <section
      id="education"
      className="relative min-h-screen bg-black text-white px-6 pt-32 pb-24 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-20 right-[-180px] w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[150px]"></div>

      <div className="absolute bottom-10 left-[-180px] w-[450px] h-[450px] bg-cyan-400/10 rounded-full blur-[150px]"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-20">

          <p className="text-blue-400 text-sm uppercase tracking-[0.3em] mb-4">
            My Education
          </p>

          <h1 className="text-4xl md:text-6xl font-bold">
            Academic{" "}
            <span className="text-blue-400">
              Journey
            </span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-7">
            My educational journey and the foundation that shaped
            my interest in technology and software development.
          </p>

        </div>

        {/* Education Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400/70 via-white/10 to-transparent md:-translate-x-1/2"></div>

          <div className="space-y-16">

            {education.map((item, index) => {

              const isLeft = index % 2 === 0

              return (
                <div
                  key={item.title}
                  className="relative grid md:grid-cols-2 gap-8"
                >

                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 top-8 w-4 h-4 rounded-full bg-blue-400 border-4 border-black shadow-[0_0_18px_rgba(96,165,250,0.6)] md:-translate-x-1/2 z-10"></div>

                  {/* LEFT SIDE */}
                  <div
                    className={`pl-12 ${
                      isLeft
                        ? "md:pl-0 md:pr-12"
                        : "hidden md:flex items-center justify-end md:pr-12"
                    }`}
                  >

                    {isLeft ? (
                      <div className="w-full">

                        {/* Year */}
                        <span className="inline-block px-4 py-2 rounded-full bg-blue-400/10 border border-blue-400/20 text-blue-400 text-sm mb-5">
                          {item.year}
                        </span>

                        {/* Title */}
                        <h2 className="text-2xl md:text-3xl font-bold mb-3">
                          {item.title}
                        </h2>

                        {/* Institution */}
                        <h3 className="text-blue-400 font-medium mb-2">
                          {item.institution}
                        </h3>

                        {/* Location */}
                        <p className="text-gray-500 text-sm mb-5">
                          📍 {item.location}
                        </p>

                        {/* Description */}
                        <p className="text-gray-400 text-sm leading-7">
                          {item.description}
                        </p>

                      </div>
                    ) : (
                      /* Focus Areas for HNDIT */
                      item.tags && (
                        <div className="w-full max-w-sm border border-white/10 rounded-2xl bg-white/[0.03] p-6 hover:border-blue-400/40 hover:-translate-y-1 transition-all duration-300">

                          <p className="text-gray-300 text-sm font-semibold mb-4">
                            Focus Areas
                          </p>

                          <div className="flex flex-wrap gap-2">

                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1.5 rounded-full text-xs bg-blue-400/10 text-blue-300 border border-blue-400/20"
                              >
                                {tag}
                              </span>
                            ))}

                          </div>

                        </div>
                      )
                    )}

                  </div>

                  {/* RIGHT SIDE */}
                  <div
                    className={`pl-12 ${
                      isLeft
                        ? "hidden md:flex items-center justify-start md:pl-12"
                        : "md:pl-12"
                    }`}
                  >

                    {isLeft ? (
                      /* Focus Areas for HNDIT */
                      item.tags && (
                        <div className="w-full max-w-sm border border-white/10 rounded-2xl bg-white/[0.03] p-6 hover:border-blue-400/40 hover:-translate-y-1 transition-all duration-300">

                          <p className="text-gray-300 text-sm font-semibold mb-4">
                            Focus Areas
                          </p>

                          <div className="flex flex-wrap gap-2">

                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1.5 rounded-full text-xs bg-blue-400/10 text-blue-300 border border-blue-400/20"
                              >
                                {tag}
                              </span>
                            ))}

                          </div>

                        </div>
                      )
                    ) : (
                      <div className="w-full">

                        {/* Year */}
                        <span className="inline-block px-4 py-2 rounded-full bg-blue-400/10 border border-blue-400/20 text-blue-400 text-sm mb-5">
                          {item.year}
                        </span>

                        {/* Title */}
                        <h2 className="text-2xl md:text-3xl font-bold mb-3">
                          {item.title}
                        </h2>

                        {/* Institution */}
                        <h3 className="text-blue-400 font-medium mb-2">
                          {item.institution}
                        </h3>

                        {/* Location */}
                        <p className="text-gray-500 text-sm mb-5">
                          📍 {item.location}
                        </p>

                        {/* Description */}
                        <p className="text-gray-400 text-sm leading-7">
                          {item.description}
                        </p>

                      </div>
                    )}

                  </div>

                </div>
              )
            })}

          </div>

        </div>

        {/* Bottom Highlight */}
        <div className="mt-24 border border-white/10 rounded-2xl bg-white/[0.03] p-8 text-center hover:border-blue-400/30 transition">

          <p className="text-blue-400 text-sm uppercase tracking-[0.25em] mb-3">
            Education & Growth
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Always Learning, Always{" "}
            <span className="text-blue-400">
              Improving
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-7">
            My academic background has provided me with a strong
            foundation in technology and continues to support my
            journey as a software developer.
          </p>

        </div>

      </div>

    </section>
  )
}

export default Education