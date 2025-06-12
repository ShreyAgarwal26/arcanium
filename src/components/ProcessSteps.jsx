// src/components/ProcessSteps.jsx
import React from 'react'
import { motion } from 'framer-motion'

// Your six steps, exactly as provided
const steps = [
  {
    title: 'Pictures And Measurements',
    desc: 'Homeowners simply upload pictures, measurements and their vision to our specialised AI.'
  },
  {
    title: 'Technical Report',
    desc: 'Our AI instantly creates a technical report for contractors, alongside cost estimates, ideal supplies for cost-effectivity and recommendations for verified, local professionals as well as a timeline.'
  },
  {
    title: 'Contractors Bid',
    desc: "Homeowner's release their renovation project onto a marketplace. Contractor's can review the technical report and generate quotes - all online, saving contractors valuable time."
  },
  {
    title: 'Homeowners Accept',
    desc: 'Homeowners accept the best bid and collaborate with the contractors to create escrow-secured payment milestones – with the help of our AI –. Contractors begin work and provide technical progress reports, which our AI converts to non-technical terms.'
  },
  {
    title: 'Material Estimator',
    desc: 'Subcontractors can then use our AI to generate an estimation of the materials needed and their cost, as well as connecting them with the cheapest suppliers.'
  },
  {
    title: 'Project Management',
    desc: 'Contractors can order materials, upload documents and hire sub-contractors all from within the platform.'
  }
]

// Animation variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
}
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  hover: { scale: 1.05, x: 5, boxShadow: '0 15px 25px rgba(0,0,0,0.2)' }
}

// Four different “glow blob” accent styles
const accentVariants = [
  'absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-robin-egg-blue to-picton-blue opacity-30 rounded-full filter blur-xl pointer-events-none',
  'absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-bl from-picton-blue to-indigo-dye opacity-20 rounded-full filter blur-2xl pointer-events-none',
  'absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-indigo-dye to-marian-blue opacity-15 rounded-full filter blur-2xl pointer-events-none',
  'absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-tr from-marian-blue to-picton-blue opacity-25 rounded-full filter blur-lg pointer-events-none'
]

export default function ProcessSteps() {
  return (
    <motion.section
      className="relative py-16 overflow-hidden bg-gunmetal"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="relative mb-8 text-center">
        <h2 className="text-3xl font-display text-robin-egg-blue">How It Works</h2>
      </div>
      {/* Background drifting blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-br from-picton-blue to-robin-egg-blue opacity-20 rounded-full filter blur-3xl"
          animate={{ x: 100, y: -50 }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tr from-indigo-dye to-marian-blue opacity-20 rounded-full filter blur-3xl"
          animate={{ x: -80, y: 60 }}
          transition={{ repeat: Infinity, duration: 35, ease: 'linear' }}
        />
      </div>

      {/* Step cards */}
      <div className="relative flex flex-wrap justify-center gap-8 px-4 max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 flex items-start space-x-4 max-w-md w-full sm:w-1/2 lg:w-1/3 shadow-xl"
            variants={itemVariants}
            whileHover="hover"
          >
            {/* Number badge */}
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center w-10 h-10 bg-picton-blue text-white rounded-full font-semibold">
                {i + 1}
              </span>
            </div>

            {/* Text */}
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white mb-1">{step.title}</h3>
              <p className="text-gray-200 text-sm leading-snug">{step.desc}</p>
            </div>

            {/* Random accent blob */}
            <div className={accentVariants[i % accentVariants.length]} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
