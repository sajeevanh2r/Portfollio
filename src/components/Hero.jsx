import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  FileDown,
  ArrowRight,
  Code2,
  Brain,
  Database,
  Smartphone,
  CheckCircle,
  Sparkles,
  Zap,
  Layers
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import ThreeDAvatar from './ThreeDAvatar';
import TiltCard from './TiltCard';

export default function Hero({ onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev.substring(0, prev.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
        }
      }, 35);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      }, 75);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Main 2-Column 3D Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-12">
          
          {/* Left Column: Bio, Typist & Action Buttons (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-emerald-500/30 text-emerald-300 text-xs font-mono shadow-lg shadow-emerald-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Full-time Roles & High-Impact Projects</span>
            </div>

            {/* Name & Title */}
            <div>
              <p className="text-xs sm:text-sm font-mono text-cyan-400 font-semibold tracking-wider uppercase mb-2 flex items-center justify-center lg:justify-start gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next-Gen Systems & Intelligence</span>
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                <span className="text-gradient">RADHAKRISHNAN</span>
                <br />
                <span className="text-white">SAJEEVAN</span>
              </h1>
            </div>

            {/* Dynamic Role Carousel / Typing text */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-inner">
                <Brain className="w-5 h-5 text-cyan-400 animate-pulse shrink-0" />
                <span className="text-base sm:text-xl font-bold font-mono text-slate-100 min-w-[260px] sm:min-w-[320px] text-left">
                  {displayedText}
                  <span className="inline-block w-2 h-4 ml-1 bg-cyan-400 animate-pulse align-middle"></span>
                </span>
              </div>
            </div>

            {/* Executive Bio */}
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Dual-degree undergraduate pursuing <span className="text-white font-semibold underline decoration-cyan-400 decoration-2 underline-offset-4">Data Science (NIBM)</span> and <span className="text-white font-semibold underline decoration-blue-500 decoration-2 underline-offset-4">Management Information Systems (NSBM)</span>. 
              Engineering scalable AI pipelines, RAG assistants, and cross-platform mobile solutions with <span className="text-cyan-300 font-medium">Flutter</span> & <span className="text-blue-300 font-medium">Python</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore 10 Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-panel text-slate-200 font-semibold text-sm border border-slate-700 hover:border-cyan-400/50 hover:bg-slate-800/80 transition-all shadow-md hover:scale-[1.02]"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>View / Print CV</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 text-slate-300 font-semibold text-sm border border-slate-800 hover:border-slate-600 hover:text-white transition-all"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Contact</span>
              </a>
            </div>

            {/* Social & Contact Strip */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-mono text-slate-400 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>{personalInfo.location}</span>
              </div>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span className="truncate max-w-[190px]">{personalInfo.email}</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/50 hover:text-blue-300 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-purple-500/50 hover:text-purple-300 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-purple-400" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Right Column: 3D Holographic AI Avatar (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <ThreeDAvatar />
          </div>

        </div>

        {/* 3D Quick Stats Grid with Tilt Effects */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-6">
          {personalInfo.stats.map((stat, idx) => (
            <TiltCard key={idx} maxTilt={10} scale={1.03}>
              <div className="glass-panel p-5 rounded-2xl border border-white/5 text-center relative overflow-hidden group h-full flex flex-col justify-center">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 opacity-70 group-hover:opacity-100 transition-opacity"></div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight mb-1 group-hover:text-cyan-300 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400">
                  {stat.subtext}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
