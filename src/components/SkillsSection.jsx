'use client';

import { useCallback, useState } from 'react';
import TechGlobe from './TechGlobe.jsx';
import { soundManager } from '../services/soundEngine.js';
import { Sparkles, Terminal, Globe, Grid, CheckCircle2, ChevronRight } from 'lucide-react';

export default function SkillsSection() {
  const [viewMode, setViewMode] = useState('matrix'); // 'matrix' | 'globe'

  const skillDomains = [
    {
      id: "wordpress",
      title: "WordPress Architecture & Engine",
      subtitle: "Custom Post Types, Dynamic Taxonomies & Enterprise Themes",
      accent: "#ccff00",
      skills: [
        { name: "WordPress Core", level: "Expert", desc: "Enterprise setups, multisite configurations, custom hooks and filters" },
        { name: "Elementor & Elementor Pro", level: "Master", desc: "Custom theme builder, dynamic loop grids, zero-bloat responsive layouts" },
        { name: "JetEngine (Crocoblock)", level: "Architect", desc: "Complex CPT relations, custom queries, dynamic listings, glossary data models" },
        { name: "WooCommerce", level: "Advanced", desc: "Bespoke product matrices, custom checkout funnels, AJAX mini-carts, order hooks" },
        { name: "Basic PHP & Child Themes", level: "Proficient", desc: "functions.php extensions, template overrides, filter hooks, safe overrides" },
        { name: "REST API & Headless Bridge", level: "Advanced", desc: "Exposing custom endpoints for decoupled Next.js & React frontends" }
      ]
    },
    {
      id: "frontend",
      title: "Frontend Engineering & Motion",
      subtitle: "Modern JavaScript, React/Next.js, and Pixel-Fidelity",
      accent: "#38bdf8",
      skills: [
        { name: "JavaScript (ES6+)", level: "Advanced", desc: "Asynchronous workflows, DOM manipulation, custom event systems, modular architecture" },
        { name: "React & Next.js", level: "Advanced", desc: "App Router, SSR/SSG, state management, component architecture, hooks" },
        { name: "Tailwind CSS", level: "Master", desc: "Custom theme design tokens, container queries, utility-first rapid prototyping" },
        { name: "GSAP & ScrollTrigger", level: "Specialist", desc: "Curtain wipes, split text, pinned timelines, cinematic choreographies" },
        { name: "HTML5 & Semantic SEO", level: "Master", desc: "Accessible markup, schema data, clean hierarchical structures" },
        { name: "Responsive Web Design", level: "Master", desc: "100% pixel-perfect fidelity across mobile, tablet, desktop, and ultra-wide screens" }
      ]
    },
    {
      id: "platforms",
      title: "E-Commerce & Performance Ecosystem",
      subtitle: "Shopify Liquid, Webflow & Core Web Vitals Optimization",
      accent: "#a855f7",
      skills: [
        { name: "Shopify & Liquid", level: "Proficient", desc: "Theme customizations, section-based architectures, app integration" },
        { name: "Webflow", level: "Proficient", desc: "Clean interactions, CMS collections, client-first style system" },
        { name: "Core Web Vitals Optimization", level: "Master", desc: "Script deferral, LCP minimization, cumulative layout shift elimination" },
        { name: "Git & Deployment Workflows", level: "Advanced", desc: "Version control, staging environments, safe database migrations" }
      ]
    }
  ];

  const [activeDomain, setActiveDomain] = useState(skillDomains[0]);
  const [selectedSkill, setSelectedSkill] = useState(skillDomains[0].skills[0]);
  const handleTechSelect = useCallback((tech) => setSelectedSkill(tech), []);

  return (
    <section id="capabilities" className="relative py-28 px-4 sm:px-8 md:px-12 bg-[#0a0a0e] border-t border-white/5">
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />

      <div className="max-w-[1344px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#ccff00] uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TECHNICAL CAPABILITY MAP</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white uppercase">
              CAPABILITIES & <span className="text-[#ccff00]">STACK</span>
            </h2>
          </div>

          {/* View Mode Switcher: 3D Tech Globe vs Matrix */}
          <div className="flex items-center gap-2 bg-[#0e0f14] p-1.5 rounded-full border border-white/10">
            <button
              onClick={() => {
                soundManager.playClick();
                setViewMode('globe');
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'globe'
                  ? 'bg-[#ccff00] text-[#070709] shadow-md shadow-[#ccff00]/20'
                  : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>3D Tech Globe</span>
            </button>

            <button
              onClick={() => {
                soundManager.playClick();
                setViewMode('matrix');
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'matrix'
                  ? 'bg-[#ccff00] text-[#070709] shadow-md shadow-[#ccff00]/20'
                  : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Matrix View</span>
            </button>
          </div>
        </div>

        {/* View Mode 1: 3D Tech Globe */}
        {viewMode === 'globe' ? (
          <div className="animate-fade-in">
            <TechGlobe onSelectTech={handleTechSelect} />
          </div>
        ) : (
          /* View Mode 2: Domain Matrix */
          <div className="animate-fade-in space-y-12">
            {/* Domain Selector Tabs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {skillDomains.map((domain) => (
                <button
                  key={domain.id}
                  onClick={() => {
                    soundManager.playClick();
                    setActiveDomain(domain);
                    setSelectedSkill(domain.skills[0]);
                  }}
                  onMouseEnter={() => soundManager.playHover()}
                  data-cursor="hover"
                  className={`p-6 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                    activeDomain.id === domain.id
                      ? 'bg-[#0f1017] border-[#ccff00] shadow-lg shadow-[#ccff00]/10'
                      : 'bg-[#070709] border-white/10 hover:border-white/30 text-[#94a3b8]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#ccff00]">
                      DOMAIN // 0{skillDomains.indexOf(domain) + 1}
                    </span>
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: domain.accent }}
                    />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    {domain.title}
                  </h3>
                  <p className="font-mono text-xs text-[#94a3b8] line-clamp-1">
                    {domain.subtitle}
                  </p>
                </button>
              ))}
            </div>

            {/* Matrix & Detail Inspector */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeDomain.skills.map((skill) => {
                  const isSelected = selectedSkill.name === skill.name;
                  return (
                    <div
                      key={skill.name}
                      onClick={() => {
                        soundManager.playClick();
                        setSelectedSkill(skill);
                      }}
                      onMouseEnter={() => soundManager.playHover()}
                      data-cursor="hover"
                      className={`p-5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#141622] border-[#ccff00] scale-[1.02]'
                          : 'bg-[#0f1017] border-white/5 hover:border-white/20'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-[10px] text-[#94a3b8] uppercase tracking-wider">
                            {skill.level}
                          </span>
                          {isSelected && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#ccff00]" />
                          )}
                        </div>
                        <h4 className="font-display text-base font-bold text-white mb-1">
                          {skill.name}
                        </h4>
                      </div>
                      <p className="text-xs text-[#94a3b8] mt-3 line-clamp-2">
                        {skill.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Detail Inspector Card */}
              <div className="lg:col-span-5 p-8 rounded-3xl bg-[#0f1017] border border-white/10 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <span className="font-mono text-xs text-[#ccff00] uppercase tracking-widest flex items-center gap-2">
                    <Terminal className="w-4 h-4" />
                    ARCHITECTURE INSPECTOR
                  </span>
                  <span className="font-mono text-xs text-[#94a3b8]">
                    NODE
                  </span>
                </div>

                <div className="space-y-6">
                  <div>
                    <span className="font-mono text-xs text-[#94a3b8] uppercase block mb-1">
                      Selected Capability:
                    </span>
                    <h4 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                      {selectedSkill.name}
                    </h4>
                    <div className="inline-block px-3 py-1 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/30 font-mono text-xs text-[#ccff00] font-semibold">
                      STATUS: {selectedSkill.level.toUpperCase()} STANDARDS
                    </div>
                  </div>

                  <div>
                    <span className="font-mono text-xs text-[#94a3b8] uppercase block mb-2">
                      Technical Implementation Scope:
                    </span>
                    <p className="text-sm text-[#cbd5e1] leading-relaxed bg-[#070709] p-4 rounded-xl border border-white/5">
                      {selectedSkill.desc}
                    </p>
                  </div>

                  <div className="space-y-2 border-t border-white/10 pt-4 font-mono text-xs text-[#94a3b8]">
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span>DEPLOYED ON</span>
                      <span className="text-white">80+ Client Environments</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span>MAINTENANCE RATING</span>
                      <span className="text-[#ccff00]">Zero-Friction Client Handoff</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>FIDELITY GUARANTEE</span>
                      <span className="text-white">Pixel-Perfect Responsive</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="#contact"
                      onClick={() => soundManager.playClick()}
                      className="w-full py-3.5 rounded-full bg-white/10 hover:bg-[#ccff00] hover:text-[#070709] text-white font-mono text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2"
                    >
                      <span>Inquire Regarding This Stack</span>
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
