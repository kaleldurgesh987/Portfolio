import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  Sparkles, 
  ArrowUpRight, 
  Layers, 
  Eye, 
  CheckCircle2, 
  Gamepad2, 
  Smartphone, 
  ShieldCheck, 
  Globe 
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { soundFx } from '../utils/audio';
import ProjectModal from './ProjectModal';

// Project image assets
import gravityRunnerImg from '../assets/images/projects/gravity-runner.svg';
import homeCrewImg from '../assets/images/projects/home-crew.svg';
import shadowxCodersImg from '../assets/images/projects/shadowx-coders.svg';
import printShopLeakImg from '../assets/images/projects/print-shop-leak.svg';

const projectImages = {
  'gravity-runner': gravityRunnerImg,
  'home-crew': homeCrewImg,
  'shadowx-coders': shadowxCodersImg,
  'print-shop-data-leak': printShopLeakImg,
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'Game Development', name: 'Game Dev' },
    { id: 'Mobile Application', name: 'Android Apps' },
    { id: 'Web Development', name: 'Web Dev' },
    { id: 'Cybersecurity & Concept', name: 'Hackathons' },
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      {/* Background Cyber Glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-4">
            <Sparkles size={13} className="text-cyan-400" />
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-300">
              Selected Creations
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-100 tracking-tight mb-4">
            FEATURED <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">PROJECTS</span>
          </h2>

          <p className="text-slate-400 font-light max-w-xl mx-auto text-sm sm:text-base">
            From mobile gravity platformers to community marketplace apps and document privacy architectures.
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-6 shadow-[0_0_12px_rgba(0,240,255,0.8)]" />
        </div>

        {/* Project Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((c) => {
            const isActive = filter === c.id;
            return (
              <button
                key={c.id}
                onClick={() => {
                  soundFx.playClick();
                  setFilter(c.id);
                }}
                onMouseEnter={() => soundFx.playHover()}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-[0_0_15px_rgba(0,240,255,0.35)]'
                    : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {c.name}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => {
            const imageSrc = projectImages[project.id];

            return (
              <div
                key={project.id}
                onMouseEnter={() => soundFx.playHover()}
                className="glass-card rounded-3xl overflow-hidden border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Top Image Preview with Overlay */}
                <div className="relative aspect-video w-full overflow-hidden bg-[#040714] border-b border-slate-800/80">
                  <img
                    src={imageSrc}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category Pill Over Image */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="font-mono text-[11px] px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md text-cyan-300 border border-cyan-500/30 shadow-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Status Indicator */}
                  {project.status && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-purple-950/90 text-purple-300 border border-purple-500/30">
                        {project.status}
                      </span>
                    </div>
                  )}

                  {/* Quick Action Overlay on Desktop Hover */}
                  <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 p-4 backdrop-blur-sm">
                    <button
                      onClick={() => {
                        soundFx.playClick();
                        setSelectedProject(project);
                      }}
                      className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-400 text-slate-950 flex items-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.5)] hover:scale-105 transition-transform"
                    >
                      <Eye size={14} />
                      <span>View Details</span>
                    </button>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-slate-800 text-slate-200 hover:text-white border border-slate-700 hover:scale-105 transition-transform"
                        title="GitHub Repo"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Project Number & Title */}
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-100 group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <button
                        onClick={() => {
                          soundFx.playClick();
                          setSelectedProject(project);
                        }}
                        className="p-1.5 rounded-lg text-slate-400 group-hover:text-cyan-400 transition-colors"
                        title="Read full project specs"
                      >
                        <ArrowUpRight size={20} />
                      </button>
                    </div>

                    {/* Tagline if exists */}
                    {project.tagline && (
                      <p className="text-xs font-mono text-cyan-400/90 mb-3 italic">
                        "{project.tagline}"
                      </p>
                    )}

                    {/* Short Description */}
                    <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                      {project.shortDescription}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="space-y-1.5 mb-6">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology Tags & Action Footer */}
                  <div className="pt-5 border-t border-slate-800/80">
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.map((t, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Footer Actions */}
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => {
                          soundFx.playClick();
                          setSelectedProject(project);
                        }}
                        className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                      >
                        <span>Case Study &amp; Features</span>
                        <ArrowUpRight size={14} />
                      </button>

                      <div className="flex items-center gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => soundFx.playHover()}
                            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                            title="View code on GitHub"
                          >
                            <Github size={15} />
                          </a>
                        )}

                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => soundFx.playHover()}
                            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                            title="Launch Demo / Release"
                          >
                            <ExternalLink size={15} />
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Project Modal Popup */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          projectImages={projectImages}
        />
      )}
    </section>
  );
}
