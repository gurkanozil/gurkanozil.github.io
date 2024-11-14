'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import CVSection from '../components/CVSection'

export default function About() {
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
        
        <motion.div className="space-y-12 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Professional Summary</h2>
            <p className="leading-relaxed">
              A dedicated Software Developer with a strong foundation in full-stack development. 
              Experienced in C#, PHP, SQL, and Python, with a particular interest in web technologies 
              and IoT projects. Demonstrates strong problem-solving abilities through personal projects 
              and formal education, combining technical expertise with a passion for creating efficient, 
              user-friendly solutions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Education</h2>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl text-white mb-2">MBO Software Development</h3>
              <p className="text-gray-400">Core Technologies:</p>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>C# Development</li>
                <li>PHP/SQL</li>
                <li>Android App Development</li>
              </ul>
            </div>
          </section>

          <CVSection />

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Languages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-white">Dutch</h3>
                <p className="text-gray-400">Native</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-white">Turkish</h3>
                <p className="text-gray-400">Native</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-white">English</h3>
                <p className="text-gray-400">Full Professional Proficiency</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Professional Goals</h2>
            <p className="leading-relaxed">
              Currently focused on advancing my career in full-stack development, with the aim of 
              achieving senior-level expertise. Committed to continuous learning and gaining hands-on 
              experience with modern web technologies and best practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Interests & Hobbies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl text-white mb-2">Intellectual Pursuits</h3>
                <p>Philosophy and Theology studies</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl text-white mb-2">Physical Activities</h3>
                <ul className="list-disc list-inside">
                  <li>Automotive mechanics</li>
                  <li>Motorcycle maintenance</li>
                  <li>Weight training</li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
            <div className="bg-gray-800 p-6 rounded-lg">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="font-semibold text-white mr-2">Email:</span>
                  <a href="mailto:gurkanozil@live.nl" className="text-forest-500 hover:text-forest-600">
                    gurkanozil@live.nl
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="font-semibold text-white mr-2">LinkedIn:</span>
                  <a href="https://linkedin.com/in/gurkanozil" target="_blank" rel="noopener noreferrer" className="text-forest-500 hover:text-forest-600">
                    linkedin.com/in/gurkanozil
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="font-semibold text-white mr-2">GitHub:</span>
                  <a href="https://github.com/gurkanozil" target="_blank" rel="noopener noreferrer" className="text-forest-500 hover:text-forest-600">
                    github.com/gurkanozil
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </motion.div>
      </motion.div>
    </div>
  )
} 