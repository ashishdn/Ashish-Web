'use client';

import { useState, useEffect } from 'react';
import { soundManager } from '../services/soundEngine.js';
import { smoothScrollTo } from '../services/scrollEngine.js';
import { ArrowUp, Compass } from 'lucide-react';

export default function ScrollHUD() {
  const [activeSection, setActiveSection] = useState('HERO');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 250);

      const sections = [
        { id: 'work', name: 'WORK' },
        { id: 'capabilities', name: '3D TECH' },
        { id: 'about', name: 'PROFILE' },
        { id: 'experience', name: 'METRICS' },
        { id: 'contact', name: 'CONTACT' }
      ];

      let current = 'HERO';
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= window.innerHeight * 0.2) {
            current = sec.name;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    soundManager.playClick();
    smoothScrollTo(0);
  };

  if (!isVisible) return null;


  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 pointer-events-auto animate-fade-in select-none">
      {/* Current Active Section Badge */}
      <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#0e0f14]/90 border border-white/10 backdrop-blur-md shadow-xl font-mono text-[11px] text-[#cbd5e1]">
        <Compass className="w-3.5 h-3.5 text-[#ccff00] animate-[spin_10s_linear_infinite]" />
        <span>SECTION:</span>
        <span className="text-[#ccff00] font-bold tracking-wider">{activeSection}</span>
      </div>

      {/* Circular Progress & Quick Back to Top Trigger */}
      <button
        onClick={scrollToTop}
        onMouseEnter={() => soundManager.playHover()}
        data-cursor="hover"
        data-cursor-text="TOP"
        aria-label="Scroll to top"
        className="relative w-12 h-12 rounded-full bg-[#0e0f14]/90 border border-white/10 hover:border-[#ccff00] backdrop-blur-md shadow-2xl flex items-center justify-center transition-all duration-300 group cursor-pointer"
      >
        {/* SVG Circular Scroll Progress Ring */}
        <svg viewBox="0 0 40 40" className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
          <circle
            cx="20" cy="20" r="17.5"
            className="stroke-white/10"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="20" cy="20" r="17.5"
            className="stroke-[#ccff00] transition-all duration-150 ease-out"
            strokeWidth="2.5"
            strokeDasharray={2 * Math.PI * 17.5}
            data-scroll-ring
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Center Arrow / Percentage Indicator */}
        <div className="relative z-10 flex flex-col items-center justify-center group-hover:-translate-y-0.5 transition-transform">
          <ArrowUp className="w-4 h-4 text-white group-hover:text-[#ccff00] transition-colors" />
        </div>
      </button>
    </div>
  );
}
