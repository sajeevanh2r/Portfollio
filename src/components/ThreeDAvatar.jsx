import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Brain, Cpu, Smartphone, Database, Shield, Radio, Activity } from 'lucide-react';

export default function ThreeDAvatar() {
  const containerRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse move parallax 3D effect
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within element
    const y = e.clientY - rect.top;  // y position within element
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -16; // Max 16 deg tilt
    const rotY = ((x - centerX) / centerX) * 16;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      className="relative w-full max-w-[420px] mx-auto py-6"
      style={{ perspective: '1200px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      {/* 3D Container with smooth transition */}
      <div
        className="relative transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${isHovered ? 'scale3d(1.03, 1.03, 1.03)' : 'scale3d(1, 1, 1)'}`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Glowing 3D Radial Background Rings */}
        <div
          className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-blue-600/30 to-rose-500/30 blur-2xl opacity-75 -z-10 group-hover:opacity-100 transition-opacity"
          style={{ transform: 'translateZ(-40px)' }}
        />
        
        {/* Holographic HUD Ring Border */}
        <div
          className="relative rounded-3xl p-1.5 bg-gradient-to-b from-cyan-400/40 via-slate-800/80 to-rose-500/40 shadow-2xl shadow-cyan-500/20 overflow-hidden"
          style={{ transform: 'translateZ(10px)' }}
        >
          {/* Main Avatar Image Card */}
          <div className="relative rounded-[22px] overflow-hidden bg-slate-950 aspect-[9/14] sm:aspect-[9/13] flex items-center justify-center border border-white/10">
            <img
              src="./assets/ai-avatar.jpg"
              alt="Radhakrishnan Sajeevan 3D AI Avatar"
              className="w-full h-full object-cover object-top scale-105 transition-transform duration-700 hover:scale-110"
              style={{ transform: 'translateZ(20px)' }}
            />

            {/* Futuristic Holographic Overlay & Scanlines */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40 pointer-events-none" />
            
            {/* Holographic subtle scan line */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-40" />

            {/* Cyberpunk HUD Top Info Tag */}
            <div
              className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none"
              style={{ transform: 'translateZ(45px)' }}
            >
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 text-[10px] font-mono text-cyan-300 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
                <span>AI_CORE_ONLINE</span>
              </div>
              <div className="px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300">
                v2.6 // ML
              </div>
            </div>

            {/* Cyberpunk HUD Bottom Status Bar */}
            <div
              className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between pointer-events-none"
              style={{ transform: 'translateZ(50px)' }}
            >
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-red-500/20 border border-red-500/40">
                  <Activity className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white font-mono">SAJEEVAN_NEURAL_SYS</p>
                  <p className="text-[9px] text-cyan-400 font-mono">Data Science & Mobile Architecture</p>
                </div>
              </div>
              <div className="text-right font-mono text-[9px] text-slate-400">
                <span className="text-emerald-400">● 60 FPS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating 3D Depth Badges (Pop out in 3D space) */}
        
        {/* Badge 1: Top Right */}
        <div
          className="absolute -top-3 -right-4 sm:-right-6 glass-panel px-3.5 py-2 rounded-2xl border border-cyan-400/40 shadow-xl flex items-center gap-2 pointer-events-none animate-float"
          style={{
            transform: 'translateZ(65px)',
            animationDuration: '5s'
          }}
        >
          <div className="p-1 rounded-lg bg-cyan-500/20 text-cyan-300">
            <Brain className="w-4 h-4 text-cyan-400" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-white font-mono">RAG & PyTorch</div>
            <div className="text-[9px] text-cyan-300">Deep Learning</div>
          </div>
        </div>

        {/* Badge 2: Bottom Left */}
        <div
          className="absolute -bottom-4 -left-4 sm:-left-6 glass-panel px-3.5 py-2 rounded-2xl border border-blue-400/40 shadow-xl flex items-center gap-2 pointer-events-none animate-float"
          style={{
            transform: 'translateZ(75px)',
            animationDuration: '6s',
            animationDelay: '1s'
          }}
        >
          <div className="p-1 rounded-lg bg-blue-500/20 text-blue-300">
            <Smartphone className="w-4 h-4 text-blue-400" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-white font-mono">Flutter & Dart</div>
            <div className="text-[9px] text-blue-300">Cross-Platform UI</div>
          </div>
        </div>

        {/* Badge 3: Middle Right */}
        <div
          className="hidden sm:flex absolute top-1/2 -right-8 glass-panel px-3 py-1.5 rounded-xl border border-rose-500/40 shadow-lg items-center gap-2 pointer-events-none animate-float"
          style={{
            transform: 'translateZ(55px)',
            animationDuration: '4.5s',
            animationDelay: '0.5s'
          }}
        >
          <div className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></div>
          <span className="text-[10px] font-mono text-slate-200 font-semibold">Dual Degree: NIBM × NSBM</span>
        </div>

      </div>
    </div>
  );
}
