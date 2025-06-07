export default function Hero({ title, subtitle, ctaText, ctaHref }) {
    return (
      <section className="bg-indigo-dye py-20 text-center">
        <h1 className="text-5xl font-display mb-4">{title}</h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">{subtitle}</p>
        <a
          href={ctaHref}
          className="inline-block px-8 py-3 bg-robin-egg-blue font-medium rounded-full hover:bg-picton-blue"
        >
          {ctaText}
        </a>
      </section>
    )
  }