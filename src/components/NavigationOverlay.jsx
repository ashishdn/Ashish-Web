'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { soundManager } from '../services/soundEngine.js';
import { siteConfig } from '../data/siteConfig.js';
import { smoothScrollTo } from '../services/scrollEngine.js';
import { Volume2, VolumeX, Menu, X, ArrowUpRight, Sliders } from 'lucide-react';

export default function NavigationOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [audioState, setAudioState] = useState({
    isPlaying: false,
    isMuted: false,
    volume: 0.7
  });
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const overlayRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const unsubscribe = soundManager.subscribe((state) => {
      setAudioState(state);
    });
    return unsubscribe;
  }, []);

  const navLinks = [
    { num: '01', title: 'Selected Work', subtitle: 'Showcase of 80+ Bespoke Builds', href: '#work' },
    { num: '02', title: 'Capabilities & 3D Globe', subtitle: 'WordPress, JetEngine & Next.js', href: '#capabilities' },
    { num: '03', title: 'About & Philosophy', subtitle: 'Pixel-Fidelity & Engineering', href: '#about' },
    { num: '04', title: 'Experience & Metrics', subtitle: 'Proven Track Record Across 15+ Countries', href: '#experience' },
    { num: '05', title: 'Contact / Inquire', subtitle: 'Fast-Track WhatsApp & Email Intake', href: '#contact' }
  ];

  const toggleMenu = () => {
    soundManager.playNav();
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    soundManager.playClick();
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo(
        linksRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.07, ease: 'power3.out', delay: 0.15 }
      );
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleLinkClick = (href) => {
    soundManager.playClick();
    setIsOpen(false);
    smoothScrollTo(href);
  };

  const handleAudioToggle = () => {
    soundManager.playClick();
    if (!audioState.isPlaying) {
      soundManager.startAmbient();
    } else {
      soundManager.toggleMute();
    }
  };

  return (
    <>
      {/* Precision Scroll Progress Line Pinned to Absolute Top of Viewport */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-[90] pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#ccff00] via-[#a3e635] to-[#38bdf8] shadow-[0_0_12px_rgba(204,255,0,0.8)]"
          style={{ width: 'var(--scroll-progress, 0%)' }}
        />
      </div>

      {/* Sleek Header Dock with Protective Backdrop & Matching Width */}
      <header
        className={`fixed top-0 left-0 w-full h-16 sm:h-[76px] z-50 border-b transition-colors duration-200 pointer-events-none ${
          scrolled
            ? 'bg-[#070709]/95 border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.45)]'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-[1440px] h-full mx-auto px-4 sm:px-8 md:px-12 flex items-center justify-between gap-3">
          
          {/* Brand Monogram / Identity */}
          <a
            href="#"
            data-cursor="hover"
            data-cursor-text="TOP"
            className="pointer-events-auto flex items-center gap-3 group focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              soundManager.playClick();
              smoothScrollTo(0);
            }}
          >
            <div className="w-10 h-10 rounded-xl bg-[#0e0f14] border border-white/15 group-hover:border-[#ccff00]/60 backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-md">
              <span className="font-display font-extrabold text-sm tracking-tighter text-white group-hover:text-[#ccff00]">
                A<span className="text-[#ccff00]">D</span>
              </span>
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="font-display font-bold text-sm tracking-tight text-white group-hover:text-[#ccff00] transition-colors">
                {siteConfig.name}
              </span>
              <span className="font-mono text-[10px] tracking-wider text-[#94a3b8] uppercase">
                WordPress & Creative Dev
              </span>
            </div>
          </a>

          {/* Right Floating Control Hub */}
          <div className="pointer-events-auto flex items-center gap-1.5 sm:gap-3">
            
            {/* Audio Ambient HUD */}
            <div className="relative flex items-center">
              <button
                onClick={handleAudioToggle}
                onMouseEnter={() => soundManager.playHover()}
                data-cursor="sound"
                data-cursor-text={audioState.isPlaying && !audioState.isMuted ? 'MUTE' : 'SOUND'}
                aria-label="Toggle Sound"
                className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#0e0f14] hover:bg-[#1a1c25] border border-white/15 hover:border-[#ccff00]/50 backdrop-blur-md transition-all text-xs font-mono text-white cursor-pointer shadow-md"
              >
                {/* Visualizer sound bars */}
                <div className="flex items-end gap-[2px] h-3 w-4">
                  <span
                    className={`w-[2px] bg-[#ccff00] rounded-full transition-all duration-300 ${
                      audioState.isPlaying && !audioState.isMuted
                        ? 'animate-[pulse_0.6s_ease-in-out_infinite] h-full'
                        : 'h-1 bg-white/40'
                    }`}
                  />
                  <span
                    className={`w-[2px] bg-[#ccff00] rounded-full transition-all duration-200 ${
                      audioState.isPlaying && !audioState.isMuted
                        ? 'animate-[pulse_0.9s_ease-in-out_infinite_0.2s] h-2/3'
                        : 'h-1 bg-white/40'
                    }`}
                  />
                  <span
                    className={`w-[2px] bg-[#ccff00] rounded-full transition-all duration-400 ${
                      audioState.isPlaying && !audioState.isMuted
                        ? 'animate-[pulse_0.75s_ease-in-out_infinite_0.4s] h-full'
                        : 'h-1 bg-white/40'
                    }`}
                  />
                </div>

                <span className="hidden lg:inline text-[11px] font-medium tracking-wider uppercase">
                  {audioState.isPlaying && !audioState.isMuted ? 'Zen Sound' : 'Audio Off'}
                </span>

                {audioState.isPlaying && !audioState.isMuted ? (
                  <Volume2 className="w-3.5 h-3.5 text-[#ccff00]" />
                ) : (
                  <VolumeX className="w-3.5 h-3.5 text-[#94a3b8]" />
                )}
              </button>

              {/* Volume Slider Drawer Trigger */}
              <button
                onClick={() => setShowVolumeSlider(!showVolumeSlider)}
                className="p-2 ml-1 text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
                title="Audio volume"
              >
                <Sliders className="w-3.5 h-3.5" />
              </button>

              {/* Volume Dropdown Slider */}
              {showVolumeSlider && (
                <div className="absolute top-12 right-0 p-3 bg-[#0e0f14] border border-white/15 rounded-xl shadow-2xl backdrop-blur-md w-36 flex flex-col gap-2 z-50">
                  <div className="flex justify-between items-center text-[10px] font-mono text-[#94a3b8]">
                    <span>VOLUME</span>
                    <span>{Math.round(audioState.volume * 100)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={audioState.volume}
                    onChange={(e) => soundManager.setVolume(parseFloat(e.target.value))}
                    className="w-full accent-[#ccff00] h-1.5 bg-white/10 rounded-lg cursor-pointer"
                  />
                </div>
              )}
            </div>

            {/* Header Menu Button */}
            <button
              onClick={toggleMenu}
              onMouseEnter={() => soundManager.playHover()}
              data-cursor="hover"
              data-cursor-text={isOpen ? 'CLOSE' : 'MENU'}
              aria-expanded={isOpen}
              aria-label="Navigation Menu"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#ccff00] hover:bg-white text-[#070709] font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-lg shadow-[#ccff00]/15 cursor-pointer"
            >
              <span>{isOpen ? 'Close' : 'Menu'}</span>
              {isOpen ? <X className="w-4 h-4 text-[#070709]" /> : <Menu className="w-4 h-4 text-[#070709]" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Architectural Navigation Overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-[#070709]/95 backdrop-blur-2xl transition-all duration-500 flex flex-col justify-between px-4 py-6 sm:px-8 sm:py-12 md:px-12 md:py-16 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />

        {/* Top Bar with Clear Close Button Inside the Menu */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-6 max-w-[1344px] mx-auto w-full">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ccff00]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#94a3b8]">
              NAVIGATION DIRECTORY // 2026
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline font-mono text-xs text-[#ccff00] tracking-widest">
              {siteConfig.availability}
            </span>

            {/* Dedicated High-Visibility Close Button Inside the Overlay */}
            <button
              onClick={closeMenu}
              onMouseEnter={() => soundManager.playHover()}
              data-cursor="hover"
              data-cursor-text="CLOSE"
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-[#ccff00] text-white hover:text-[#070709] border border-white/20 hover:border-[#ccff00] font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Close</span>
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Navigation Editorial Links */}
        <nav className="relative z-10 my-auto py-8 max-w-[1344px] mx-auto w-full">
          <ul className="flex flex-col gap-4 sm:gap-6">
            {navLinks.map((item, index) => (
              <li
                key={item.num}
                ref={(el) => (linksRef.current[index] = el)}
                className="overflow-hidden"
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  onMouseEnter={() => soundManager.playHover()}
                  data-cursor="hover"
                  data-cursor-text="GO"
                  className="group flex flex-col md:flex-row md:items-baseline justify-between py-2 border-b border-white/5 hover:border-[#ccff00]/40 transition-colors"
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="font-mono text-xs sm:text-sm text-[#ccff00] tracking-widest font-bold">
                      {item.num}
                    </span>
                    <span className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#f8fafc] group-hover:text-[#ccff00] group-hover:translate-x-3 transition-all duration-300">
                      {item.title}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#94a3b8] mt-1 md:mt-0 tracking-wider group-hover:text-white transition-colors">
                    {item.subtitle}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Overlay Footer: Contact Coordinates & Quick Links */}
        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 border-t border-white/10 pt-6 font-mono text-xs text-[#94a3b8] max-w-[1344px] mx-auto w-full">
          <div>
            <span className="block text-white font-medium mb-1">DIRECT INQUIRIES & WHATSAPP</span>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <a
                href={`mailto:${siteConfig.emails.primary}`}
                onClick={() => soundManager.playClick()}
                className="hover:text-[#ccff00] text-sm text-[#f8fafc] transition-colors"
              >
                {siteConfig.emails.primary}
              </a>
              <span className="hidden sm:inline text-white/30">•</span>
              <a
                href={siteConfig.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClick()}
                className="hover:text-[#ccff00] text-sm text-[#ccff00] transition-colors"
              >
                WhatsApp: {siteConfig.whatsapp.formatted}
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            {siteConfig.socials.map((soc) => (
              <a
                key={soc.name}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClick()}
                className="flex items-center gap-1 hover:text-[#ccff00] transition-colors"
              >
                <span>{soc.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#ccff00]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
