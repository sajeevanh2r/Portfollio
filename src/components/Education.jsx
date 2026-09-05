import React from 'react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative z-10 border-t border-cyan-500/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="text-[10px] font-mono text-cyan-500/50 tracking-widest mb-2">// SECTION_06</div>
          <h2 className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight">
            UPGRADE<span className="text-cyan-400">_MODULES</span>
          </h2>
          <p className="mt-2 text-sm font-mono text-slate-500">
            &gt;_ Dual academic firmware & advanced capability modules installed.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="terminal-panel p-6 sm:p-8 rounded-none border border-cyan-500/20 hover:border-cyan-400/60 transition-all flex flex-col justify-between group relative overflow-hidden bg-[#0a0c10]"
            >
              {/* Top status bar */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-900">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono tracking-widest text-emerald-400 font-bold">
                      [ INSTALLED ]
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-500/60 tracking-wider">
                    MODULE_{String(idx + 1).padStart(2, '0')} // {edu.period}
                  </span>
                </div>

                {/* Degree / Module name */}
                <h3 className="text-lg sm:text-xl font-bold font-mono text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {edu.degree.toUpperCase()}
                </h3>

                {/* Institution */}
                <p className="text-xs font-mono text-cyan-300/90 mb-4">
                  &gt; {edu.institution} // <span className="text-slate-500">{edu.location}</span>
                </p>

                {/* Syllabus items */}
                <div className="space-y-2 border-t border-slate-900 pt-4">
                  {edu.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs font-mono text-slate-400 leading-relaxed">
                      <span className="text-cyan-500/60 shrink-0">&gt;&gt;</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Module Footer Status */}
              <div className="mt-8 pt-3 border-t border-slate-900 flex items-center justify-between text-[9px] font-mono text-slate-600">
                <span>CERT_AUTHORITY: {edu.tag}</span>
                <span className="text-emerald-400">STATUS: VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
