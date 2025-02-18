import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./components/ThemeToggle";
import { ProjectCard } from "./components/ProjectCard";
import { projects } from "./data/projects";
import Footer from "./components/Footer";

import headsign from "./images/headsign_green.png";

function App() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
      <ThemeToggle />

      {/* Hero Section */}
      <section className="min-h-screen shadow-2xl flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="relative w-64 h-64 mx-auto mb-16 transform transition-transform duration-300 hover:scale-125">
            <img
              src={headsign}
              alt="Profile"
              className="rounded-full w-full h-full object-cover border-2 border-emerald-400 dark:border-emerald-500"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Gürkan Mahmut Özil
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-200 mb-2">
            Full Stack Developer
          </p>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8">
            Welcome to my portfolio! <br />
            I've been programming since 10 years old. <br />
            Scroll down to learn more or contact me through one of these!
          </p>
          <div className="flex justify-center gap-10 md:gap-16 mb-12">
            <a
              href="https://linkedin.com/in/gurkanozil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-transform duration-200 hover:scale-125"
            >
              <Linkedin className="w-10 h-10 md:w-12 md:h-12" />
            </a>
            <a
              href="mailto:gurkanozil@live.nl"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-transform duration-200 hover:scale-125"
            >
              <Mail className="w-10 h-10 md:w-12 md:h-12" />
            </a>
            <a
              href="https://github.com/gurkanozil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-transform duration-200 hover:scale-125"
            >
              <Github className="w-10 h-10 md:w-12 md:h-12" />
            </a>
          </div>
          <button
            onClick={scrollToProjects}
            className="motion-safe:animate-bounce"
            aria-label="Scroll to projects"
          >
            <ChevronDown className="w-16 h-16" />
          </button>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          My Projects
        </motion.h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
