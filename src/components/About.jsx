import React from 'react';
import {
  GraduationCap,
  Sparkles,
  Layers,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Workflow,
  Target
} from 'lucide-react';
import { educationData } from '../data/portfolioData';
import TiltCard from './TiltCard';

export default function About() {
  const pillars = [
    {
      title: "Data Science & Applied Machine Learning",
      description: "Building predictive ML pipelines (XGBoost, Scikit-learn, PyTorch ANNs & CNNs), RAG-based LLM assistants with FAISS vector search, and interactive BI dashboards.",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500",
      skills: ["Machine Learning", "RAG & LLMs", "PyTorch", "Tableau", "Power BI"]
    },
    {
      title: "Cross-Platform Mobile & Full Stack",
      description: "Developing responsive, performant mobile apps using Flutter & Dart integrated with Firebase Realtime DB, REST APIs, and full-stack MERN enterprise systems.",
      icon: Layers,
      color: "from-cyan-500 to-teal-400",
      skills: ["Flutter", "Dart", "Firebase", "REST APIs", "React", "Node.js"]
    },
    {
      title: "Data Verification & MIS Architecture",
      description: "Managing enterprise title and land document records, ensuring high data quality via multi-tier cross-verification, structured SQL warehousing, and clean schema design.",
      icon: ShieldCheck,
      color: "from-purple-500 to-indigo-500",
      skills: ["SQL / MySQL", "Data Integrity", "Excel / Sheets", "Adobe Acrobat", "ETL"]
    }
  ];

  return (
    <section id="about" className="py-24 relative z-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Executive Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Dual Disciplines, <span className="text-gradient">One Unified Vision</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            By pursuing concurrent degrees in Data Science and Management Information Systems, I blend deep algorithmic reasoning with enterprise software engineering and real-world business acumen.
          </p>
        </div>

        {/* Dual Degree Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {educationData.map((edu, idx) => (
            <TiltCard key={idx} maxTilt={6} scale={1.02} className="h-full">
              <div
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-cyan-500/40 transition-all shadow-xl h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="p-3 rounded-2xl bg-blue-500/10 text-cyan-400 border border-cyan-500/20">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-blue-400 mb-4">
                    {edu.institution} — <span className="text-slate-400 font-normal">{edu.location}</span>
                  </p>

                  <div className="space-y-2 border-t border-slate-800/80 pt-4">
                    {edu.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* 3 Core Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <TiltCard key={idx} maxTilt={8} scale={1.02} className="h-full">
                <div
                  className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/5 flex flex-col justify-between h-full shadow-lg"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} p-[1px] mb-5`}>
                      <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/60">
                    {pillar.skills.map((s, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-slate-900 text-[11px] font-mono text-slate-300 border border-slate-800"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
