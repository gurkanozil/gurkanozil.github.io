//import React from 'react';
import { Linkedin, Mail, Code2, Palette, Database, Github } from 'lucide-react';
//import {ExternalLink, Rocket} from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import Section from './components/Section';
import resume from './Gürkan_Mahmut_Özil.resume.json';

function App() {
  const projectsOld = [
    {
      title: "Tire Inventory",
      description: "With user authentication, an inventory webapp to keep track of tires. Visitable at https://gurkanozil.github.io/tire-inventory/",
      image: "https://github.com/user-attachments/assets/d4924a39-db95-44af-b817-f18473b13361",
      tags: ["Vite, React, Typescript, Firebase/Firestore"],
      link: "https://github.com/gurkanozil/tire-inventory",
    },
    {
      title: "Cat showcase mobile app",
      description: "A mobile app with animations of our two cats, Huzur and Zeytin. Visitable at https://snack.expo.dev/@gurkanozil/cat-showcase-app",
      image: "https://github.com/user-attachments/assets/e094a385-d1cb-4a25-854e-1bf6c398b3fc",
      tags: ["React Native, Typescript"],
      link: "https://github.com/gurkanozil/Cat-showcase-mobile-app",
    },
    {
      title: "Badger2040 GM_OS",
      description: "The Badger2040 is a microcontroller with an e-ink display, based on the RP2040 microchip. In this project i decided to code some custom applications and show them off.",
      image: "https://github.com/user-attachments/assets/4340434d-60f6-4f6b-8f04-d702f3623f4e",
      tags: ["MicroPython, IoT"],
      link: "https://github.com/gurkanozil/Badger2040",
    }
  ];
  const projectsNew = [resume.projects]; // Use the projects from the JSON data

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white">
        <div className="container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">{resume.basics.name}</h1>
            <p className="text-2xl text-emerald-200 mb-8">
              {resume.basics.label}
              <br />
              {resume.basics.summary}
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/gurkanozil" className="hover:text-emerald-300 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/gurkanozil" className="hover:text-emerald-300 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:gurkanozil@live.nl" className="hover:text-emerald-300 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <Section title="What I Do" className="bg-white">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
            <Code2 className="w-12 h-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
            <p className="text-gray-600">Crafting responsive and intuitive user interfaces with modern frameworks and tools.</p>
          </div>
          <div className="p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
            <Database className="w-12 h-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
            <p className="text-gray-600">Building robust and scalable server-side applications and APIs.</p>
          </div>
          <div className="p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
            <Palette className="w-12 h-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-gray-600">Creating beautiful and functional designs that enhance user experience.</p>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section title="Featured Projects" className="bg-gray-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsOld.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section title="Let's Connect" className="bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-600 mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a
            href="mailto:gurkanozil@live.nl"
            className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <Mail className="mr-2" size={20} />
            Get in Touch
          </a>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-emerald-200 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} G.M. Özil.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;