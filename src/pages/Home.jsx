import React from 'react'
import Hero from '../components/Hero'
import FeatureGrid from '../components/FeatureGrid'
import ProcessSteps from '../components/ProcessSteps'
import Roadmap from '../components/Roadmap'
import FAQSection from '../components/FAQSection'
import PartnerGrid from '../components/PartnerGrid'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Arcanium: Smart Renovations"
        subtitle="Democratising Home Renovations By Enhancing Accessibility and Transparency"
        ctaText="Get Started"
        ctaHref="#features"
      />

      {/* About Section with animations */}
      <motion.section
        className="bg-gunmetal py-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-display text-white">About Arcanium</h2>
            <p className="text-gray-300 leading-relaxed">
              Managing home renovations can be overwhelming, with delays, miscommunications, and
              unexpected costs. Arcanium simplifies the process with AI-powered project planning,
              real-time tracking, milestone payments, and contractor matching—all in one platform.
              Upload your ideas with pictures and measurements, and receive instant cost estimates,
              technical reports, verified local professional recommendations, and suitable supply
              wholesalers. Track progress seamlessly, manage budgets with milestone-based payments,
              and enjoy stress-free renovations from start to finish. Real estate developers benefit
              from centralized management of payments, blueprints, subcontractors, material estimates,
              and revenue forecasts.
            </p>
            <ul className="space-y-3">
              {[
                'AI-Powered Reports',
                'End-to-End Management',
                'Secure Milestone Payments',
                'Smart Contractors Matching',
                'Larger Profits For Professionals',
                'Lower Costs For Homeowners'
              ].map((feature, i) => (
                <motion.li
                  key={i}
                  className="flex items-center text-gray-300"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-robin-egg-blue mr-2">✦</span>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/about-graphic.svg"
              alt="About Arcanium"
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Rest of the page as before */}
      <section id="features" className="py-16 px-4 bg-gray-50">
        <h2 className="text-3xl font-display text-center text-gunmetal mb-8">Key Features</h2>
        <FeatureGrid items={[
          { icon: '📊', title: 'AI-Powered Reports', desc: 'Instant insights and cost breakdowns.' },
          { icon: '🔒', title: 'Secure Payments', desc: 'Milestone-based escrow management.' },
          { icon: '🤝', title: 'Smart Contractor Matching', desc: 'Connect with top-rated pros.' },
          { icon: '📈', title: 'Larger Profits', desc: 'Optimize margins for professionals.' },
          { icon: '💰', title: 'Lower Costs', desc: 'Competitive pricing for homeowners.' }
        ]} />
      </section>

      <ProcessSteps steps={[
        { title: 'Pictures & Measurements', desc: 'Upload your vision and details.' },
        { title: 'Technical Report', desc: 'AI generates reports & estimates.' },
        { title: 'Contractor Bidding', desc: 'Pros bid based on the report.' },
        { title: 'Accept & Collaborate', desc: 'Select bids & manage milestones.' },
        { title: 'Material Estimation', desc: 'AI calculates materials & costs.' },
        { title: 'Project Management', desc: 'Track progress and documents.' }
      ]} />

      <section className="py-16 px-4">
        <h2 className="text-3xl font-display text-center text-gunmetal mb-8">Roadmap</h2>
        <Roadmap stages={[
          { title:'Stage 1', items:['Whitepaper Release','Website Launch','Secure Investment','Concept Dev'] },
          { title:'Stage 2', items:['Platform Architecture','Legal Consultation','MVP Dev','Pilot Screening'] },
          { title:'Stage 3', items:['MVP Complete','Pilot Marketing','Waitlist Growth','Go-To-Market'] },
          { title:'Stage 4', items:['Pilot Rollout','Referral System','User Surveys','Partnerships'] },
          { title:'Stage 5', items:['Regional Expansion','B2B Solutions','Financing Integrations','AI Renders'] }
        ]} />
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <FAQSection />
      </section>

      <section className="py-16 px-4">
        <h2 className="text-3xl font-display text-center text-gunmetal mb-8">Trusted By</h2>
        <PartnerGrid logos={[ '/partner1.svg','/partner2.svg','/partner3.svg','/partner4.svg' ]} />
      </section>
    </>
  )
}