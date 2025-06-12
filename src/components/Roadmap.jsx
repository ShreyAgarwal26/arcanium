// src/components/Roadmap.jsx
import React from 'react'
import { motion } from 'framer-motion'

const stages = [
  {
    label: 'Stage 1',
    items: [
      'Whitepaper Release',
      'Website Launch',
      'Secure Preliminary Investment',
      'Concept Development',
    ],
  },
  {
    label: 'Stage 2',
    items: [
      'Platform Architecture Finalised',
      'Concept Released',
      'Legal & Regulatory Consultation',
      'MVP Development',
      'Pilot Area Screening',
    ],
  },
  {
    label: 'Stage 3',
    items: [
      'MVP Completed',
      'Pilot Area Marketing',
      'Build Waitlist Around Pilot Area',
      'Final Go-To-Market Strategy',
    ],
  },
  {
    label: 'Stage 4',
    items: [
      'Pilot Area Rollout',
      'Referral System Established',
      'Conduct User Surveys',
      'Build Strategic Partnerships',
    ],
  },
  {
    label: 'Stage 5',
    items: [
      'Regional Expansion',
      'Launch B2B Solutions For Large Firms',
      'Integrate Third-Party Financing',
      'Implement AI-Generated Renders',
    ],
  },
]

export default function Roadmap() {
  return (
    <section className="relative py-20 px-4 bg-gunmetal overflow-hidden">
      {/* Section Title */}
      <h2 className="text-4xl font-display text-center text-robin-egg-blue mb-16">
        Roadmap
      </h2>

      {/* Timeline container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-picton-blue transform -translate-x-1/2" />

        <div className="space-y-20">
          {stages.map((stage, i) => {
            const isLeft = i % 2 === 0
            return (
              <motion.div
                key={stage.label}
                className="flex w-full items-start"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                {/* Left column */}
                <div
                  className={`w-1/2 pr-8 ${
                    isLeft ? 'text-right' : 'text-left opacity-0'
                  }`}
                >
                  {isLeft && (
                    <div className="inline-block bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                      <h3 className="text-2xl font-semibold text-white mb-3">
                        {stage.label}
                      </h3>
                      <ul className="list-disc list-inside text-gray-200 space-y-1">
                        {stage.items.map((it, j) => (
                          <li key={j}>{it}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Marker */}
                <div className="relative w-0 flex justify-center">
                  <div className="absolute top-3 w-4 h-4 bg-robin-egg-blue rounded-full border-2 border-gunmetal" />
                </div>

                {/* Right column */}
                <div
                  className={`w-1/2 pl-8 ${
                    !isLeft ? 'text-left' : 'text-right opacity-0'
                  }`}
                >
                  {!isLeft && (
                    <div className="inline-block bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                      <h3 className="text-2xl font-semibold text-white mb-3">
                        {stage.label}
                      </h3>
                      <ul className="list-disc list-inside text-gray-200 space-y-1">
                        {stage.items.map((it, j) => (
                          <li key={j}>{it}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
