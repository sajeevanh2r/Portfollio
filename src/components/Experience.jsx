import React, { useState } from 'react';
import { experienceData } from '../data/portfolioData';

const LOG_ENTRIES = [
  { timestamp: '2022.09', code: 'INIT', text: 'ENROLLED BSc MIS — NSBM GREEN UNIVERSITY', color: 'cyan' },
  { timestamp: '2024.01', code: 'MODULE', text: 'DATA_SCIENCE MODULE INSTALLED — NIBM COLOMBO', color: 'cyan' },
  { timestamp: '2025.01', code: 'DEPLOY', text: 'BEGIN PART_TIME_ASSOCIATE // TITLE DATA DESIGN', color: 'amber', expId: 1 },
  { timestamp: '2025.03', code: 'BUILD', text: 'PROJECT_001 — RAG PDF ASSISTANT COMPLETED', color: 'green' },
  { timestamp: '2025.06', code: 'BUILD', text: 'PROJECT_002 — HUNGER_RELIEF MOBILE APP LAUNCHED', color: 'green' },
  { timestamp: '2025.09', code: 'BUILD', text: 'PYTORCH ANN // CNN MODELS DEPLOYED', color: 'green' },
  { timestamp: '2025.12', code: 'BUILD', text: 'MERN STACK EMPLOYEE_SYSTEM — INITIATED', color: 'amber' },
  { timestamp: '2025.12', code: 'MODULE', text: 'FLUTTER_DEV MODULE UPGRADED TO PROFESSIONAL LEVEL', color: 'cyan' },
  { timestamp: '2025.12', code: 'STATUS', text: 'BSc DATA SCIENCE PROGRESS — 60%', color: 'amber' },
  { timestamp: '2025.12', code: 'CLOSE', text: 'TITLE_DATA_DESIGN CONTRACT COMPLETED', color: 'slate' },
  { timestamp: '2025.12', code: 'DEPLOY', text: 'BEGIN FLUTTER_DEV_INTERN // APPITURA', color: 'cyan', expId: 0 },
  { timestamp: '2026.09', code: 'STATUS', text: 'CURRENT_SYSTEM_STATUS // ALL SYSTEMS OPERATIONAL', color: 'green' },
];

export default function Experience() {
  const [expanded, setExpanded] = useState(null);

  const colorClass = {
    cyan: 'text-cyan-400',
    green: 'text-emerald-400',
    amber: 'text-amber-400',
    slate: 'text-slate-500',
    rose: 'text-rose-400',
  };

  return (
    <section id="experience" className="py-24 relative z-10 border-t border-cyan-500/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <div className="text-[10px] font-mono text-cyan-500/50 tracking-widest mb-2">// SECTION_05</div>
          <h2 className="text-3xl sm:text-4xl font-black font-mono text-white">
            SYSTEM<span className="text-cyan-400">_LOGS</span>
          </h2>
          <p className="mt-2 text-sm font-mono text-slate-500">
            &gt;_ Chronological operational history. Click entries for detail.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Log stream */}
          <div className="lg:col-span-7 terminal-panel rounded-none">
            <div className="border-b border-cyan-500/10 px-4 py-2 text-[9px] font-mono text-cyan-500/50 tracking-widest">
              SYSTEM_LOGS // {LOG_ENTRIES.length} ENTRIES
            </div>
            <div className="divide-y divide-slate-900/60 max-h-[500px] overflow-y-auto">
              {LOG_ENTRIES.map((entry, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 px-4 py-3 transition-colors ${entry.expId !== undefined ? 'hover:bg-cyan-500/4 cursor-none' : ''} ${expanded === i ? 'bg-cyan-500/5' : ''}`}
                  onClick={() => entry.expId !== undefined && setExpanded(expanded === i ? null : i)}
                  data-cursor={entry.expId !== undefined ? 'EXPAND' : undefined}
                >
                  <span className="text-[9px] font-mono text-slate-700 w-16 shrink-0 pt-0.5">{entry.timestamp}</span>
                  <span className={`text-[9px] font-mono w-12 shrink-0 pt-0.5 ${colorClass[entry.color]}`}>[{entry.code}]</span>
                  <span className={`text-xs font-mono ${colorClass[entry.color]} leading-relaxed`}>
                    &gt; {entry.text}
                    {entry.expId !== undefined && (
                      <span className="text-slate-600 ml-2">// CLICK TO EXPAND</span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Detail Panel */}
          <div className="lg:col-span-5">
            {expanded !== null && LOG_ENTRIES[expanded]?.expId !== undefined ? (
              <div className="terminal-panel rounded-none p-5 space-y-4">
                {(() => {
                  const exp = experienceData[LOG_ENTRIES[expanded].expId];
                  return (
                    <>
                      <div>
                        <p className="text-[9px] font-mono text-cyan-500/50 tracking-widest mb-1">PROCESS_DETAIL</p>
                        <p className="text-base font-bold font-mono text-white">{exp.role.toUpperCase()}</p>
                        <p className="text-xs font-mono text-cyan-400">{exp.company} // {exp.period}</p>
                      </div>
                      <p className="text-xs font-mono text-slate-400 leading-relaxed border-l-2 border-cyan-500/30 pl-3">
                        {exp.description}
                      </p>
                      <div className="space-y-1.5">
                        {exp.points.map((pt, i) => (
                          <div key={i} className="flex items-start gap-2 text-[11px] font-mono text-slate-400">
                            <span className="text-cyan-500/50 shrink-0">&gt;</span>
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-900">
                        {exp.stack.map((s, i) => (
                          <span key={i} className="text-[9px] font-mono text-cyan-500/50 border border-cyan-500/15 px-1.5 py-0.5">
                            {s}
                          </span>
                        ))}
                      </div>
                    </>
                  );
                })()}
              </div>
            ) : (
              <div className="terminal-panel rounded-none p-5 h-full flex flex-col justify-center">
                <p className="text-[11px] font-mono text-slate-700 text-center">
                  &gt;_ Select a highlighted log entry<br />to view process details.
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
