import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import { reviews } from '../constants';

export const Reviews = () => (
  <section className="w-full bg-white py-24 md:py-32" id="reviews">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <div className="flex justify-center gap-1 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-10 h-10 fill-brand-green text-brand-green" />
          ))}
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Loved by Our Clients
        </h2>
        <p className="font-sans text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Don't just take our word for it. Here's what our customers across Surrey, Sussex & London have to say.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            whileHover={{ y: -10 }}
            className="bg-[#F9FAFB] p-10 rounded-3xl shadow-sm hover:shadow-xl cursor-pointer transition-all duration-300 border border-gray-50"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-brand-green text-brand-green" />
              ))}
            </div>
            <p className="font-sans text-base text-slate-700 leading-relaxed mb-8 italic">
              "{review.text}"
            </p>
            <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center font-bold text-brand-green">
                {review.name[0]}
              </div>
              <div>
                <p className="font-sans font-bold text-slate-900">{review.name}</p>
                <p className="font-sans text-xs text-slate-500 uppercase tracking-widest">{review.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <a href="#quote" className="inline-block bg-white border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-sans font-bold text-sm uppercase tracking-widest py-5 px-12 rounded-lg cursor-pointer transition-all transform hover:shadow-lg">
          Get Your Free Quote
        </a>
      </div>
    </div>
  </section>
);
