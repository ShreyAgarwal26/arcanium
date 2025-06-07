import { Link } from 'react-router-dom'
// import logo from '../logo.svg'

export default function Navbar() {
  return (
    <nav className="bg-gunmetal/90 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* <Link to="/">
          <img src={logo} alt="Arcanium" className="h-10" />
        </Link> */}
        <div className="space-x-6">
          <Link to="/" className="font-medium hover:text-picton-blue">Home</Link>
          <Link to="/contact" className="font-medium hover:text-picton-blue">Contact</Link>
        </div>
      </div>
    </nav>
  )
}