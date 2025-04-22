import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-[#AAA096] text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold">
          <Link to="/">SkillSprout</Link>
        </div>

        {/* Nav Links */}
        <div className="space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-gray-200 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-gray-200 transition-colors">About</Link>
          <Link to="/login" className="hover:text-gray-200 transition-colors">Login</Link>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar