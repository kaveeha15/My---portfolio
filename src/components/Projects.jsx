import littleLoom from "../assets/little-loom.png";
import tripPlanner from "../assets/trip-planner.png";
import macClone from "../assets/mac-clone.png";

function Projects() {
  const projects = [
    {
      title: "Little Loom",
      subtitle: "E-Commerce Web Application",
      image: littleLoom,

      github: "https://github.com/kaveeha15/Little-Loom",
      demo: null,

      description:
        "A full-featured e-commerce platform for kids and baby products developed during industrial training. The application includes authentication, product management, cart, wishlist and order processing features.",

      technologies: [
        "React",
        "Firebase",
        "GitHub",
      ],

      features: [
        "User Authentication",
        "Real-time Database",
        "Product Catalog",
        "Cart Management",
        "Wishlist",
        "Order Processing",
        "Admin Dashboard",
      ],
    },

    {
      title: "Trip Planner",
      subtitle: "Travel Planning Web Application",
      image: tripPlanner,

      github: "https://github.com/kaveeha15/trip-planner",
      demo: null,

      description:
        "A travel planning web application designed to help users plan and organize their trips with authentication, real-time data storage and interactive Google Maps features.",

      technologies: [
        "React",
        "Tailwind CSS",
        "Firebase",
        "Google Maps API",
      ],

      features: [
        "User Authentication",
        "Real-time Data Storage",
        "Destination Suggestions",
        "Interactive Maps",
        "Trip Planning",
      ],
    },

    {
      title: "Mac Clone Showcase",
      subtitle: "3D Interactive Product Showcase",
      image: macClone,

      github: "https://github.com/kaveeha15/mac-clone",
      demo: null,

      description:
        "A recreation of an Apple Mac product showcase page using modern web technologies, featuring immersive 3D visuals and smooth scroll-based animations.",

      technologies: [
        "React",
        "Three.js",
        "GSAP",
      ],

      features: [
        "3D Product Experience",
        "Scroll Animations",
        "Interactive UI",
        "GSAP Animations",
        "Three.js",
      ],
    },
  ];

  return (
    <section
      id="projects"
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

      {/* ================================= */}
      {/* BACKGROUND EFFECTS */}
      {/* ================================= */}

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

      <div
        className="
          absolute
          top-[45%]
          right-[10%]
          sm:right-[20%]
          w-24
          h-24
          sm:w-32
          sm:h-32
          bg-blue-400/5
          rounded-full
          blur-[70px]
          sm:blur-[90px]
          pointer-events-none
        "
      ></div>


      {/* ================================= */}
      {/* MAIN CONTENT */}
      {/* ================================= */}

      <div className="relative z-10 max-w-7xl mx-auto w-full">


        {/* ================================= */}
        {/* SECTION HEADING */}
        {/* ================================= */}

        <div className="text-center mb-12 sm:mb-16">

          <p className="
            text-blue-400
            text-[11px]
            sm:text-sm
            uppercase
            tracking-[0.2em]
            sm:tracking-[0.3em]
            mb-4
          ">
            My Projects
          </p>


          {/* Animated Title */}

          <div className="
            relative
            overflow-hidden
            py-2
            w-full
          ">

            <h1 className="
              text-3xl
              sm:text-4xl
              md:text-6xl
              font-bold
              animate-project-title
              leading-tight
            ">

              Things I've{" "}

              <span className="text-blue-400 animate-project-glow">
                Built
              </span>

            </h1>

          </div>


          <p className="
            text-gray-400
            text-sm
            sm:text-base
            max-w-2xl
            mx-auto
            mt-5
            sm:mt-6
            leading-7
            px-2
          ">
            A collection of projects I've developed using modern
            technologies and development practices.
          </p>

        </div>


        {/* ================================= */}
        {/* PROJECTS GRID */}
        {/* ================================= */}

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-5
          sm:gap-7
        ">

          {projects.map((project, index) => (

            <div
              key={project.title}
              className="
                group
                relative
                border
                border-white/10
                rounded-2xl
                bg-white/[0.03]
                backdrop-blur-sm
                overflow-hidden
                hover:border-blue-400/50
                hover:-translate-y-1
                sm:hover:-translate-y-2
                hover:shadow-[0_15px_50px_rgba(59,130,246,0.12)]
                transition-all
                duration-500
              "
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >


              {/* ================================= */}
              {/* IMAGE */}
              {/* ================================= */}

              <div className="
                relative
                h-48
                sm:h-52
                overflow-hidden
                bg-white/[0.03]
              ">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-105
                    sm:group-hover:scale-110
                    transition-transform
                    duration-700
                  "
                />


                {/* Image Overlay */}

                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-transparent
                  to-transparent
                  opacity-70
                "></div>


                {/* Project Number */}

                <div className="
                  absolute
                  top-3
                  left-3
                  sm:top-4
                  sm:left-4
                ">

                  <span className="
                    px-2.5
                    py-1
                    sm:px-3
                    sm:py-1.5
                    rounded-full
                    bg-black/60
                    backdrop-blur-md
                    border
                    border-white/10
                    text-[10px]
                    sm:text-xs
                    text-gray-300
                    whitespace-nowrap
                  ">
                    Project {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

              </div>


              {/* ================================= */}
              {/* PROJECT CONTENT */}
              {/* ================================= */}

              <div className="
                p-5
                sm:p-6
              ">


                {/* Subtitle */}

                <p className="
                  text-blue-400
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-[0.12em]
                  sm:tracking-[0.15em]
                  mb-2
                  leading-5
                ">
                  {project.subtitle}
                </p>


                {/* Title */}

                <h2 className="
                  text-xl
                  sm:text-2xl
                  font-semibold
                  text-white
                  mb-4
                  leading-snug
                  group-hover:text-blue-400
                  transition-colors
                  duration-300
                ">
                  {project.title}
                </h2>


                {/* Description */}

                <p className="
                  text-gray-400
                  text-sm
                  text-justify
                  leading-7
                  mb-6
                ">
                  {project.description}
                </p>


                {/* ================================= */}
                {/* TECHNOLOGIES */}
                {/* ================================= */}

                <div className="
                  flex
                  flex-wrap
                  gap-2
                  mb-6
                ">

                  {project.technologies.map((technology) => (

                    <span
                      key={technology}
                      className="
                        px-2.5
                        py-1.5
                        sm:px-3
                        text-[10px]
                        sm:text-xs
                        rounded-full
                        bg-blue-400/10
                        text-blue-300
                        border
                        border-blue-400/20
                        hover:bg-blue-400/20
                        hover:border-blue-400/40
                        hover:-translate-y-0.5
                        transition-all
                        duration-300
                      "
                    >
                      {technology}
                    </span>

                  ))}

                </div>


                {/* ================================= */}
                {/* DIVIDER */}
                {/* ================================= */}

                <div className="
                  border-t
                  border-white/10
                  mb-5
                "></div>


                {/* ================================= */}
                {/* FEATURES */}
                {/* ================================= */}

                <div className="mb-6">

                  <p className="
                    text-gray-200
                    text-sm
                    font-semibold
                    mb-3
                  ">
                    Key Features
                  </p>


                  <div className="
                    grid
                    grid-cols-1
                    gap-2
                  ">

                    {project.features.map((feature) => (

                      <div
                        key={feature}
                        className="
                          flex
                          items-start
                          gap-2
                          text-xs
                          text-gray-500
                          group-hover:text-gray-400
                          transition
                          leading-5
                        "
                      >

                        <span className="
                          w-1.5
                          h-1.5
                          rounded-full
                          bg-blue-400
                          shrink-0
                          mt-1.5
                        "></span>

                        <span>
                          {feature}
                        </span>

                      </div>

                    ))}

                  </div>

                </div>


                {/* ================================= */}
                {/* BUTTONS */}
                {/* ================================= */}

                <div className="
                  flex
                  gap-2.5
                  sm:gap-3
                  w-full
                ">


                  {/* GitHub */}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1
                      text-center
                      px-3
                      sm:px-4
                      py-2.5
                      rounded-lg
                      border
                      border-blue-400/30
                      text-blue-400
                      hover:bg-blue-400
                      hover:text-black
                      hover:shadow-[0_0_20px_rgba(96,165,250,0.25)]
                      transition-all
                      duration-300
                      text-xs
                      sm:text-sm
                      font-medium
                      whitespace-nowrap
                    "
                  >
                    GitHub
                  </a>


                  {/* Live Demo */}

                  {project.demo ? (

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex-1
                        text-center
                        px-3
                        sm:px-4
                        py-2.5
                        rounded-lg
                        bg-blue-400
                        text-black
                        hover:bg-blue-300
                        hover:shadow-[0_0_20px_rgba(96,165,250,0.35)]
                        transition-all
                        duration-300
                        text-xs
                        sm:text-sm
                        font-medium
                        whitespace-nowrap
                      "
                    >
                      Live Demo
                    </a>

                  ) : (

                    <button
                      disabled
                      className="
                        flex-1
                        px-2
                        sm:px-4
                        py-2.5
                        rounded-lg
                        bg-white/10
                        text-gray-500
                        cursor-not-allowed
                        text-[11px]
                        sm:text-sm
                        font-medium
                        whitespace-nowrap
                      "
                    >
                      Live Demo Soon
                    </button>

                  )}

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* ================================= */}
        {/* BOTTOM DECORATION */}
        {/* ================================= */}

        <div className="
          mt-14
          sm:mt-20
          flex
          justify-center
        ">

          <div className="
            w-20
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

export default Projects;