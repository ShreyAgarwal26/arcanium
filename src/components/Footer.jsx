export default function Footer() {
    return (
      <footer className="bg-indigo-dye py-6 mt-12">
        <div className="max-w-6xl mx-auto text-center text-gray-200">
          © {new Date().getFullYear()} Arcanium. All rights reserved.
        </div>
      </footer>
    )
  }