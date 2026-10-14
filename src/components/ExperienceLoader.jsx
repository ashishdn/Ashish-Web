'use client';

import { useState } from 'react';
import gsap from 'gsap';
import { soundManager } from '../services/soundEngine.js';
import { siteConfig } from '../data/siteConfig.js';
import { ArrowRight, AudioLines, Code2, Globe2, MapPin, VolumeX } from 'lucide-react';

export default function ExperienceLoader({ onComplete }) {
  const [isEntering, setIsEntering] = useState(false);

  const handleEnter = (withSound) => {
    if (isEntering) return;
    setIsEntering(true);
    window.scrollTo(0, 0);

    if (withSound) {
      soundManager.startAmbient();
      soundManager.playClick();
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = reducedMotion ? 0.15 : 0.72;
    gsap.timeline({
      onComplete: () => onComplete?.()
    })
      .to('.loader-content', {
        opacity: 0,
        y: reducedMotion ? 0 : -18,
        duration: reducedMotion ? 0.12 : 0.28,
        ease: 'power2.in'
      })
      .to('.loader-curtain-top', {
        yPercent: -100,
        duration,
        ease: reducedMotion ? 'none' : 'power3.inOut'
      }, '-=0.04')
      .to('.loader-curtain-bottom', {
        yPercent: 100,
        duration,
        ease: reducedMotion ? 'none' : 'power3.inOut'
      }, '<');
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto overflow-x-hidden bg-[#070709] text-white selection:bg-[#ccff00] selection:text-[#070709]">
      <div className="loader-curtain-top pointer-events-none fixed inset-x-0 top-0 z-10 h-1/2 border-b border-white/10 bg-[#070709]" />
      <div className="loader-curtain-bottom pointer-events-none fixed inset-x-0 bottom-0 z-10 h-1/2 border-t border-white/10 bg-[#070709]" />

      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_78%_30%,rgba(56,189,248,0.12),transparent_38%),radial-gradient(ellipse_at_18%_82%,rgba(204,255,0,0.09),transparent_42%)]" />
      <div className="bg-grain pointer-events-none fixed inset-0 opacity-40" />

      <div className="loader-content relative z-20 mx-auto flex min-h-[100svh] w-full max-w-[1440px] flex-col px-4 py-6 sm:px-8 md:px-12 md:py-8">
        <header className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#ccff00]/35 bg-[#ccff00]/10 font-display text-sm font-extrabold tracking-tight text-white">
              A<span className="text-[#ccff00]">D</span>
            </div>
            <div className="min-w-0">
              <p className="truncate font-display text-sm font-bold tracking-wide text-white sm:text-base">{siteConfig.name}</p>
              <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-[#94a3b8] sm:text-[10px]">Portfolio · 2026</p>
            </div>
          </div>
          <div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#ccff00]/20 bg-[#ccff00]/5 px-3 py-2 font-mono text-[9px] uppercase tracking-wider text-[#d9e5b3] sm:text-[10px]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ccff00] opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ccff00]" />
            </span>
            Available for select projects
          </div>
        </header>

        <main className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:py-16">
          <section className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-[#ccff00] sm:text-xs">
              <Code2 className="h-4 w-4" />
              Independent WordPress Engineer
            </div>

            <h1 className="font-display text-[clamp(3rem,8.1vw,7.2rem)] font-extrabold leading-[0.91] tracking-[-0.065em]">
              Digital craft.
              <span className="mt-2 block bg-gradient-to-r from-[#ccff00] via-[#f8fafc] to-[#38bdf8] bg-clip-text text-transparent">Built to scale.</span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-[#b6c0cf] sm:text-base sm:leading-8">
              I’m {siteConfig.preferredName}, a WordPress engineer and creative developer building thoughtful, high-performance websites for ambitious teams.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {[
                { value: siteConfig.completedProjects, label: 'projects delivered' },
                { value: siteConfig.countriesServed, label: 'countries served' },
                { value: siteConfig.experienceYears, label: 'years building' }
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl border border-white/10 bg-white/[0.035] px-3.5 py-2.5 sm:px-4">
                  <span className="font-display text-lg font-bold text-white sm:text-xl">{stat.value}</span>
                  <span className="ml-2 font-mono text-[9px] uppercase tracking-wider text-[#94a3b8] sm:text-[10px]">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                disabled={isEntering}
                onClick={() => handleEnter(true)}
                onMouseEnter={() => soundManager.playHover()}
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#ccff00] px-6 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#070709] shadow-[0_10px_40px_rgba(204,255,0,0.14)] transition duration-300 hover:-translate-y-0.5 hover:bg-white disabled:cursor-wait disabled:opacity-70 sm:px-7 sm:text-xs"
              >
                <AudioLines className="h-4 w-4" />
                Explore portfolio
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                type="button"
                disabled={isEntering}
                onClick={() => handleEnter(false)}
                onMouseEnter={() => soundManager.playHover()}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.025] px-5 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#cbd5e1] transition duration-300 hover:border-white/35 hover:bg-white/[0.07] hover:text-white disabled:cursor-wait disabled:opacity-70 sm:text-xs"
              >
                <VolumeX className="h-3.5 w-3.5" />
                Enter quietly
              </button>
            </div>
          </section>

          <aside className="relative mx-auto w-full max-w-[520px] lg:ml-auto">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-[#ccff00]/10 via-transparent to-[#38bdf8]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#0b0d12]/90 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:p-7">
              <div className="absolute inset-0 bg-grid-pattern opacity-30" />
              <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#ccff00]/10 blur-[70px]" />

              <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#94a3b8]">A little about my work</p>
                  <p className="mt-1 font-display text-lg font-semibold text-white sm:text-xl">Thoughtful by design.</p>
                </div>
                <span className="rounded-full border border-[#38bdf8]/25 bg-[#38bdf8]/10 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-[#7dd3fc]">AD / 2026</span>
              </div>

              <div className="relative flex min-h-[190px] items-center justify-center py-7 sm:min-h-[220px]">
                <div className="absolute h-40 w-40 rounded-full border border-white/10 sm:h-48 sm:w-48" />
                <div className="absolute h-32 w-32 rounded-full border border-dashed border-[#ccff00]/25 sm:h-40 sm:w-40" />
                <div className="absolute h-24 w-24 rounded-3xl bg-gradient-to-br from-[#ccff00]/20 to-[#38bdf8]/10 blur-xl" />
                <div className="relative flex h-24 w-24 rotate-[-6deg] items-center justify-center rounded-[1.6rem] border border-white/15 bg-[#11151b]/90 shadow-[0_20px_70px_rgba(0,0,0,0.5)] sm:h-28 sm:w-28">
                  <span className="font-display text-4xl font-black tracking-[-0.08em] text-white sm:text-5xl">A<span className="text-[#ccff00]">D</span></span>
                  <span className="absolute -right-2 -top-2 h-3 w-3 rounded-full border-2 border-[#0b0d12] bg-[#ccff00]" />
                </div>
                <span className="absolute left-[12%] top-[28%] h-1.5 w-1.5 rounded-full bg-[#38bdf8] shadow-[0_0_14px_#38bdf8]" />
                <span className="absolute bottom-[22%] right-[16%] h-2 w-2 rounded-full bg-[#ccff00] shadow-[0_0_14px_#ccff00]" />
              </div>

              <div className="relative grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
                <div className="rounded-xl bg-white/[0.035] p-3.5">
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#94a3b8]">Core focus</p>
                  <p className="mt-2 text-xs font-semibold text-white sm:text-sm">WordPress · Elementor</p>
                </div>
                <div className="rounded-xl bg-white/[0.035] p-3.5">
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#94a3b8]">Modern frontend</p>
                  <p className="mt-2 text-xs font-semibold text-white sm:text-sm">React · Next.js</p>
                </div>
              </div>
            </div>
          </aside>
        </main>

        <footer className="flex flex-col gap-3 border-t border-white/10 pt-4 font-mono text-[9px] uppercase tracking-[0.14em] text-[#718096] sm:flex-row sm:items-center sm:justify-between sm:text-[10px]">
          <span className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-[#ccff00]" />Dhaka, Bangladesh · Working worldwide</span>
          <span className="inline-flex items-center gap-2"><Globe2 className="h-3.5 w-3.5 text-[#38bdf8]" />Independent · Detail-led · Performance-minded</span>
        </footer>
      </div>
    </div>
  );
}
