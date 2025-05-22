import React, { useState } from 'react';
import Navbar from './navbar';

function ContactMe() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div>
      <Navbar />

      <section className="bg-white min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-6">Hubungi Saya</h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl">
          Jika Anda memiliki pertanyaan, saran, atau ingin bekerja sama dalam proyek, silakan kirim pesan melalui formulir di bawah ini.
        </p>

        {isSubmitted ? (
          <div className="bg-blue-50 p-8 rounded-lg shadow-md max-w-xl text-center">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Terima kasih telah menghubungi saya!</h3>
            <p className="text-gray-600">Saya akan segera membalas pesan Anda.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-blue-50 p-8 rounded-lg shadow-md w-full max-w-xl">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Nama</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Pesan</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
              Kirim Pesan
            </button>
          </form>
        )}
      </section>
    </div>
  );
}

export default ContactMe;
