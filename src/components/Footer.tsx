import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer = () => (
  <footer className="bg-slate-900 text-white py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1 md:col-span-2">
          <a href="/" className="font-serif text-3xl font-black text-brand-green tracking-tight mb-8 inline-block">
            Ashwell Landscapes
          </a>
          <p className="font-sans text-slate-400 max-w-sm mb-10 leading-relaxed">
            Quality Landscapes Since 1985. Creating beautiful outdoor spaces across Surrey, Sussex & London since 1985. Every garden tells a story.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-green transition-all transform hover:scale-110">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-green transition-all transform hover:scale-110">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-sans font-bold text-sm uppercase tracking-[0.2em] mb-8 text-white/50">Services</h4>
          <ul className="flex flex-col gap-5">
            <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Garden Design</a></li>
            <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Hard Landscaping</a></li>
            <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Planting Schemes</a></li>
            <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Maintenance</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-sans font-bold text-sm uppercase tracking-[0.2em] mb-8 text-white/50">Company</h4>
          <ul className="flex flex-col gap-5">
            <li><a href="#" className="text-slate-300 hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Our Portfolio</a></li>
            <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Contact</a></li>
            <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Privacy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Ashwell Landscapes. Designed for Surrey, Sussex & London.
        </p>
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-500">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);
