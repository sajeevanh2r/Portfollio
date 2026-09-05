import React, { useState } from 'react';
import { referencesData } from '../data/portfolioData';

export default function References() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  return (
    <section id="references" className="py-24 relative z-10 border-t border-cyan-500/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="text-[10px] font-mono text-cyan-500/50 tracking-widest mb-2">// SECTION_07</div>
          <h2 className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight">
            VERIFIED<span className="text-cyan-400">_TRANSMITTERS</span>
          </h2>
          <p className="mt-2 text-sm font-mono text-slate-500">
            &gt;_ Peer & supervisor nodes validating system execution and technical capability.
          </p>
        </div>

        {/* References Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {referencesData.map((ref, idx) => (
            <div
              key={idx}
              className="terminal-panel p-6 sm:p-8 rounded-none border border-cyan-500/20 hover:border-cyan-400/50 transition-all flex flex-col justify-between bg-[#0a0c10]"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4 pb-3 border-b border-slate-900">
                  <div className="text-[10px] font-mono text-cyan-400 font-bold tracking-widest">
                    [ TRANSMITTER_{String(idx + 1).padStart(2, '0')} ]
                  </div>
                  <span className="text-[9px] font-mono px-2 py-0.5 border border-cyan-500/20 text-cyan-300 bg-cyan-500/5">
                    {ref.relation.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-mono text-white mb-1">
                  {ref.name.toUpperCase()}
                </h3>
                <p className="text-xs font-mono text-cyan-400 mb-1">
                  &gt; {ref.title}
                </p>
                <p className="text-[11px] font-mono text-slate-500 mb-5">
                  ORG: {ref.organization}
                </p>

                {/* Testimonial Quote */}
                <div className="p-3.5 border-l-2 border-cyan-500/40 bg-black/40 mb-6">
                  <p className="text-xs font-mono text-slate-300 italic leading-relaxed">
                    "{ref.quote}"
                  </p>
                </div>
              </div>

              {/* Contact Actions */}
              <div className="space-y-2 pt-4 border-t border-slate-900">
                {/* Email */}
                <div className="flex items-center justify-between p-2 border border-slate-900 bg-black/50 text-xs font-mono">
                  <span className="text-slate-400 truncate text-[11px]">
                    EMAIL: <span className="text-cyan-300">{ref.email}</span>
                  </span>
                  <button
                    onClick={() => handleCopy(ref.email, `email-${idx}`)}
                    data-cursor="COPY"
                    className="px-2 py-0.5 text-[9px] font-mono tracking-widest border border-slate-800 hover:border-cyan-400 text-slate-400 hover:text-cyan-400 transition-colors ml-2 shrink-0"
                  >
                    {copiedIndex === `email-${idx}` ? '[ COPIED ]' : '[ COPY ]'}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between p-2 border border-slate-900 bg-black/50 text-xs font-mono">
                  <span className="text-slate-400 text-[11px]">
                    COMM: <span className="text-emerald-300">{ref.phone}</span>
                  </span>
                  <button
                    onClick={() => handleCopy(ref.phone, `phone-${idx}`)}
                    data-cursor="COPY"
                    className="px-2 py-0.5 text-[9px] font-mono tracking-widest border border-slate-800 hover:border-emerald-400 text-slate-400 hover:text-emerald-400 transition-colors ml-2 shrink-0"
                  >
                    {copiedIndex === `phone-${idx}` ? '[ COPIED ]' : '[ COPY ]'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
