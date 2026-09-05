import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Calendar, Layers, ArrowUpRight, Target, Lightbulb, Wrench, Trophy } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

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
        className="fixed inset-0 bg-[#08090d]/85 backdrop-blur-xl transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#0d1017] border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 animate-scaleUp">
        
        {/* Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-900/30 via-slate-900 to-indigo-900/30 border-b border-white/5">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/25">
                  {project.badge || project.category}
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {project.year}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight pt-1">
                {project.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* What & Why I Built It */}
          <div>
            <h4 className="text-xs font-mono uppercase text-cyan-400 tracking-wider mb-2 flex items-center gap-1.5 font-bold">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>What I Built & Why</span>
            </h4>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {project.description || project.summary}
            </p>
          </div>

          {/* Key Achievements */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-2.5 bg-black/40 p-5 rounded-2xl border border-white/5">
              <h4 className="text-xs font-mono uppercase text-emerald-400 tracking-wider mb-3 flex items-center gap-1.5 font-bold">
                <Trophy className="w-3.5 h-3.5" />
                <span>Key Technical Highlights</span>
              </h4>
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3 flex items-center gap-1.5 font-bold">
              <Wrench className="w-3.5 h-3.5 text-blue-400" />
              <span>Technologies & Tools</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-slate-900 text-xs font-mono text-cyan-300 border border-slate-800 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-5 sm:p-6 bg-black/50 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-slate-400 font-mono">
            Category: <strong className="text-slate-200">{project.category}</strong>
          </span>

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
            >
              Done
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
