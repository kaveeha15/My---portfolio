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
      className="relative min-h-screen bg-black text-white px-6 pt-32 pb-24 overflow-hidden"
    >

      {/* ================================= */}
      {/* BACKGROUND EFFECTS */}
      {/* ================================= */}

      <div className="absolute top-20 left-[-180px] w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[150px] animate-about-glow"></div>

      <div className="absolute bottom-10 right-[-180px] w-[450px] h-[450px] bg-cyan-400/10 rounded-full blur-[150px] animate-about-glow-2"></div>

      <div className="absolute top-[45%] right-[20%] w-32 h-32 bg-blue-400/5 rounded-full blur-[90px]"></div>


      {/* ================================= */}
      {/* MAIN CONTENT */}
      {/* ================================= */}

      <div className="relative z-10 max-w-7xl mx-auto">


        {/* ================================= */}
        {/* SECTION HEADING */}
        {/* ================================= */}

        <div className="text-center mb-16">

          <p className="text-blue-400 text-sm uppercase tracking-[0.3em] mb-4">
            My Projects
          </p>

          {/* Animated Title */}

          <div className="relative overflow-hidden py-2">

            <h1 className="text-4xl md:text-6xl font-bold animate-project-title">

              Things I've{" "}

              <span className="text-blue-400 animate-project-glow">
                Built
              </span>

            </h1>

          </div>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-7">
            A collection of projects I've developed using modern
            technologies and development practices.
          </p>

        </div>


        {/* ================================= */}
        {/* PROJECTS GRID */}
        {/* ================================= */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

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
                hover:-translate-y-2
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

              <div className="relative h-52 overflow-hidden bg-white/[0.03]">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-110
                    transition-transform
                    duration-700
                  "
                />

                {/* Image Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70"></div>

                {/* Project Number */}

                <div className="absolute top-4 left-4">

                  <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs text-gray-300">
                    Project {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

              </div>


              {/* ================================= */}
              {/* PROJECT CONTENT */}
              {/* ================================= */}

              <div className="p-6">


                {/* Subtitle */}

                <p className="text-blue-400 text-xs uppercase tracking-[0.15em] mb-2">
                  {project.subtitle}
                </p>


                {/* Title */}

                <h2 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h2>


                {/* Description */}

                <p className="text-gray-400 text-sm leading-7 mb-6">
                  {project.description}
                </p>


                {/* ================================= */}
                {/* TECHNOLOGIES */}
                {/* ================================= */}

                <div className="flex flex-wrap gap-2 mb-6">

                  {project.technologies.map((technology) => (

                    <span
                      key={technology}
                      className="
                        px-3
                        py-1.5
                        text-xs
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

                <div className="border-t border-white/10 mb-5"></div>


                {/* ================================= */}
                {/* FEATURES */}
                {/* ================================= */}

                <div className="mb-6">

                  <p className="text-gray-200 text-sm font-semibold mb-3">
                    Key Features
                  </p>

                  <div className="grid grid-cols-1 gap-2">

                    {project.features.map((feature) => (

                      <div
                        key={feature}
                        className="flex items-center gap-2 text-xs text-gray-500 group-hover:text-gray-400 transition"
                      >

                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>

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

                <div className="flex gap-3">

                  {/* GitHub */}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1
                      text-center
                      px-4
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
                      text-sm
                      font-medium
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
                        px-4
                        py-2.5
                        rounded-lg
                        bg-blue-400
                        text-black
                        hover:bg-blue-300
                        hover:shadow-[0_0_20px_rgba(96,165,250,0.35)]
                        transition-all
                        duration-300
                        text-sm
                        font-medium
                      "
                    >
                      Live Demo
                    </a>

                  ) : (

                    <button
                      disabled
                      className="
                        flex-1
                        px-4
                        py-2.5
                        rounded-lg
                        bg-white/10
                        text-gray-500
                        cursor-not-allowed
                        text-sm
                        font-medium
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

        <div className="mt-20 flex justify-center">

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>

        </div>

      </div>

    </section>
  );
}

export default Projects;