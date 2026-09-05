import React, { useState } from 'react';
import {
  Brain,
  Wrench,
  Smartphone,
  Database,
  Code2,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Boxes
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [selectedMindNode, setSelectedMindNode] = useState(0);

  const mindNodes = [
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      subtitle: "Building intelligent systems that learn from patterns",
      description: "My focus is on applied ML: building robust predictive pipelines (XGBoost, Scikit-learn), training deep neural networks with PyTorch (ANNs & CNNs), and developing RAG retrieval workflows with FAISS and LLMs.",
      icon: Brain,
      color: "from-blue-500 to-cyan-400",
      keyTools: ["PyTorch", "Scikit-learn", "XGBoost", "FAISS", "LangChain", "RAG"]
    },
    {
      id: "mobile-frontend",
      title: "Cross-Platform Mobile",
      subtitle: "Crafting fluid, reactive digital experiences",
      description: "I build responsive, high-performance mobile applications using Flutter and Dart. Experienced with Firebase authentication, realtime databases, state management, and seamless RESTful API integration.",
      icon: Smartphone,
      color: "from-cyan-400 to-teal-400",
      keyTools: ["Flutter", "Dart", "Firebase", "REST APIs", "React", "Tailwind CSS"]
    },
    {
      id: "data-bi",
      title: "Data Engineering & Analytics",
      subtitle: "Turning raw information into business clarity",
      description: "From designing relational SQL schemas to high-volume title records reconciliation and building executive Tableau/Power BI dashboards, I prioritize data integrity, cleanliness, and clear KPIs.",
      icon: TrendingUp,
      color: "from-purple-500 to-indigo-500",
      keyTools: ["Pandas", "NumPy", "SQL / MySQL", "Tableau", "Power BI", "Dash"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-white/5 bg-[#0a0c12]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full cinematic-pill text-cyan-400 text-xs font-mono mb-3">
            <Brain className="w-3.5 h-3.5" />
            <span>COGNITIVE MAP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Inside My <span className="text-gradient-cyan">Mind</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base">
            How I approach software and intelligence — connecting predictive modeling, data verification, and cross-platform mobile delivery.
          </p>
        </div>

        {/* Part 1: Interactive Cognitive Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          {mindNodes.map((node, idx) => {
            const Icon = node.icon;
            const isSelected = selectedMindNode === idx;
            return (
              <div
                key={node.id}
                onClick={() => setSelectedMindNode(idx)}
                className={`cinematic-card p-7 rounded-3xl cursor-pointer transition-all flex flex-col justify-between ${
                  isSelected ? 'border-cyan-400/60 shadow-xl shadow-cyan-500/10' : ''
                }`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${node.color} p-[1px] mb-5`}>
                    <div className="w-full h-full bg-[#08090d] rounded-[15px] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1.5">{node.title}</h3>
                  <p className="text-xs font-mono text-cyan-400 mb-4">{node.subtitle}</p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {node.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                  {node.keyTools.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 text-[11px] font-mono text-cyan-300 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Part 2: MY TOOLBOX */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center justify-center gap-2">
              <Wrench className="w-6 h-6 text-cyan-400" />
              <span>My Technical Toolbox</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-mono mt-2">
              Core technologies and frameworks I use to build scalable products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillsData.categories.slice(0, 4).map((cat) => (
              <div key={cat.id} className="cinematic-card p-5 rounded-2xl">
                <h4 className="text-sm font-bold text-white mb-3 pb-2 border-b border-white/5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  <span>{cat.title}</span>
                </h4>
                <div className="space-y-2">
                  {cat.skills.slice(0, 5).map((s, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs">
                      <span className="text-slate-300">{s.name}</span>
                      <span className="font-mono text-[11px] text-cyan-400 font-bold">{s.level}%</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
