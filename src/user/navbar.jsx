import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">My Portofolio</h1>
        <ul className="flex space-x-10">
          <li>
            <Link to="/" className="text-white hover:text-yellow-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-yellow-300">About me</Link>
          </li>
          <li>
            <Link to="/experience" className="text-white hover:text-yellow-300">Experience</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-yellow-300">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
