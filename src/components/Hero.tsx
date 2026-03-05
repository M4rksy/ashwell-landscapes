import React from 'react';
import { motion } from 'motion/react';

export const Hero = () => (
  <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 overflow-hidden bg-[#F9FAFB]">
    <div className="absolute inset-0 z-0">
      <img
        src="https://res.cloudinary.com/duiaovgje/image/upload/Gemini_Generated_Image_v4tjurv4tjurv4tj_mlxyem"
        alt="Sun-drenched beautiful garden"
        className="w-full h-full object-cover opacity-90"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-[#F9FAFB]/95"></div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto mt-12 md:mt-24"
    >
      <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-slate-900 mb-6 text-balance">
        Expert Garden Design <br />
        <span className="font-bold">in Surrey & London</span>
      </h1>
      <p className="font-sans text-lg md:text-xl text-slate-700 mb-10 max-w-2xl text-balance leading-relaxed">
        Since 1985, delivering quality landscape services from design and build to general maintenance across Surrey, Sussex, Hampshire and Kent.
      </p>

      <a href="#quote" className="bg-brand-pink hover:bg-brand-pink-dark text-white font-sans font-bold text-base uppercase tracking-widest py-5 px-12 rounded-lg shadow-xl cursor-pointer transition-all transform hover:scale-105 active:scale-100">
        Book a Free Consultation
      </a>
    </motion.div>

    <div className="relative z-10 mt-auto pt-20 pb-10 w-full flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <p className="font-sans text-[10px] font-bold text-slate-900 uppercase tracking-[0.3em] opacity-60">Scroll to explore</p>
        <motion.div
          animate={{ height: [48, 24, 48] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] bg-slate-900/20"
        ></motion.div>
      </div>
    </div>
  </section>
);
