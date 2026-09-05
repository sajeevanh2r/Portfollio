import React, { useState } from 'react';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Gateway({ onEnter }) {
  const [exiting, setExiting] = useState(false);

  const handleEnter = () => {
    setExiting(true);
    setTimeout(() => {
      onEnter();
    }, 750);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#08090d] px-6 text-center transition-all ${
        exiting ? 'gateway-exit' : 'opacity-100'
      }`}
    >
      {/* Background Starfield & Atmosphere */}
      <div className="glow-orb w-[600px] h-[600px] top-1/4 left-1/4 bg-blue-600/15" />
      <div className="glow-orb w-[500px] h-[500px] bottom-1/4 right-1/4 bg-indigo-600/15" />

      {/* Subtle Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #38bdf8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-xl mx-auto space-y-8 animate-fade-in">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full cinematic-pill text-xs font-mono text-cyan-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PORTFOLIO // DIGITAL IDENTITY</span>
        </div>

        {/* Title */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase">
            {personalInfo.name}
          </h1>
          <p className="text-sm sm:text-base text-slate-400 font-mono tracking-wider">
            DATA SCIENTIST • MOBILE DEVELOPER • MIS GRADUATE
          </p>
        </div>

        {/* Brief Hook */}
        <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
          Welcome to my digital world. Explore my projects, my thinking, my toolbox, and the journey that brought me here.
        </p>

        {/* CTA Enter Button */}
        <div className="pt-4">
          <button
            onClick={handleEnter}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 text-white font-semibold text-sm shadow-xl shadow-blue-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>ENTER MY WORLD</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Location & Status Pill */}
        <div className="pt-8 text-xs font-mono text-slate-500 flex items-center justify-center gap-4">
          <span>{personalInfo.location}</span>
          <span>•</span>
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Online
          </span>
        </div>

      </div>
    </div>
  );
}
