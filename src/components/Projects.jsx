import React, { useState } from 'react';
import { projectsData, personalInfo } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

const CATEGORIES = ['ALL', 'AI & Data Science', 'Mobile Apps', 'Dashboards & BI', 'Full Stack & Web'];

export default function Projects({ onSelectProject }) {
  const [filter, setFilter] = useState('ALL');
  const [search, setSearch] = useState('');

  const filtered = projectsData.filter(p => {
    const matchCat = filter === 'ALL' || p.category === filter;
    const q = search.toLowerCase();
    const matchSearch = !q || p.title.toLowerCase().includes(q) || p.stack.some(s => s.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12">
          <div className="text-[10px] font-mono text-cyan-500/50 tracking-widest mb-2">// SECTION_02</div>
          <h2 className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight">
            MEMORY<span className="text-cyan-400">_CORE</span>
          </h2>
          <p className="mt-2 text-sm font-mono text-slate-500">
            &gt;_ 10 projects loaded. Select to expand.
          </p>
        </div>

        {/* Filter toolbar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                data-cursor="FILTER"
                className={`px-3 py-1 text-[10px] font-mono tracking-widest transition-all border ${
                  filter === cat
                    ? 'border-cyan-400 text-cyan-400 bg-cyan-500/10'
                    : 'border-slate-800 text-slate-500 hover:border-slate-600 hover:text-slate-300'
                }`}
              >
                {cat === 'ALL' ? '[ ALL ]' : cat.toUpperCase()}
              </button>
            ))}
          </div>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="> SEARCH STACK..."
            className="sm:ml-auto px-3 py-1.5 text-[11px] font-mono bg-transparent border border-slate-800 text-slate-300 placeholder-slate-700 focus:outline-none focus:border-cyan-500/50 w-full sm:w-56 transition-colors"
          />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-cyan-500/5">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="bg-[#050608] hover:bg-[#0d1017] transition-colors border border-transparent hover:border-cyan-500/20 p-6 group"
              onClick={() => onSelectProject(project)}
              data-cursor="OPEN"
              style={{ cursor: 'none' }}
            >
              {/* Project index */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[9px] font-mono text-cyan-500/40 tracking-widest">
                  [PROJECT_{String(i + 1).padStart(3, '0')}]
                </span>
                <span className="text-[9px] font-mono text-slate-700">{project.year}</span>
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold font-mono text-slate-200 group-hover:text-cyan-400 transition-colors mb-2 leading-tight">
                {project.title.toUpperCase()}
              </h3>

              {/* Summary */}
              <p className="text-[11px] font-mono text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                {project.summary}
              </p>

              {/* Stack pills */}
              <div className="flex flex-wrap gap-1 mb-4">
                {project.stack.slice(0, 3).map((tech, idx) => (
                  <span key={idx} className="text-[9px] font-mono text-cyan-500/60 border border-cyan-500/15 px-1.5 py-0.5">
                    {tech}
                  </span>
                ))}
                {project.stack.length > 3 && (
                  <span className="text-[9px] font-mono text-slate-600">+{project.stack.length - 3}</span>
                )}
              </div>

              {/* Open signal */}
              <div className="flex items-center justify-between border-t border-slate-900 pt-3">
                <span className="text-[9px] font-mono text-slate-700 group-hover:text-cyan-500/60 transition-colors tracking-widest">
                  &gt; CLICK TO EXPAND
                </span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="text-slate-700 hover:text-slate-300 transition-colors"
                  data-cursor="GITHUB"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-16 text-center text-sm font-mono text-slate-600">
            &gt; NO_RESULTS_FOUND // ADJUST FILTER
          </div>
        )}

      </div>
    </section>
  );
}
