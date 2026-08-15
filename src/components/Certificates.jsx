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
      className="
        relative
        min-h-screen
        bg-black
        text-white
        px-4
        sm:px-6
        pt-28
        sm:pt-32
        pb-20
        sm:pb-24
        overflow-hidden
      "
    >

      {/* =============================== */}
      {/* BACKGROUND GLOW */}
      {/* =============================== */}

      <div
        className="
          absolute
          top-20
          left-[-180px]
          w-[300px]
          h-[300px]
          sm:w-[450px]
          sm:h-[450px]
          bg-blue-500/10
          rounded-full
          blur-[120px]
          sm:blur-[150px]
          pointer-events-none
        "
      ></div>

      <div
        className="
          absolute
          bottom-10
          right-[-180px]
          w-[300px]
          h-[300px]
          sm:w-[450px]
          sm:h-[450px]
          bg-cyan-400/10
          rounded-full
          blur-[120px]
          sm:blur-[150px]
          pointer-events-none
        "
      ></div>


      {/* =============================== */}
      {/* MAIN CONTAINER */}
      {/* =============================== */}

      <div className="relative z-10 max-w-6xl mx-auto w-full">


        {/* =============================== */}
        {/* SECTION LABEL */}
        {/* =============================== */}

        <div className="text-center mb-8 sm:mb-10">

          <p className="
            text-blue-400
            text-[11px]
            sm:text-sm
            uppercase
            tracking-[0.2em]
            sm:tracking-[0.3em]
            mb-4
          ">
            Professional Development
          </p>

        </div>


        {/* =============================== */}
        {/* MOVING HEADING */}
        {/* =============================== */}

        <div className="
          relative
          w-full
          overflow-hidden
          mb-8
          sm:mb-10
          text-center
          py-2
        ">

          <h1 className="
            text-3xl
            sm:text-4xl
            md:text-6xl
            font-bold
            animate-certificate-heading
            leading-tight
          ">

            Certificates{" "}

            <span className="text-blue-400">
              & Courses
            </span>

          </h1>

        </div>


        {/* =============================== */}
        {/* DESCRIPTION */}
        {/* =============================== */}

        <div className="text-center mb-12 sm:mb-16">

          <p className="
            text-gray-400
            text-sm
            sm:text-base
            max-w-2xl
            mx-auto
            leading-7
            px-2
          ">
            Courses and professional learning experiences that have
            contributed to my technical, creative and software development
            skills.
          </p>

        </div>


        {/* =============================== */}
        {/* COURSES GRID */}
        {/* =============================== */}

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-5
          sm:gap-6
        ">

          {courses.map((course, index) => (

            <div
              key={course.title}
              className="
                group
                border
                border-white/10
                rounded-2xl
                bg-white/[0.03]
                p-5
                sm:p-7
                hover:border-blue-400/40
                hover:-translate-y-1
                sm:hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              {/* =============================== */}
              {/* TOP ROW */}
              {/* =============================== */}

              <div className="
                flex
                items-start
                justify-between
                gap-3
                sm:gap-4
                mb-5
                sm:mb-6
              ">

                {/* Number */}

                <div className="
                  w-10
                  h-10
                  sm:w-11
                  sm:h-11
                  rounded-full
                  bg-blue-400/10
                  border
                  border-blue-400/20
                  flex
                  items-center
                  justify-center
                  text-blue-400
                  text-sm
                  sm:text-base
                  font-semibold
                  shrink-0
                ">
                  0{index + 1}
                </div>


                {/* Status */}

                <span className="
                  px-2.5
                  sm:px-3
                  py-1
                  sm:py-1.5
                  rounded-full
                  text-[10px]
                  sm:text-xs
                  bg-green-400/10
                  text-green-300
                  border
                  border-green-400/20
                  whitespace-nowrap
                ">
                  {course.status}
                </span>

              </div>


              {/* =============================== */}
              {/* COURSE TITLE */}
              {/* =============================== */}

              <h2 className="
                text-xl
                sm:text-2xl
                font-bold
                mb-3
                leading-snug
                group-hover:text-blue-400
                transition-colors
                duration-300
              ">
                {course.title}
              </h2>


              {/* =============================== */}
              {/* INSTITUTION */}
              {/* =============================== */}

              <h3 className="
                text-blue-400
                text-sm
                sm:text-base
                font-medium
                mb-2
                leading-6
              ">
                {course.institution}
              </h3>


              {/* =============================== */}
              {/* PERIOD */}
              {/* =============================== */}

              <p className="
                text-gray-500
                text-xs
                sm:text-sm
                mb-5
              ">
                📅 {course.period}
              </p>


              {/* =============================== */}
              {/* DESCRIPTION */}
              {/* =============================== */}

              <p className="
                text-gray-400
                text-sm
                leading-7
              ">
                {course.description}
              </p>

            </div>

          ))}

        </div>


        {/* =============================== */}
        {/* BOTTOM HIGHLIGHT */}
        {/* =============================== */}

        <div className="
          mt-14
          sm:mt-20
          border
          border-white/10
          rounded-2xl
          bg-white/[0.03]
          p-6
          sm:p-8
          md:p-10
          text-center
          hover:border-blue-400/30
          transition
        ">

          <p className="
            text-blue-400
            text-[11px]
            sm:text-sm
            uppercase
            tracking-[0.2em]
            sm:tracking-[0.25em]
            mb-3
          ">
            Continuous Learning
          </p>


          <h2 className="
            text-xl
            sm:text-2xl
            md:text-3xl
            font-bold
            mb-4
            leading-snug
          ">

            Building Skills Through{" "}

            <span className="text-blue-400">
              Continuous Learning
            </span>

          </h2>


          <p className="
            text-gray-400
            text-sm
            leading-7
            max-w-2xl
            mx-auto
          ">
            I continuously develop my technical and creative skills through
            courses, practical projects and hands-on learning experiences.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Certificates;