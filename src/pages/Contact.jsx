export default function Contact() {
    return (
      <section className="py-16 px-4 max-w-xl mx-auto">
        <h2 className="text-3xl font-display text-picton-blue mb-6 text-center">Contact Us</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-indigo-dye placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-indigo-dye placeholder-gray-400"
          />
          <textarea
            rows="4"
            placeholder="Message"
            className="w-full p-3 rounded bg-indigo-dye placeholder-gray-400"
          />
          <button
            type="submit"
            className="w-full py-3 font-medium rounded bg-robin-egg-blue hover:bg-picton-blue"
          >
            Send Message
          </button>
        </form>
      </section>
    )
  }