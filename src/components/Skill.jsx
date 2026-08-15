import {
  Code2,
  Palette,
  Braces,
  Atom,
  Wind,
  Server,
  Database,
  Flame,
  GitBranch,
} from "lucide-react";

function Skills() {
  const skills = [
    {
      name: "HTML",
      level: "Advanced",
      percentage: "90%",
      icon: Code2,
    },
    {
      name: "CSS",
      level: "Advanced",
      percentage: "85%",
      icon: Palette,
    },
    {
      name: "JavaScript",
      level: "Intermediate",
      percentage: "80%",
      icon: Braces,
    },
    {
      name: "React.js",
      level: "Intermediate",
      percentage: "80%",
      icon: Atom,
    },
    {
      name: "Tailwind CSS",
      level: "Intermediate",
      percentage: "85%",
      icon: Wind,
    },
    {
      name: "Node.js",
      level: "Intermediate",
      percentage: "75%",
      icon: Server,
    },
    {
      name: "Express.js",
      level: "Intermediate",
      percentage: "75%",
      icon: Server,
    },
    {
      name: "Firebase",
      level: "Intermediate",
      percentage: "75%",
      icon: Flame,
    },
    {
      name: "MySQL",
      level: "Intermediate",
      percentage: "75%",
      icon: Database,
    },
    {
      name: "Git & GitHub",
      level: "Intermediate",
      percentage: "80%",
      icon: GitBranch,
    },
  ];

  return (
    <section
      id="skills"
      className="
        relative
        min-h-screen
        bg-black
        text-white
        px-4
        sm:px-6
        md:px-10
        lg:px-16
        xl:px-20
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
          w-72
          h-72
          sm:w-96
          sm:h-96
          bg-blue-500/10
          rounded-full
          blur-[120px]
          sm:blur-[140px]
          pointer-events-none
        "
      ></div>

      <div
        className="
          absolute
          bottom-10
          right-[-180px]
          w-72
          h-72
          sm:w-96
          sm:h-96
          bg-cyan-400/10
          rounded-full
          blur-[120px]
          sm:blur-[140px]
          pointer-events-none
        "
      ></div>

      <div
        className="
          absolute
          top-1/2
          right-[-200px]
          w-64
          h-64
          sm:w-80
          sm:h-80
          bg-blue-500/[0.04]
          rounded-full
          blur-[100px]
          sm:blur-[120px]
          pointer-events-none
        "
      ></div>


      {/* =============================== */}
      {/* MAIN CONTENT */}
      {/* =============================== */}

      <div className="relative z-10 max-w-7xl mx-auto">


        {/* =============================== */}
        {/* HEADING */}
        {/* =============================== */}

        <div className="text-center mb-12 sm:mb-16">

          <p
            className="
              text-blue-400
              text-xs
              sm:text-sm
              uppercase
              tracking-[0.25em]
              sm:tracking-[0.3em]
              mb-3
            "
          >
            My Skills
          </p>


          {/* Moving Heading */}

          <div className="overflow-hidden w-full py-2">

            <h1
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                font-bold
                leading-tight
                animate-skills-heading
              "
            >
              Technologies I{" "}

              <span className="text-blue-400">
                Use
              </span>

            </h1>

          </div>


          <p
            className="
              text-gray-400
              text-sm
              sm:text-base
              max-w-2xl
              mx-auto
              mt-5
              sm:mt-6
              leading-7
              px-2
              sm:px-0
            "
          >
            I work with modern technologies to build responsive,
            interactive and user-friendly web applications.
          </p>

        </div>


        {/* =============================== */}
        {/* SKILLS GRID */}
        {/* =============================== */}

        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            gap-3
            sm:gap-4
            md:gap-5
          "
        >

          {skills.map((skill) => (

            <div
              key={skill.name}
              className="
                group
                border
                border-white/10
                rounded-xl
                sm:rounded-2xl
                p-4
                sm:p-5
                md:p-6
                bg-white/[0.03]
                hover:border-blue-400/50
                hover:bg-blue-400/[0.05]
                transition-all
                duration-300
                hover:-translate-y-1
                sm:hover:-translate-y-2
              "
            >

              {/* =============================== */}
              {/* ICON */}
              {/* =============================== */}

              <div
                className="
                  w-11
                  h-11
                  sm:w-12
                  sm:h-12
                  md:w-14
                  md:h-14
                  mx-auto
                  mb-3
                  sm:mb-4
                  md:mb-5
                  rounded-lg
                  sm:rounded-xl
                  border
                  border-blue-400/20
                  bg-blue-400/10
                  flex
                  items-center
                  justify-center
                  group-hover:scale-110
                  transition
                  duration-300
                "
              >

                <skill.icon
                  size={22}
                  className="
                    text-blue-400
                    sm:hidden
                    group-hover:scale-110
                    transition
                    duration-300
                  "
                />

                <skill.icon
                  size={26}
                  className="
                    hidden
                    sm:block
                    md:hidden
                    text-blue-400
                    group-hover:scale-110
                    transition
                    duration-300
                  "
                />

                <skill.icon
                  size={28}
                  className="
                    hidden
                    md:block
                    text-blue-400
                    group-hover:scale-110
                    transition
                    duration-300
                  "
                />

              </div>


              {/* =============================== */}
              {/* SKILL NAME */}
              {/* =============================== */}

              <h3
                className="
                  text-center
                  text-gray-200
                  font-semibold
                  text-sm
                  sm:text-base
                  truncate
                "
              >
                {skill.name}
              </h3>


              {/* =============================== */}
              {/* LEVEL */}
              {/* =============================== */}

              <p
                className="
                  text-center
                  text-gray-500
                  text-xs
                  sm:text-sm
                  mt-1.5
                  sm:mt-2
                "
              >
                {skill.level}
              </p>


              {/* =============================== */}
              {/* PROGRESS BAR */}
              {/* =============================== */}

              <div className="mt-3 sm:mt-4">

                <div
                  className="
                    w-full
                    h-1
                    sm:h-1.5
                    bg-white/10
                    rounded-full
                    overflow-hidden
                  "
                >

                  <div
                    className="
                      h-full
                      bg-blue-400
                      rounded-full
                      transition-all
                      duration-1000
                    "
                    style={{
                      width: skill.percentage,
                    }}
                  ></div>

                </div>


                <p
                  className="
                    text-right
                    text-gray-500
                    text-[10px]
                    sm:text-xs
                    mt-1.5
                    sm:mt-2
                  "
                >
                  {skill.percentage}
                </p>

              </div>

            </div>

          ))}

        </div>


        {/* =============================== */}
        {/* BOTTOM TEXT */}
        {/* =============================== */}

        <div
          className="
            text-center
            mt-12
            sm:mt-16
            px-4
          "
        >

          <p className="text-gray-500 text-xs sm:text-sm leading-6">
            Continuously learning and improving my technical skills.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Skills;