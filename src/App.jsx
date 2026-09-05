import React, { useState } from 'react';
import SystemBoot from './components/SystemBoot';
import CustomCursor from './components/CustomCursor';
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
  const [booted, setBooted] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050608] text-slate-100 relative font-mono selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Custom Targeting Crosshair Cursor */}
      <CustomCursor />

      {/* System Boot Sequence (Plays on first visit) */}
      {!booted && (
        <SystemBoot onComplete={() => setBooted(true)} />
      )}

      {/* Ambient Circuit Grid & Data Streams */}
      <BackgroundCanvas />

      {/* Minimal Robotic Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Core Interface Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Skills />
        <About />
        <Experience />
        <Education />
        <References />
        <Contact />
      </main>

      {/* Minimal Robotic Footer */}
      <Footer />

      {/* Holographic Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Terminal Curriculum Vitae Modal */}
      {isResumeOpen && (
        <ResumeModal onClose={() => setIsResumeOpen(false)} />
      )}
    </div>
  );
}
