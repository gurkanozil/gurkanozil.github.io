import { useTheme } from "./hooks/useTheme";
import { Sparkles } from "./components/Sparkles";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./components/ThemeToggle";
import { SideNav } from "./components/SideNav";
import { ProjectCard } from "./components/ProjectCard";
import { projects } from "./data/projects";
import Footer from "./components/Footer";
import headsign from "./images/headsign_green.webp";
import {
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiAngular,
  SiReact,
  SiVuedotjs,
  SiPostgresql,
  SiLaravel,
  SiHtml5,
  SiTailwindcss,
  SiLinux,
  SiGit,
} from "react-icons/si";

function App() {
  const { theme } = useTheme();
  const scrollToElement = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    {
      id: "hero",
      label: "Home",
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    { id: "bio", label: "About", onClick: () => scrollToElement("bio") },
    {
      id: "skills",
      label: "Skills",
      onClick: () => scrollToElement("skills"),
    },
    {
      id: "projects",
      label: "Projects",
      onClick: () => scrollToElement("projects"),
    },
  ];

  const socialLinks = [
    {
      href: "https://linkedin.com/in/gurkanozil",
      icon: (
        <Linkedin
          className="w-10 h-10 md:w-12 md:h-12"
          aria-label="LinkedIn Profile"
        />
      ),
      label: "LinkedIn Profile",
    },
    {
      href: "mailto:gurkanozil@live.nl",
      icon: (
        <Mail className="w-10 h-10 md:w-12 md:h-12" aria-label="Send Email" />
      ),
      label: "Send Email",
    },
    {
      href: "https://github.com/gurkanozil",
      icon: (
        <Github
          className="w-10 h-10 md:w-12 md:h-12"
          aria-label="GitHub Profile"
        />
      ),
      label: "GitHub Profile",
    },
  ];

  const skillsData = [
    { name: "TypeScript", level: 85, icon: SiTypescript },
    { name: "JavaScript", level: 85, icon: SiJavascript },
    { name: "Node.js", level: 75, icon: SiNodedotjs },
    { name: "Angular", level: 50, icon: SiAngular },
    { name: "React", level: 80, icon: SiReact },
    { name: "Vue.js", level: 60, icon: SiVuedotjs },
    { name: "(Postgre)SQL", level: 70, icon: SiPostgresql },
    { name: "PHP/Laravel", level: 65, icon: SiLaravel },
    { name: "HTML5", level: 95, icon: SiHtml5 },
    { name: "(Tailwind) CSS", level: 90, icon: SiTailwindcss },
    { name: "Git(Hub)", level: 80, icon: SiGit },
    { name: "Linux/Bash", level: 75, icon: SiLinux },
  ];

  return (
    <div className="min-h-dvh bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
      <ThemeToggle />
      <SideNav items={navItems} />
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-dvh shadow-2xl flex flex-col px-2"
      >
        <Sparkles
          className="absolute inset-0"
          color={theme === "dark" ? "#FFFFFF" : "#000000"}
          opacity={theme === "dark" ? 0.5 : 1}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="relative w-64 h-64 mx-auto my-8 transition-transform duration-300 hover:scale-110">
            <img
              src={headsign}
              alt="Gürkan Mahmut Özil - Profile"
              className="rounded-full w-full h-full object-cover border-2 border-emerald-400 dark:border-emerald-600"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Gürkan Mahmut Özil
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-200 mb-2">
            Full Stack Web Developer
          </p>
          <p className="md:text-lg text-gray-700 dark:text-gray-200 mb-4">
            Proficiency in TypeScript, PHP and more...
          </p>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8">
            Welcome to my portfolio!
            <br />
            Glad you came to visit.
            <br />
            <br />
            Scroll down to learn more or contact me through one of these!
          </p>
          <div className="flex justify-center gap-10 md:gap-16 mb-12">
            {socialLinks.map((link) => (
              <a
                href={link.href}
                target={link.href.startsWith("mailto:") ? "_self" : "_blank"}
                rel={
                  link.href.startsWith("mailto:") ? "" : "noopener noreferrer"
                }
                className="text-gray-600 dark:text-gray-300 hover:text-emerald-400 dark:hover:text-emerald-400 transition-transform duration-200 hover:scale-125"
                key={link.href}
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <button
            onClick={() => scrollToElement("bio")}
            className="motion-safe:animate-bounce"
            aria-label="Scroll to About Me section"
          >
            <ChevronDown className="w-16 h-16" />
          </button>
        </motion.div>
      </section>

      {/* Bio Section */}
      <section id="bio" className="min-h-dvh py-20 px-4 md:px-8 shadow-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About Me
          </h2>

          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl"
            >
              My interest in software development began early. A childhood
              fascination with computers, sparked by a simple interaction with
              my father evolved into a lifelong passion.
              <br />
              <br /> This passion led me to pursue a career in software
              development, where I've gained experience in full-stack web
              development, building numerous projects and I've become proficient
              in both front-end and back-end technologies.
              <br />
              <br />I am committed to continuous learning and professional
              development within this ever-evolving field, constantly seeking
              opportunities to enhance my skillset and broaden my knowledge
              base.
              <br />
              <br />I build scalable web applications prioritizing design,
              maintainability, and user experience. I craft responsive frontends
              and robust backends, employing a holistic approach to my work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-8 my-12 p-4"
            >
              <details
                open={window.matchMedia("(min-width: 768px)").matches}
                className="w-full md:w-auto transition-transform duration-500"
              >
                <summary className="flex items-center justify-between cursor-pointer">
                  <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">
                    Technical Expertise
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Full-stack web application development</li>
                  <li>Modern TypeScript and JavaScript frameworks</li>
                  <li>Front-end development and design</li>
                  <li>Back-end development and API design</li>
                  <li>Database design and optimization</li>
                </ul>
              </details>

              <details
                open={window.matchMedia("(min-width: 768px)").matches}
                className="w-full md:w-auto"
              >
                <summary className="flex items-center justify-between cursor-pointer">
                  <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">
                    Professional Approach
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Clean, maintainable codebase</li>
                  <li>User-centric design</li>
                  <li>Agile development practices</li>
                  <li>Strong analytical & problem-solving skills</li>
                  <li>Effective team collaboration</li>
                </ul>
              </details>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="flex justify-center p-12">
          <button
            onClick={() => scrollToElement("skills")}
            className="motion-safe:animate-bounce"
            aria-label="Scroll to Skills section"
          >
            <ChevronDown className="w-16 h-16" />
          </button>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="relative min-h-dvh py-20 px-4 md:px-8 shadow-2xl"
      >
        <Sparkles
          className="absolute inset-0"
          color={theme === "dark" ? "#FFFFFF" : "#000000"}
          opacity={theme === "dark" ? 0.5 : 1}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto relative"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Skills
          </h2>

          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-2xl text-center"
            >
              Here are some of the languages and technologies I'm experienced
              in, and I always want to learn more:
            </motion.p>
            <div className="md:grid md:grid-cols-3 md:gap-16 gap-4 grid-cols-1">
              {skillsData.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="relative group py-4 px-12 md:px-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="flex items-center space-x-4">
                    <skill.icon className="w-10 h-10" />
                    <span className="text-2xl md:text-3xl">{skill.name}</span>
                  </div>
                  <div className="md:absolute -bottom-6 left-0 w-full h-2 dark:bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                      <div
                        className="bg-emerald-500 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div className="flex justify-center p-12">
          <button
            onClick={() => scrollToElement("projects")}
            className="motion-safe:animate-bounce"
            aria-label="Scroll to Projects section"
          >
            <ChevronDown className="w-16 h-16" />
          </button>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-dvh py-20 px-4 md:px-8 shadow-2xl"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          My (Personal) Projects
        </motion.h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={project.id}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
