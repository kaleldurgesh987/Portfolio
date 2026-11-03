import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Gamepad2, 
  Layout, 
  Smartphone, 
  ShieldCheck, 
  Sparkles,
  Zap,
  Target,
  BrainCircuit
} from 'lucide-react';
import { personalInfo, educationData, interestsData } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

// Dynamic icon mapper for interests
const iconMap = {
  Gamepad2: Gamepad2,
  Layout: Layout,
  Smartphone: Smartphone,
  ShieldCheck: ShieldCheck
};

export default function About() {
  const cards = [
    {
      title: "Clean Architecture",
      desc: "Structuring clean, decoupled code across React, Kotlin, and C# Unity architectures.",
      icon: BrainCircuit,
      color: "from-cyan-500/20 to-blue-500/20",
      border: "border-cyan-500/30",
      text: "text-cyan-400"
    },
    {
      title: "Real-World Focus",
      desc: "Developing practical tools for daily challenges — from local worker hiring to print privacy.",
      icon: Target,
      color: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/30",
      text: "text-purple-400"
    },
    {
      title: "Agile Innovation",
      desc: "Rapid prototyping, hackathon-tested problem solving, and iterative feature delivery.",
      icon: Zap,
      color: "from-amber-500/20 to-orange-500/20",
      border: "border-amber-500/30",
      text: "text-amber-400"
    }
  ];

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background Cyber Mesh */}
      <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-4">
            <Sparkles size={13} className="text-cyan-400" />
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-300">
              Identity &amp; Philosophy
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-100 tracking-tight mb-6">
            A LITTLE ABOUT <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">ME</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full shadow-[0_0_12px_rgba(0,240,255,0.8)]" />
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Personal Bio & Core Narrative (Col 7) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="glass-card p-8 rounded-3xl border border-slate-800 backdrop-blur-xl relative overflow-hidden group hover:border-cyan-500/40 transition-all">
              <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/5 rounded-bl-full pointer-events-none" />

              <h3 className="font-display font-bold text-2xl text-slate-100 mb-4 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F0FF]" />
                Personal Introduction
              </h3>

              <div className="space-y-4 text-slate-300 font-light leading-relaxed text-base">
                <p>
                  I'm <strong className="text-cyan-300 font-medium">Durgesh Kalel</strong>, a passionate developer and technology enthusiast from <span className="text-purple-300 font-medium">Maharashtra, India</span>. I enjoy transforming creative ideas into functional digital experiences.
                </p>
                <p>
                  My interests include web development, application development, game development, and exploring modern technologies.
                </p>
                <p>
                  I continuously work on improving my programming skills and building projects that solve real-world problems.
                </p>
              </div>

              {/* Quick Metadata Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-800/80 font-mono text-xs">
                <div className="flex items-center gap-2.5 text-slate-300">
                  <MapPin size={16} className="text-cyan-400" />
                  <span>Maharashtra, India</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  <span>Open for Developer Opportunities</span>
                </div>
              </div>
            </div>

            {/* Animated Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {cards.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => soundFx.playHover()}
                    className={`glass-card p-5 rounded-2xl border ${card.border} hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between`}
                  >
                    <div>
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-3`}>
                        <IconComponent size={20} className={card.text} />
                      </div>
                      <h4 className="font-display font-bold text-base text-slate-100 mb-1">
                        {card.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed font-light">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Education & Specializations (Col 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Education Card */}
            <div className="glass-card p-7 rounded-3xl border border-purple-500/30 backdrop-blur-xl relative overflow-hidden group hover:border-purple-500/60 transition-all">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/30">
                    <GraduationCap size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-100">
                      Education
                    </h3>
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                      Academic Background
                    </span>
                  </div>
                </div>

                <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-purple-950/70 text-purple-300 border border-purple-500/30">
                  {educationData[0].duration}
                </span>
              </div>

              <div className="space-y-3">
                <h4 className="font-display font-bold text-base text-cyan-300">
                  {educationData[0].degree}
                </h4>
                <p className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                  <MapPin size={12} className="text-purple-400" />
                  {educationData[0].institution} • {educationData[0].location}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed font-light pt-2">
                  {educationData[0].description}
                </p>

                {/* Highlights */}
                <div className="pt-3">
                  <span className="font-mono text-[11px] text-slate-400 block mb-2 uppercase tracking-wider">
                    Core Coursework:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {educationData[0].highlights.map((h, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-300"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Interests Grid */}
            <div className="glass-card p-6 rounded-3xl border border-slate-800 backdrop-blur-xl">
              <h3 className="font-display font-bold text-lg text-slate-100 mb-4 flex items-center gap-2">
                <Sparkles size={16} className="text-cyan-400" />
                <span>Areas of Passion</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {interestsData.map((item, idx) => {
                  const Icon = iconMap[item.icon] || Sparkles;
                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => soundFx.playHover()}
                      className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30 transition-all flex flex-col gap-1.5"
                    >
                      <div className="flex items-center gap-2">
                        <Icon size={15} className="text-cyan-400" />
                        <span className="font-display font-bold text-xs text-slate-200">
                          {item.title}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-snug font-light">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
