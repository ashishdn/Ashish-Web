'use client';

import { siteConfig } from '../data/siteConfig.js';
import { soundManager } from '../services/soundEngine.js';
import { Sparkles, Terminal, CheckCircle2, ShieldAlert, Cpu } from 'lucide-react';

export default function AboutSection() {
  const philosophies = [
    {
      icon: Terminal,
      title: "Pixel-Fidelity Without Compromise",
      description: "A Figma mockup isn't just a suggestion—it's an engineering specification. Every padding, line height, font weight, and micro-interaction is implemented with surgical precision across all viewport break-points."
    },
    {
      icon: Cpu,
      title: "Dynamic JetEngine & CPT Architecture",
      description: "WordPress should never be fragile. By structuring clean Custom Post Types, taxonomies, and custom queries with JetEngine and ACF Pro, clients receive an intuitive backend they can manage effortlessly without breaking layouts."
    },
    {
      icon: CheckCircle2,
      title: "Core Web Vitals & Speed First",
      description: "Visual elegance means nothing if the site takes 5 seconds to load. Every script is deferred, assets are optimized, DOM trees are pruned, and server cache layers are tuned to achieve consistent green PageSpeed metrics."
    },
    {
      icon: ShieldAlert,
      title: "Enterprise Reliability & Security",
      description: "Having deployed over 80 production sites across 15+ countries, robustness is baked in from day zero. Hardened login workflows, database hygiene, and scalable server configurations protect client reputations."
    }
  ];

  return (
    <section id="about" className="relative py-28 px-4 sm:px-8 md:px-12 bg-[#070709] border-t border-white/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-[1344px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#ccff00] uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE PHILOSOPHY & PROFILE</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white uppercase">
              ENGINEERING <span className="text-[#ccff00]">CRAFT</span>
            </h2>
          </div>

          <div className="font-mono text-xs text-[#94a3b8] max-w-sm">
            BRIDGING THE CHASM BETWEEN RAW TECHNICAL FUNCTIONALITY AND UNCOMPROMISING AESTHETIC REFINEMENT.
          </div>
        </div>

        {/* Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight">
              I transform ambitious design concepts into scalable, revenue-generating digital ecosystems.
            </h3>

            <p className="text-base sm:text-lg text-[#cbd5e1] leading-relaxed font-light">
              Hi, I’m <span className="text-white font-semibold">{siteConfig.name}</span>, a professional web developer and WordPress specialist based in Dhaka, Bangladesh. With over 2.5+ years of intense production experience, I have delivered over 80 live websites for corporate clients, e-commerce stores, and high-growth brands across 15+ countries including the USA, UK, Australia, and Europe.
            </p>

            <p className="text-base text-[#94a3b8] leading-relaxed">
              My core mastery lies in <span className="text-white">WordPress and Elementor Pro</span>, backed by custom dynamic architectures with <span className="text-[#ccff00]">JetEngine</span>, WooCommerce custom flows, and modern frontend frameworks like <span className="text-white">React, Next.js, and Tailwind CSS</span>. I also develop responsive storefronts on Shopify and Webflow.
            </p>

            <div className="p-6 rounded-2xl bg-[#0f1017] border border-white/10 font-mono text-xs text-[#cbd5e1] space-y-3">
              <div className="text-[#ccff00] font-bold">CORE PROMISE:</div>
              <p>
                "A website should not just be visually immaculate—it must be engineered for speed, fortified for security, and built so effortlessly that non-technical marketing teams love maintaining it."
              </p>
            </div>
          </div>

          {/* Visual Identity Card */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-[#0f1017] border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#ccff00]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#141620] border border-white/15 flex items-center justify-center font-display font-extrabold text-2xl text-[#ccff00]">
                  AD
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-white">{siteConfig.name}</h4>
                  <span className="font-mono text-xs text-[#94a3b8] block">Dhaka, Bangladesh</span>
                  <span className="font-mono text-[11px] text-[#ccff00]">{siteConfig.availability}</span>
                </div>
              </div>

              <div className="space-y-3 border-t border-white/10 pt-6 font-mono text-xs text-[#94a3b8]">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span>EXPERIENCE</span>
                  <span className="text-white font-medium">{siteConfig.experienceYears} Years Full-Time</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span>PRODUCTION BUILDS</span>
                  <span className="text-white font-medium">80+ Live Deployments</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span>INTERNATIONAL CLIENTS</span>
                  <span className="text-white font-medium">USA, UK, AU, EU (15+)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span>PRIMARY DOMAIN</span>
                  <span className="text-[#ccff00] font-medium">WordPress & Dynamic CPTs</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>COORDINATES</span>
                  <span className="text-white font-medium">{siteConfig.coordinates}</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <a
                  href={siteConfig.socials[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playClick()}
                  onMouseEnter={() => soundManager.playHover()}
                  className="text-xs font-mono text-[#ccff00] hover:text-white underline tracking-wider"
                >
                  Verify LinkedIn Profile →
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars of Engineering */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophies.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                onMouseEnter={() => soundManager.playHover()}
                className="p-6 rounded-2xl bg-[#0f1017] border border-white/10 hover:border-[#ccff00]/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-[#ccff00]/10 border border-white/10 group-hover:border-[#ccff00]/30 flex items-center justify-center mb-5 transition-colors">
                    <Icon className="w-5 h-5 text-[#ccff00]" />
                  </div>
                  <span className="font-mono text-[10px] text-[#ccff00] tracking-widest block mb-1">
                    0{idx + 1} // PILLAR
                  </span>
                  <h4 className="font-display text-lg font-bold text-white mb-2 group-hover:text-[#ccff00] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#94a3b8] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
