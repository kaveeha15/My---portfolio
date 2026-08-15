import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Send message
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      const response = await emailjs.send(
        "service_gme5f8o",
        "template_7u5bvy9",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        {
          publicKey: "7XFZ5jz7ZWnMCMNl1",
        }
      );

      console.log("EMAIL SENT SUCCESSFULLY:", response);

      setStatus({
        type: "success",
        message: "Message sent successfully! 🚀",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EMAILJS ERROR:", error);

      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-black text-white px-4 sm:px-6 py-20 sm:py-24 overflow-hidden"
    >
      {/* =============================== */}
      {/* BACKGROUND GLOW */}
      {/* =============================== */}

      <div className="absolute top-10 sm:top-20 left-[-100px] sm:left-10 w-56 sm:w-72 h-56 sm:h-72 bg-purple-600/20 rounded-full blur-3xl animate-contact-glow"></div>

      <div className="absolute bottom-10 sm:bottom-20 right-[-100px] sm:right-10 w-56 sm:w-72 h-56 sm:h-72 bg-blue-600/20 rounded-full blur-3xl animate-contact-glow-2"></div>


      {/* =============================== */}
      {/* MAIN CONTAINER */}
      {/* =============================== */}

      <div className="relative max-w-6xl mx-auto">


        {/* =============================== */}
        {/* HEADING */}
        {/* =============================== */}

        <div className="text-center mb-10 sm:mb-14">

          <p className="text-purple-400 uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm mb-3">
            Get In Touch
          </p>


          {/* Animated Title */}

          <h2 className="contact-title text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Contact{" "}
            <span className="text-purple-400">
              Me
            </span>
          </h2>


          <p className="text-gray-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-7 px-2">
            Have a project in mind or want to discuss an opportunity?
            Feel free to send me a message.
          </p>

        </div>


        {/* =============================== */}
        {/* CONTACT INFORMATION + FORM */}
        {/* =============================== */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">


          {/* =============================== */}
          {/* CONTACT INFORMATION */}
          {/* =============================== */}

          <div className="space-y-4 sm:space-y-5">


            {/* =============================== */}
            {/* EMAIL */}
            {/* =============================== */}

            <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-purple-500/50 hover:-translate-y-1 transition-all duration-300">

              <p className="text-purple-400 text-sm mb-2">
                Email
              </p>

              <a
                href="mailto:nimanshikavisha@gmail.com"
                className="text-gray-200 text-sm sm:text-base break-all hover:text-purple-400 transition"
              >
                nimanshikavisha@gmail.com
              </a>

            </div>


            {/* =============================== */}
            {/* PHONE */}
            {/* =============================== */}

            <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-purple-500/50 hover:-translate-y-1 transition-all duration-300">

              <p className="text-purple-400 text-sm mb-2">
                Phone
              </p>

              <a
                href="tel:+94784881144"
                className="text-gray-200 text-sm sm:text-base hover:text-purple-400 transition"
              >
                +94 78 488 1144
              </a>

            </div>


            {/* =============================== */}
            {/* LOCATION */}
            {/* =============================== */}

            <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-purple-500/50 hover:-translate-y-1 transition-all duration-300">

              <p className="text-purple-400 text-sm mb-2">
                Location
              </p>

              <p className="text-gray-200 text-sm sm:text-base">
                Matara, Sri Lanka
              </p>

            </div>


            {/* =============================== */}
            {/* SOCIAL LINKS */}
            {/* =============================== */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">


              {/* LinkedIn */}

              <a
                href="https://linkedin.com/in/lk-nimanshi"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300"
              >

                <p className="text-blue-400 text-sm mb-2">
                  LinkedIn
                </p>

                <p className="text-gray-200 text-sm break-all">
                  linkedin.com/in/lk-nimanshi
                </p>

              </a>


              {/* GitHub */}

              <a
                href="https://github.com/kaveeha15"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-purple-500/50 hover:-translate-y-1 transition-all duration-300"
              >

                <p className="text-purple-400 text-sm mb-2">
                  GitHub
                </p>

                <p className="text-gray-200 text-sm break-all">
                  github.com/kaveeha15
                </p>

              </a>

            </div>

          </div>


          {/* =============================== */}
          {/* CONTACT FORM */}
          {/* =============================== */}

          <div>

            <form
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 sm:p-7 md:p-10 shadow-2xl hover:border-purple-500/20 transition-all duration-500"
            >


              {/* =============================== */}
              {/* NAME */}
              {/* =============================== */}

              <div className="mb-5 sm:mb-6">

                <label
                  htmlFor="name"
                  className="block text-gray-300 text-sm sm:text-base mb-2"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-sm sm:text-base text-white placeholder-gray-500 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition"
                />

              </div>


              {/* =============================== */}
              {/* EMAIL */}
              {/* =============================== */}

              <div className="mb-5 sm:mb-6">

                <label
                  htmlFor="email"
                  className="block text-gray-300 text-sm sm:text-base mb-2"
                >
                  Your Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-sm sm:text-base text-white placeholder-gray-500 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition"
                />

              </div>


              {/* =============================== */}
              {/* MESSAGE */}
              {/* =============================== */}

              <div className="mb-5 sm:mb-6">

                <label
                  htmlFor="message"
                  className="block text-gray-300 text-sm sm:text-base mb-2"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="6"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-sm sm:text-base text-white placeholder-gray-500 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition resize-none"
                ></textarea>

              </div>


              {/* =============================== */}
              {/* SUCCESS / ERROR MESSAGE */}
              {/* =============================== */}

              {status.message && (
                <div
                  className={`mb-5 sm:mb-6 p-3 sm:p-4 rounded-lg text-center text-sm ${
                    status.type === "success"
                      ? "bg-green-500/10 border border-green-500/30 text-green-400"
                      : "bg-red-500/10 border border-red-500/30 text-red-400"
                  }`}
                >
                  {status.message}
                </div>
              )}


              {/* =============================== */}
              {/* SEND BUTTON */}
              {/* =============================== */}

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-3 px-6 rounded-lg bg-purple-600 hover:bg-purple-700 disabled:bg-purple-900 disabled:cursor-not-allowed transition duration-300 font-semibold text-sm sm:text-base shadow-lg shadow-purple-600/20 hover:shadow-purple-600/40"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;