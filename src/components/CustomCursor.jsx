'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [cursorState, setCursorState] = useState({
    active: false,
    text: '',
    variant: 'default' // default | project | link | sound | copy
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices or if prefers reduced motion
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    setIsVisible(true);

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = -100;
    let mouseY = -100;
    let cursorX = -100;
    let cursorY = -100;
    let followerX = -100;
    let followerY = -100;
    let animId;
    let hasPointerMoved = false;

    const onMouseMove = (e) => {
      hasPointerMoved = true;
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Lightweight RAF interpolation loop - zero GSAP garbage collection spikes
    const render = () => {
      // Direct fast follow for precision dot
      cursorX += (mouseX - cursorX) * 0.6;
      cursorY += (mouseY - cursorY) * 0.6;
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      cursor.style.opacity = hasPointerMoved ? '1' : '0';

      // Silky fluid follow for ambient ring
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
      follower.style.opacity = hasPointerMoved ? '1' : '0';

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const text = target.getAttribute('data-cursor-text') || '';
        const variant = target.getAttribute('data-cursor') || 'hover';
        setCursorState({ active: true, text, variant });
      } else {
        const clickable = e.target.closest('button, a, input, select, textarea');
        if (clickable) {
          setCursorState({ active: true, text: '', variant: 'link' });
        } else {
          setCursorState({ active: false, text: '', variant: 'default' });
        }
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Precision Center Dot */}
      <div
        ref={cursorRef}
        style={{ willChange: 'transform' }}
        className={`fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-[#ccff00] mix-blend-difference pointer-events-none transition-opacity duration-150 ${
          cursorState.active ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        }`}
      />

      {/* Fluid Interactive Follower */}
      <div
        ref={followerRef}
        style={{ willChange: 'transform' }}
        className={`fixed top-0 left-0 -ml-4 -mt-4 flex items-center justify-center rounded-full pointer-events-none transition-[width,height,background-color,border-color] duration-200 ease-out ${
          cursorState.variant === 'project'
            ? 'w-24 h-24 -ml-12 -mt-12 bg-[#ccff00] text-[#070709] font-mono text-[11px] font-bold tracking-widest uppercase shadow-lg shadow-[#ccff00]/30'
            : cursorState.variant === 'copy'
            ? 'w-20 h-20 -ml-10 -mt-10 bg-[#f8fafc] text-[#070709] font-mono text-[10px] font-semibold tracking-wider uppercase'
            : cursorState.variant === 'link'
            ? 'w-11 h-11 -ml-[22px] -mt-[22px] border border-[#ccff00]/70 bg-[#ccff00]/10 backdrop-blur-[1px]'
            : cursorState.active
            ? 'w-14 h-14 -ml-7 -mt-7 border border-[#ccff00] bg-[#ccff00]/15'
            : 'w-8 h-8 -ml-4 -mt-4 border border-white/25 bg-white/5'
        }`}
      >
        {cursorState.text && (
          <span className="animate-pulse">{cursorState.text}</span>
        )}
      </div>
    </div>
  );
}
