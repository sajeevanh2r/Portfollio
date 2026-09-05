import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2, Sparkles } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10 border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-cyan-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Demonstrated engineering experience in cross-platform mobile development and high-volume title data analysis.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-400 to-transparent"></div>

          <div className="space-y-8">
            {experienceData.map((exp, idx) => (
              <div
                key={idx}
                className="relative md:pl-20 group"
              >
                {/* Node icon on line */}
                <div className="hidden md:flex absolute left-4 top-6 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 items-center justify-center -translate-x-1/2 z-10 group-hover:scale-110 group-hover:border-white transition-transform shadow-lg shadow-cyan-500/20">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></div>
                </div>

                {/* Experience Card */}
                <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all shadow-xl">
                  {/* Top info */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-cyan-400 border border-cyan-500/20 mr-2">
                        {exp.type}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight inline align-middle">
                        {exp.role}
                      </h3>
                      <div className="text-base font-semibold text-blue-400 mt-1 flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-slate-400" />
                        <span>{exp.company}</span>
                        <span className="text-slate-500">•</span>
                        <span className="text-xs text-slate-400 font-normal">{exp.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-300 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 italic mb-5">
                    {exp.description}
                  </p>

                  {/* Bullet accomplishments */}
                  <div className="space-y-2.5 mb-6 border-t border-slate-800/80 pt-4">
                    {exp.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/60">
                    {exp.stack.map((item, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-900 text-[11px] font-mono text-slate-300 border border-slate-800"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
