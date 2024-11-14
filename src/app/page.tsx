'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl px-4"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="mb-8 cursor-pointer"
        >
          <Link href="/about">
            <Image
              src="/headshot.png"
              alt="Profile"
              width={150}
              height={150}
              className="rounded-full mx-auto border-4 border-forest-500"
            />
          </Link>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-white mb-2"
        >
          G.M. Özil
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-gray-400 mb-4"
        >
          Software Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-300 mb-8"
        >
          Full-stack developer with experience in C#, PHP, and Python. 
          Check out my <Link href="/about" className="text-forest-500 hover:text-forest-600">about page</Link> or 
          view my <Link href="/projects" className="text-forest-500 hover:text-forest-600">recent projects</Link>.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="space-x-4"
        >
          <a
            href="https://linkedin.com/in/gurkanozil"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-forest-500 hover:bg-forest-600 text-white rounded-lg transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/gurkanozil"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-forest-500 hover:bg-forest-600 text-white rounded-lg transition-colors duration-300"
          >
            GitHub
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}
