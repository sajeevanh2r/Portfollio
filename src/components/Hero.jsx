import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  FileDown,
  ArrowRight,
  Brain,
  Sparkles,
  Layers,
  Heart,
  Terminal,
  Activity
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import ThreeDAvatar from './ThreeDAvatar';

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
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }, 70);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Floating Personality Bubbles (Ambient Life) */}
        <div className="hidden xl:block absolute top-28 left-8 cinematic-pill px-4 py-2 rounded-2xl animate-float-slow text-xs text-slate-300 pointer-events-none">
          ✨ "I build systems to solve real problems."
        </div>
        <div className="hidden xl:block absolute bottom-36 left-12 cinematic-pill px-4 py-2 rounded-2xl animate-float-reverse text-xs text-slate-300 pointer-events-none">
          ☕ Code • Data • Continuous Evolution
        </div>
        <div className="hidden xl:block absolute top-36 right-8 cinematic-pill px-4 py-2 rounded-2xl animate-float-reverse text-xs text-slate-300 pointer-events-none">
          🧠 "Always curious about AI & ML."
        </div>
        <div className="hidden xl:block absolute bottom-32 right-12 cinematic-pill px-4 py-2 rounded-2xl animate-float-slow text-xs text-slate-300 pointer-events-none">
          🚀 Data → Insights → Scalable Impact
        </div>

        {/* 2-Column Hero Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Personal Narrative & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Live Digital Identity HUD */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl cinematic-pill text-xs font-mono">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                ONLINE
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300">
                CURRENTLY: <span className="text-cyan-400">Exploring RAG & Mobile Architecture</span>
              </span>
            </div>

            {/* Name */}
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2 font-semibold">
                Developer • Data Scientist • Innovator
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                <span className="text-gradient-cyan">RADHAKRISHNAN</span>
                <br />
                <span className="text-white">SAJEEVAN</span>
              </h1>
            </div>

            {/* Typing Role */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-100 font-mono text-base sm:text-lg">
                <Brain className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span>
                  {displayedText}
                  <span className="inline-block w-2 h-4 ml-1 bg-cyan-400 animate-pulse align-middle"></span>
                </span>
              </div>
            </div>

            {/* Narrative Bio */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Pursuing dual degrees in <strong className="text-white">Data Science (NIBM)</strong> and <strong className="text-white">Management Information Systems (NSBM)</strong>. 
              Passionate about turning complex data workflows into intelligent systems and crafting smooth mobile experiences with <span className="text-cyan-300 font-medium">Flutter</span> & <span className="text-blue-300 font-medium">Python</span>.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 text-white font-semibold text-sm shadow-xl shadow-blue-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <span>Things I Built (10)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full cinematic-card text-slate-200 font-semibold text-sm hover:border-cyan-400 hover:text-white hover:scale-105 transition-all"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>View / Print CV</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-semibold text-sm border border-white/10 transition-all"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Let's Talk</span>
              </a>
            </div>

            {/* Quick Location & Social Strip */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-mono text-slate-400 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg cinematic-pill">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>{personalInfo.location}</span>
              </div>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg cinematic-pill hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span className="truncate max-w-[200px]">{personalInfo.email}</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg cinematic-pill hover:text-blue-300 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg cinematic-pill hover:text-purple-300 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-purple-400" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Right Column: 3D Orbital Center Avatar (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <ThreeDAvatar />
          </div>

        </div>

        {/* 4 Core Life / Identity KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-16">
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="cinematic-card p-5 rounded-2xl text-center relative overflow-hidden group"
            >
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
          ))}
        </div>

      </div>
    </section>
  );
}
