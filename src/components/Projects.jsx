import littleLoom from "../assets/little-loom.png"
import tripPlanner from "../assets/trip-planner.png"
import macClone from "../assets/mac-clone.png"

function Projects() {
  const projects = [
    {
      title: "Little Loom",
      subtitle: "E-Commerce Web Application",
      image: littleLoom,

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
  ]

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-black text-white px-6 pt-32 pb-24 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-20 left-[-150px] w-96 h-96 bg-blue-500/10 rounded-full blur-[140px]"></div>

      <div className="absolute bottom-10 right-[-150px] w-96 h-96 bg-cyan-400/10 rounded-full blur-[140px]"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-blue-400 text-sm uppercase tracking-[0.3em] mb-3">
            My Projects
          </p>

          <h1 className="text-4xl md:text-6xl font-bold">
            Things I've{" "}
            <span className="text-blue-400">
              Built
            </span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-7">
            A collection of projects I've developed using modern
            technologies and development practices.
          </p>

        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

          {projects.map((project) => (
            <div
              key={project.title}
              className="group border border-white/10 rounded-2xl bg-white/[0.03] overflow-hidden hover:border-blue-400/50 hover:-translate-y-2 transition-all duration-300"
            >

              {/* Project Image */}
              <div className="h-48 overflow-hidden bg-white/[0.03]">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

              </div>

              {/* Project Content */}
              <div className="p-6">

                {/* Subtitle */}
                <p className="text-blue-400 text-xs uppercase tracking-wider mb-2">
                  {project.subtitle}
                </p>

                {/* Title */}
                <h2 className="text-2xl font-semibold text-white mb-4">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-7 mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">

                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1.5 text-xs rounded-full bg-blue-400/10 text-blue-300 border border-blue-400/20"
                    >
                      {technology}
                    </span>
                  ))}

                </div>

                {/* Features */}
                <div>

                  <p className="text-gray-300 text-sm font-semibold mb-3">
                    Key Features
                  </p>

                  <div className="flex flex-wrap gap-x-4 gap-y-2">

                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs text-gray-500"
                      >
                        • {feature}
                      </span>
                    ))}

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects