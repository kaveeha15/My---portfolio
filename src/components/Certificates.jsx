function Certificates() {
  const courses = [
    {
      title: "CorelDRAW",
      institution: "ITD Institute SL (Pvt) Ltd",
      period: "2025",
      status: "Completed",
      description:
        "Completed a CorelDRAW course focused on graphic design, vector-based design and practical creative design skills.",
    },

    {
      title: "Adobe Illustrator",
      institution: "ITD Institute SL (Pvt) Ltd",
      period: "2025",
      status: "Completed",
      description:
        "Completed an Adobe Illustrator course focused on professional graphic design and vector illustration.",
    },

    {
      title: "Java Programming",
      institution: "SITEC, Matara",
      period: "05/2023 – 09/2023",
      status: "Completed",
      description:
        "Completed a Java Programming course covering programming fundamentals and object-oriented programming concepts.",
    },

    {
      title: "Web Development",
      institution: "SITEC, Matara",
      period: "05/2023 – 09/2023",
      status: "Completed",
      description:
        "Completed a Web Development course covering core web technologies and fundamental web development concepts.",
    },
  ];

  return (
    <section
      id="certificates"
      className="relative min-h-screen bg-black text-white px-6 pt-32 pb-24 overflow-hidden"
    >

      {/* =============================== */}
      {/* BACKGROUND GLOW */}
      {/* =============================== */}

      <div className="absolute top-20 left-[-180px] w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[150px]"></div>

      <div className="absolute bottom-10 right-[-180px] w-[450px] h-[450px] bg-cyan-400/10 rounded-full blur-[150px]"></div>


      {/* =============================== */}
      {/* MAIN CONTAINER */}
      {/* =============================== */}

      <div className="relative z-10 max-w-6xl mx-auto">


        {/* =============================== */}
        {/* SECTION LABEL */}
        {/* =============================== */}

        <div className="text-center mb-10">

          <p className="text-blue-400 text-sm uppercase tracking-[0.3em] mb-4">
            Professional Development
          </p>

        </div>

{/* Moving Heading */}

<div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden mb-10">

  <h1 className="text-4xl md:text-6xl font-bold whitespace-nowrap animate-certificate-heading">

    Certificates{" "}

    <span className="text-blue-400">
      & Courses
    </span>

  </h1>

</div>
        {/* =============================== */}
        {/* DESCRIPTION */}
        {/* =============================== */}

        <div className="text-center mb-16">

          <p className="text-gray-400 max-w-2xl mx-auto leading-7">
            Courses and professional learning experiences that have
            contributed to my technical, creative and software development
            skills.
          </p>

        </div>


        {/* =============================== */}
        {/* COURSES GRID */}
        {/* =============================== */}

        <div className="grid md:grid-cols-2 gap-6">

          {courses.map((course, index) => (

            <div
              key={course.title}
              className="
                group
                border
                border-white/10
                rounded-2xl
                bg-white/[0.03]
                p-7
                hover:border-blue-400/40
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              {/* =============================== */}
              {/* TOP ROW */}
              {/* =============================== */}

              <div className="flex items-start justify-between gap-4 mb-6">

                {/* Number */}

                <div className="w-11 h-11 rounded-full bg-blue-400/10 border border-blue-400/20 flex items-center justify-center text-blue-400 font-semibold shrink-0">
                  0{index + 1}
                </div>


                {/* Status */}

                <span className="px-3 py-1.5 rounded-full text-xs bg-green-400/10 text-green-300 border border-green-400/20">
                  {course.status}
                </span>

              </div>


              {/* =============================== */}
              {/* COURSE TITLE */}
              {/* =============================== */}

              <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {course.title}
              </h2>


              {/* =============================== */}
              {/* INSTITUTION */}
              {/* =============================== */}

              <h3 className="text-blue-400 font-medium mb-2">
                {course.institution}
              </h3>


              {/* =============================== */}
              {/* PERIOD */}
              {/* =============================== */}

              <p className="text-gray-500 text-sm mb-5">
                📅 {course.period}
              </p>


              {/* =============================== */}
              {/* DESCRIPTION */}
              {/* =============================== */}

              <p className="text-gray-400 text-sm leading-7">
                {course.description}
              </p>

            </div>

          ))}

        </div>


        {/* =============================== */}
        {/* BOTTOM HIGHLIGHT */}
        {/* =============================== */}

        <div className="mt-20 border border-white/10 rounded-2xl bg-white/[0.03] p-8 md:p-10 text-center hover:border-blue-400/30 transition">

          <p className="text-blue-400 text-sm uppercase tracking-[0.25em] mb-3">
            Continuous Learning
          </p>


          <h2 className="text-2xl md:text-3xl font-bold mb-4">

            Building Skills Through{" "}

            <span className="text-blue-400">
              Continuous Learning
            </span>

          </h2>


          <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-7">
            I continuously develop my technical and creative skills through
            courses, practical projects and hands-on learning experiences.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Certificates;