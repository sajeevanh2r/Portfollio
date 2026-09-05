import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { id: 'hero',       label: 'HOME',       code: '01' },
  { id: 'projects',   label: 'MEMORY_CORE', code: '02' },
  { id: 'skills',     label: 'NEURAL_CORE', code: '03' },
  { id: 'about',      label: 'HUMAN_CORE',  code: '04' },
  { id: 'experience', label: 'SYS_LOGS',   code: '05' },
  { id: 'education',  label: 'UPGRADES',   code: '06' },
  { id: 'contact',    label: 'CONNECT',    code: '07' },
];

export default function Navbar({ onOpenResume }) {
  const [active, setActive] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const scrollY = window.scrollY + 200;
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (el && scrollY >= el.offsetTop && scrollY < el.offsetTop + el.offsetHeight) {
          setActive(link.id);
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050608]/90 backdrop-blur-md border-b border-cyan-500/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-7 h-7 border border-cyan-500/60 flex items-center justify-center group-hover:border-cyan-400 transition-colors">
            <span className="text-[10px] text-cyan-400 font-mono font-bold">RS</span>
          </div>
          <span className="text-xs text-cyan-500/70 font-mono tracking-widest hidden sm:block">SAJEEVAN_OS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-3 py-1.5 text-[10px] tracking-widest transition-all font-mono ${
                  isActive
                    ? 'text-cyan-400 border-b border-cyan-400'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {isActive && <span className="text-cyan-600 mr-1">&gt;_</span>}
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenResume}
            data-cursor="CV"
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-[10px] tracking-widest font-mono text-cyan-400 border border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-500/5 transition-all"
          >
            [ VIEW CV ]
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-cyan-500 font-mono text-xs border border-cyan-500/30 px-2 py-1"
          >
            {menuOpen ? '[ X ]' : '[ ≡ ]'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-[#050608]/95 backdrop-blur border-b border-cyan-500/15 px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors tracking-widest border-b border-slate-900"
            >
              <span className="text-cyan-600/50 mr-2">{link.code}</span>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
