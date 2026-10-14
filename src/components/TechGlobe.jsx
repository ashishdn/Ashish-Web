'use client';

import { useEffect, useRef, useState } from 'react';
import { soundManager } from '../services/soundEngine.js';
import { Cpu } from 'lucide-react';

const TECH_ITEMS = [
  { name: "WordPress", category: "Core CMS", color: "#ccff00", level: "Expert", desc: "Enterprise architecture, custom hooks & multisite setups" },
  { name: "Elementor Pro", category: "Theme Engine", color: "#ccff00", level: "Master", desc: "Pixel-perfect responsive design systems & dynamic loops" },
  { name: "JetEngine", category: "Dynamic CPTs", color: "#38bdf8", level: "Architect", desc: "Complex relational taxonomies, queries & glossaries" },
  { name: "React", category: "Frontend", color: "#38bdf8", level: "Advanced", desc: "Component architecture, hooks & interactive states" },
  { name: "Next.js", category: "Framework", color: "#ffffff", level: "Advanced", desc: "App router, SSR/SSG & headless CMS frontends" },
  { name: "WooCommerce", category: "E-Commerce", color: "#a855f7", level: "Advanced", desc: "Custom checkout flows, AJAX mini-cart & inventory sync" },
  { name: "Tailwind CSS", category: "Design Tokens", color: "#38bdf8", level: "Master", desc: "Utility-first rapid design systems & container queries" },
  { name: "JavaScript", category: "Language", color: "#f59e0b", level: "Advanced", desc: "ES6+, async pipelines, DOM APIs & modular code" },
  { name: "Shopify", category: "E-Commerce", color: "#10b981", level: "Proficient", desc: "Storefront customization & conversion optimization" },
  { name: "Liquid", category: "Templating", color: "#10b981", level: "Proficient", desc: "Custom Shopify theme sections & JSON templates" },
  { name: "Webflow", category: "No-Code", color: "#38bdf8", level: "Proficient", desc: "Client-first frameworks, CMS collections & interactions" },
  { name: "PHP", category: "Backend", color: "#94a3b8", level: "Proficient", desc: "Custom functions.php, filter hooks & template overrides" },
  { name: "ACF Pro", category: "Meta Fields", color: "#ccff00", level: "Master", desc: "Custom flexible content layouts & repeater fields" },
  { name: "REST API", category: "Integration", color: "#f59e0b", level: "Advanced", desc: "Headless endpoints, webhooks & third-party sync" },
  { name: "Core Web Vitals", category: "Performance", color: "#ccff00", level: "Specialist", desc: "LCP/CLS tuning, script deferral & 95+ PageSpeed" },
  { name: "Git", category: "Workflow", color: "#f43f5e", level: "Advanced", desc: "Version control, branching & staging deployments" }
];

