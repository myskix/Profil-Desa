import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-4 px-4 pointer-events-none">
      <nav className={`pointer-events-auto w-full max-w-5xl rounded-full transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg border border-gray-100 py-2' : 'bg-white shadow-md border border-gray-100 py-3'
        }`}>
        <div className="px-6 md:px-8">
          <div className="flex justify-between items-center h-12">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
                Pulau Lancang
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1 border border-gray-100 rounded-full px-2 py-1 bg-gray-50/50">
              <Link to="/" className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 outline-none ${isActive('/') ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'}`}>Beranda</Link>
              <Link to="/profil" className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 outline-none ${isActive('/profil') ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'}`}>Profil</Link>
              <Link to="/budaya" className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 outline-none ${isActive('/budaya') ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'}`}>Budaya</Link>
              <Link to="/potensi" className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 outline-none ${isActive('/potensi') ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'}`}>Potensi</Link>
            </div>

            <div className="hidden md:flex items-center">
              <Link to="/kontak">
                <Button variant="primary" className="!py-2 !px-5 text-sm">Hubungi Kami</Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-900 hover:text-accent focus:outline-none p-2 bg-gray-50 rounded-full"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden">
            <div className="px-4 py-4 space-y-2">
              <Link to="/" className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${isActive('/') ? 'bg-gray-900 text-white' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`} onClick={() => setIsOpen(false)}>Beranda</Link>
              <Link to="/profil" className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${isActive('/profil') ? 'bg-gray-900 text-white' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`} onClick={() => setIsOpen(false)}>Profil</Link>
              <Link to="/budaya" className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${isActive('/budaya') ? 'bg-gray-900 text-white' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`} onClick={() => setIsOpen(false)}>Budaya</Link>
              <Link to="/potensi" className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${isActive('/potensi') ? 'bg-gray-900 text-white' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`} onClick={() => setIsOpen(false)}>Potensi</Link>

              <div className="pt-2">
                <Link to="/kontak" onClick={() => setIsOpen(false)}>
                  <Button variant="accent" className="w-full">Hubungi Kami</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
