import { useEffect, useState } from "react";
import profile from "../assets/profile.jpeg";

function About() {
  /* ================================= */
  /* ANIMATED ROLE TEXT */
  /* ================================= */

  const roles = [
    "Full Stack Developer",
    "React Developer",
    "Web Application Developer",
    "Software Developer",
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  /* ================================= */
  /* KNOW ME BETTER TYPING EFFECT */
  /* ================================= */

  const titleText = "Know Me Better";

  const [title, setTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    /* Typing */

    if (!isDeleting && title.length < titleText.length) {
      timeout = setTimeout(() => {
        setTitle(titleText.slice(0, title.length + 1));
      }, 150);
    }

    /* Pause */

    else if (!isDeleting && title.length === titleText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    }

    /* Deleting */

    else if (isDeleting && title.length > 0) {
      timeout = setTimeout(() => {
        setTitle(titleText.slice(0, title.length - 1));
      }, 90);
    }

    /* Restart */

    else if (isDeleting && title.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [title, isDeleting]);


  return (
    <section
      id="about"
      className="
        relative
        min-h-screen
        flex
        items-center
        px-5
        sm:px-6
        md:px-10
        lg:px-16
        xl:px-24
        py-24
        sm:py-28
        bg-black
        text-white
        overflow-hidden
      "
    >

      {/* ================================= */}
      {/* BACKGROUND GLOW */}
      {/* ================================= */}

      <div
        className="
          absolute
          top-20
          left-[-150px]
          w-72
          h-72
          sm:w-96
          sm:h-96
          bg-blue-500/10
          rounded-full
          blur-[120px]
          sm:blur-[140px]
          animate-about-glow
        "
      ></div>

      <div
        className="
          absolute
          bottom-10
          right-[-150px]
          w-72
          h-72
          sm:w-96
          sm:h-96
          bg-cyan-400/10
          rounded-full
          blur-[120px]
          sm:blur-[140px]
          animate-about-glow-2
        "
      ></div>

      <div
        className="
          absolute
          top-1/2
          left-1/2
          w-60
          h-60
          sm:w-72
          sm:h-72
          bg-blue-500/[0.04]
          rounded-full
          blur-[100px]
          sm:blur-[120px]
          -translate-x-1/2
          -translate-y-1/2
        "
      ></div>


      {/* ================================= */}
      {/* MAIN CONTAINER */}
      {/* ================================= */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          w-full
          mx-auto
        "
      >


        {/* ================================= */}
        {/* SECTION TITLE */}
        {/* ================================= */}

        <div className="text-center mb-14 sm:mb-16 md:mb-20">

          <p
            className="
              text-blue-400
              text-xs
              sm:text-sm
              uppercase
              tracking-[0.25em]
              sm:tracking-[0.3em]
              mb-4
            "
          >
            About Me
          </p>


          {/* Typing Heading */}

          <div
            className="
              min-h-[60px]
              sm:min-h-[72px]
              md:min-h-[90px]
              flex
              items-center
              justify-center
              px-2
            "
          >

            <h2
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                font-bold
                leading-tight
              "
            >

              {title.startsWith("Know Me") ? (
                <>
                  <span>Know Me</span>

                  {title.length > 7 && (
                    <>
                      {" "}

                      <span className="text-blue-400">
                        {title.slice(8)}
                      </span>
                    </>
                  )}
                </>
              ) : (
                title
              )}

            </h2>

          </div>


          <p
            className="
              text-gray-500
              max-w-xl
              mx-auto
              mt-4
              sm:mt-5
              text-xs
              sm:text-sm
              leading-6
              sm:leading-7
              px-3
            "
          >
            A little more about my journey, skills and passion for
            building modern digital experiences.
          </p>

        </div>


        {/* ================================= */}
        {/* MAIN CONTENT */}
        {/* ================================= */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-16
            sm:gap-20
            md:gap-12
            lg:gap-16
            items-center
          "
        >


          {/* ================================= */}
          {/* LEFT SIDE */}
          {/* ================================= */}

          <div className="w-full">


            <p
              className="
                text-gray-500
                text-sm
                mb-3
                tracking-wide
              "
            >
              Hello, I'm
            </p>


            {/* NAME */}

            <h3
              className="
                text-3xl
                sm:text-4xl
                font-bold
                mb-4
                leading-tight
              "
            >

              Kavisha{" "}

              <span className="text-blue-400">
                Nimanshi
              </span>

              {" "}👋

            </h3>


            {/* ================================= */}
            {/* ANIMATED ROLE */}
            {/* ================================= */}

            <div
              className="
                h-9
                sm:h-10
                mb-6
                flex
                items-center
              "
            >

              <span
                key={currentRole}
                className="
                  text-blue-400
                  text-base
                  sm:text-lg
                  md:text-xl
                  font-medium
                  animate-role
                "
              >
                {roles[currentRole]}
              </span>

            </div>


            {/* ================================= */}
            {/* DESCRIPTION */}
            {/* ================================= */}

            <p
              className="
                text-gray-400
                text-sm
                sm:text-base
                leading-7
                sm:leading-8
                mb-5
              "
            >
              I'm a passionate developer who enjoys creating modern,
              interactive and user-friendly web applications. I love
              turning ideas into real-world digital experiences that
              are both functional and visually engaging.
            </p>


            <p
              className="
                text-gray-400
                text-sm
                sm:text-base
                leading-7
                sm:leading-8
                mb-8
              "
            >
              My development journey has given me practical experience
              with React, JavaScript, Node.js, Express.js, Firebase,
              MySQL and modern web technologies. I'm always curious
              about new technologies and continuously work on improving
              my development skills.
            </p>


            {/* ================================= */}
            {/* CURRENT FOCUS */}
            {/* ================================= */}

            <div
              className="
                border
                border-blue-400/20
                bg-blue-400/[0.04]
                rounded-2xl
                p-5
                sm:p-6
                mb-8
                hover:border-blue-400/40
                transition-all
                duration-300
              "
            >

              <div className="flex items-center gap-3 mb-3">

                <div
                  className="
                    w-9
                    h-9
                    shrink-0
                    rounded-lg
                    bg-blue-400/10
                    border
                    border-blue-400/20
                    flex
                    items-center
                    justify-center
                  "
                >

                  <span className="text-blue-400">
                    {"</>"}
                  </span>

                </div>


                <h4 className="font-semibold text-gray-200 text-sm sm:text-base">
                  Currently Focused On
                </h4>

              </div>


              <p
                className="
                  text-gray-400
                  text-xs
                  sm:text-sm
                  leading-6
                "
              >
                Building scalable web applications, improving
                frontend experiences and expanding my full-stack
                development skills.
              </p>

            </div>


            {/* ================================= */}
            {/* QUICK INFO */}
            {/* ================================= */}

            <div className="grid grid-cols-2 gap-3 sm:gap-4">


              {/* Education */}

              <div
                className="
                  group
                  border
                  border-white/10
                  rounded-xl
                  p-4
                  sm:p-5
                  bg-white/[0.03]
                  hover:border-blue-400/40
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >

                <h4
                  className="
                    text-blue-400
                    text-[10px]
                    sm:text-xs
                    uppercase
                    tracking-wider
                    mb-2
                  "
                >
                  Education
                </h4>

                <p className="text-gray-200 text-sm font-medium">
                  HNDIT
                </p>

                <p className="text-gray-500 text-[11px] sm:text-xs mt-1">
                  SLIATE – Galle
                </p>

              </div>


              {/* Training */}

              <div
                className="
                  group
                  border
                  border-white/10
                  rounded-xl
                  p-4
                  sm:p-5
                  bg-white/[0.03]
                  hover:border-blue-400/40
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >

                <h4
                  className="
                    text-blue-400
                    text-[10px]
                    sm:text-xs
                    uppercase
                    tracking-wider
                    mb-2
                  "
                >
                  Training
                </h4>

                <p className="text-gray-200 text-sm font-medium">
                  6 Months
                </p>

                <p className="text-gray-500 text-[11px] sm:text-xs mt-1">
                  Industrial Training
                </p>

              </div>

            </div>


            {/* ================================= */}
            {/* TECH STACK */}
            {/* ================================= */}

            <div className="mt-8">

              <p
                className="
                  text-gray-500
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-[0.18em]
                  sm:tracking-[0.2em]
                  mb-4
                "
              >
                Technologies I Work With
              </p>


              <div className="flex flex-wrap gap-2">

                {[
                  "React",
                  "JavaScript",
                  "Node.js",
                  "Express.js",
                  "Firebase",
                  "MySQL",
                  "Tailwind CSS",
                ].map((tech) => (

                  <span
                    key={tech}
                    className="
                      px-3
                      py-1.5
                      rounded-full
                      text-[10px]
                      sm:text-xs
                      text-gray-300
                      bg-white/[0.04]
                      border
                      border-white/10
                      hover:border-blue-400/40
                      hover:text-blue-300
                      transition-all
                      duration-300
                    "
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </div>

          </div>


          {/* ================================= */}
          {/* RIGHT SIDE - PHOTO */}
          {/* ================================= */}

          <div className="flex justify-center mt-4 md:mt-0">

            <div
              className="
                relative
                w-64
                h-64
                sm:w-80
                sm:h-80
                md:w-[360px]
                md:h-[360px]
                lg:w-[420px]
                lg:h-[420px]
              "
            >


              {/* ================================= */}
              {/* PHOTO GLOW */}
              {/* ================================= */}

              <div
                className="
                  absolute
                  inset-[-12px]
                  sm:inset-[-15px]
                  bg-blue-500/10
                  rounded-[2rem]
                  sm:rounded-[2.5rem]
                  blur-3xl
                  animate-about-glow
                "
              ></div>


              {/* ================================= */}
              {/* PHOTO SHAPE RINGS */}
              {/* ================================= */}

              <div
                className="
                  absolute
                  inset-[-8px]
                  sm:inset-[-10px]
                  rounded-[2rem]
                  sm:rounded-[2.4rem]
                  border
                  border-blue-400/40
                  animate-pulse
                "
              ></div>


              <div
                className="
                  absolute
                  inset-[-14px]
                  sm:inset-[-18px]
                  rounded-[2.3rem]
                  sm:rounded-[2.8rem]
                  border
                  border-cyan-400/15
                "
              ></div>


              {/* ================================= */}
              {/* PHOTO */}
              {/* ================================= */}

              <div
                className="
                  relative
                  w-full
                  h-full
                  rounded-[1.7rem]
                  sm:rounded-[2rem]
                  overflow-hidden
                  border
                  border-white/10
                  bg-white/[0.03]
                  shadow-[0_0_60px_rgba(59,130,246,0.12)]
                "
              >

                <img
                  src={profile}
                  alt="Kavisha Nimanshi"
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />


                {/* Image Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/50
                    via-transparent
                    to-transparent
                    pointer-events-none
                  "
                ></div>

              </div>


              {/* ================================= */}
              {/* DEVELOPER BADGE */}
              {/* ================================= */}

              <div
                className="
                  absolute
                  -bottom-5
                  -left-3
                  sm:-left-5
                  md:-left-8
                  lg:-left-10
                  px-3
                  sm:px-5
                  py-3
                  sm:py-4
                  rounded-xl
                  sm:rounded-2xl
                  bg-black/80
                  backdrop-blur-xl
                  border
                  border-white/10
                  shadow-xl
                "
              >

                <div className="flex items-center gap-2 sm:gap-3">

                  <div
                    className="
                      w-8
                      h-8
                      sm:w-10
                      sm:h-10
                      shrink-0
                      rounded-full
                      bg-blue-400/10
                      border
                      border-blue-400/20
                      flex
                      items-center
                      justify-center
                    "
                  >

                    <span className="text-blue-400 text-xs sm:text-sm">
                      {"</>"}
                    </span>

                  </div>


                  <div>

                    <p className="text-gray-300 text-[10px] sm:text-xs">
                      Building
                    </p>

                    <p className="text-white text-[11px] sm:text-sm font-semibold">
                      Digital Experiences
                    </p>

                  </div>

                </div>

              </div>


              {/* ================================= */}
              {/* STATUS BADGE */}
              {/* ================================= */}

              <div
                className="
                  absolute
                  -top-5
                  -right-2
                  sm:-right-4
                  md:-right-6
                  lg:-right-10
                  px-3
                  sm:px-4
                  py-2.5
                  sm:py-3
                  rounded-lg
                  sm:rounded-xl
                  bg-black/80
                  backdrop-blur-xl
                  border
                  border-white/10
                "
              >

                <div className="flex items-center gap-2">

                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>

                  <span className="text-gray-300 text-[10px] sm:text-xs whitespace-nowrap">
                    Always Learning
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;