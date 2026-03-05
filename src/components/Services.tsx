import React from 'react';
import { Home, Leaf, Palette, Scissors } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
    {
        title: "Garden Design & Build",
        description: "From concept to completion, we create bespoke garden designs sympathetic to your requirements and the finest outdoor rooms.",
        icon: Palette,
    },
    {
        title: "Hard Landscaping",
        description: "Patios, pathways, walling and driveways built with quality materials to last a lifetime.",
        icon: Home,
    },
    {
        title: "Planting Schemes",
        description: "Expert planting plans curated with botanical knowledge to thrive in Surrey and London soils.",
        icon: Leaf,
    },
    {
        title: "Garden Maintenance",
        description: "Regular upkeep from lawn care to pruning, keeping your investment looking immaculate year-round.",
        icon: Scissors,
    },
];

export const Services = () => (
    <section className="w-full bg-white py-24 md:py-32" id="services">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20 md:mb-24">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                    Our Services
                </h2>
                <p className="font-sans text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                    Quality Landscapes Since 1985. Our commitment to quality ensures everything from the initial design to the final build is flawlessly executed.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        className="group p-8 rounded-3xl bg-[#F9FAFB] border border-gray-100 hover:border-brand-green/20 hover:shadow-xl transition-all duration-300 cursor-pointer"
                    >
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-brand-green transition-colors duration-300">
                            <service.icon className="w-7 h-7 text-brand-green group-hover:text-white transition-colors duration-300" />
                        </div>
                        <h3 className="font-sans text-xl font-bold text-slate-900 mb-4 group-hover:text-brand-green transition-colors">
                            {service.title}
                        </h3>
                        <p className="font-sans text-slate-600 leading-relaxed">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);
