import React, { useState, useRef, useEffect } from 'react';
import { projects } from '../constants';

export const BeforeAfter = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="w-full bg-bg-light py-20 md:py-32" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-dark mb-6">
            Seeing is believing
          </h2>
          <p className="font-sans text-lg text-text-dark max-w-2xl mx-auto">
            Drag the slider to see how we've turned ordinary Surrey gardens into extraordinary outdoor living spaces.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(index)}
                className={`text-left p-6 rounded-xl cursor-pointer transition-all duration-300 ${activeProject === index ? 'bg-white shadow-lg border border-gray-100' : 'hover:bg-white/50'}`}
              >
                <h3 className={`font-sans text-xl font-bold mb-2 ${activeProject === index ? 'text-brand-green' : 'text-text-dark'}`}>
                  {project.title}
                </h3>
                <p className="font-sans text-base text-text-light">
                  {project.description}
                </p>
              </button>
            ))}
          </div>

          <div
            className="w-full lg:w-2/3 relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] md:aspect-[16/9] cursor-ew-resize select-none"
            ref={containerRef}
            onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
            onMouseMove={handleMouseMove}
            onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
            onTouchMove={handleTouchMove}
          >
            <img src={projects[activeProject].after} alt="After" className="absolute inset-0 w-full h-full object-cover pointer-events-none" referrerPolicy="no-referrer" />

            <div className="absolute top-4 right-4 bg-brand-green text-white px-3 py-1 rounded font-sans text-sm font-bold tracking-wide pointer-events-none">AFTER</div>

            <div
              className="absolute inset-0 h-full overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img src={projects[activeProject].before} alt="Before" className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none" style={{ width: containerRef.current?.offsetWidth || '100%' }} referrerPolicy="no-referrer" />
              <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded font-sans text-sm font-bold tracking-wide">BEFORE</div>
            </div>

            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.3)]"
              style={{ left: `calc(${sliderPosition}% - 2px)` }}
            >
              <div className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-0.5 h-3 bg-gray-400 rounded-full"></div>
                  <div className="w-0.5 h-3 bg-gray-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
