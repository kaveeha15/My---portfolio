import { useEffect, useState } from "react";

function Education() {
  const [typedText, setTypedText] = useState("");

  const fullText = "Academic Journey";

  useEffect(() => {
    let index = 0;
    let typingInterval;
    let restartTimeout;

    const startTyping = () => {
      index = 0;
      setTypedText("");

      typingInterval = setInterval(() => {
        index++;

        setTypedText(fullText.slice(0, index));

        if (index === fullText.length) {
          clearInterval(typingInterval);

          restartTimeout = setTimeout(() => {
            startTyping();
          }, 2500);
        }
      }, 160);
    };

    startTyping();

    return () => {
      clearInterval(typingInterval);
      clearTimeout(restartTimeout);
    };
  }, []);

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
      className="
        relative
        min-h-screen
        bg-black
        text-white
        px-4
        sm:px-6
        md:px-10
        lg:px-16
        pt-28
        sm:pt-32
        pb-20
        sm:pb-24
        overflow-hidden
      "
    >

      {/* ===================================== */}
      {/* BACKGROUND GLOW */}
      {/* ===================================== */}

      <div
        className="
          absolute
          top-20
          right-[-180px]
          w-[350px]
          h-[350px]
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
          left-[-180px]
          w-[350px]
          h-[350px]
          sm:w-[450px]
          sm:h-[450px]
          bg-cyan-400/10
          rounded-full
          blur-[120px]
          sm:blur-[150px]
          pointer-events-none
        "
      ></div>


      {/* ===================================== */}
      {/* MAIN CONTAINER */}
      {/* ===================================== */}

      <div className="relative z-10 max-w-6xl mx-auto">


        {/* ===================================== */}
        {/* SECTION HEADING */}
        {/* ===================================== */}

        <div className="text-center mb-14 sm:mb-20">

          <p
            className="
              text-blue-400
              text-xs
              sm:text-sm
              uppercase
              tracking-[0.2em]
              sm:tracking-[0.3em]
              mb-4
            "
          >
            My Education
          </p>


          {/* Animated Title */}

          <h1
            className="
              text-3xl
              sm:text-4xl
              md:text-6xl
              font-bold
              min-h-[60px]
              sm:min-h-[72px]
              md:min-h-[90px]
              flex
              items-center
              justify-center
              leading-tight
              px-2
            "
          >

            <span className="education-typed-text">
              {typedText}
            </span>

          </h1>


          <p
            className="
              text-gray-400
              text-sm
              sm:text-base
              max-w-2xl
              mx-auto
              mt-5
              sm:mt-6
              leading-6
              sm:leading-7
              px-2
            "
          >
            My educational journey and academic foundation that shaped
            my interest in technology and software development.
          </p>

        </div>


        {/* ===================================== */}
        {/* HNDIT SECTION */}
        {/* ===================================== */}

        <div>


          {/* HNDIT Heading */}

          <div className="text-center mb-10 sm:mb-12">

            <p
              className="
                text-blue-400
                text-xs
                sm:text-sm
                uppercase
                tracking-[0.2em]
                sm:tracking-[0.3em]
                mb-3
              "
            >
              Higher Education
            </p>


            <h2
              className="
                text-2xl
                sm:text-3xl
                md:text-5xl
                font-bold
                leading-snug
              "
            >
              Higher National Diploma in{" "}

              <span className="text-blue-400">
                Information Technology
              </span>

            </h2>


            <p
              className="
                text-blue-400
                text-sm
                sm:text-base
                font-medium
                mt-4
                sm:mt-5
              "
            >
              SLIATE – Advanced Technological Institute, Galle
            </p>


            <p className="text-gray-500 text-xs sm:text-sm mt-2">
              📍 Galle, Sri Lanka &nbsp; | &nbsp; 2023 – Present
            </p>


            <p
              className="
                text-gray-400
                max-w-3xl
                mx-auto
                mt-5
                sm:mt-6
                text-sm
                leading-6
                sm:leading-7
                px-2
              "
            >
              Pursuing the Higher National Diploma in Information Technology
              with academic and practical exposure to programming, web
              development, databases, software engineering, networking,
              system analysis and modern IT practices.
            </p>

          </div>


          {/* ===================================== */}
          {/* SEMESTER MODULES */}
          {/* ===================================== */}

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-4
              sm:gap-6
            "
          >

            {semesters.map((semester) => (

              <div
                key={semester.title}
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
                  hover:bg-blue-400/[0.04]
                  transition-all
                  duration-500
                "
              >

                {/* Semester Title */}

                <div className="
                  flex
                  items-center
                  gap-3
                  sm:gap-4
                  mb-5
                  sm:mb-6
                ">

                  <div
                    className="
                      w-10
                      h-10
                      sm:w-11
                      sm:h-11
                      shrink-0
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
                      group-hover:bg-blue-400/20
                      group-hover:scale-110
                      transition-all
                      duration-300
                    "
                  >
                    {semester.title.split(" ")[1]}
                  </div>


                  <h3
                    className="
                      text-lg
                      sm:text-xl
                      font-semibold
                      group-hover:text-blue-400
                      transition-colors
                      duration-300
                    "
                  >
                    {semester.title}
                  </h3>

                </div>


                {/* Modules */}

                <div className="space-y-3">

                  {semester.modules.map((module) => (

                    <div
                      key={module}
                      className="
                        flex
                        items-start
                        gap-2.5
                        sm:gap-3
                        text-gray-400
                        text-xs
                        sm:text-sm
                        leading-5
                        sm:leading-6
                        hover:text-gray-200
                        transition-colors
                        duration-300
                      "
                    >

                      <span className="
                        text-blue-400
                        mt-1
                        shrink-0
                        text-[10px]
                        sm:text-xs
                      ">
                        ◆
                      </span>

                      <span className="min-w-0">
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

        <div className="mt-16 sm:mt-20">

          <div
            className="
              border
              border-blue-400/20
              rounded-2xl
              bg-blue-400/[0.03]
              p-6
              sm:p-8
              md:p-10
              hover:border-blue-400/40
              hover:-translate-y-1
              transition-all
              duration-500
            "
          >

            <div className="text-center">

              <p
                className="
                  text-blue-400
                  text-xs
                  sm:text-sm
                  uppercase
                  tracking-[0.2em]
                  sm:tracking-[0.25em]
                  mb-3
                "
              >
                Practical Experience
              </p>


              <h2
                className="
                  text-2xl
                  sm:text-3xl
                  font-bold
                  mb-4
                  leading-snug
                "
              >
                6-Month{" "}

                <span className="text-blue-400">
                  Industrial Training
                </span>
              </h2>


              <p
                className="
                  text-gray-400
                  max-w-3xl
                  mx-auto
                  text-sm
                  leading-6
                  sm:leading-7
                "
              >
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

        <div className="mt-20 sm:mt-28">


          {/* Heading */}

          <div className="text-center mb-10 sm:mb-12">

            <p
              className="
                text-blue-400
                text-xs
                sm:text-sm
                uppercase
                tracking-[0.2em]
                sm:tracking-[0.3em]
                mb-3
              "
            >
              School Education
            </p>


            <h2
              className="
                text-2xl
                sm:text-3xl
                md:text-4xl
                font-bold
              "
            >
              Academic{" "}

              <span className="text-blue-400">
                Foundation
              </span>

            </h2>

          </div>


          {/* Two Columns */}

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-4
              sm:gap-6
            "
          >


            {/* =============================== */}
            {/* A/L */}
            {/* =============================== */}

            <div
              className="
                group
                border
                border-white/10
                rounded-2xl
                bg-white/[0.03]
                p-6
                sm:p-8
                hover:border-blue-400/40
                hover:-translate-y-1
                sm:hover:-translate-y-2
                hover:bg-blue-400/[0.04]
                transition-all
                duration-500
              "
            >

              <span
                className="
                  inline-block
                  px-3
                  sm:px-4
                  py-2
                  rounded-full
                  bg-blue-400/10
                  border
                  border-blue-400/20
                  text-blue-400
                  text-xs
                  sm:text-sm
                  mb-5
                  sm:mb-6
                "
              >
                2021
              </span>


              <h2
                className="
                  text-xl
                  sm:text-2xl
                  md:text-3xl
                  font-bold
                  mb-3
                  sm:mb-4
                  leading-snug
                  group-hover:text-blue-400
                  transition-colors
                  duration-300
                "
              >
                G.C.E. Advanced Level
              </h2>


              <h3
                className="
                  text-blue-400
                  text-sm
                  sm:text-base
                  font-medium
                  mb-3
                "
              >
                MR/Mahinda Rajapaksha College
              </h3>


              <p className="text-gray-500 text-xs sm:text-sm mb-5 sm:mb-6">
                📍 Matara, Sri Lanka
              </p>


              <p
                className="
                  text-gray-400
                  text-sm
                  leading-6
                  sm:leading-7
                  mb-5
                  sm:mb-6
                "
              >
                Completed the G.C.E. Advanced Level Examination
                in the Technology Stream.
              </p>


              {/* A/L Subjects */}

              <div>

                <p className="
                  text-gray-300
                  text-sm
                  font-semibold
                  mb-4
                ">
                  Subjects
                </p>


                <div className="flex flex-wrap gap-2">

                  <span className="
                    px-3
                    py-1.5
                    rounded-full
                    text-xs
                    bg-blue-400/10
                    text-blue-300
                    border
                    border-blue-400/20
                  ">
                    ICT
                  </span>

                  <span className="
                    px-3
                    py-1.5
                    rounded-full
                    text-xs
                    bg-blue-400/10
                    text-blue-300
                    border
                    border-blue-400/20
                  ">
                    BST
                  </span>

                  <span className="
                    px-3
                    py-1.5
                    rounded-full
                    text-xs
                    bg-blue-400/10
                    text-blue-300
                    border
                    border-blue-400/20
                  ">
                    SFT
                  </span>

                </div>

              </div>

            </div>


            {/* =============================== */}
            {/* O/L */}
            {/* =============================== */}

            <div
              className="
                group
                border
                border-white/10
                rounded-2xl
                bg-white/[0.03]
                p-6
                sm:p-8
                hover:border-blue-400/40
                hover:-translate-y-1
                sm:hover:-translate-y-2
                hover:bg-blue-400/[0.04]
                transition-all
                duration-500
              "
            >

              <span
                className="
                  inline-block
                  px-3
                  sm:px-4
                  py-2
                  rounded-full
                  bg-blue-400/10
                  border
                  border-blue-400/20
                  text-blue-400
                  text-xs
                  sm:text-sm
                  mb-5
                  sm:mb-6
                "
              >
                2018
              </span>


              <h2
                className="
                  text-xl
                  sm:text-2xl
                  md:text-3xl
                  font-bold
                  mb-3
                  sm:mb-4
                  leading-snug
                  group-hover:text-blue-400
                  transition-colors
                  duration-300
                "
              >
                G.C.E. Ordinary Level
              </h2>


              <h3
                className="
                  text-blue-400
                  text-sm
                  sm:text-base
                  font-medium
                  mb-3
                "
              >
                MR/Godapitiya Central College
              </h3>


              <p className="text-gray-500 text-xs sm:text-sm mb-5 sm:mb-6">
                📍 Akuressa, Sri Lanka
              </p>


              <p
                className="
                  text-gray-400
                  text-sm
                  leading-6
                  sm:leading-7
                "
              >
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

        <div
          className="
            mt-16
            sm:mt-20
            border
            border-white/10
            rounded-2xl
            bg-white/[0.03]
            p-6
            sm:p-8
            text-center
            hover:border-blue-400/30
            hover:bg-blue-400/[0.02]
            transition-all
            duration-500
          "
        >

          <p
            className="
              text-blue-400
              text-xs
              sm:text-sm
              uppercase
              tracking-[0.2em]
              sm:tracking-[0.25em]
              mb-3
            "
          >
            Education & Growth
          </p>


          <h2
            className="
              text-xl
              sm:text-2xl
              md:text-3xl
              font-bold
              mb-4
              leading-snug
            "
          >
            Always Learning, Always{" "}

            <span className="text-blue-400">
              Improving
            </span>
          </h2>


          <p
            className="
              text-gray-400
              max-w-2xl
              mx-auto
              text-sm
              leading-6
              sm:leading-7
            "
          >
            My academic background has provided me with a strong foundation
            in technology and software development while practical training
            continues to strengthen my professional skills and industry
            experience.
          </p>

        </div>


        {/* Bottom Line */}

        <div className="
          mt-14
          sm:mt-20
          flex
          justify-center
        ">

          <div className="
            w-16
            sm:w-24
            h-px
            bg-gradient-to-r
            from-transparent
            via-blue-400
            to-transparent
          "></div>

        </div>

      </div>

    </section>
  );
}

export default Education;