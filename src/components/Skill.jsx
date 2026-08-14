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
} from "lucide-react"

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
]

  return (
    <section
      id="skills"
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
            My Skills
          </p>

          <h1 className="text-4xl md:text-6xl font-bold">
            Technologies I <span className="text-blue-400">Use</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-7">
            I work with modern technologies to build responsive,
            interactive and user-friendly web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">

          {skills.map((skill) => (
            <div
  key={skill.name}
  className="group border border-white/10 rounded-2xl p-6 bg-white/[0.03] hover:border-blue-400/50 hover:bg-blue-400/[0.05] transition-all duration-300 hover:-translate-y-2"
>
  
  {/* Icon */}
  <div className="w-14 h-14 mx-auto mb-5 rounded-xl border border-blue-400/20 bg-blue-400/10 flex items-center justify-center group-hover:scale-110 transition duration-300">
   <skill.icon
  size={28}
  className="text-blue-400 group-hover:scale-110 transition duration-300"
/>
  </div>

  {/* Skill Name */}
  <h3 className="text-center text-gray-200 font-semibold">
    {skill.name}
  </h3>

  {/* Level */}
  <p className="text-center text-gray-500 text-sm mt-2">
    {skill.level}
  </p>

  {/* Progress Bar */}
  <div className="mt-4">

    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">

      <div
        className="h-full bg-blue-400 rounded-full transition-all duration-1000"
        style={{ width: skill.percentage }}
      ></div>

    </div>

    <p className="text-right text-gray-500 text-xs mt-2">
      {skill.percentage}
    </p>

  </div>

</div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Skills