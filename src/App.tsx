//import React from 'react';
import { Linkedin, Mail, Code2, Palette, Database, Github } from 'lucide-react';
//import {ExternalLink, Rocket} from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import Section from './components/Section';

function App() {
  const projects = [
    {
      title: "Tire Inventory",
      description: "With user authentication, an inventory webapp to keep track of tires. Visitable at https://gurkanozil.github.io/tire-inventory/",
      image: "https://private-user-images.githubusercontent.com/78043718/390528489-d4924a39-db95-44af-b817-f18473b13361.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzI3MzI4MTgsIm5iZiI6MTczMjczMjUxOCwicGF0aCI6Ii83ODA0MzcxOC8zOTA1Mjg0ODktZDQ5MjRhMzktZGI5NS00NGFmLWI4MTctZjE4NDczYjEzMzYxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDExMjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMTI3VDE4MzUxOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWM1NzNiZGI2N2MxYjQ2MjIzYzQ2Mjc1OGNhNWIyZjQ4YWMwNmMwZTIxNzJjYmQyNzdmYzE2NjdlNmNmMThkNzMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.0hkEPIcbt-uVXygiTGwFtBxAkP2mLsqlBZATYmPZ5Vc",
      tags: ["Vite, React, Typescript, Firebase/Firestore"],
      link: "https://github.com/gurkanozil/tire-inventory",
    },
    {
      title: "Cat showcase mobile app",
      description: "A mobile app with animations of our two cats, Huzur and Zeytin. Visitable at https://snack.expo.dev/@gurkanozil/cat-showcase-app",
      image: "https://private-user-images.githubusercontent.com/78043718/390528686-e094a385-d1cb-4a25-854e-1bf6c398b3fc.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzI3MzI0OTcsIm5iZiI6MTczMjczMjE5NywicGF0aCI6Ii83ODA0MzcxOC8zOTA1Mjg2ODYtZTA5NGEzODUtZDFjYi00YTI1LTg1NGUtMWJmNmMzOThiM2ZjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDExMjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMTI3VDE4Mjk1N1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTU1ZGVmMDhmMjY1MjhjMDZiYmUzZGI1ZTk3MDMzNWZlZDhlOTExNmM1YmNiOTExMGQyYTBhNDE4ZTE2ZTNiZGUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.LWeqb099Cbzg7CYt6e4HbklWJHXUv5rIn7JckGuQpTM",
      tags: ["React Native, Typescript"],
      link: "https://github.com/gurkanozil/Cat-showcase-mobile-app",
    },
    {
      title: "Badger2040 GM_OS",
      description: "The Badger2040 is a microcontroller with an e-ink display, based on the RP2040 microchip. In this project i decided to code some custom applications and show them off.",
      image: "https://private-user-images.githubusercontent.com/78043718/390534577-4340434d-60f6-4f6b-8f04-d702f3623f4e.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzI3MzM5MDEsIm5iZiI6MTczMjczMzYwMSwicGF0aCI6Ii83ODA0MzcxOC8zOTA1MzQ1NzctNDM0MDQzNGQtNjBmNi00ZjZiLThmMDQtZDcwMmYzNjIzZjRlLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDExMjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMTI3VDE4NTMyMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTY4MDA3Yzk4YjgzZDMxYmJiOGJhMDU4MTNmNmM5MGExMTY1ZjM0ZmNjYzQwMWY3MTNlOTc0YWE5ZjA1ZTE0NGImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.QpQxr32t4oJMq_NumEgqT3d5NXsSklUlkEfmTOWYPEw",
      tags: ["MicroPython, IoT"],
      link: "https://github.com/gurkanozil/Badger2040",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white">
        <div className="container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">G.M. Özil</h1>
            <p className="text-2xl text-emerald-200 mb-8">
              Full Stack Developer | Software Engineer | Lifelong Learner
              <br />
              With 5+ years of experience, I specialize in building scalable web applications using React, TypeScript, and other modern technologies.
              <br />
              Passionate about continuous learning and creating impactful solutions.
              <br />
              Fluent in English, Dutch, and Turkish.
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
          {projects.map((project, index) => (
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