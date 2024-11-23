import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Palette, Database, Rocket } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import Section from './components/Section';

function App() {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "Full-stack dashboard with real-time analytics, inventory management, and sales tracking. Built with React, Node.js, and MongoDB.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
      tags: ["React", "Node.js", "MongoDB", "Redux"],
      link: "#"
    },
    {
      title: "AI Content Generator",
      description: "Web application that leverages OpenAI's GPT to generate and optimize content for marketing teams.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000",
      tags: ["TypeScript", "Next.js", "OpenAI", "TailwindCSS"],
      link: "#"
    },
    {
      title: "Real Estate Platform",
      description: "Modern property listing platform with virtual tours and interactive maps integration.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2000",
      tags: ["React", "Firebase", "Google Maps API"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white">
        <div className="container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">G.M. Özil</h1>
            <p className="text-2xl text-emerald-200 mb-8">Full Stack Web Developer crafting exceptional digital experiences</p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="hover:text-emerald-300 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className="hover:text-emerald-300 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:contact@example.com" className="hover:text-emerald-300 transition-colors">
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
            href="mailto:contact@example.com"
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
          <p>© {new Date().getFullYear()} G.M. Özil. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;