import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import ThreeDAvatar from './ThreeDAvatar';

const ROLES = personalInfo.roles;

export default function Hero({ onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timer;
    if (deleting) {
      timer = setTimeout(() => {
        setTyped(prev => prev.slice(0, -1));
        if (typed.length <= 1) { setDeleting(false); setRoleIndex(i => (i + 1) % ROLES.length); }
      }, 30);
    } else {
      timer = setTimeout(() => {
        setTyped(current.slice(0, typed.length + 1));
        if (typed === current) setTimeout(() => setDeleting(true), 2000);
      }, 65);
    }
    return () => clearTimeout(timer);
  }, [typed, deleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen pt-20 pb-16 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── LEFT: BIO & IDENTITY ── */}
          <div className="space-y-6 order-2 lg:order-1">

            {/* System tag */}
            <div className="flex items-center gap-3 text-[10px] font-mono text-cyan-500/60 tracking-widest">
              <span className="w-6 h-px bg-cyan-500/40" />
              IDENTITY_UNIT // SAJEEVAN_OS v2.6
              <span className="w-6 h-px bg-cyan-500/40" />
            </div>

            {/* Name */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-mono tracking-tight leading-none">
                <span className="text-white glitch" data-text="RADHAKRISHNAN">RADHAKRISHNAN</span>
                <br />
                <span className="text-cyan-400 text-glow-cyan">SAJEEVAN</span>
              </h1>
            </div>

            {/* Typing Role */}
            <div className="flex items-center gap-2 h-8">
              <span className="text-cyan-500/50 font-mono text-sm">&gt;_</span>
              <span className="font-mono text-base text-slate-200">
                {typed}
                <span className="cursor-blink text-cyan-400">|</span>
              </span>
            </div>

            {/* Bio terminal block */}
            <div className="terminal-panel rounded-none border-l-2 border-l-cyan-500/60 border-t-0 border-r-0 border-b-0 pl-4 py-3 space-y-1">
              <p className="text-[10px] font-mono text-cyan-500/50 tracking-widest">// SYSTEM_BIO</p>
              <p className="text-sm font-mono text-slate-300 leading-relaxed">
                Dual-degree undergraduate in <span className="text-cyan-400">Data Science</span> (NIBM) &amp;{' '}
                <span className="text-cyan-400">MIS</span> (NSBM). Engineering ML pipelines, RAG assistants,
                and cross-platform mobile systems.
              </p>
            </div>

            {/* Status grid */}
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'STATUS', value: 'OPERATIONAL', color: 'text-emerald-400' },
                { label: 'LOCATION', value: 'COLOMBO, LK', color: 'text-slate-300' },
                { label: 'DEGREES', value: 'DUAL // MIS + DS', color: 'text-cyan-400' },
                { label: 'PROJECTS', value: '10 COMPLETED', color: 'text-cyan-400' },
              ].map((item, i) => (
                <div key={i} className="terminal-panel px-3 py-2 space-y-0.5">
                  <p className="text-[9px] font-mono text-slate-600 tracking-widest">{item.label}</p>
                  <p className={`text-[11px] font-mono font-bold ${item.color}`}>{item.value}</p>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                data-cursor="EXPLORE"
                className="px-5 py-2.5 text-xs font-mono tracking-widest text-[#050608] bg-cyan-400 hover:bg-cyan-300 transition-colors font-bold"
              >
                [ MEMORY_CORE ]
              </a>
              <button
                onClick={onOpenResume}
                data-cursor="CV"
                className="px-5 py-2.5 text-xs font-mono tracking-widest text-cyan-400 border border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/5 transition-all"
              >
                [ VIEW CV ]
              </button>
              <a
                href="#contact"
                data-cursor="CONNECT"
                className="px-5 py-2.5 text-xs font-mono tracking-widest text-slate-400 border border-slate-700 hover:border-slate-500 hover:text-slate-200 transition-all"
              >
                [ CONNECT ]
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-1">
              <a href={`mailto:${personalInfo.email}`} className="text-[10px] font-mono text-slate-500 hover:text-cyan-400 transition-colors">
                {personalInfo.email}
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-200 transition-colors">
                <GithubIcon className="w-4 h-4" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-200 transition-colors">
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ── RIGHT: 3D ROBOT ── */}
          <div className="order-1 lg:order-2 flex justify-center">
            <ThreeDAvatar />
          </div>
        </div>

        {/* Bottom system status bar */}
        <div className="mt-16 border-t border-cyan-500/10 pt-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-[10px] font-mono text-slate-600">
            <span>NEURAL_NETWORK: <span className="text-emerald-400">ONLINE</span></span>
            <span>CODE_ENGINE: <span className="text-emerald-400">ONLINE</span></span>
            <span>CREATIVE_CORE: <span className="text-emerald-400">ONLINE</span></span>
          </div>
          <div className="text-[10px] font-mono text-slate-700">
            SAJEEVAN_OS // BUILD 2026.09
          </div>
        </div>

      </div>
    </section>
  );
}
