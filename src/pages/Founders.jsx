export default function Founders() {
    return (
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-display text-picton-blue mb-6 text-center">Founders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <img src="/founder1.jpg" alt="Founder 1" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-xl font-medium">Alice Smith</h3>
            <p className="text-gray-300">CEO & AI Lead</p>
          </div>
          <div className="text-center">
            <img src="/founder2.jpg" alt="Founder 2" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-xl font-medium">Bob Lee</h3>
            <p className="text-gray-300">CTO & Product</p>
          </div>
        </div>
      </section>
    )
  }