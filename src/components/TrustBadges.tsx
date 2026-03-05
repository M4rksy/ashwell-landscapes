import React from 'react';
import { ShieldCheck, Trophy, Clock } from 'lucide-react';

export const TrustBadges = () => (
  <section className="w-full py-12 bg-white border-b border-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-8 h-8 text-[#2D5A27]" />
          <span className="font-bold uppercase tracking-tighter text-xl">Fully Insured</span>
        </div>
        <div className="flex items-center gap-2">
          <Trophy className="w-8 h-8 text-[#2D5A27]" />
          <span className="font-bold uppercase tracking-tighter text-xl">Award Winning</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-8 h-8 text-[#2D5A27]" />
          <span className="font-bold uppercase tracking-tighter text-xl">10+ Years Exp.</span>
        </div>
      </div>
    </div>
  </section>
);
