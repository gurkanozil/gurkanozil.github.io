'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CVSection() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-white mb-4">Curriculum Vitae</h2>
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="bg-gray-800 p-6 rounded-lg cursor-pointer"
        onClick={() => window.open('/CV.pdf', '_blank')}
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 relative">
            <Image
              src="/pdf-icon.png"
              alt="PDF Icon"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="text-white text-lg">Download CV</h3>
            <p className="text-gray-400 text-sm">Click to view or download</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
} 