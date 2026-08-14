import profile from "../assets/profile.jpeg"

function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center px-6 py-24 bg-black text-white overflow-hidden"
    >

      {/* Background Glow 1 */}
      <div className="absolute top-20 left-[-150px] w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] animate-about-glow"></div>

      {/* Background Glow 2 */}
      <div className="absolute bottom-10 right-[-150px] w-96 h-96 bg-cyan-400/10 rounded-full blur-[140px] animate-about-glow-2"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto">

        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm uppercase tracking-[0.3em] mb-3">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Know Me <span className="text-blue-400">Better</span>
          </h2>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>

            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              Hi, I'm <span className="text-blue-400">Kavisha</span> 👋
            </h3>

            <p className="text-gray-400 leading-8 mb-5">
              I'm a passionate Full Stack Developer who enjoys creating
              modern, interactive and user-friendly web applications.
              I love turning ideas into real-world digital experiences.
            </p>

            <p className="text-gray-400 leading-8 mb-8">
              I have experience working with technologies such as React,
              JavaScript, Node.js, Express.js, Firebase and MySQL.
              I'm always interested in learning new technologies and
              improving my development skills.
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-5">

              <div className="border border-white/10 rounded-xl p-5 bg-white/[0.03] hover:border-blue-400/40 transition duration-300">
                <h4 className="text-blue-400 text-sm mb-2">
                  Education
                </h4>

                <p className="text-gray-300 text-sm">
                  HNDIT - SLIATE
                </p>
              </div>

              <div className="border border-white/10 rounded-xl p-5 bg-white/[0.03] hover:border-blue-400/40 transition duration-300">
                <h4 className="text-blue-400 text-sm mb-2">
                  Experience
                </h4>

                <p className="text-gray-300 text-sm">
                  Full Stack Development
                </p>
              </div>

            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">

            <div className="relative w-72 h-72 md:w-96 md:h-96">

              {/* Image Glow */}
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-about-glow"></div>

              {/* Image */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03]">

                <img
                  src={profile}
                  alt="Kavisha"
                  className="w-full h-full object-cover"
                />

              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  )
}

export default About