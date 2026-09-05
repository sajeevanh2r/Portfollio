import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'FULL-TIME ENGINEERING ROLE',
    message: ''
  });
  const [transmitting, setTransmitting] = useState(false);
  const [transmitProgress, setTransmitProgress] = useState(0);
  const [transmitDone, setTransmitDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setTransmitting(true);
    setTransmitProgress(0);

    // Simulate transmission progress
    const interval = setInterval(() => {
      setTransmitProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTransmitting(false);
          setTransmitDone(true);

          // Open mail client
          const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
            formData.subject + ' // From: ' + formData.name
          )}&body=${encodeURIComponent(
            `TRANSMITTER: ${formData.name}\nREPLY_TO: ${formData.email}\nPROTOCOL: ${formData.subject}\n\nPAYLOAD:\n${formData.message}`
          )}`;
          window.open(mailto, '_blank');

          setTimeout(() => setTransmitDone(false), 7000);
          return 100;
        }
        return prev + 20;
      });
    }, 150);
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-cyan-500/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="text-[10px] font-mono text-cyan-500/50 tracking-widest mb-2">// SECTION_08</div>
          <h2 className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight">
            ESTABLISH<span className="text-cyan-400">_CONNECTION</span>
          </h2>
          <p className="mt-2 text-sm font-mono text-slate-500">
            &gt;_ Direct communication protocol. Transmit your message payload.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Left Hub: Protocol Status & Fast Connect */}
          <div className="lg:col-span-5 space-y-4">
            <div className="terminal-panel p-6 rounded-none space-y-4 bg-[#0a0c10]">
              <div className="flex items-center justify-between pb-3 border-b border-slate-900">
                <span className="text-[10px] font-mono text-cyan-500/60 tracking-widest">COMMUNICATION_PROTOCOL</span>
                <span className="text-[9px] font-mono text-emerald-400 flex items-center gap-1.5 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  STATUS: READY
                </span>
              </div>

              <div className="space-y-3">
                {/* Email Direct */}
                <div className="p-3 border border-slate-900 bg-black/60 flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-mono text-slate-600">DIRECT_EMAIL</p>
                    <p className="text-xs font-mono text-slate-200">{personalInfo.email}</p>
                  </div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    data-cursor="CONNECT"
                    className="px-2.5 py-1 text-[10px] font-mono tracking-widest text-cyan-400 border border-cyan-500/40 hover:bg-cyan-500/10 transition-colors"
                  >
                    [ CONNECT ]
                  </a>
                </div>

                {/* Phone / Comm */}
                <div className="p-3 border border-slate-900 bg-black/60 flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-mono text-slate-600">VOICE_COMM / WHATSAPP</p>
                    <p className="text-xs font-mono text-slate-200">{personalInfo.phone}</p>
                  </div>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    data-cursor="CONNECT"
                    className="px-2.5 py-1 text-[10px] font-mono tracking-widest text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/10 transition-colors"
                  >
                    [ CONNECT ]
                  </a>
                </div>

                {/* GitHub */}
                <div className="p-3 border border-slate-900 bg-black/60 flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-mono text-slate-600">CODE_REPOSITORY</p>
                    <p className="text-xs font-mono text-slate-200">github.com/{personalInfo.githubUsername}</p>
                  </div>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="CONNECT"
                    className="px-2.5 py-1 text-[10px] font-mono tracking-widest text-purple-400 border border-purple-500/40 hover:bg-purple-500/10 transition-colors"
                  >
                    [ CONNECT ]
                  </a>
                </div>

                {/* LinkedIn */}
                <div className="p-3 border border-slate-900 bg-black/60 flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-mono text-slate-600">PROFESSIONAL_NETWORK</p>
                    <p className="text-xs font-mono text-slate-200">linkedin.com/in/{personalInfo.linkedinUsername}</p>
                  </div>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="CONNECT"
                    className="px-2.5 py-1 text-[10px] font-mono tracking-widest text-blue-400 border border-blue-500/40 hover:bg-blue-500/10 transition-colors"
                  >
                    [ CONNECT ]
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hub: Terminal Message Form */}
          <div className="lg:col-span-7">
            <div className="terminal-panel p-6 sm:p-8 rounded-none border border-cyan-500/25 bg-[#0a0c10] relative">
              <div className="flex items-center justify-between pb-3 border-b border-slate-900 mb-6">
                <span className="text-[10px] font-mono text-cyan-500/60 tracking-widest">TRANSMISSION_TERMINAL</span>
                <span className="text-[9px] font-mono text-slate-600">PORT: 443 // ENCRYPTED</span>
              </div>

              {/* Transmitting Animation */}
              {transmitting && (
                <div className="mb-6 p-4 border border-cyan-500/40 bg-black/80 space-y-2">
                  <div className="flex justify-between text-xs font-mono text-cyan-400">
                    <span>TRANSMITTING PAYLOAD...</span>
                    <span>{transmitProgress}%</span>
                  </div>
                  <div className="h-1 bg-slate-900 overflow-hidden">
                    <div
                      className="h-full bg-cyan-400 transition-all duration-150"
                      style={{ width: `${transmitProgress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Sent Notification */}
              {transmitDone && (
                <div className="mb-6 p-4 border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-xs font-mono space-y-1">
                  <p className="font-bold">&gt; MESSAGE TRANSMITTED SUCCESSFULLY.</p>
                  <p className="text-[10px] text-emerald-500/80">Default communication client opened with formatted payload.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9px] font-mono text-slate-500 tracking-widest mb-1.5 uppercase">
                      TRANSMITTER_NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Nolan Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs font-mono bg-black/70 border border-slate-800 text-white placeholder-slate-700 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[9px] font-mono text-slate-500 tracking-widest mb-1.5 uppercase">
                      RETURN_COMM_CHANNEL (EMAIL) *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. nolan@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs font-mono bg-black/70 border border-slate-800 text-white placeholder-slate-700 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[9px] font-mono text-slate-500 tracking-widest mb-1.5 uppercase">
                    COMMUNICATION_PROTOCOL
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2 text-xs font-mono bg-black/70 border border-slate-800 text-cyan-300 focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    <option value="FULL-TIME ENGINEERING ROLE">FULL-TIME ENGINEERING ROLE</option>
                    <option value="MACHINE LEARNING & AI SYSTEM">MACHINE LEARNING & AI SYSTEM</option>
                    <option value="FLUTTER MOBILE APPLICATION">FLUTTER MOBILE APPLICATION</option>
                    <option value="COLLABORATION & RESEARCH">COLLABORATION & RESEARCH</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[9px] font-mono text-slate-500 tracking-widest mb-1.5 uppercase">
                    TRANSMISSION_PAYLOAD (MESSAGE) *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Type your message payload here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 text-xs font-mono bg-black/70 border border-slate-800 text-white placeholder-slate-700 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={transmitting}
                  data-cursor="TRANSMIT"
                  className="w-full py-3 text-xs font-mono tracking-widest text-[#050608] bg-cyan-400 hover:bg-cyan-300 font-bold transition-all disabled:opacity-50"
                >
                  {transmitting ? 'TRANSMITTING...' : '[ TRANSMIT PAYLOAD ]'}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
