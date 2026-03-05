import React from 'react';
import { motion } from 'motion/react';
import { PenTool, MessageSquare, Hammer, HeartHandshake } from 'lucide-react';

const steps = [
    {
        icon: MessageSquare,
        title: "1. Initial Consultation",
        description: "We work closely with you to understand your unique requirements, tastes, and lifestyle. A free initial visit aligns our vision with yours.",
    },
    {
        icon: PenTool,
        title: "2. Bespoke Design",
        description: "Every garden has its own character. We craft tailored, creative concepts that blend aesthetics with functionality.",
    },
    {
        icon: Hammer,
        title: "3. End-to-End Build",
        description: "Our expert team provides seamless project management. From hard landscaping to planting, everything is handled by us.",
    },
    {
        icon: HeartHandshake,
        title: "4. Handover & Joy",
        description: "We reveal your newly transformed outdoor space, ensuring it exceeds expectations and thrives for years to come.",
    }
];

export const Process = () => (
    <section className="w-full bg-[#2D5A27] text-white py-24 md:py-32" id="about">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20 md:mb-24">
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                    A Seamless, Stress-Free Process
                </h2>
                <p className="font-sans text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                    From concept to completion, we remove the burden so you can relax, knowing you are in the best of hands.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
                <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-white/20 z-0 border-dashed border-t-2"></div>

                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        className="relative z-10 flex flex-col items-center text-center cursor-pointer group"
                    >
                        <div className="w-24 h-24 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                            <step.icon className="w-10 h-10 text-white group-hover:text-[#2D5A27] transition-colors duration-300" />
                        </div>
                        <h3 className="font-sans text-xl font-bold mb-4">
                            {step.title}
                        </h3>
                        <p className="font-sans text-white/70 leading-relaxed text-sm">
                            {step.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);
