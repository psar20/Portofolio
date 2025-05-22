import React from 'react';
import Navbar from './navbar';
import { FaSchool, FaUniversity, FaLaptopCode, FaGlobe } from 'react-icons/fa';

function AboutMe() {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen">
      <Navbar />

      <section className="text-center py-24 px-8 relative">
        <img
          src="../image/profile.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg border-4 border-white"
        />
        <h2 className="text-4xl font-extrabold text-blue-800 mb-4">About Me</h2>
        <p className="max-w-3xl mx-auto text-lg leading-7 text-gray-700">
          Saya adalah mahasiswa Teknik Informatika di Universitas Negeri Surabaya, saat ini berada di semester 6.
          Dengan minat yang kuat dalam Frontend Development, saya berkomitmen untuk menciptakan antarmuka pengguna yang fungsional dan responsif.
          Saya memiliki motivasi tinggi untuk terus belajar, terutama dalam pengembangan web menggunakan HTML, CSS, JavaScript, dan Laravel.
        </p>
      </section>

      <div className="w-full h-[2px] bg-blue-200 my-10"></div>

      <section className="text-center py-24 px-8 bg-blue-50">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-10">Education</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          <div className="bg-white p-6 rounded-xl shadow-xl hover:scale-105 transition">
            <FaSchool className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">SMA Negeri 4 Jember</h3>
            <p className="text-gray-700">Jurusan MIPA<br />(2019 - 2022)</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-xl hover:scale-105 transition">
            <FaUniversity className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Universitas Negeri Surabaya</h3>
            <p className="text-gray-700">S1 Teknik Informatika (IPK 3.50)<br />(2022 - Sekarang)</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-xl hover:scale-105 transition">
            <FaLaptopCode className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Course</h3>
            <ul className="text-left text-gray-700 list-disc pl-5">
              <li><strong>MySkill (Mei 2024)</strong><br />UI/UX & Backend Dev</li>
              <li className="mt-2"><strong>Red Hat Academy</strong><br />RH104 & RH124</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-xl hover:scale-105 transition">
            <FaGlobe className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Bootcamp</h3>
            <ul className="text-left text-gray-700 list-disc pl-5">
              <li><strong>Leaguage Center</strong><br />English Program</li>
              <li className="mt-2"><strong>Celerates Mastery</strong><br />Web Dev & UI/UX</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
