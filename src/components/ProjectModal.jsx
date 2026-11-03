import React, { useEffect } from 'react';
import { X, Github, ExternalLink, Sparkles, CheckCircle2, Cpu, Layers } from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function ProjectModal({ project, onClose, projectImages }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const imageSrc = projectImages[project.id];

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-fadeIn">
      {/* Modal Dialog Container */}
      <div 
        className="relative w-full max-w-4xl bg-[#080d1e] border border-cyan-500/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.2)] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F0FF]" />
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                {project.category} // CASE STUDY
              </span>
              <h3 className="font-display font-black text-xl sm:text-2xl text-slate-100">
                {project.title}
              </h3>
            </div>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            aria-label="Close project modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-8">
          
          {/* Project Screenshot / SVG Graphic */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-[#040714]">
            <img
              src={imageSrc}
              alt={project.title}
              className="w-full h-auto object-cover max-h-[380px]"
            />
            {project.status && (
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-900/90 text-cyan-300 border border-cyan-500/40 backdrop-blur-md">
                {project.status}
              </span>
            )}
          </div>

          {/* Tagline & Full Description */}
          <div>
            <h4 className="font-display font-semibold text-base text-cyan-300 mb-2 italic">
              "{project.tagline}"
            </h4>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-light">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Features List */}
          <div>
            <h5 className="font-display font-bold text-base text-slate-100 mb-3 flex items-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-400" />
              <span>Core Implemented Features</span>
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-xs text-slate-300 leading-relaxed flex items-start gap-2.5"
                >
                  <span className="text-cyan-400 font-bold mt-0.5">•</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Architecture Notes */}
          {project.architecture && (
            <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/30">
              <h5 className="font-display font-bold text-sm text-purple-300 mb-1.5 flex items-center gap-2">
                <Cpu size={16} className="text-purple-400" />
                <span>System Architecture</span>
              </h5>
              <p className="text-xs font-mono text-slate-300 leading-relaxed">
                {project.architecture}
              </p>
            </div>
          )}

          {/* Technology Stack Tags */}
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-slate-400 block mb-2">
              Technologies &amp; Tools:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-cyan-500/20 text-xs font-mono text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Action Footer */}
        <div className="p-6 border-t border-slate-800 bg-slate-900/60 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => soundFx.playHover()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all hover:scale-105"
              >
                <Github size={15} />
                <span>Source Code</span>
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => soundFx.playHover()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all hover:scale-105"
              >
                <ExternalLink size={15} />
                <span>Live Project Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
}
