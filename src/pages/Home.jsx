import Hero from '../components/Hero'
import FeatureGrid from '../components/FeatureGrid'
import ProcessSteps from '../components/ProcessSteps'
import Roadmap from '../components/Roadmap'
import FAQAccordion from '../components/FAQAccordion'
import PartnerGrid from '../components/PartnerGrid'

export default function Home() {
  return (
    <>      
      <Hero
        title="Arcanium: Smart Renovations"
        subtitle="Streamline your home projects with AI-driven transparency."
        ctaText="Get Started"
        ctaHref="#features"
      />
      <section id="features" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-display text-picton-blue text-center mb-8">Features</h2>
        <FeatureGrid items={[
          { icon: '📊', title: 'AI-Powered Reports', desc: 'Instant insights for your renovation.' },
          { icon: '🔒', title: 'Secure Payments', desc: 'Milestone releases keep you safe.' },
          { icon: '🤝', title: 'Trusted Contractors', desc: 'Match with vetted pros.' }
        ]} />
      </section>
      <ProcessSteps steps={[
        { title: 'Upload Photos', desc: 'Snap and send project images.' },
        { title: 'Generate Report', desc: 'AI analyzes and creates cost breakdown.' },
        { title: 'Match Contractors', desc: 'Get matched with top-rated pros.' }
      ]} />
      <Roadmap stages={[
        { title: 'Q1 2025', items: ['MVP Launch', 'Beta user signup'] },
        { title: 'Q2 2025', items: ['API integrations', 'Mobile app'] }
      ]} />
      <FAQAccordion faqs={[
        { q: 'How accurate are reports?', a: 'Our AI uses large datasets…' },
        { q: 'What payment methods?', a: 'We accept…' }
      ]} />
      <PartnerGrid logos={[ '/partner1.svg', '/partner2.svg', '/partner3.svg', '/partner4.svg' ]} />
    </>
  )
}