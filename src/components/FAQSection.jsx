// src/components/FAQSection.jsx
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQS = [
  {
    q: 'How accurate are AI estimates?',
    a: `Our AI leverages thousands of real renovation projects to generate 
       cost estimates that are typically within a 5% margin of error.`
  },
  {
    q: 'Can I change payment milestones?',
    a: `Yes—once your project is live, you can adjust milestone amounts and 
       schedules at any time from your dashboard.`
  },
  {
    q: 'What geographic areas are supported?',
    a: `We currently support all major U.S. markets and select Canadian cities, 
       with more regions coming soon.`
  },
  {
    q: 'Is my data secure?',
    a: `Absolutely. All uploads and communications are encrypted in transit (TLS) 
       and at rest (AES-256). We follow industry best practices and run regular audits.`
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="relative py-20 px-4 bg-gunmetal overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-robin-egg-blue to-picton-blue opacity-20 rounded-full filter blur-3xl pointer-events-none" />

      <h2 className="text-4xl font-display text-center text-robin-egg-blue mb-12">
        FAQs
      </h2>

      <div className="relative max-w-4xl mx-auto grid gap-8 sm:grid-cols-2">
        {FAQS.map((item, idx) => {
          const isOpen = openIndex === idx
          return (
            <motion.div
              key={idx}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex justify-between items-center px-6 py-4 focus:outline-none"
              >
                <span className="text-lg font-medium text-white">
                  {item.q}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  className="text-white font-bold text-2xl"
                  transition={{ duration: 0.2 }}
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="px-6 pb-6 text-gray-200 text-sm leading-relaxed"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
