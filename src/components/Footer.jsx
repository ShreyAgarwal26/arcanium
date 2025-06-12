
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-12 pb-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* About */}
        <div>
          <h4 className="text-white text-xl font-semibold mb-4">About Arcanium</h4>
          <p className="text-sm leading-relaxed">
            Arcanium empowers homeowners with AI-driven renovation planning, secure milestone payments,
            and Trusted Pro matching for a seamless build experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/pitch" className="hover:text-white transition">Pitch Deck</Link></li>
            <li><Link to="/founders" className="hover:text-white transition">Founders</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h4 className="text-white text-xl font-semibold mb-4">Connect With Us</h4>
          <p className="text-sm mb-2">
            <strong>Email:</strong> <a href="mailto:info@arcanium.com" className="hover:text-white transition">info@arcanium.com</a>
          </p>
          <p className="text-sm mb-4">
            <strong>Phone:</strong> <a href="tel:+1234567890" className="hover:text-white transition">(123) 456-7890</a>
          </p>
          <div className="flex space-x-4">
            <a href="#" aria-label="X" className="p-2 bg-gray-800 rounded-full hover:bg-robin-egg-blue transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.364 5.636a1 1 0 00-1.414-1.414L12 9.172 7.05 4.222a1 1 0 00-1.414 1.414L10.828 12l-5.192 5.192a1 1 0 001.414 1.414L12 14.828l4.95 4.95a1 1 0 001.414-1.414L13.172 12l5.192-5.192z" />
            </svg>
          </a>
            <a href="#" aria-label="LinkedIn" className="p-2 bg-gray-800 rounded-full hover:bg-robin-egg-blue transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14..." />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="p-2 bg-gray-800 rounded-full hover:bg-robin-egg-blue transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163..." />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Arcanium. All rights reserved.
      </div>
    </footer>
  )
}