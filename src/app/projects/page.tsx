'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      title: "Badger2040 Project",
      description: "MicroPython-based project for the Badger2040 platform, implementing custom functionality for the e-ink display device.",
      link: "https://github.com/gurkanozil/badger2040",
      tech: ["MicroPython", "IoT"]
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website built with Next.js and Tailwind CSS, featuring responsive design and modern animations.",
      link: "https://github.com/gurkanozil/portfolio",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Email Service Integration",
      description: "Automated email service for CV distribution and contact information sharing using Node.js and Nodemailer.",
      link: "https://github.com/gurkanozil/email-service",
      tech: ["Node.js", "API"]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <Link href="/" className="text-forest-500 hover:text-forest-600 mb-8 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-white mb-8">Recent Projects</h1>
        
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-forest-500 px-2 py-1 rounded text-sm text-white">
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest-500 hover:text-forest-600"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
} 