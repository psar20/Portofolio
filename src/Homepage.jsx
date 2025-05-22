import React from 'react'
import Navbar from './user/navbar'

function Homepage() {
  const hour = new Date().getHours();
  let greeting = '';

  if (hour < 12) {
    greeting = 'Good morning';
  } else if (hour < 17) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good night';
  }

  return (
    <div>
      <Navbar />

      <section className="relative bg-black text-white py-32 px-16 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-50 z-0"></div>

        <div className="max-w-2xl z-10 text-center sm:text-left">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 leading-tight">
            {greeting}<br />
            I am <span className="text-yellow-400">Pandu Surya Adhi Rumpaka</span>
          </h1>
          <p className="text-lg sm:text-xl font-medium tracking-wide">
            Front-end Developer / UI Designer
          </p>
        </div>

        <img
          src="../image/pandu.png"
          alt="Pandu Surya"
          className="absolute right-10 bottom-0 h-3/4 z-0 pointer-events-none filter drop-shadow-2xl animate-float transition-transform duration-500 ease-in-out transform hover:scale-105"
        />
      </section>
    </div>
  )
}

export default Homepage
