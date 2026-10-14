'use client';

import { siteConfig } from '../data/siteConfig.js';
import { soundManager } from '../services/soundEngine.js';
import { Sparkles, Trophy, Globe, CheckCircle2, TrendingUp, Briefcase } from 'lucide-react';

export default function ExperienceSection() {
  const milestones = [
    {
      period: "2023 — PRESENT",
      role: "Lead WordPress & Dynamic Systems Engineer",
      company: "Independent Consultant / Global Client Engagements",
      location: "Dhaka & Worldwide",
      highlight: "Delivered over 50 enterprise and high-converting WordPress/Elementor Pro systems for businesses in the US, UK, Europe, and Australia.",
      tags: ["WordPress", "Elementor Pro", "JetEngine", "Next.js", "Performance"]
    },
    {
      period: "2022 — 2023",
      role: "WordPress Developer & Elementor Specialist",
      company: "Agency & Direct Client Contract Engagements",
      location: "Remote",
      highlight: "Specialized in Figma-to-WordPress pixel-perfect translations, dynamic custom post types, WooCommerce stores, and speed optimizations.",
      tags: ["Elementor", "WooCommerce", "ACF Pro", "Shopify", "Tailwind CSS"]
    },
    {
      period: "2021 — 2022",
      role: "Frontend Developer & UI Implementer",
      company: "Web Development Initiatives",
      location: "Dhaka, Bangladesh",
      highlight: "Mastered core web standards (HTML5, semantic CSS, modern JavaScript ES6+) and responsive design principles across complex multi-device viewports.",
      tags: ["JavaScript", "HTML5", "CSS3", "PHP Basics", "Responsive Design"]
    }
  ];

  return (
    <section id="experience" className="relative py-28 px-4 sm:px-8 md:px-12 bg-[#070709] border-t border-white/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-[1344px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#ccff00] uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>VERIFIED PRODUCTION CREDENTIALS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white uppercase">
              TRACK <span className="text-[#ccff00]">RECORD</span>
            </h2>
          </div>

          <div className="font-mono text-xs text-[#94a3b8] max-w-xs text-right">
            MEASURABLE IMPACT AND REPUTATION ACROSS MULTIPLE CONTINENTS.
          </div>
        </div>

        {/* Real Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0f1017] border border-white/10 hover:border-[#ccff00]/40 transition-colors">
            <div className="flex items-center justify-between text-xs font-mono text-[#94a3b8] mb-4">
              <span>PROJECT VOLUME</span>
              <Briefcase className="w-4 h-4 text-[#ccff00]" />
            </div>
            <div className="font-display text-4xl sm:text-5xl font-extrabold text-white mb-1">
              80<span className="text-[#ccff00]">+</span>
            </div>
            <p className="text-xs font-mono text-[#94a3b8]">
              Delivered Live Websites & Platforms
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#0f1017] border border-white/10 hover:border-[#ccff00]/40 transition-colors">
            <div className="flex items-center justify-between text-xs font-mono text-[#94a3b8] mb-4">
              <span>GLOBAL FOOTPRINT</span>
              <Globe className="w-4 h-4 text-[#38bdf8]" />
            </div>
            <div className="font-display text-4xl sm:text-5xl font-extrabold text-white mb-1">
              15<span className="text-[#38bdf8]">+</span>
            </div>
            <p className="text-xs font-mono text-[#94a3b8]">
              Countries: USA, UK, AU, EU & beyond
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#0f1017] border border-white/10 hover:border-[#ccff00]/40 transition-colors">
            <div className="flex items-center justify-between text-xs font-mono text-[#94a3b8] mb-4">
              <span>SATISFACTION</span>
              <Trophy className="w-4 h-4 text-[#f59e0b]" />
            </div>
            <div className="font-display text-4xl sm:text-5xl font-extrabold text-white mb-1">
              99.8<span className="text-[#f59e0b]">%</span>
            </div>
            <p className="text-xs font-mono text-[#94a3b8]">
              On-Time Delivery & Client Endorsements
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#0f1017] border border-white/10 hover:border-[#ccff00]/40 transition-colors">
            <div className="flex items-center justify-between text-xs font-mono text-[#94a3b8] mb-4">
              <span>FIDELITY GUARANTEE</span>
              <CheckCircle2 className="w-4 h-4 text-[#ccff00]" />
            </div>
            <div className="font-display text-4xl sm:text-5xl font-extrabold text-white mb-1">
              100<span className="text-[#ccff00]">%</span>
            </div>
            <p className="text-xs font-mono text-[#94a3b8]">
              Pixel-Fidelity vs Figma Design Specifications
            </p>
          </div>
        </div>

        {/* Career Chronology */}
        <div className="space-y-6">
          <h3 className="font-mono text-xs uppercase tracking-widest text-[#ccff00] mb-6 flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            CAREER TRAJECTORY & ENGAGEMENTS
          </h3>

          {milestones.map((item) => (
            <div
              key={item.period}
              onMouseEnter={() => soundManager.playHover()}
              className="p-6 sm:p-8 rounded-2xl bg-[#0f1017] border border-white/10 hover:border-white/30 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              <div className="md:col-span-3">
                <span className="font-mono text-xs text-[#ccff00] font-bold block mb-1">
                  {item.period}
                </span>
                <span className="font-mono text-xs text-[#94a3b8]">
                  {item.location}
                </span>
              </div>

              <div className="md:col-span-5">
                <h4 className="font-display text-xl font-bold text-white mb-1">
                  {item.role}
                </h4>
                <p className="text-xs font-mono text-[#94a3b8]">
                  {item.company}
                </p>
              </div>

              <div className="md:col-span-4">
                <p className="text-sm text-[#cbd5e1] leading-relaxed mb-3">
                  {item.highlight}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-[#94a3b8]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
