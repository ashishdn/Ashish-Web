'use client';

import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { setLenisInstance } from '@/src/services/scrollEngine.js';

import ExperienceLoader from '@/src/components/ExperienceLoader.jsx';
import CustomCursor from '@/src/components/CustomCursor.jsx';
import NavigationOverlay from '@/src/components/NavigationOverlay.jsx';
import ScrollHUD from '@/src/components/ScrollHUD.jsx';
import HeroSection from '@/src/components/HeroSection.jsx';
import SelectedWork from '@/src/components/SelectedWork.jsx';
import SkillsSection from '@/src/components/SkillsSection.jsx';
import AboutSection from '@/src/components/AboutSection.jsx';
import ExperienceSection from '@/src/components/ExperienceSection.jsx';
import ContactSection from '@/src/components/ContactSection.jsx';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [loaderComplete, setLoaderComplete] = useState(false);

  useEffect(() => {
    // Highly-optimized, responsive smooth scrolling
    const lenis = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      smoothWheel: true
    });
    setLenisInstance(lenis);

    lenis.on('scroll', (e) => {
      ScrollTrigger.update();
      if (e.limit > 0) {
        document.documentElement.style.setProperty('--scroll-progress', `${e.progress * 100}%`);
        const ring = document.querySelector('[data-scroll-ring]');
        if (ring) ring.setAttribute('stroke-dashoffset', String(2 * Math.PI * 17.5 * (1 - e.progress)));
      }
    });

    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      setLenisInstance(null);
      gsap.ticker.remove(tickerCallback);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#070709] text-[#f8fafc] selection:bg-[#ccff00] selection:text-[#070709]">
      {/* Cinematic Experience Loader */}
      {!loaderComplete && (
        <ExperienceLoader onComplete={() => {
          setLoaderComplete(true);
          window.dispatchEvent(new Event('portfolio:enter'));
        }} />
      )}

      {/* Custom Ultra-Smooth 120fps Cursor */}
      <CustomCursor />

      {/* Floating Protected HUD Header & Fullscreen Navigation */}
      <NavigationOverlay />

      {/* Floating Interactive Scroll HUD & Section Radar */}
      <ScrollHUD />

      {/* Main Narrative Flow */}
      <main className="relative z-10 w-full">
        <HeroSection />
        <SelectedWork />
        <SkillsSection />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
}