export default function TechGlobe({ onSelectTech }) {
  const canvasRef = useRef(null);
  const [activeItem, setActiveItem] = useState(TECH_ITEMS[0]);
  const activeItemRef = useRef(TECH_ITEMS[0]);

  useEffect(() => {
    activeItemRef.current = activeItem;
  }, [activeItem]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = canvas.parentElement.clientWidth || 460;
    let height = 420;
    let dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let radius = Math.min(width, height) * 0.36;

    const resizeCanvas = () => {
      if (!canvas.parentElement) return;
      width = canvas.parentElement.clientWidth || 460;
      height = 420;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      radius = Math.min(width, height) * 0.36;
      nodes.forEach((node, i) => {
        const phi = Math.acos(-1 + (2 * i) / nodes.length);
        const theta = Math.sqrt(nodes.length * Math.PI) * phi;
        node.baseX = radius * Math.cos(theta) * Math.sin(phi);
        node.baseY = radius * Math.sin(theta) * Math.sin(phi);
        node.baseZ = radius * Math.cos(phi);
      });
    };

    const handleResize = () => resizeCanvas();

    window.addEventListener('resize', handleResize);

    // Spherical coordinates
    const nodes = TECH_ITEMS.map((item, i) => {
      const phi = Math.acos(-1 + (2 * i) / TECH_ITEMS.length);
      const theta = Math.sqrt(TECH_ITEMS.length * Math.PI) * phi;
      return {
        ...item,
        baseX: radius * Math.cos(theta) * Math.sin(phi),
        baseY: radius * Math.sin(theta) * Math.sin(phi),
        baseZ: radius * Math.cos(phi),
        // Projected coords
        x: 0,
        y: 0,
        z: 0,
        scale: 1,
        alpha: 1,
        radius: 34
      };
    });

    resizeCanvas();

    let angleX = 0;
    let angleY = 0;
    let velX = 0.002;
    let velY = 0.0035;
    let isDragging = false;
    let lastX = 0;
    let lastY = 0;
    let hoveredNode = null;
    let isInView = false;

    const render = () => {
      if (!isDragging && !hoveredNode) {
        angleX += velX;
        angleY += velY;
        // Dampen velocity smoothly back to gentle idle speed
        velX += (0.0015 - velX) * 0.05;
        velY += (0.0025 - velY) * 0.05;
      }

      ctx.clearRect(0, 0, width, height);
      const centerX = width / 2;
      const centerY = height / 2;

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      // Draw faint background orbital rings
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.05, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 0.75, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(204, 255, 0, 0.05)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      // Transform all nodes in 3D
      nodes.forEach((node) => {
        // Rotate around Y
        const x1 = node.baseX * cosY + node.baseZ * sinY;
        const z1 = -node.baseX * sinY + node.baseZ * cosY;

        // Rotate around X
        const y2 = node.baseY * cosX - z1 * sinX;
        const z2 = node.baseY * sinX + z1 * cosX;

        const fov = 340;
        const scale = fov / (fov + z2 + 150);
        const alpha = Math.max(0.2, Math.min(1.0, (z2 + radius) / (2 * radius) + 0.15));

        node.x = centerX + x1 * scale;
        node.y = centerY + y2 * scale;
        node.z = z2;
        node.scale = scale;
        node.alpha = alpha;
      });

      // Sort back-to-front
      const sorted = [...nodes].sort((a, b) => a.z - b.z);

      // Draw connective lines between nearby nodes
      ctx.save();
      for (let i = 0; i < sorted.length; i++) {
        for (let j = i + 1; j < sorted.length; j++) {
          const a = sorted[i];
          const b = sorted[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 85 && (a.z > -20 || b.z > -20)) {
            const lineAlpha = (1 - dist / 85) * 0.15 * Math.min(a.alpha, b.alpha);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(204, 255, 0, ${lineAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      ctx.restore();

      // Draw glowing center core
      ctx.save();
      const coreGrad = ctx.createRadialGradient(centerX, centerY, 2, centerX, centerY, 36);
      coreGrad.addColorStop(0, 'rgba(204, 255, 0, 0.4)');
      coreGrad.addColorStop(0.5, 'rgba(204, 255, 0, 0.08)');
      coreGrad.addColorStop(1, 'rgba(204, 255, 0, 0)');
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 36, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Draw nodes
      sorted.forEach((node) => {
        const isSelected = activeItemRef.current && activeItemRef.current.name === node.name;
        const isHovered = hoveredNode && hoveredNode.name === node.name;
        const pillScale = Math.max(0.7, Math.min(1.2, node.scale));

        ctx.save();
        ctx.translate(node.x, node.y);
        ctx.scale(pillScale, pillScale);

        // Calculate text width
        ctx.font = '600 11px "JetBrains Mono", monospace';
        const textWidth = ctx.measureText(node.name).width;
        const pillW = textWidth + 28;
        const pillH = 24;
        const pillX = -pillW / 2;
        const pillY = -pillH / 2;

        node.renderedW = pillW * pillScale;
        node.renderedH = pillH * pillScale;

        // Background pill
        ctx.beginPath();
        ctx.roundRect(pillX, pillY, pillW, pillH, 12);

        if (isSelected) {
          ctx.fillStyle = '#ccff00';
          ctx.shadowColor = 'rgba(204, 255, 0, 0.6)';
          ctx.shadowBlur = 15;
          ctx.fill();
          ctx.shadowBlur = 0;
        } else if (isHovered) {
          ctx.fillStyle = 'rgba(20, 24, 34, 0.95)';
          ctx.strokeStyle = '#ccff00';
          ctx.lineWidth = 1.5;
          ctx.fill();
          ctx.stroke();
        } else {
          ctx.fillStyle = `rgba(14, 16, 23, ${node.alpha * 0.95})`;
          ctx.strokeStyle = `rgba(255, 255, 255, ${node.alpha * 0.18})`;
          ctx.lineWidth = 1;
          ctx.fill();
          ctx.stroke();
        }

        // Color indicator dot
        ctx.beginPath();
        ctx.arc(pillX + 11, 0, 3, 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? '#070709' : node.color;
        ctx.fill();

        // Label text
        ctx.fillStyle = isSelected
          ? '#070709'
          : isHovered
          ? '#ffffff'
          : `rgba(240, 244, 248, ${Math.max(0.4, node.alpha)})`;
        ctx.fillText(node.name, pillX + 19, 3.5);

        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isInView = entry.isIntersecting;
      if (isInView && !animId) animId = requestAnimationFrame(render);
      if (!isInView && animId) {
        cancelAnimationFrame(animId);
        animId = null;
      }
    }, { threshold: 0.05 });
    visibilityObserver.observe(canvas);

    // Pointer events for smooth drag
    const onPointerDown = (e) => {
      isDragging = true;
      const rect = canvas.getBoundingClientRect();
      lastX = e.clientX - rect.left;
      lastY = e.clientY - rect.top;
    };

    const onPointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      if (isDragging) {
        const dx = clientX - lastX;
        const dy = clientY - lastY;
        lastX = clientX;
        lastY = clientY;

        velY = dx * 0.004;
        velX = -dy * 0.004;
        angleY += velY;
        angleX += velX;
      }

      // Check node hover (front-most first)
      const sorted = [...nodes].sort((a, b) => b.z - a.z);
      let found = null;
      for (const node of sorted) {
        const dx = clientX - node.x;
        const dy = clientY - node.y;
        if (Math.abs(dx) < (node.renderedW || 40) / 2 && Math.abs(dy) < (node.renderedH || 24) / 2) {
          found = node;
          break;
        }
      }
      hoveredNode = found;
      canvas.style.cursor = found ? 'pointer' : isDragging ? 'grabbing' : 'grab';
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const onClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      const sorted = [...nodes].sort((a, b) => b.z - a.z);
      for (const node of sorted) {
        const dx = clientX - node.x;
        const dy = clientY - node.y;
        if (Math.abs(dx) < (node.renderedW || 40) / 2 && Math.abs(dy) < (node.renderedH || 24) / 2) {
          soundManager.playClick();
          setActiveItem(node);
          if (onSelectTech) onSelectTech(node);
          break;
        }
      }
    };

    canvas.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    canvas.addEventListener('click', onClick);

    return () => {
      cancelAnimationFrame(animId);
      visibilityObserver.disconnect();
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      canvas.removeEventListener('click', onClick);
    };
  }, [onSelectTech]);

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      {/* 3D Canvas Stage */}
      <div className="lg:col-span-7 flex flex-col items-center justify-center">
        <div className="relative w-full max-w-[500px] h-[430px] rounded-3xl bg-[#090a0f] border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl group">
          <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none" />
          <div className="absolute w-64 h-64 rounded-full bg-[#ccff00]/10 blur-[60px] pointer-events-none" />

          {/* Locked 60/120fps Hardware Accelerated 3D Canvas */}
          <canvas
            ref={canvasRef}
            className="w-full h-full block touch-none"
          />

          {/* Hint Overlay */}
          <div className="absolute bottom-3 left-0 w-full text-center pointer-events-none">
            <span className="text-[10px] font-mono text-[#94a3b8] uppercase tracking-widest bg-[#070709]/80 px-3.5 py-1 rounded-full border border-white/10">
              Drag to Spin 3D Globe • Click any Node
            </span>
          </div>
        </div>
      </div>

      {/* Tech Node Details Card */}
      <div className="lg:col-span-5 p-8 rounded-3xl bg-[#0e0f14] border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ccff00] animate-ping" />
            <span className="font-mono text-xs text-[#ccff00] uppercase tracking-wider font-semibold">
              ACTIVE NODE SPECIFICATION
            </span>
          </div>
          <span className="font-mono text-[11px] text-[#94a3b8]">
            {activeItem.category}
          </span>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-display text-3xl font-extrabold text-white mb-2 flex items-center gap-3">
              <span>{activeItem.name}</span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#ccff00]/15 border border-[#ccff00]/40 text-[#ccff00] text-xs font-mono font-bold">
                {activeItem.level}
              </span>
            </h3>
            <p className="text-sm text-[#cbd5e1] leading-relaxed">
              {activeItem.desc}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#070709] border border-white/5 space-y-3 font-mono text-xs text-[#94a3b8]">
            <div className="flex justify-between py-1 border-b border-white/5">
              <span>PRODUCTION FREQUENCY</span>
              <span className="text-white font-medium">80+ Delivered Projects</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/5">
              <span>ECOSYSTEM ROLE</span>
              <span className="text-[#ccff00] font-medium">{activeItem.category}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/5">
              <span>FIDELITY RATING</span>
              <span className="text-white font-medium">Pixel-Perfect Standard</span>
            </div>
            <div className="flex justify-between py-1">
              <span>CLIENT HANDOFF</span>
              <span className="text-[#38bdf8] font-medium">Zero-Code Autonomy</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="font-mono text-xs text-[#94a3b8]">
              Ready for MongoDB backend schema sync
            </span>
            <a
              href="#work"
              onClick={() => soundManager.playClick()}
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-[#ccff00] hover:text-[#070709] text-white font-mono text-xs font-semibold tracking-wider transition-colors"
            >
              View Related Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
