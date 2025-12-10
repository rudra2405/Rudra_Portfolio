import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const DATA = {
  name: "Rudra Hirdekar",
  role: "Frontend Developer (React.js)",
  about: `dedicated Front-End Developer skilled in building 
responsive, user-friendly web applications using 
React, JavaScript, and modern UI frameworks. I 
focus on writing clean, efficient code and creating 
smooth user experiences. I have experience with API 
integration, routing, state management, and 
working with real-world project structures. I enjoy 
learning new technologies and continuously 
improving my development skills`,
  profileImg: "/image.jpeg", // 👈 Replace with your photo
  projects: [
    {
      title: "Cart Management System",
      desc: `Built a responsive shopping platform using React.js, 
JavaScript, and Tailwind CSS with features like 
product listing, search, add-to-cart, checkout, and 
order success flow. Implemented dynamic state 
management using React hooks for smooth user 
interaction.`,
      img: "/image2.png", // replace
      link: "https://github.com/rudra2405/Cart_Manage_System",
    },
    {
      title: "Weather App",
      desc: `Developed a Weather App using React.js, useState, 
and Tailwind CSS that fetches real-time weather 
data from an external API. Focused on creating a 
clean, responsive UI and efficiently handling 
dynamic data updates for a smooth user experience.`,
      img: "/Image3.png", // replace
      link: "https://github.com/rudra2405/Weather-App",
    },
  ],
  resume: "/Rudra_hirdekar_resume.pdf",
};

export default function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_9bza1x7",
      "template_64dbjil",
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      "pBvD4LWsAuFSQghYK"
    );

    Swal.fire({
      icon: "success",
      title: "Sent 🎉",
      text: "Message delivered successfully!",
    });

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 border-b border-gray-700 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-5">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl md:text-2xl font-bold text-blue-400"
          >
            Rudra Hirdekar
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-gray-200 font-medium">
            {["About", "Projects", "Resume", "Contact"].map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase()}`}
                className="transition hover:text-blue-400 hover:scale-105"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger / Close */}
          <button
            className="md:hidden text-2xl text-gray-300 hover:text-blue-400 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-6 px-6 pb-6 text-lg text-gray-200 font-medium bg-gray-900/60 backdrop-blur-sm">
            {["About", "Projects", "Resume", "Contact"].map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-400 transition"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>{" "}
      {/* Hero */}
      <section className="text-center py-25 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-blue-400"
        >
          {DATA.role}
        </motion.h2>
      </section>
      {/* About */}
      <section id="about" className="max-w-5xl mx-auto text-center px-6 py-16">
        <h3 className="text-2xl font-semibold border-b border-gray-700 inline-block mb-6">
          About Me
        </h3>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src={DATA.profileImg}
            alt="profile"
            className="w-40 h-40 rounded-full border-4 border-blue-500 object-cover"
          />

          {/* Typing Animation Text */}
          <div className="text-center md:text-left">
            <TypeAnimation
              sequence={[
                "Frontend Developer 💻",
                2000,
                "React.js Developer ⚛",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              className="text-xl md:text-2xl font-bold text-blue-400"
            />

            <p className="text-gray-400 leading-relaxed mt-4">{DATA.about}</p>
          </div>
        </div>
      </section>{" "}
      {/* Skills Section */}
      <section id="skills" className="max-w-5xl mx-auto text-center px-6 py-16">
        <h3 className="text-2xl font-semibold mb-8 border-b border-gray-700 inline-block">
          Skills 🚀
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          {[
            "React.js",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Git & GitHub",
            "Bootstrap",
            "Axios",
            "Firebase",
            "Responsive Design",
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.15 }}
              className="cursor-pointer text-xl font-bold py-4 rounded-lg border border-gray-800 bg-gray-900 transition"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Projects */}
      <section
        id="projects"
        className="max-w-5xl text-center mx-auto px-6 py-16"
      >
        <h3 className="text-2xl font-semibold mb-6 border-b border-gray-700 inline-block">
          Projects
        </h3>

        <div className="grid gap-6 md:grid-cols-2">
          {DATA.projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              className="bg-gray-900 rounded-xl shadow-lg border border-gray-800 overflow-hidden"
            >
              <img src={p.img} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h4 className="text-lg font-bold text-blue-400">{p.title}</h4>
                <p className="text-gray-400 mb-4">{p.desc}</p>
                <a href={p.link} className="text-blue-400 hover:underline">
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* ------- EDUCATION SECTION ------- */}
      <section id="education" className="py-20 px-5 text-center">
        <h2 className="text-2xl font-semibold mb-4">Education 🎓</h2>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="border border-gray-300 rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 shadow-lg">
            <h3 className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-2xl font-semibold">
              Bachelor of Engineering (Computer Science)
            </h3>
            <p className="text-gray-600 mt-2 font-semibold">
              Darshan University
            </p>
            <p className="mt-2 font-medium">2019 - 2023</p>
          </div>

          <div className="border border-gray-300 rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 shadow-lg">
            <h3 className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-2xl font-semibold">
              Higher Secondary (HSC)
            </h3>
            <p className="text-gray-600 mt-2 font-semibold">Shantvan School</p>
            <p className="mt-2 font-medium">2017 - 2019</p>
          </div>
        </div>
      </section>
      {/* Resume */}
      <section id="resume" className="text-center py-16">
        <h3 className="text-2xl font-semibold mb-4">Resume</h3>

        <a
          href="/Rudra_hirdekar_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          📄 View / Download Resume  
        </a>
      </section>
      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-semibold mb-6 text-center">Contact Me</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full bg-gray-900 border border-gray-700 p-3 rounded-lg"
          />

          <input
            name="email"
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full bg-gray-900 border border-gray-700 p-3 rounded-lg"
          />

          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            required
            className="w-full bg-gray-900 border border-gray-700 p-3 rounded-lg"
          />

          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg">
            Send Message 🚀
          </button>
        </form>
      </section>
      {/* Social / Connect Section */}
      <section className="flex flex-col items-center gap-4 py-10">
        <h3 className="text-xl font-semibold text-blue-400">Connect With Me</h3>

        <div className="flex gap-6">
          <a
            href="https://www.facebook.com/ruhirdekar.24/"
            target="_blank"
            className="hover:text-blue-500 transition transform hover:scale-125"
          >
            <FaFacebook size={32} />
          </a>
          <a
            href="https://www.instagram.com/rudra_hirdekar24/"
            target="_blank"
            className="hover:text-pink-500 transition transform hover:scale-125"
          >
            <FaInstagram size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/rudrahirdekar"
            target="_blank"
            className="hover:text-blue-400 transition transform hover:scale-125"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://github.com/rudra2405"
            target="_blank"
            className="hover:text-blue-400 transition transform hover:scale-125"
          >
            <FaGithub size={32} />
          </a>
        </div>
      </section>
      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-800 text-gray-500">
        © {new Date().getFullYear()} {DATA.name} — Built with ❤️
      </footer>
    </div>
  );
}
