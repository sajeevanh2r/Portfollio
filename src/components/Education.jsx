import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative z-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-cyan-400 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Dual Degree <span className="text-gradient">Education</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Formal education synthesizing enterprise management information systems with modern statistical and computational data science.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-cyan-300 border border-cyan-500/20">
                    {edu.status}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {edu.degree}
                </h3>

                <h4 className="text-sm font-semibold text-blue-400 mb-1">
                  {edu.institution}
                </h4>
                <p className="text-xs text-slate-400 flex items-center gap-1 mb-6">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>{edu.location}</span>
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-800">
                  {edu.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <BookOpen className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">Accredited Institution</span>
                <span className="text-xs font-bold text-cyan-400 font-mono">{edu.tag}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
