import React from 'react';
import Navbar from './navbar';

function Experience() {
  return (
    <div className="bg-gradient-to-b from-blue-950 via-black to-black text-white min-h-screen">
      <Navbar />

      <section className="text-center px-6 md:px-20 py-20" id="experience">
        <h2 className="text-4xl font-bold text-yellow-400 mb-16 relative inline-block after:content-[''] after:w-20 after:h-1 after:bg-yellow-400 after:block after:mx-auto after:mt-2">
          Experience
        </h2>

        <div className="mb-24">
          <h3 className="text-2xl font-semibold text-yellow-300 mb-4">Pengalaman Magang</h3>
          <p className="italic text-gray-300 mb-2">Junior Frontend Developer | LLDIKTI Wilayah 7 Jawa Timur</p>
          <p className="italic text-gray-400 mb-6">(September 2024 – Desember 2024)</p>

          <div className="md:flex justify-center gap-10 items-center">
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl max-w-2xl text-left hover:scale-[1.02] transition-transform duration-300">
              <p className="leading-relaxed text-sm md:text-base text-gray-200">
                🚀 Mengembangkan sistem web Laravel 11 bernama <strong>KLIK 7</strong> untuk pengajuan tunjangan dan manajemen kinerja dosen.
                <br /><br />
                📄 Menyusun dokumentasi teknis dan desain logo sebagai panduan dan identitas produk.
                <br /><br />
                🎯 Berpartisipasi dalam presentasi kepada stakeholder guna mendapatkan feedback dan validasi fitur.
              </p>
              <img src="../image/magang.jpg" alt="Magang" className="rounded-lg mt-6 shadow-lg w-full object-cover max-h-72" />
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h3 className="text-2xl font-semibold text-yellow-300 mb-4">Pengalaman Organisasi</h3>
          <p className="italic text-gray-300 mb-6">Anggota UKM Fotografi UNESA (Sep 2022 – Feb 2024)</p>

          <div className="md:flex justify-center gap-10 items-center">
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl max-w-2xl text-left hover:scale-[1.02] transition-transform duration-300">
              <p className="leading-relaxed text-sm md:text-base text-gray-200">
                📷 Aktif dalam pelatihan dan workshop fotografi, serta dokumentasi berbagai acara kampus.
                <br /><br />
                🖼️ Berkontribusi dalam pameran fotografi untuk berbagi karya dan membangun jaringan komunitas.
              </p>
              <img src="../image/organisasi.jpg" alt="Organisasi" className="rounded-lg mt-6 shadow-lg w-full object-cover max-h-72" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 text-black py-20 px-6 md:px-20" id="project">
        <h2 className="text-4xl font-bold text-center mb-16 relative inline-block after:content-[''] after:w-20 after:h-1 after:bg-yellow-500 after:block after:mx-auto after:mt-2">
          Project
        </h2>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-[1.02] transition-transform duration-300">
            <img src="../image/redesain.png" alt="Redesain Website" className="w-full object-cover h-48" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-yellow-500">Redesain Website</h3>
              <p className="text-gray-700 text-sm">
                Mendesain ulang tampilan Website Pemerintah Kab. Pacitan menggunakan Figma dan prototipe modern yang responsif.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-[1.02] transition-transform duration-300">
            <img src="../image/cinemain.png" alt="Cinemain App" className="w-full object-cover h-48" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-yellow-500">CINEMAIN</h3>
              <p className="text-gray-700 text-sm">
                UI/UX desain aplikasi pemesanan tiket bioskop menggunakan Figma dengan tampilan segar dan intuitif.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-[1.02] transition-transform duration-300">
            <img src="../image/klik7.png" alt="KLIK 7 Project" className="w-full object-cover h-48" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-yellow-500">KLIK 7</h3>
              <p className="text-gray-700 text-sm">
                Sistem web berbasis Laravel 11 untuk mendukung pengajuan tunjangan dan pengelolaan kinerja dosen secara efisien.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
