import React, { useState } from 'react';
import { UserCheck, Mail, Phone, Building2, Copy, Check, Quote, Sparkles } from 'lucide-react';
import { referencesData } from '../data/portfolioData';

export default function References() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  return (
    <section id="references" className="py-24 relative z-10 border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-cyan-400 text-xs font-mono mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient">References</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Verified academic and industry leaders who can speak to my technical capability, execution, and professionalism.
          </p>
        </div>

        {/* References Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {referencesData.map((ref, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between shadow-xl relative overflow-hidden group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-[1px] shadow-lg shadow-blue-500/20">
                    <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center font-bold font-mono text-cyan-400 text-base">
                      {ref.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-slate-900 text-cyan-300 border border-slate-800">
                    {ref.relation}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {ref.name}
                </h3>
                <p className="text-sm font-semibold text-blue-400 mb-1">
                  {ref.title}
                </p>
                <p className="text-xs text-slate-400 flex items-center gap-1.5 mb-6">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>{ref.organization}</span>
                </p>

                {/* Testimonial Quote */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 relative mb-6">
                  <Quote className="w-5 h-5 text-cyan-500/30 absolute top-3 right-3" />
                  <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                    "{ref.quote}"
                  </p>
                </div>
              </div>

              {/* Contact Actions */}
              <div className="space-y-2 pt-4 border-t border-slate-800/80">
                {/* Email */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  <a
                    href={`mailto:${ref.email}`}
                    className="flex items-center gap-2 text-xs text-slate-300 hover:text-cyan-300 transition-colors font-mono truncate"
                  >
                    <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">{ref.email}</span>
                  </a>
                  <button
                    onClick={() => handleCopy(ref.email, `email-${idx}`)}
                    className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedIndex === `email-${idx}` ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  <a
                    href={`tel:${ref.phone}`}
                    className="flex items-center gap-2 text-xs text-slate-300 hover:text-emerald-300 transition-colors font-mono"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{ref.phone}</span>
                  </a>
                  <button
                    onClick={() => handleCopy(ref.phone, `phone-${idx}`)}
                    className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    title="Copy Phone"
                  >
                    {copiedIndex === `phone-${idx}` ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
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
