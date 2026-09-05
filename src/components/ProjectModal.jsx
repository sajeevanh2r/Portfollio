import React, { useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Terminal Card */}
      <div className="relative w-full max-w-2xl bg-[#0a0c10] border border-cyan-500/40 rounded-none shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Terminal Header */}
        <div className="p-4 sm:p-6 bg-black/80 border-b border-cyan-500/20 flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-[9px] font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                {project.badge || project.category}
              </span>
              <span className="text-[10px] font-mono text-slate-500">
                YEAR: {project.year}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight pt-1">
              {project.title.toUpperCase()}
            </h3>
          </div>

          <button
            onClick={onClose}
            data-cursor="CLOSE"
            className="p-1.5 border border-slate-800 hover:border-cyan-400 text-slate-500 hover:text-cyan-400 font-mono text-xs transition-colors"
          >
            [ X ]
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Overview */}
          <div>
            <p className="text-[9px] font-mono text-cyan-500/50 tracking-widest uppercase mb-2">
              // ARCHITECTURE_OVERVIEW
            </p>
            <p className="text-xs sm:text-sm font-mono text-slate-300 leading-relaxed">
              {project.description || project.summary}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-2 p-4 border border-cyan-500/15 bg-black/40">
              <p className="text-[9px] font-mono text-cyan-400 tracking-widest uppercase mb-2">
                // SYSTEM_METRICS & ACHIEVEMENTS
              </p>
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs font-mono text-slate-400 leading-relaxed">
                  <span className="text-cyan-500/60 shrink-0">&gt;&gt;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <p className="text-[9px] font-mono text-cyan-500/50 tracking-widest uppercase mb-2">
              // TECH_STACK
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-black text-[10px] font-mono text-cyan-300 border border-cyan-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 bg-black/80 border-t border-cyan-500/20 flex flex-wrap items-center justify-between gap-3">
          <span className="text-[9px] font-mono text-slate-600">
            SYSTEM_ID: {project.id}
          </span>

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="GITHUB"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-300 border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>[ GITHUB ]</span>
            </a>

            <button
              onClick={onClose}
              data-cursor="DONE"
              className="px-4 py-1.5 bg-cyan-400 text-[#050608] text-xs font-mono font-bold hover:bg-cyan-300 transition-colors"
            >
              [ CLOSE ]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
