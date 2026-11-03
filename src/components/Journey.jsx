import React from 'react';
import { 
  Terminal, 
  Globe, 
  Gamepad2, 
  Smartphone, 
  Trophy, 
  Rocket, 
  Sparkles, 
  Calendar 
} from 'lucide-react';
import { journeyTimeline } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

const iconMap = {
  Terminal,
  Globe,
  Gamepad2,
  Smartphone,
  Trophy,
  Rocket
};

export default function Journey() {
  return (
    <section id="journey" className="relative py-28 overflow-hidden bg-slate-950/50">
      {/* Background Cyber Glow */}
      <div className="absolute top-1/3 left-1/3 w-[550px] h-[550px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-4">
            <Sparkles size={13} className="text-cyan-400" />
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-300">
              Evolution &amp; Milestones
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-100 tracking-tight mb-4">
            MY <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">JOURNEY</span>
          </h2>

          <p className="text-slate-400 font-light max-w-xl mx-auto text-sm sm:text-base">
            From discovering algorithm design to shipping interactive games and scalable mobile systems.
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-6 shadow-[0_0_12px_rgba(0,240,255,0.8)]" />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Vertical Glowing Cyber Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-purple-500 to-blue-500 shadow-[0_0_10px_rgba(0,240,255,0.6)]" />

          {/* Timeline Nodes */}
          <div className="space-y-12 md:space-y-16">
            {journeyTimeline.map((item, idx) => {
              const Icon = iconMap[item.icon] || Sparkles;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={idx}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } group`}
                >
                  
                  {/* Timeline Center Node Node Icon */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-xl bg-[#040714] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.6)] group-hover:scale-125 group-hover:border-purple-400 transition-all duration-300">
                      <Icon size={18} className="text-cyan-300 group-hover:text-purple-300 transition-colors" />
                    </div>
                  </div>

                  {/* Content Card (Left or Right on desktop) */}
                  <div className="ml-12 md:ml-0 md:w-1/2 px-2 md:px-8 w-full">
                    <div 
                      className={`glass-card p-6 sm:p-7 rounded-3xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 relative group-hover:translate-y-[-2px] ${
                        isEven ? 'md:text-left' : 'md:text-left'
                      }`}
                    >
                      {/* Top Milestone Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-cyan-950/70 text-cyan-300 border border-cyan-500/30">
                          {item.year}
                        </span>

                        <span className="font-mono text-[11px] text-slate-400 flex items-center gap-1.5">
                          <Calendar size={12} className="text-purple-400" />
                          {item.date}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="font-display font-bold text-xl text-slate-100 group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs font-mono text-purple-400 mb-3">
                        {item.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-slate-300 font-light leading-relaxed mb-5">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                        {item.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-0.5 rounded-md bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
