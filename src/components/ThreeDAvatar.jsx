import React, { useRef, useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

export default function ThreeDAvatar() {
  const containerRef = useRef(null);
  const [rot, setRot] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [eyePos, setEyePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;

      // Tilt based on mouse from center of avatar
      setRot({
        x: (dy / window.innerHeight) * -14,
        y: (dx / window.innerWidth) * 16,
      });

      // Eye tracking — map to ±30% range
      const eyeX = 50 + (dx / window.innerWidth) * 40;
      const eyeY = 50 + (dy / window.innerHeight) * 40;
      setEyePos({
        x: Math.max(30, Math.min(70, eyeX)),
        y: Math.max(30, Math.min(70, eyeY)),
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[380px] mx-auto"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* 3D tilting wrapper */}
      <div
        className="transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Outer glow border */}
        <div className="relative robot-float" style={{ transformStyle: 'preserve-3d' }}>
          {/* Ambient glow behind */}
          <div
            className="absolute -inset-6 rounded-2xl bg-cyan-500/8 blur-3xl"
            style={{ transform: 'translateZ(-60px)' }}
          />

          {/* Corner HUD brackets */}
          <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-cyan-400/80" style={{ transform: 'translateZ(20px)' }} />
          <div className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-cyan-400/80" style={{ transform: 'translateZ(20px)' }} />
          <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-cyan-400/80" style={{ transform: 'translateZ(20px)' }} />
          <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-cyan-400/80" style={{ transform: 'translateZ(20px)' }} />

          {/* Main robot image frame */}
          <div className="relative overflow-hidden rounded border border-cyan-500/25 bg-[#050608]">
            <img
              src="./assets/ai-avatar.jpg"
              alt="Sajeevan AI Avatar"
              className="w-full object-cover object-top aspect-[3/4]"
            />

            {/* Eye tracking overlay — subtle red glow follows cursor */}
            <div
              className="absolute w-12 h-4 rounded-full bg-rose-500/40 blur-md transition-all duration-150 pointer-events-none"
              style={{
                left: `calc(${eyePos.x}% - 24px)`,
                top: `calc(${eyePos.y * 0.4}% + 12%)`,
              }}
            />

            {/* Scanline overlay */}
            <div className="absolute inset-0 scanlines pointer-events-none" />

            {/* Bottom gradient */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#050608] via-[#050608]/60 to-transparent" />

            {/* Bottom HUD status bar */}
            <div
              className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none"
              style={{ transform: 'translateZ(30px)' }}
            >
              <div className="flex items-center gap-1.5 px-2 py-1 text-[9px] font-mono text-cyan-400 border border-cyan-500/30 bg-black/70 backdrop-blur-sm tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                AI_CORE_ONLINE
              </div>
              <div className="text-[9px] font-mono text-slate-500 px-2 py-1 border border-slate-800 bg-black/70">
                v2.6 // ML
              </div>
            </div>

            {/* Top system tag */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
              <div className="text-[9px] font-mono text-cyan-500/60 tracking-widest">NEURAL_IDENTITY</div>
              <div className="text-[9px] font-mono text-slate-600">60 FPS</div>
            </div>
          </div>

          {/* Floating side badges with 3D depth */}
          <div
            className="absolute -right-4 top-1/4 flex items-center gap-1.5 px-2.5 py-1.5 text-[10px] font-mono bg-[#050608] border border-cyan-500/35 text-cyan-300 whitespace-nowrap"
            style={{ transform: 'translateZ(40px)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            PYTORCH // RAG
          </div>

          <div
            className="absolute -left-4 top-1/2 flex items-center gap-1.5 px-2.5 py-1.5 text-[10px] font-mono bg-[#050608] border border-cyan-500/35 text-cyan-300 whitespace-nowrap"
            style={{ transform: 'translateZ(40px)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            FLUTTER // DART
          </div>

          <div
            className="absolute -right-4 top-2/3 flex items-center gap-1.5 px-2.5 py-1.5 text-[10px] font-mono bg-[#050608] border border-emerald-500/35 text-emerald-300 whitespace-nowrap"
            style={{ transform: 'translateZ(40px)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            NIBM // NSBM
          </div>
        </div>
      </div>
    </div>
  );
}
