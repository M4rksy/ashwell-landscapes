import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const ContactCTA = () => (
    <section className="w-full bg-[#F9FAFB] py-24 md:py-32" id="quote">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">

            <div className="flex flex-col justify-center">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    Ready to transform your outdoor space?
                </h2>
                <p className="font-sans text-lg text-slate-700 mb-10 max-w-lg leading-relaxed">
                    Book a free initial consultation. We'll discuss your unique vision, evaluate your garden's potential, and outline a tailored roadmap.
                </p>

                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4 text-slate-700 hover:text-brand-green transition-colors cursor-pointer w-max">
                        <div className="w-12 h-12 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center">
                            <Phone className="w-5 h-5 text-brand-green" />
                        </div>
                        <span className="font-sans text-lg font-bold">01372 619422</span>
                    </div>
                    <div className="flex items-center gap-4 text-slate-700 hover:text-brand-green transition-colors cursor-pointer w-max">
                        <div className="w-12 h-12 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center">
                            <Mail className="w-5 h-5 text-brand-green" />
                        </div>
                        <span className="font-sans text-lg font-bold">info@ashwell.tv</span>
                    </div>
                    <div className="flex items-center gap-4 text-slate-700 hover:text-brand-green transition-colors cursor-pointer w-max">
                        <div className="w-12 h-12 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center">
                            <MapPin className="w-5 h-5 text-brand-green" />
                        </div>
                        <span className="font-sans text-lg font-bold">Serving Surrey, Sussex & London</span>
                    </div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100"
            >
                <h3 className="font-sans text-2xl font-bold text-slate-900 mb-8">Request a Consultation</h3>

                <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="firstName" className="font-sans text-sm font-bold text-slate-700 uppercase tracking-wide">First Name</label>
                            <input type="text" id="firstName" className="px-4 py-3 bg-[#F9FAFB] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all font-sans" placeholder="John" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="lastName" className="font-sans text-sm font-bold text-slate-700 uppercase tracking-wide">Last Name</label>
                            <input type="text" id="lastName" className="px-4 py-3 bg-[#F9FAFB] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all font-sans" placeholder="Smith" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="font-sans text-sm font-bold text-slate-700 uppercase tracking-wide">Email Address</label>
                        <input type="email" id="email" className="px-4 py-3 bg-[#F9FAFB] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all font-sans" placeholder="john@example.com" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="project" className="font-sans text-sm font-bold text-slate-700 uppercase tracking-wide">Project Details</label>
                        <textarea id="project" rows={4} className="px-4 py-3 bg-[#F9FAFB] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all font-sans resize-none" placeholder="Tell us about your garden..."></textarea>
                    </div>

                    <button className="w-full bg-brand-green hover:bg-brand-green/90 text-white font-sans font-bold text-sm uppercase tracking-widest py-4 rounded-lg shadow-md cursor-pointer transition-all transform hover:-translate-y-0.5 mt-2">
                        Submit Enquiry
                    </button>
                </form>
            </motion.div>

        </div>
    </section>
);
