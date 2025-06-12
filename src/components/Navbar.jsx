import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/arcaniumlabs_logo.webp'

export default function Navbar() {
  return (
    <nav className="bg-black shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo & Site Name */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Arcanium logo" className="h-16 w-auto" />
          <span className="text-6xl font-bold text-white">Arcanium</span>
        </Link>

        {/* Static Nav Links with underline and hover box */}
        <div className="flex space-x-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `font-medium transition-all duration-200 border-b-2 border-robin-egg-blue ${
                isActive
                  ? 'bg-robin-egg-blue text-black px-2 py-1 rounded border-b-0'
                  : 'text-white hover:bg-robin-egg-blue hover:text-black hover:px-2 hover:py-1 hover:rounded hover:border-b-0'
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/pitch"
            className={({ isActive }) =>
              `font-medium transition-all duration-200 border-b-2 border-robin-egg-blue ${
                isActive
                  ? 'bg-robin-egg-blue text-black px-2 py-1 rounded border-b-0'
                  : 'text-white hover:bg-robin-egg-blue hover:text-black hover:px-2 hover:py-1 hover:rounded hover:border-b-0'
              }`
            }
          >
            Pitch Deck
          </NavLink>

          <NavLink
            to="/founders"
            className={({ isActive }) =>
              `font-medium transition-all duration-200 border-b-2 border-robin-egg-blue ${
                isActive
                  ? 'bg-robin-egg-blue text-black px-2 py-1 rounded border-b-0'
                  : 'text-white hover:bg-robin-egg-blue hover:text-black hover:px-2 hover:py-1 hover:rounded hover:border-b-0'
              }`
            }
          >
            Founders
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-medium transition-all duration-200 border-b-2 border-robin-egg-blue ${
                isActive
                  ? 'bg-robin-egg-blue text-black px-2 py-1 rounded border-b-0'
                  : 'text-white hover:bg-robin-egg-blue hover:text-black hover:px-2 hover:py-1 hover:rounded hover:border-b-0'
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  )
}