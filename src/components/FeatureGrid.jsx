
import React from 'react'
import { motion } from 'framer-motion'

// Container variants for staggered card animations
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
}
// Card variants for entry and hover effects
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  hover: { scale: 1.05, rotate: 1, boxShadow: '0 15px 25px rgba(0,0,0,0.2)' }
}

export default function FeatureGrid({ items }) {
  return (
    <motion.section
      className="relative py-16 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Background mesh blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-picton-blue to-robin-egg-blue opacity-20 rounded-full filter blur-3xl"
          animate={{ x: 50, y: 50 }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-indigo-dye to-marian-blue opacity-20 rounded-full filter blur-3xl"
          animate={{ x: -50, y: -50 }}
          transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
        />
      </div>

      <div className="relative flex flex-wrap justify-center gap-8 px-4 max-w-6xl mx-auto">
        {items.map((f, i) => (
          <motion.div
            key={i}
            className="relative bg-white bg-opacity-90 rounded-2xl p-8 text-center backdrop-blur-sm overflow-hidden shadow-xl"
            variants={cardVariants}
            whileHover="hover"
          >
            {/* Decorative gradient accents on each card */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-robin-egg-blue to-picton-blue opacity-30 rounded-full filter blur-xl pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-tl from-picton-blue to-indigo-dye opacity-20 rounded-full filter blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="text-6xl mb-4">{f.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-gunmetal">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
