export default function ProcessSteps({ steps }) {
    return (
      <section className="py-16 px-4 bg-gunmetal-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display text-picton-blue text-center mb-8">How It Works</h2>
          <ol className="space-y-6">
            {steps.map((s, i) => (
              <li key={i} className="flex items-start">
                <span className="flex-shrink-0 inline-block w-8 h-8 bg-robin-egg-blue font-medium rounded-full text-gunmetal text-center mr-4">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="text-gray-300">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    )
  }