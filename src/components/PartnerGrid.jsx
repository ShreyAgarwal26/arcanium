export default function PartnerGrid({ logos }) {
    return (
      <section className="py-16 px-4">
        <h2 className="text-3xl font-display text-picton-blue text-center mb-8">Partners</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
          {logos.map((src, i) => (
            <img key={i} src={src} alt="Partner" className="max-h-16 mx-auto" />
          ))}
        </div>
      </section>
    )
  }