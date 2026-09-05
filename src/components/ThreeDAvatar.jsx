import React, { useRef, useState, useEffect } from 'react';
import { Sparkles, FolderGit2, Brain, Compass, User, Activity } from 'lucide-react';

export default function ThreeDAvatar() {
  const containerRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -12;
    const rotY = ((x - centerX) / centerX) * 12;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      className="relative w-full max-w-[440px] mx-auto py-8"
      style={{ perspective: '1200px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      {/* 3D Tilting Frame */}
      <div
        className="relative transition-transform duration-200 ease-out will-change-transform flex items-center justify-center"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${isHovered ? 'scale3d(1.02, 1.02, 1.02)' : 'scale3d(1, 1, 1)'}`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Soft Ambient Halo */}
        <div
          className="absolute -inset-6 rounded-full bg-gradient-to-tr from-cyan-500/15 via-blue-600/20 to-purple-600/20 blur-3xl opacity-80 -z-10"
          style={{ transform: 'translateZ(-40px)' }}
        />

        {/* Central Character Card */}
        <div
          className="relative rounded-3xl p-[1px] bg-gradient-to-b from-cyan-400/30 via-white/10 to-purple-500/20 shadow-2xl overflow-hidden max-w-[300px] w-full"
          style={{ transform: 'translateZ(15px)' }}
        >
          <div className="relative rounded-[23px] overflow-hidden bg-[#08090d] aspect-[9/13]">
            <img
              src="./assets/ai-avatar.jpg"
              alt="Radhakrishnan Sajeevan"
              className="w-full h-full object-cover object-top scale-105 transition-transform duration-700 hover:scale-110"
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-transparent opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#08090d]/40 via-transparent to-transparent" />

            {/* Bottom ID Badge */}
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl cinematic-card text-center" style={{ transform: 'translateZ(30px)' }}>
              <p className="text-xs font-bold text-white tracking-wide uppercase">Radhakrishnan Sajeevan</p>
              <p className="text-[10px] font-mono text-cyan-400">Data Scientist & Mobile Architect</p>
            </div>
          </div>
        </div>

        {/* 4 Orbital Navigation Nodes */}
        
        {/* Top: PROJECTS */}
        <a
          href="#projects"
          className="absolute -top-3 left-1/2 -translate-x-1/2 cinematic-card px-4 py-2 rounded-full flex items-center gap-2 text-xs font-semibold text-white shadow-xl hover:border-cyan-400 hover:text-cyan-300 transition-all group cursor-pointer"
          style={{ transform: 'translateZ(50px)' }}
        >
          <FolderGit2 className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
          <span>PROJECTS</span>
        </a>

        {/* Bottom: JOURNEY */}
        <a
          href="#experience"
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 cinematic-card px-4 py-2 rounded-full flex items-center gap-2 text-xs font-semibold text-white shadow-xl hover:border-indigo-400 hover:text-indigo-300 transition-all group cursor-pointer"
          style={{ transform: 'translateZ(50px)' }}
        >
          <Compass className="w-3.5 h-3.5 text-indigo-400 group-hover:scale-110 transition-transform" />
          <span>MY JOURNEY</span>
        </a>

        {/* Left: SKILLS */}
        <a
          href="#skills"
          className="absolute top-1/2 -left-4 sm:-left-8 -translate-y-1/2 cinematic-card px-3.5 py-2 rounded-full flex items-center gap-2 text-xs font-semibold text-white shadow-xl hover:border-emerald-400 hover:text-emerald-300 transition-all group cursor-pointer"
          style={{ transform: 'translateZ(50px)' }}
        >
          <Brain className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
          <span>SKILLS</span>
        </a>

        {/* Right: ABOUT */}
        <a
          href="#about"
          className="absolute top-1/2 -right-4 sm:-right-8 -translate-y-1/2 cinematic-card px-3.5 py-2 rounded-full flex items-center gap-2 text-xs font-semibold text-white shadow-xl hover:border-purple-400 hover:text-purple-300 transition-all group cursor-pointer"
          style={{ transform: 'translateZ(50px)' }}
        >
          <User className="w-3.5 h-3.5 text-purple-400 group-hover:scale-110 transition-transform" />
          <span>ABOUT</span>
        </a>

      </div>
    </div>
  );
}
