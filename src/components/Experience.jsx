import React from 'react';
import { Compass, Calendar, Building2, CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  const journeyMilestones = [
    {
      year: "2022 – 2026",
      tag: "Foundations & MIS",
      title: "BSc (Hons) Management Information Systems",
      org: "NSBM Green University",
      type: "Education",
      icon: GraduationCap,
      description: "Began dual-degree journey studying enterprise database design, systems analysis, and software engineering principles.",
      highlight: "Enrolled in UGC-accredited honors program."
    },
    {
      year: "2024 – 2027",
      tag: "Data Science & AI",
      title: "BSc (Hons) Data Science",
      org: "NIBM Colombo",
      type: "Education",
      icon: GraduationCap,
      description: "Deep dive into machine learning, deep neural networks (ANN & CNN), statistical modeling, and vector search RAG systems.",
      highlight: "Implemented PyTorch and Scikit-learn pipelines."
    },
    {
      year: "Jan 2025 – Dec 2025",
      tag: "Data Integrity",
      title: "Part-Time Associate",
      org: "Title Data Design",
      type: "Industry",
      icon: Briefcase,
      description: "Analyzed and reconciled high-volume land document records and title data with emphasis on multi-tier cross-verification.",
      highlight: "Mastered structured data validation & archiving."
    },
    {
      year: "Dec 2025 – July 2026",
      tag: "Mobile Engineering",
      title: "Flutter Developer Intern",
      org: "Appitura",
      type: "Industry",
      icon: Briefcase,
      description: "Engineered cross-platform mobile apps with Flutter & Dart, integrating Firebase authentication, RESTful APIs, and Agile workflows.",
      highlight: "Delivered production-ready mobile features."
    }
  ];

  return (
    <section id="experience" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full cinematic-pill text-cyan-400 text-xs font-mono mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>ROADMAP & TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            My <span className="text-gradient-cyan">Journey</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base">
            The road through academia and industry — blending theoretical depth with hands-on software development.
          </p>
        </div>

        {/* Timeline Road */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Connecting Line */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-500 opacity-30"></div>

          <div className="space-y-8">
            {journeyMilestones.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div key={idx} className="relative md:pl-20 group">
                  {/* Road Node */}
                  <div className="hidden md:flex absolute left-8 top-6 w-7 h-7 rounded-full bg-[#08090d] border-2 border-cyan-400 items-center justify-center -translate-x-1/2 z-10 shadow-lg shadow-cyan-500/30 group-hover:scale-125 transition-transform">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                  </div>

                  {/* Card */}
                  <div className="cinematic-card p-6 sm:p-8 rounded-3xl">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full cinematic-pill text-cyan-400 mr-2">
                          {m.tag}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white inline align-middle">
                          {m.title}
                        </h3>
                        <p className="text-sm font-semibold text-blue-400 mt-1">
                          {m.org}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-300 px-3 py-1.5 rounded-xl cinematic-pill">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{m.year}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {m.description}
                    </p>

                    <div className="pt-3 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-emerald-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{m.highlight}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
