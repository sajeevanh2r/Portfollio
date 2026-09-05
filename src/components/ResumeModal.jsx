import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Globe, ExternalLink, GraduationCap, Briefcase, Code, Award } from 'lucide-react';
import { personalInfo, experienceData, educationData, skillsData, projectsData, referencesData } from '../data/portfolioData';

export default function ResumeModal({ onClose }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto bg-slate-950/90 backdrop-blur-md print:p-0 print:bg-white print:fixed">
      {/* Container */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-6 print:border-none print:shadow-none print:m-0 print:bg-white print:text-black">
        
        {/* Floating Action Bar (hidden in print) */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span>Curriculum Vitae Preview</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto print:max-h-none print:overflow-visible space-y-6 text-slate-200 print:text-gray-900">
          
          {/* Header */}
          <div className="text-center border-b border-slate-800 print:border-gray-300 pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-black tracking-tight uppercase">
              {personalInfo.name}
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-3 text-xs text-slate-400 print:text-gray-600 font-mono mt-2">
              <span>{personalInfo.location}</span>
              <span>•</span>
              <span>{personalInfo.phone}</span>
              <span>•</span>
              <span>{personalInfo.email}</span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-3 text-xs text-cyan-400 print:text-blue-700 font-mono mt-1">
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn: linkedin.com/in/radhakrishnan-sajeevan</a>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer">GitHub: github.com/sajeevanh2r</a>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase font-bold text-cyan-400 print:text-blue-800 tracking-wider mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800 leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase font-bold text-cyan-400 print:text-blue-800 tracking-wider mb-3">
              Professional Experience
            </h2>
            <div className="space-y-4">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="text-xs sm:text-sm">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-white print:text-black">
                      {exp.role} — <span className="font-normal text-blue-400 print:text-blue-800">{exp.company}</span>
                    </span>
                    <span className="font-mono text-slate-400 print:text-gray-600 text-xs">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-slate-300 print:text-gray-700 text-xs leading-relaxed">
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
            <h2 className="text-xs font-mono uppercase font-bold text-cyan-400 print:text-blue-800 tracking-wider mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {educationData.map((edu, idx) => (
                <div key={idx} className="text-xs sm:text-sm">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-white print:text-black">{edu.institution}</span>
                    <span className="font-mono text-slate-400 print:text-gray-600 text-xs">{edu.period}</span>
                  </div>
                  <div className="text-cyan-400 print:text-blue-700 font-medium text-xs">
                    {edu.degree}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase font-bold text-cyan-400 print:text-blue-800 tracking-wider mb-2">
              Skills & Tools
            </h2>
            <div className="space-y-1.5 text-xs text-slate-300 print:text-gray-800">
              <p><strong className="text-white print:text-black">Core Data Science & IT:</strong> Data Analysis, Machine Learning, Data Visualization, Predictive Modeling, SQL & NoSQL, RAG, Model Fine-Tuning, Prompt Engineering</p>
              <p><strong className="text-white print:text-black">Mobile Development:</strong> Flutter, Dart, Firebase, REST API Integration, Cross-platform Development</p>
              <p><strong className="text-white print:text-black">Software & Tools:</strong> Pandas, NumPy, Matplotlib, Scikit-learn, Tableau, Power BI, Google Colab, MongoDB, Firebase, Figma, GitHub, MySQL, PostgreSQL, PyTorch, TensorFlow, Jupyter</p>
              <p><strong className="text-white print:text-black">Programming:</strong> Python, Java, C, R, JavaScript, PHP, Flutter/Dart</p>
              <p><strong className="text-white print:text-black">Soft Skills:</strong> Problem-solving, Teamwork, Time Management, Adaptability, Communication, Collaboration, Attention to Detail</p>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase font-bold text-cyan-400 print:text-blue-800 tracking-wider mb-3">
              Key Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {projectsData.slice(0, 6).map((proj, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-950/60 print:bg-gray-50 border border-slate-800 print:border-gray-200">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-bold text-white print:text-black">{proj.title}</span>
                    <span className="font-mono text-[10px] text-slate-400 print:text-gray-500">{proj.year}</span>
                  </div>
                  <p className="text-[11px] text-slate-300 print:text-gray-700 mb-1">{proj.summary}</p>
                  <p className="font-mono text-[10px] text-cyan-400 print:text-blue-700">Stack: {proj.stack.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>

          {/* References */}
          <div>
            <h2 className="text-xs font-mono uppercase font-bold text-cyan-400 print:text-blue-800 tracking-wider mb-2">
              References
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {referencesData.map((ref, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-950/60 print:bg-gray-50 border border-slate-800 print:border-gray-200">
                  <p className="font-bold text-white print:text-black">{ref.name}</p>
                  <p className="text-slate-400 print:text-gray-600 text-[11px]">{ref.title} — {ref.organization}</p>
                  <p className="font-mono text-[11px] text-cyan-400 print:text-blue-700">{ref.email} | {ref.phone}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
