export default function Roadmap({ stages }) {
    return (
      <section className="py-16 px-4">
        <h2 className="text-3xl font-display text-picton-blue text-center mb-8">Roadmap</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {stages.map((st, i) => (
            <div key={i} className="bg-gunmetal rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{st.title}</h3>
              <ul className="list-disc list-inside text-gray-300">
                {st.items.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    )
  }