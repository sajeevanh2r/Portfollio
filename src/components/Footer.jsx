import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 relative z-10 border-t border-cyan-500/10 bg-[#050608]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          
          {/* Identity */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="text-slate-400">SAJEEVAN_OS // v2.6.0</span>
            <span className="text-slate-700">|</span>
            <span className="text-slate-500">ROBOTIC IDENTITY ACTIVE</span>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="GITHUB"
              className="text-slate-500 hover:text-cyan-400 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              data-cursor="LINKEDIN"
              className="text-slate-500 hover:text-cyan-400 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              data-cursor="TOP"
              className="text-[10px] text-cyan-500/70 hover:text-cyan-400 border border-cyan-500/20 px-2 py-0.5 transition-colors"
            >
              [ ^ TOP ]
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
