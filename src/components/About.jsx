import React from 'react';
import { GraduationCap, Sparkles, CheckCircle2, Heart, Code2, Compass, Layers } from 'lucide-react';
import { educationData, personalInfo } from '../data/portfolioData';

export default function About() {
  const values = [
    {
      title: "Curiosity-Driven Engineering",
      desc: "I love understanding how things work under the hood — whether dissecting loss curves in PyTorch or optimizing widget trees in Flutter.",
      icon: Sparkles
    },
    {
      title: "Data Grounded in Reality",
      desc: "Data is only as good as its integrity. From high-volume title records to vector embeddings, accuracy and validation come first.",
      icon: Layers
    },
    {
      title: "Scalable Full-Cycle Delivery",
      desc: "Bridging the gap between predictive ML models, cloud APIs, and responsive user interfaces that people actually enjoy using.",
      icon: Code2
    }
  ];

  return (
    <section id="about" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full cinematic-pill text-cyan-400 text-xs font-mono mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>MY STORY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            This Is <span className="text-gradient-cyan">Me</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            I'm a dual-degree undergraduate based in Colombo, blending computational Data Science with Enterprise Information Systems.
          </p>
        </div>

        {/* Dual Degree Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="cinematic-card p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full cinematic-pill text-cyan-300">
                  {edu.period}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {edu.degree}
              </h3>
              <p className="text-sm font-semibold text-blue-400 mb-4">
                {edu.institution} — <span className="text-slate-400 font-normal">{edu.location}</span>
              </p>

              <div className="space-y-2 border-t border-white/5 pt-4">
                {edu.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 3 Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div
                key={idx}
                className="cinematic-card p-6 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{v.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
