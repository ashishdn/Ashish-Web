'use client';

import { useState, useRef } from 'react';
import { projects, projectCategories } from '../data/projects.js';
import { soundManager } from '../services/soundEngine.js';
import { ArrowUpRight, ExternalLink, Sparkles, X, ChevronRight, Database, Plus, Check } from 'lucide-react';

export default function SelectedWork() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const sectionRef = useRef(null);

  const filteredProjects = activeCategory === "All Projects"
    ? projects
    : projects.filter(p => {
        if (activeCategory === "WordPress & Elementor") {
          return p.category.includes("WordPress") || p.tags.includes("Elementor Pro");
        }
        if (activeCategory === "JetEngine & Dynamic CPTs") {
          return p.tags.includes("JetEngine") || p.tags.includes("Custom Post Types");
        }
        if (activeCategory === "Headless & React") {
          return p.category.includes("Headless") || p.tags.includes("Next.js") || p.tags.includes("React");
        }
        if (activeCategory === "WooCommerce") {
          return p.category.includes("WooCommerce") || p.tags.includes("WooCommerce");
        }
        return true;
      });

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const handleCategoryChange = (cat) => {
    soundManager.playClick();
    setActiveCategory(cat);
    setVisibleCount(6); // Reset to 6 for the selected category
  };

  const handleLoadMore = () => {
    soundManager.playSuccess();
    setVisibleCount((prev) => prev + 3);
  };

  const openProjectModal = (proj) => {
    soundManager.playClick();
    setSelectedProject(proj);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    soundManager.playClick();
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  return (
    <section id="work" ref={sectionRef} className="relative py-28 px-4 sm:px-8 md:px-12 bg-[#0a0a0e] border-t border-white/5">
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />

      <div className="max-w-[1344px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#ccff00] uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SELECTED PRODUCTION SHOWCASE</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase">
              FEATURED <span className="text-[#ccff00]">BUILDS</span>
            </h2>
          </div>

          <div className="flex flex-col text-left md:text-right font-mono text-xs text-[#94a3b8] gap-1">
            <span className="text-white font-semibold">80+ VERIFIED PROJECTS DELIVERED</span>
            <span className="flex items-center md:justify-end gap-1.5 text-[#38bdf8]">
              <Database className="w-3.5 h-3.5" />
              MongoDB & Headless API Ready Schema
            </span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-14">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                onMouseEnter={() => soundManager.playHover()}
                data-cursor="hover"
                className={`px-4 sm:px-5 py-2.5 rounded-full font-mono text-xs tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#ccff00] text-[#070709] font-bold shadow-md shadow-[#ccff00]/20'
                    : 'bg-[#0e0f14] text-[#94a3b8] hover:text-white hover:bg-[#161822] border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="font-mono text-xs text-[#94a3b8] flex items-center gap-2">
            <span>Showing:</span>
            <span className="text-[#ccff00] font-semibold">{displayedProjects.length}</span>
            <span>of</span>
            <span className="text-white font-semibold">{filteredProjects.length} Projects</span>
          </div>
        </div>

        {/* Powerful High-Craft Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => {
            return (
              <div
                key={project.id}
                className="group relative rounded-2xl bg-[#0e0f14] border border-white/10 hover:border-[#ccff00]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl animate-fade-in"
              >
                {/* Media Container */}
                <div
                  className="relative w-full h-64 sm:h-72 overflow-hidden cursor-pointer"
                  onClick={() => openProjectModal(project)}
                  data-cursor="project"
                  data-cursor-text="VIEW"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out filter brightness-[0.88] group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f14] via-[#0e0f14]/30 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-[#070709]/85 backdrop-blur-md text-[11px] font-mono font-medium text-white border border-white/15">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#ccff00] text-[#070709] text-[11px] font-mono font-bold">
                      {project.year}
                    </span>
                  </div>

                  {/* Impact Metric Floating Badge */}
                  {project.metrics && project.metrics[0] && (
                    <div className="absolute bottom-4 left-4 z-10">
                      <div className="px-3 py-1 rounded-lg bg-[#070709]/90 border border-white/15 backdrop-blur-md flex items-center gap-2">
                        <span className="text-[10px] font-mono text-[#94a3b8]">{project.metrics[0].label}:</span>
                        <span className="text-xs font-mono font-bold text-[#ccff00]">{project.metrics[0].value}</span>
                      </div>
                    </div>
                  )}

                  {/* Quick Action Button */}
                  <div className="absolute bottom-4 right-4 z-10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openProjectModal(project);
                      }}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#ccff00] text-white hover:text-[#070709] backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200"
                      title="Inspect case study"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Project Metadata Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2 font-mono text-xs">
                      <span className="text-[#94a3b8]">CLIENT: <strong className="text-white font-normal">{project.client}</strong></span>
                    </div>

                    <h3
                      onClick={() => openProjectModal(project)}
                      className="font-display text-2xl font-bold text-white group-hover:text-[#ccff00] transition-colors cursor-pointer mb-2"
                    >
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#94a3b8] line-clamp-2 leading-relaxed mb-6 font-normal">
                      {project.overview}
                    </p>
                  </div>

                  {/* Tags & Action Links */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-white/5 text-[11px] font-mono text-[#cbd5e1] border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono">
                      <button
                        onClick={() => openProjectModal(project)}
                        onMouseEnter={() => soundManager.playHover()}
                        className="text-white hover:text-[#ccff00] font-semibold flex items-center gap-1 cursor-pointer"
                      >
                        <span>Architecture</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          soundManager.playClick();
                        }}
                        onMouseEnter={() => soundManager.playHover()}
                        className="text-[#ccff00] hover:text-white flex items-center gap-1 transition-colors"
                      >
                        <span>Live Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Pagination Control (6 + 3 + 3) */}
        <div className="mt-16 flex flex-col items-center justify-center gap-4">
          {hasMore ? (
            <button
              onClick={handleLoadMore}
              onMouseEnter={() => soundManager.playHover()}
              data-cursor="hover"
              data-cursor-text="LOAD"
              className="px-8 py-4 rounded-full bg-[#0e0f14] hover:bg-[#ccff00] text-white hover:text-[#070709] border border-white/15 hover:border-[#ccff00] font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-xl flex items-center gap-3 cursor-pointer group"
            >
              <Plus className="w-4 h-4 text-[#ccff00] group-hover:text-[#070709] transition-transform group-hover:rotate-90" />
              <span>Load More Projects (+3)</span>
            </button>
          ) : (
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0e0f14] border border-white/10 text-xs font-mono text-[#94a3b8]">
              <Check className="w-3.5 h-3.5 text-[#ccff00]" />
              <span>All {filteredProjects.length} Projects Displayed • Ready for MongoDB Integration</span>
            </div>
          )}
        </div>

      </div>

      {/* Case Study Architectural Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-fade-in">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0e0f14] border border-white/15 rounded-3xl overflow-hidden flex flex-col shadow-2xl">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#070709]/80 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ccff00]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#94a3b8]">
                  PROJECT ARCHITECTURE REPORT // {selectedProject.year}
                </span>
              </div>
              <button
                onClick={closeProjectModal}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-8">
              
              <div>
                <span className="text-xs font-mono text-[#ccff00] uppercase tracking-wider block mb-1">
                  {selectedProject.category} • Client: {selectedProject.client}
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
                  {selectedProject.title}
                </h3>
                <p className="text-base text-[#cbd5e1] leading-relaxed">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* Main Visual */}
              <div className="rounded-2xl overflow-hidden border border-white/10 h-64 sm:h-80 md:h-96">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {selectedProject.metrics.map((m) => (
                  <div key={m.label} className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <span className="block font-mono text-xs text-[#94a3b8] mb-1">{m.label}</span>
                    <span className="font-display text-2xl font-bold text-[#ccff00]">{m.value}</span>
                  </div>
                ))}
              </div>

              {/* Architectural Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-[#070709] border border-white/10">
                  <h4 className="font-mono text-xs text-[#ccff00] uppercase tracking-wider mb-2 font-bold">
                    THE ARCHITECTURAL CHALLENGE
                  </h4>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#070709] border border-white/10">
                  <h4 className="font-mono text-xs text-[#ccff00] uppercase tracking-wider mb-2 font-bold">
                    THE ENGINEERING SOLUTION
                  </h4>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div>
                <h4 className="font-mono text-xs text-white uppercase tracking-wider mb-3">
                  TECHNOLOGIES & ARCHITECTURE EMPLOYED
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-lg bg-[#ccff00]/10 border border-[#ccff00]/20 text-[#ccff00] font-mono text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer CTA in modal */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="font-mono text-xs text-[#94a3b8]">
                  Verified production work by Ashish Kumar Debnath
                </span>

                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playClick()}
                  className="px-6 py-3 rounded-full bg-[#ccff00] hover:bg-white text-[#070709] font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-2"
                >
                  <span>Visit Live Platform</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
}
