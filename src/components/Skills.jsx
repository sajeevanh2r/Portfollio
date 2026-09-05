import React, { useState } from 'react';
import {
  Code,
  Brain,
  Smartphone,
  Wrench,
  Sparkles,
  Terminal,
  HeartHandshake,
  BarChart3,
  Layers,
  Database,
  Cpu,
  Flame,
  GitBranch,
  FileSpreadsheet
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills', icon: Sparkles },
    { id: 'datascience', name: 'Data Science & AI', icon: Brain },
    { id: 'mobile', name: 'Mobile (Flutter)', icon: Smartphone },
    { id: 'tools', name: 'Software & BI Tools', icon: Wrench },
    { id: 'programming', name: 'Languages', icon: Terminal },
    { id: 'softskills', name: 'Soft Skills', icon: HeartHandshake },
  ];

  const filteredCategories =
    activeTab === 'all'
      ? skillsData.categories
      : skillsData.categories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-cyan-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive <span className="text-gradient">Skill Matrix</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Proficiencies across predictive machine learning pipelines, Flutter mobile engineering, data analytics, and cloud databases.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                    : 'glass-pill text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Display Grid */}
        <div className="space-y-10">
          {filteredCategories.map((category) => (
            <div key={category.id} className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/5">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                <span>{category.title}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-slate-900/90 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-850 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono font-bold text-cyan-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
