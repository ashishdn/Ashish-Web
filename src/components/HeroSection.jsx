'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { siteConfig } from '../data/siteConfig.js';
import { soundManager } from '../services/soundEngine.js';
import { smoothScrollTo } from '../services/scrollEngine.js';
import { ArrowDown, Code2, Layers, Globe, ShieldCheck, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef(null);
  const titleLine1Ref = useRef(null);
  const titleLine2Ref = useRef(null);
  const titleLine3Ref = useRef(null);
  const metaBadgeRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const playEntrance = () => {
      const tl = gsap.timeline({ delay: 0.15 });

      tl.from(metaBadgeRef.current, {
        opacity: 0,
        y: 15,
        duration: 0.6,
        ease: 'power3.out'
      })
      .from([titleLine1Ref.current, titleLine2Ref.current, titleLine3Ref.current], {
        opacity: 0,
        y: 50,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out'
      }, '-=0.3')
      .from(ctaRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power3.out'
      }, '-=0.3');
    };

    window.addEventListener('portfolio:enter', playEntrance);

    return () => {
      window.removeEventListener('portfolio:enter', playEntrance);
      gsap.killTweensOf([metaBadgeRef.current, titleLine1Ref.current, titleLine2Ref.current, titleLine3Ref.current, ctaRef.current]);
    };
  }, []);

  const scrollToSection = (id) => {
    soundManager.playClick();
    smoothScrollTo(`#${id}`);
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-8 md:px-12 overflow-hidden bg-[#070709]"
    >
      {/* Background Graphic Blueprint & Subtle Warm Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-[18%] -left-28 w-[28rem] h-[28rem] bg-[radial-gradient(circle,rgba(204,255,0,0.12),transparent_68%)] pointer-events-none" />
      <div className="absolute bottom-[12%] -right-24 w-[32rem] h-[32rem] bg-[radial-gradient(circle,rgba(56,189,248,0.13),transparent_68%)] pointer-events-none" />

      {/* Top Coordinate Strip */}
      <div ref={metaBadgeRef} className="relative z-10 max-w-[1344px] mx-auto w-full flex flex-wrap items-center justify-between gap-4 pt-4 border-b border-white/5 pb-4">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0e0f14] border border-white/10 text-xs font-mono text-[#cbd5e1] shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
          <span>DHAKA, BANGLADESH // WORLDWIDE COLLABORATION</span>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono text-[#94a3b8]">
          <span className="flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-[#ccff00]" />
            15+ COUNTRIES
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#ccff00]" />
            80+ LIVE BUILDS
          </span>
        </div>
      </div>

      {/* Center Cinematic Editorial Headline */}
      <div className="relative z-10 max-w-[1344px] mx-auto w-full my-auto py-12 md:py-16">
        <div className="overflow-hidden mb-3">
          <p className="font-mono text-xs md:text-sm tracking-[0.25em] uppercase text-[#ccff00] font-semibold flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#ccff00]" />
            SENIOR WORDPRESS ENGINEER & CREATIVE DEVELOPER
          </p>
        </div>

        <div className="overflow-hidden">
          <h1
            ref={titleLine1Ref}
          className="font-display text-[clamp(2.15rem,8.4vw,8rem)] font-black tracking-[-0.055em] text-[#f8fafc] uppercase leading-[0.96]"
          >
            ARCHITECTING
          </h1>
        </div>

        <div className="overflow-hidden">
          <h1
            ref={titleLine2Ref}
            className="font-display text-[clamp(2.15rem,8.4vw,8rem)] font-black tracking-[-0.055em] text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] via-[#ffffff] to-[#94a3b8] uppercase leading-[0.96]"
          >
            BESPOKE SPACES
          </h1>
        </div>

        <div className="overflow-hidden">
          <h1
            ref={titleLine3Ref}
            className="font-display text-[clamp(2rem,7.2vw,6rem)] font-black tracking-[-0.055em] text-[#f8fafc] uppercase leading-[0.98] flex flex-wrap items-center gap-x-4"
          >
            <span>& HIGH-PERFORMANCE</span>
            <span className="mt-2 text-sm sm:text-lg md:text-2xl font-mono text-[#ccff00] font-normal tracking-normal border border-[#ccff00]/40 px-3.5 py-1 rounded-full align-middle">
              ECOSYSTEMS
            </span>
          </h1>
        </div>

        {/* Supporting Narrative */}
        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <p className="text-base sm:text-lg md:text-xl text-[#cbd5e1] font-normal leading-relaxed max-w-2xl">
              I am <span className="text-white font-semibold">{siteConfig.name}</span>. Specializing in enterprise-grade WordPress, Elementor Pro & JetEngine dynamic structures, paired with modern frontend craftsmanship.
            </p>
          </div>

          <div ref={ctaRef} className="md:col-span-5 flex flex-col sm:flex-row md:justify-end items-start sm:items-center gap-4">
            <button
              onClick={() => scrollToSection('work')}
              onMouseEnter={() => soundManager.playHover()}
              data-cursor="project"
              data-cursor-text="EXPLORE"
              className="px-8 py-4 rounded-full bg-[#ccff00] hover:bg-white text-[#070709] font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-xl shadow-[#ccff00]/15 flex items-center gap-3 cursor-pointer group"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              onMouseEnter={() => soundManager.playHover()}
              data-cursor="hover"
              className="px-6 py-4 rounded-full border border-white/15 hover:border-white/40 text-white font-mono text-xs tracking-wider uppercase transition-all cursor-pointer bg-white/5"
            >
              Initiate Project
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Technical Badges Strip */}
      <div className="relative z-10 max-w-[1344px] mx-auto w-full pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs text-[#94a3b8]">
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4 text-[#ccff00]" />
          <div>
            <span className="block text-white font-semibold">WORDPRESS / JETENGINE</span>
            <span className="text-[10px] text-[#94a3b8]">Dynamic CPT Architecture</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#ccff00]" />
          <div>
            <span className="block text-white font-semibold">ELEMENTOR PRO EXPERT</span>
            <span className="text-[10px] text-[#94a3b8]">Pixel-Perfect Responsive Systems</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#38bdf8]" />
          <div>
            <span className="block text-white font-semibold">REACT & NEXT.JS</span>
            <span className="text-[10px] text-[#94a3b8]">Headless CMS Integrations</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#ccff00]" />
          <div>
            <span className="block text-white font-semibold">80+ LIVE DELIVERIES</span>
            <span className="text-[10px] text-[#94a3b8]">Verified Global Production</span>
          </div>
        </div>
      </div>
    </section>
  );
}
