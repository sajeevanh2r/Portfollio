import React from 'react';
import { personalInfo, experienceData, educationData, skillsData, projectsData, referencesData } from '../data/portfolioData';

export default function ResumeModal({ onClose }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto bg-black/90 backdrop-blur-md print:p-0 print:bg-white print:fixed">
      {/* Container */}
      <div className="relative w-full max-w-4xl bg-[#0a0c10] border border-cyan-500/40 rounded-none shadow-2xl overflow-hidden my-6 print:border-none print:shadow-none print:m-0 print:bg-white print:text-black">
        
        {/* Floating Action Bar (hidden in print) */}
        <div className="p-3 bg-black border-b border-cyan-500/20 flex items-center justify-between print:hidden">
          <div className="text-[10px] font-mono text-cyan-400 tracking-widest">
            // CURRICULUM_VITAE // SAJEEVAN_DATA
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              data-cursor="PRINT"
              className="px-3 py-1 bg-cyan-400 text-[#050608] text-xs font-mono font-bold hover:bg-cyan-300 transition-colors"
            >
              [ PRINT / SAVE PDF ]
            </button>
            <button
              onClick={onClose}
              data-cursor="CLOSE"
              className="px-2 py-1 border border-slate-800 text-slate-400 hover:text-cyan-400 text-xs font-mono transition-colors"
            >
              [ X ]
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto print:max-h-none print:overflow-visible space-y-6 text-slate-300 print:text-gray-900 font-mono">
          
          {/* Header */}
          <div className="border-b border-slate-800 print:border-gray-300 pb-5">
            <h1 className="text-2xl sm:text-3xl font-bold text-white print:text-black tracking-tight uppercase">
              {personalInfo.name}
            </h1>
            <p className="text-xs text-cyan-400 print:text-blue-800 font-bold mt-1">
              DATA SCIENTIST // MANAGEMENT INFORMATION SYSTEMS // FLUTTER DEVELOPER
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-slate-400 print:text-gray-600 mt-2">
              <span>{personalInfo.location}</span>
              <span>•</span>
              <span>{personalInfo.phone}</span>
              <span>•</span>
              <span>{personalInfo.email}</span>
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-cyan-400 print:text-blue-700 mt-1">
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/{personalInfo.linkedinUsername}</a>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer">github.com/{personalInfo.githubUsername}</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs uppercase font-bold text-cyan-400 print:text-blue-800 tracking-wider mb-2">
              // PROFESSIONAL_SUMMARY
            </h2>
            <p className="text-xs leading-relaxed text-slate-300 print:text-gray-800">
              {personalInfo.bio}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs uppercase font-bold text-cyan-400 print:text-blue-800 tracking-wider mb-3">
              // PROFESSIONAL_EXPERIENCE
            </h2>
            <div className="space-y-4">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="text-xs">
                  <div className="flex justify-between items-baseline font-bold text-white print:text-black">
                    <span>{exp.role} — <span className="text-cyan-400 print:text-blue-800">{exp.company}</span></span>
                    <span className="text-slate-500 print:text-gray-600 text-[11px]">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400 print:text-gray-700 leading-relaxed text-xs">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs uppercase font-bold text-cyan-400 print:text-blue-800 tracking-wider mb-3">
              // EDUCATION_MODULES
            </h2>
            <div className="space-y-3">
              {educationData.map((edu, idx) => (
                <div key={idx} className="text-xs">
                  <div className="flex justify-between items-baseline font-bold text-white print:text-black">
                    <span>{edu.institution}</span>
                    <span className="text-slate-500 print:text-gray-600 text-[11px]">{edu.period}</span>
                  </div>
                  <div className="text-cyan-400 print:text-blue-700 text-xs">
                    {edu.degree}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs uppercase font-bold text-cyan-400 print:text-blue-800 tracking-wider mb-2">
              // TECHNICAL_CAPABILITIES
            </h2>
            <div className="space-y-1.5 text-xs text-slate-400 print:text-gray-800 leading-relaxed">
              <p><strong className="text-white print:text-black">Core Data Science:</strong> Machine Learning, Predictive Modeling, RAG, Prompt Engineering, SQL/NoSQL</p>
              <p><strong className="text-white print:text-black">Mobile Engineering:</strong> Flutter, Dart, Firebase, REST APIs, Cross-platform Architecture</p>
              <p><strong className="text-white print:text-black">Software & Tools:</strong> PyTorch, Pandas, Scikit-learn, Tableau, Power BI, MongoDB, MySQL, Git</p>
              <p><strong className="text-white print:text-black">Programming:</strong> Python, Java, C, R, JavaScript, PHP, Dart</p>
            </div>
          </div>

          {/* References */}
          <div>
            <h2 className="text-xs uppercase font-bold text-cyan-400 print:text-blue-800 tracking-wider mb-2">
              // VERIFIED_REFERENCES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {referencesData.map((ref, idx) => (
                <div key={idx} className="p-2 border border-slate-800 print:border-gray-200">
                  <p className="font-bold text-white print:text-black">{ref.name}</p>
                  <p className="text-slate-500 print:text-gray-600 text-[11px]">{ref.title} — {ref.organization}</p>
                  <p className="text-cyan-400 print:text-blue-700 text-[11px]">{ref.email} | {ref.phone}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
