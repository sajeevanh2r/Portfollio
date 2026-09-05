import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

const HUMAN_DATA = [
  { key: 'DESIGNATION', value: 'RADHAKRISHNAN SAJEEVAN' },
  { key: 'UNIT_TYPE', value: 'HUMAN // DEVELOPER' },
  { key: 'LOCATION_NODE', value: 'COLOMBO, SRI LANKA' },
  { key: 'PRIMARY_DRIVE', value: 'BUILD. LEARN. EVOLVE.' },
  { key: 'DEGREE_ALPHA', value: 'BSc MIS — NSBM (2022–2026)' },
  { key: 'DEGREE_BETA', value: 'BSc DATA SCIENCE — NIBM (2024–2027)' },
];

const INTERESTS = [
  'MACHINE LEARNING', 'MOBILE ENGINEERING', 'RAG SYSTEMS',
  'DATA VISUALIZATION', 'WEB ARCHITECTURE', 'AI RESEARCH',
  'OPEN SOURCE', 'SYSTEM DESIGN',
];

export default function About() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section id="about" className="py-24 relative z-10 border-t border-cyan-500/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <div className="text-[10px] font-mono text-cyan-500/50 tracking-widest mb-2">// SECTION_04</div>
          <h2 className="text-3xl sm:text-4xl font-black font-mono text-white">
            HUMAN<span className="text-cyan-400">_CORE</span>
          </h2>
          <p className="mt-2 text-sm font-mono text-slate-500">
            &gt;_ Machine outside. Human inside.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Left: Robot chest reveal visual */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div
              className={`relative w-full max-w-[280px] transition-all duration-700 ${revealed ? 'opacity-100' : 'opacity-80'}`}
            >
              {/* Robot "chest" container */}
              <div className="terminal-panel p-6 text-center space-y-4 relative overflow-hidden border-cyan-500/30">

                {/* Glowing human core orb */}
                <div className="relative flex items-center justify-center py-6">
                  <div className={`w-24 h-24 rounded-full border-2 transition-all duration-700 ${revealed ? 'border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.5)]' : 'border-cyan-500/30'} flex items-center justify-center`}>
                    <div className={`w-16 h-16 rounded-full transition-all duration-700 ${revealed ? 'bg-cyan-400/20' : 'bg-cyan-500/5'} flex items-center justify-center`}>
                      <div className={`w-8 h-8 rounded-full transition-all duration-700 ${revealed ? 'bg-cyan-400 animate-pulse' : 'bg-cyan-500/20'}`} />
                    </div>
                  </div>
                  {/* Ring orbits */}
                  <div className={`absolute w-32 h-32 rounded-full border border-cyan-500/20 animate-spin-slow`} />
                  <div className={`absolute w-40 h-40 rounded-full border border-cyan-500/10`} style={{ animationDuration: '12s', animationDirection: 'reverse' }} />
                </div>

                <p className="text-[10px] font-mono text-cyan-500/60 tracking-widest">CORE_UNIT</p>
                <p className="text-xs font-mono font-bold text-white">RADHAKRISHNAN SAJEEVAN</p>
                <p className="text-[10px] font-mono text-slate-500">HUMAN // OPERATIONAL</p>

                <button
                  onClick={() => setRevealed(r => !r)}
                  data-cursor="REVEAL"
                  className="w-full py-2 text-[10px] font-mono tracking-widest border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/5 transition-all"
                >
                  {revealed ? '[ SEAL_CORE ]' : '[ REVEAL_CORE ]'}
                </button>

                {/* Scanlines */}
                <div className="absolute inset-0 scanlines pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Right: Human data readout */}
          <div className="lg:col-span-8 space-y-3">

            {/* Data fields */}
            <div className="terminal-panel rounded-none">
              <div className="border-b border-cyan-500/10 px-4 py-2 text-[9px] font-mono text-cyan-500/50 tracking-widest">
                HUMAN_CORE // DATA_READOUT
              </div>
              <div className="divide-y divide-slate-900">
                {HUMAN_DATA.map((item, i) => (
                  <div key={i} className="flex items-baseline gap-4 px-4 py-2.5">
                    <span className="text-[9px] font-mono text-slate-600 w-32 shrink-0 tracking-widest">{item.key}</span>
                    <span className="text-xs font-mono text-slate-200">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bio / Mission */}
            <div className="terminal-panel rounded-none p-4 border-l-2 border-l-cyan-500/50">
              <p className="text-[9px] font-mono text-cyan-500/50 tracking-widest mb-2">// MISSION_STATEMENT</p>
              <p className="text-sm font-mono text-slate-300 leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            {/* Interests */}
            <div className="terminal-panel rounded-none p-4">
              <p className="text-[9px] font-mono text-cyan-500/50 tracking-widest mb-3">// INTEREST_MODULES</p>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((item, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono text-slate-500 border border-slate-800 px-2.5 py-1 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
