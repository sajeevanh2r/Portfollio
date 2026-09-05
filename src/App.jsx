import React, { useState } from 'react';
import Gateway from './components/Gateway';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Experience from './components/Experience';
import Education from './components/Education';
import References from './components/References';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [entered, setEntered] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#08090d] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Cinematic Opening Gateway */}
      {!entered && (
        <Gateway onEnter={() => setEntered(true)} />
      )}

      {/* Subtle Deep Space Particles & Atmospheric Canvas */}
      <BackgroundCanvas />

      {/* Frosted Glass Cinematic Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Experience Flow */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Skills />
        <Experience />
        <References />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Case Study Deep-Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Curriculum Vitae Modal */}
      {isResumeOpen && (
        <ResumeModal onClose={() => setIsResumeOpen(false)} />
      )}
    </div>
  );
}
