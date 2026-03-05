import React from 'react';
import { Menu } from 'lucide-react';

export const Header = () => {
  return (
    <header className="fixed top-4 left-4 right-4 h-20 bg-white/95 backdrop-blur-sm z-50 flex items-center justify-between px-4 md:px-10 transition-all duration-200 border border-gray-100 rounded-2xl shadow-sm">
      <div className="flex items-center md:w-1/3">
        <button className="p-2 md:hidden cursor-pointer">
          <Menu className="w-6 h-6 text-text-dark" />
        </button>
        <nav className="hidden md:flex items-center gap-8 ml-4">
          <a href="#services" className="font-sans text-base font-bold text-text-dark hover:text-brand-green transition-colors">Services</a>
          <a href="#portfolio" className="font-sans text-base font-bold text-text-dark hover:text-brand-green transition-colors">Portfolio</a>
          <a href="#reviews" className="font-sans text-base font-bold text-text-dark hover:text-brand-green transition-colors">Reviews</a>
          <a href="#about" className="font-sans text-base font-bold text-text-dark hover:text-brand-green transition-colors">About Us</a>
        </nav>
      </div>

      <div className="flex justify-center md:w-1/3 max-w-[40%] md:max-w-none">
        <a href="/" className="font-serif text-sm sm:text-lg md:text-2xl font-black text-brand-green tracking-tight truncate block">
          Ashwell Landscapes
        </a>
      </div>

      <div className="flex items-center justify-end md:w-1/3">
        <a href="#quote" className="hidden md:block font-sans text-base font-bold text-text-dark hover:text-brand-green transition-colors mr-6">
          Contact Us
        </a>
        <a href="#quote" className="bg-brand-pink hover:bg-brand-pink-dark text-white font-sans font-bold text-[10px] md:text-sm uppercase tracking-wide py-2 px-3 md:py-3 md:px-6 rounded-md shadow-[0_10px_40px_-10px_rgba(255,0,131,0.5)] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap">
          Free Quote
        </a>
      </div>
    </header>
  );
}
