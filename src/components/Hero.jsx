import React from 'react'
import { motion } from 'framer-motion'

export default function Hero({ title, subtitle, ctaText, ctaHref }) {
  return (
    <motion.section
      className="bg-indigo-dye text-white text-center py-32 px-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
        {title}
      </h1>
      <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
        {subtitle}
      </p>
      <a
        href={ctaHref}
        className="inline-block bg-robin-egg-blue text-black font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-picton-blue transition"
      >
        {ctaText}
      </a>
    </motion.section>
  )
}