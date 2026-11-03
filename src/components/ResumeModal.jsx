import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, MapPin, Github, Linkedin, ExternalLink, Sparkles } from 'lucide-react';
import { personalInfo, skillsData, projectsData, educationData } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handlePrint = () => {
    soundFx.playClick();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-fadeIn">
      {/* Modal Card */}
      <div 
        className="relative w-full max-w-4xl bg-[#080d1e] border border-cyan-500/40 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.25)] my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-800 bg-slate-900/80 print:hidden">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F0FF]" />
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
              CURRICULUM VITAE // DURGESH KALEL
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors"
              title="Print or Save as PDF"
            >
              <Printer size={14} />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto font-sans text-slate-200 space-y-8 bg-[#050917] print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 print:border-gray-300">
            <h1 className="font-display font-black text-3xl sm:text-4xl text-slate-100 print:text-black tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="font-mono text-sm text-cyan-400 print:text-blue-700 font-semibold mt-1">
              {personalInfo.role}
            </p>

            <div className="flex flex-wrap gap-4 mt-3 text-xs font-mono text-slate-400 print:text-gray-600">
              <span className="flex items-center gap-1">
                <MapPin size={12} className="text-cyan-400" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail size={12} className="text-cyan-400" />
                {personalInfo.socialLinks.email}
              </span>
              <span className="flex items-center gap-1">
                <Github size={12} className="text-cyan-400" />
                github.com/durgeshkalel
              </span>
              <span className="flex items-center gap-1">
                <Linkedin size={12} className="text-cyan-400" />
                linkedin.com/in/durgeshkalel
              </span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="font-display font-bold text-base text-cyan-300 print:text-blue-800 uppercase tracking-wider mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800 font-light leading-relaxed">
              Passionate developer and technology enthusiast from Maharashtra, India, dedicated to turning creative ideas into functional digital experiences. Proven experience building 2D physics games in Unity (C#), modern Android applications with Kotlin &amp; Jetpack Compose, and responsive web platforms with React and Firebase. Strong foundation in software architecture, algorithm design, and security-centric prototyping.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="font-display font-bold text-base text-cyan-300 print:text-blue-800 uppercase tracking-wider mb-3">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 print:border-gray-300 print:bg-gray-50">
                <strong className="text-slate-100 print:text-black block mb-1">Languages:</strong>
                <span className="text-slate-300 print:text-gray-700">Python, JavaScript (ES6+), C#, Kotlin, HTML5, CSS3</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 print:border-gray-300 print:bg-gray-50">
                <strong className="text-slate-100 print:text-black block mb-1">Web &amp; Frontend:</strong>
                <span className="text-slate-300 print:text-gray-700">React.js, Tailwind CSS, Vite, Responsive Design, REST APIs</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 print:border-gray-300 print:bg-gray-50">
                <strong className="text-slate-100 print:text-black block mb-1">Mobile &amp; Game Dev:</strong>
                <span className="text-slate-300 print:text-gray-700">Unity Engine (2D/3D), Jetpack Compose, Android Architecture</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 print:border-gray-300 print:bg-gray-50">
                <strong className="text-slate-100 print:text-black block mb-1">Backend, Database &amp; Tools:</strong>
                <span className="text-slate-300 print:text-gray-700">Node.js, Firebase (Firestore, Auth), MySQL, VS Code, Git, GitHub</span>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="font-display font-bold text-base text-cyan-300 print:text-blue-800 uppercase tracking-wider mb-4">
              Featured Software Projects
            </h2>
            <div className="space-y-4">
              {projectsData.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 print:border-gray-300 print:bg-white">
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                    <h3 className="font-display font-bold text-sm text-slate-100 print:text-black">
                      {proj.title}
                    </h3>
                    <span className="font-mono text-[11px] text-cyan-400 print:text-blue-700">
                      {proj.technologies.join(' • ')}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 print:text-gray-700 font-light leading-relaxed mb-2">
                    {proj.shortDescription}
                  </p>
                  <ul className="list-disc list-inside text-[11px] text-slate-400 print:text-gray-600 space-y-0.5 font-mono">
                    {proj.features.slice(0, 3).map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-display font-bold text-base text-cyan-300 print:text-blue-800 uppercase tracking-wider mb-2">
              Education
            </h2>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 print:border-gray-300 print:bg-white text-xs">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-slate-100 print:text-black text-sm">
                  {educationData[0].degree}
                </span>
                <span className="font-mono text-purple-400 print:text-purple-700">
                  {educationData[0].duration}
                </span>
              </div>
              <p className="text-slate-400 print:text-gray-600 font-mono">
                {educationData[0].institution} • {educationData[0].location}
              </p>
              <p className="text-slate-300 print:text-gray-700 mt-2 font-light">
                {educationData[0].description}
              </p>
            </div>
          </div>

        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-900/80 flex justify-between items-center print:hidden">
          <span className="font-mono text-xs text-slate-400">
            Durgesh Kalel • Official Portfolio CV
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md hover:scale-105 transition-all"
            >
              Download as PDF
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
