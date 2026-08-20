import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          
          {/* 1. Identitas */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              Desa Pulau Lancang
            </h3>
            <p className="text-gray-900 font-medium text-sm mb-4">
              Kecamatan Benai,<br />
              Kabupaten Kuantan Singingi, Riau
            </p>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Media informasi digital untuk mengenal profil, budaya, dan potensi Desa Pulau Lancang.
            </p>
          </div>
          
          {/* 2. Navigasi */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Navigasi</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-500 hover:text-accent font-medium transition-colors">Beranda</Link></li>
              <li><Link to="/profil" className="text-gray-500 hover:text-accent font-medium transition-colors">Profil</Link></li>
              <li><Link to="/budaya" className="text-gray-500 hover:text-accent font-medium transition-colors">Peta Budaya</Link></li>
              <li><Link to="/potensi" className="text-gray-500 hover:text-accent font-medium transition-colors">Potensi</Link></li>
              <li><Link to="/kontak" className="text-gray-500 hover:text-accent font-medium transition-colors">Kontak</Link></li>
            </ul>
          </div>
          
          {/* 3. Informasi Website */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Informasi Website</h3>
            <p className="text-gray-900 font-bold mb-2">
              Profil Digital Desa Pulau Lancang
            </p>
            <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
              Dikembangkan sebagai bagian dari program KKN Reguler Kelompok 82 Universitas Muhammadiyah Riau, 2026.
            </p>
          </div>

        </div>
        
        {/* Bagian Bawah */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-medium text-gray-400">
            &copy; 2026 Desa Pulau Lancang. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
