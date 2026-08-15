function Education() {
  const semesters = [
    {
      title: "Semester 01",
      modules: [
        "Visual Application Programming",
        "Web Design",
        "Computer and Network Systems",
        "Information Management and Information Systems",
        "ICT Project (Individual)",
        "Communication Skills",
      ],
    },

    {
      title: "Semester 02",
      modules: [
        "Fundamentals of Programming",
        "Software Development",
        "System Analysis and Design",
        "Data Communication and Computer Networks",
        "Principles of User Interface Design",
        "ICT Project (Group)",
        "Technical Writing",
        "Human Value & Professional Ethics (NGPA)",
      ],
    },

    {
      title: "Semester 03",
      modules: [
        "Object Oriented Programming",
        "Web Programming",
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Operating Systems",
        "Information and Computer Security",
        "Statistics for IT",
      ],
    },

    {
      title: "Semester 04",
      modules: [
        "Software Engineering",
        "Software Quality Assurance",
        "IT Project Management",
        "Professional World",
        "Programming Individual Project",
        "Elective 1 – Business Analysis Practice",
        "Elective 2 – Enterprise Architecture",
      ],
    },
  ];

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

        {/* ===================================== */}
        {/* SECTION HEADING */}
        {/* ===================================== */}

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
            My educational journey and academic foundation that shaped
            my interest in technology and software development.
          </p>

        </div>


        {/* ===================================== */}
        {/* HNDIT SECTION */}
        {/* ===================================== */}

        <div>

          {/* HNDIT Heading */}

          <div className="text-center mb-12">

            <p className="text-blue-400 text-sm uppercase tracking-[0.3em] mb-3">
              Higher Education
            </p>

            <h2 className="text-3xl md:text-5xl font-bold">
              Higher National Diploma in{" "}
              <span className="text-blue-400">
                Information Technology
              </span>
            </h2>

            <p className="text-blue-400 font-medium mt-5">
              SLIATE – Advanced Technological Institute, Galle
            </p>

            <p className="text-gray-500 text-sm mt-2">
              📍 Galle, Sri Lanka &nbsp; | &nbsp; 2023 – Present
            </p>

            <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-sm leading-7">
              Pursuing the Higher National Diploma in Information Technology
              with academic and practical exposure to programming, web
              development, databases, software engineering, networking,
              system analysis and modern IT practices.
            </p>

          </div>


          {/* ===================================== */}
          {/* SEMESTER MODULES */}
          {/* ===================================== */}

          <div className="grid md:grid-cols-2 gap-6">

            {semesters.map((semester) => (
              <div
                key={semester.title}
                className="border border-white/10 rounded-2xl bg-white/[0.03] p-7 hover:border-blue-400/40 hover:-translate-y-1 transition-all duration-300"
              >

                {/* Semester Title */}

                <div className="flex items-center gap-4 mb-6">

                  <div className="w-11 h-11 rounded-full bg-blue-400/10 border border-blue-400/20 flex items-center justify-center text-blue-400 font-semibold">
                    {semester.title.split(" ")[1]}
                  </div>

                  <h3 className="text-xl font-semibold">
                    {semester.title}
                  </h3>

                </div>


                {/* Modules */}

                <div className="space-y-3">

                  {semester.modules.map((module) => (
                    <div
                      key={module}
                      className="flex items-start gap-3 text-gray-400 text-sm"
                    >

                      <span className="text-blue-400 mt-1">
                        ◆
                      </span>

                      <span>
                        {module}
                      </span>

                    </div>
                  ))}

                </div>

              </div>
            ))}

          </div>

        </div>


        {/* ===================================== */}
        {/* INDUSTRIAL TRAINING */}
        {/* ===================================== */}

        <div className="mt-20">

          <div className="border border-blue-400/20 rounded-2xl bg-blue-400/[0.03] p-8 md:p-10 hover:border-blue-400/40 transition-all duration-300">

            <div className="text-center">

              <p className="text-blue-400 text-sm uppercase tracking-[0.25em] mb-3">
                Practical Experience
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                6-Month{" "}
                <span className="text-blue-400">
                  Industrial Training
                </span>
              </h2>

              <p className="text-gray-400 max-w-3xl mx-auto text-sm leading-7">
                Completed a six-month industrial training programme,
                gaining practical exposure to software development,
                teamwork, professional practices and real-world IT
                project environments.
              </p>

            </div>

          </div>

        </div>


        {/* ===================================== */}
        {/* A/L + O/L */}
        {/* ===================================== */}

        <div className="mt-28">

          {/* Heading */}

          <div className="text-center mb-12">

            <p className="text-blue-400 text-sm uppercase tracking-[0.3em] mb-3">
              School Education
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Academic{" "}
              <span className="text-blue-400">
                Foundation
              </span>
            </h2>

          </div>


          {/* Two Columns */}

          <div className="grid md:grid-cols-2 gap-6">


            {/* =============================== */}
            {/* A/L */}
            {/* =============================== */}

            <div className="border border-white/10 rounded-2xl bg-white/[0.03] p-8 hover:border-blue-400/40 hover:-translate-y-1 transition-all duration-300">

              <span className="inline-block px-4 py-2 rounded-full bg-blue-400/10 border border-blue-400/20 text-blue-400 text-sm mb-6">
                2021
              </span>

              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                G.C.E. Advanced Level
              </h2>

              <h3 className="text-blue-400 font-medium mb-3">
                MR/Mahinda Rajapaksha College
              </h3>

              <p className="text-gray-500 text-sm mb-6">
                📍 Matara, Sri Lanka
              </p>

              <p className="text-gray-400 text-sm leading-7 mb-6">
                Completed the G.C.E. Advanced Level Examination
                in the Technology Stream.
              </p>


              {/* A/L Subjects */}

              <div>

                <p className="text-gray-300 text-sm font-semibold mb-4">
                  Subjects
                </p>

                <div className="flex flex-wrap gap-2">

                  <span className="px-3 py-1.5 rounded-full text-xs bg-blue-400/10 text-blue-300 border border-blue-400/20">
                    ICT
                  </span>

                  <span className="px-3 py-1.5 rounded-full text-xs bg-blue-400/10 text-blue-300 border border-blue-400/20">
                    BST
                  </span>

                  <span className="px-3 py-1.5 rounded-full text-xs bg-blue-400/10 text-blue-300 border border-blue-400/20">
                    SFT
                  </span>

                </div>

              </div>

            </div>


            {/* =============================== */}
            {/* O/L */}
            {/* =============================== */}

            <div className="border border-white/10 rounded-2xl bg-white/[0.03] p-8 hover:border-blue-400/40 hover:-translate-y-1 transition-all duration-300">

              <span className="inline-block px-4 py-2 rounded-full bg-blue-400/10 border border-blue-400/20 text-blue-400 text-sm mb-6">
                2018
              </span>

              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                G.C.E. Ordinary Level
              </h2>

              <h3 className="text-blue-400 font-medium mb-3">
                MR/Godapitiya Central College
              </h3>

              <p className="text-gray-500 text-sm mb-6">
                📍 Akuressa, Sri Lanka
              </p>

              <p className="text-gray-400 text-sm leading-7">
                Completed the G.C.E. Ordinary Level Examination,
                building a strong academic foundation for further
                studies in technology and information technology.
              </p>

            </div>

          </div>

        </div>


        {/* ===================================== */}
        {/* BOTTOM HIGHLIGHT */}
        {/* ===================================== */}

        <div className="mt-20 border border-white/10 rounded-2xl bg-white/[0.03] p-8 text-center hover:border-blue-400/30 transition">

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
            My academic background has provided me with a strong foundation
            in technology and software development while practical training
            continues to strengthen my professional skills and industry
            experience.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Education;