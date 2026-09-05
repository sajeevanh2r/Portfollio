import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 relative z-10 border-t border-white/5 bg-[#08090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          
          {/* Identity */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 p-[1px]">
              <div className="w-full h-full bg-[#08090d] rounded-[11px] flex items-center justify-center font-mono font-bold text-xs text-gradient-cyan">
                RS
              </div>
            </div>
            <div>
              <p className="font-bold text-white">{personalInfo.name}</p>
              <p className="text-xs text-slate-400 font-mono">Data Science & Management Information Systems</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl cinematic-pill text-slate-400 hover:text-white hover:border-cyan-400/40 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl cinematic-pill text-slate-400 hover:text-white hover:border-blue-400/40 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top */}
          <div className="flex items-center gap-4">
            <p className="text-xs text-slate-400 font-mono">
              © {new Date().getFullYear()} Sajeevan. Crafted with care.
            </p>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl cinematic-pill text-slate-400 hover:text-cyan-400 transition-all"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
