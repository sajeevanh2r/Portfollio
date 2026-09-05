import React, { useState, useEffect, useRef } from 'react';

const BOOT_LINES = [
  { text: 'SAJEEVAN_OS v2.6.0 — SYSTEM INITIALIZING...', delay: 0, color: 'cyan' },
  { text: '', delay: 300 },
  { text: 'BIOS CHECK..................... OK', delay: 500, color: 'slate' },
  { text: 'HARDWARE SCAN................. OK', delay: 700, color: 'slate' },
  { text: 'NEURAL NETWORK................ LOADING', delay: 900, color: 'amber' },
  { text: '', delay: 1000 },
  { text: '> IDENTITY MODULE', delay: 1200, color: 'cyan' },
  { text: '  NAME: RADHAKRISHNAN SAJEEVAN', delay: 1500, color: 'white' },
  { text: '  ROLE: DATA SCIENTIST // FLUTTER DEVELOPER', delay: 1800, color: 'white' },
  { text: '  LOCATION: COLOMBO, SRI LANKA', delay: 2100, color: 'white' },
  { text: '', delay: 2200 },
  { text: '> LOADING MODULES', delay: 2400, color: 'cyan' },
  { text: '  [██████████] MACHINE_LEARNING......... INSTALLED', delay: 2700, color: 'green' },
  { text: '  [██████████] FLUTTER_MOBILE........... INSTALLED', delay: 3000, color: 'green' },
  { text: '  [██████████] RAG_LLM_ENGINE........... INSTALLED', delay: 3300, color: 'green' },
  { text: '  [██████████] DATA_VISUALIZATION....... INSTALLED', delay: 3600, color: 'green' },
  { text: '  [██████████] MERN_STACK............... INSTALLED', delay: 3900, color: 'green' },
  { text: '', delay: 4000 },
  { text: '> NEURAL SYSTEM.................. ONLINE', delay: 4200, color: 'green' },
  { text: '> CREATIVE CORE.................. ONLINE', delay: 4400, color: 'green' },
  { text: '> CODE ENGINE.................... ONLINE', delay: 4600, color: 'green' },
  { text: '', delay: 4700 },
  { text: '████████████████████ 100%', delay: 4900, color: 'cyan' },
  { text: '', delay: 5100 },
  { text: '> SYSTEM READY. BOOTING INTERFACE...', delay: 5300, color: 'cyan', bold: true },
];

export default function SystemBoot({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState([]);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    // Skip boot if already seen in this session
    if (sessionStorage.getItem('booted')) {
      onComplete();
      return;
    }

    BOOT_LINES.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, line]);
        // Update progress proportionally
        setProgress(Math.round(((i + 1) / BOOT_LINES.length) * 100));
      }, line.delay);
    });

    // Complete after last line
    setTimeout(() => {
      setDone(true);
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          sessionStorage.setItem('booted', '1');
          onComplete();
        }, 800);
      }, 600);
    }, 5800);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [visibleLines]);

  const colorClass = {
    cyan: 'text-cyan-400',
    slate: 'text-slate-500',
    green: 'text-emerald-400',
    amber: 'text-amber-400',
    white: 'text-slate-200',
    rose: 'text-rose-400',
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050608] transition-opacity duration-700 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
      style={{ fontFamily: 'JetBrains Mono, monospace' }}
    >
      {/* Circuit grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'linear-gradient(rgba(34, 211, 238, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Boot Terminal */}
      <div className="relative w-full max-w-2xl mx-4 rounded-xl border border-cyan-500/25 bg-black/60 overflow-hidden shadow-2xl shadow-cyan-500/10">
        {/* Terminal Title Bar */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-cyan-500/20 bg-black/40">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          </div>
          <span className="text-xs text-cyan-500/70 ml-2 tracking-widest">SAJEEVAN_OS // BOOT_SEQUENCE</span>
        </div>

        {/* Terminal Content */}
        <div className="p-5 sm:p-6 h-72 overflow-y-auto scrollbar-hide space-y-0.5">
          {visibleLines.map((line, i) => (
            <div
              key={i}
              className={`text-xs sm:text-sm leading-relaxed fade-in-up ${line.color ? colorClass[line.color] : 'text-transparent'} ${line.bold ? 'font-bold' : ''}`}
            >
              {line.text || '\u00A0'}
            </div>
          ))}
          {!done && visibleLines.length > 0 && (
            <div className="text-xs text-cyan-400 terminal-cursor">&nbsp;</div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Progress Bar */}
        <div className="px-5 sm:px-6 pb-5">
          <div className="flex items-center justify-between text-[10px] text-cyan-500/60 mb-1.5">
            <span>BOOT PROGRESS</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1 bg-slate-900 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {done && (
            <button
              onClick={() => {
                setFadeOut(true);
                setTimeout(() => {
                  sessionStorage.setItem('booted', '1');
                  onComplete();
                }, 600);
              }}
              className="mt-4 w-full py-2 text-xs tracking-widest text-cyan-400 border border-cyan-500/40 rounded hover:bg-cyan-500/10 transition-colors animate-pulse"
            >
              [ BOOT SAJEEVAN ]
            </button>
          )}
        </div>
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}
