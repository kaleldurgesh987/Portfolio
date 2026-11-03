import React, { useState } from 'react';
import { 
  Code2, 
  FileCode, 
  Terminal, 
  Code, 
  Palette, 
  Layers, 
  Server, 
  Flame, 
  Database, 
  Gamepad2, 
  Laptop, 
  Smartphone, 
  GitBranch, 
  Github, 
  Sparkles,
  Sliders
} from 'lucide-react';
import { skillCategories, skillsData as initialSkills } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

const iconComponents = {
  Code2,
  FileCode,
  Terminal,
  Code,
  Palette,
  Layers,
  Server,
  Flame,
  Database,
  Gamepad2,
  Laptop,
  Smartphone,
  GitBranch,
  Github
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [skills, setSkills] = useState(initialSkills);
  const [showEditor, setShowEditor] = useState(false);

  // Filter skills
  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  const handleCategoryChange = (catId) => {
    soundFx.playClick();
    setActiveCategory(catId);
  };

  const updateSkillLevel = (name, newPercent) => {
    let newTier = "Proficient";
    if (newPercent >= 90) newTier = "Advanced";
    else if (newPercent < 80) newTier = "Intermediate";

    setSkills(prev => prev.map(s => {
      if (s.name === name) {
        return { ...s, levelPercent: newPercent, level: newTier };
      }
      return s;
    }));
  };

  return (
    <section id="skills" className="relative py-28 overflow-hidden bg-slate-950/40">
      {/* Background Cyber Accents */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-4">
            <Sparkles size={13} className="text-cyan-400" />
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-300">
              Technical Arsenal
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-100 tracking-tight mb-4">
            SKILLS &amp; <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">EXPERTISE</span>
          </h2>

          <p className="text-slate-400 font-light max-w-xl mx-auto text-sm sm:text-base">
            Crafting scalable software across game engines, modern web frameworks, and native Android ecosystems.
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-6 shadow-[0_0_12px_rgba(0,240,255,0.8)]" />
        </div>

        {/* Category Filters Bar & Calibration Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
            {skillCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Real-time Level Calibration Toggle (Editable Requirement) */}
          <button
            onClick={() => {
              soundFx.playClick();
              setShowEditor(!showEditor);
            }}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono border transition-all ${
              showEditor
                ? 'border-cyan-400 bg-cyan-500/10 text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-slate-200'
            }`}
            title="Toggle interactive proficiency calibrator"
          >
            <Sliders size={14} className={showEditor ? 'text-cyan-400' : 'text-slate-400'} />
            <span>{showEditor ? 'Editing Mode Active' : 'Calibrate Skill Levels'}</span>
          </button>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => {
            const Icon = iconComponents[skill.icon] || Code2;

            return (
              <div
                key={skill.name}
                onMouseEnter={() => soundFx.playHover()}
                className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
              >
                {/* Subtle Glow Accent on Hover */}
                <div 
                  className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"
                  style={{ backgroundColor: skill.color }}
                />

                <div>
                  {/* Top Bar: Icon + Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center p-2.5 bg-slate-900/80 border border-slate-800 group-hover:scale-110 transition-transform duration-300"
                      style={{ borderColor: `${skill.color}40` }}
                    >
                      <Icon size={24} style={{ color: skill.color }} />
                    </div>

                    <span 
                      className="font-mono text-[11px] px-2.5 py-1 rounded-md font-semibold tracking-wider"
                      style={{ 
                        backgroundColor: `${skill.color}15`, 
                        color: skill.color,
                        border: `1px solid ${skill.color}35`
                      }}
                    >
                      {skill.level}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h3 className="font-display font-bold text-lg text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-400 font-light mt-1.5 mb-5 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>

                {/* Animated Visual Level Indicator Bar (Editable) */}
                <div className="mt-auto pt-3 border-t border-slate-800/80">
                  <div className="flex justify-between items-center text-[11px] font-mono mb-1.5 text-slate-400">
                    <span className="capitalize">{skill.category}</span>
                    <span className="font-semibold text-slate-300">Proficiency</span>
                  </div>

                  {/* Progress Indicator Bar */}
                  <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800/80">
                    <div
                      className="h-full rounded-full transition-all duration-500 ease-out shadow-sm"
                      style={{
                        width: `${skill.levelPercent}%`,
                        backgroundColor: skill.color,
                        boxShadow: `0 0 10px ${skill.color}80`
                      }}
                    />
                  </div>

                  {/* Calibration Slider in Editor Mode */}
                  {showEditor && (
                    <div className="mt-3 pt-2 border-t border-slate-800/60 animate-fadeIn">
                      <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400 mb-1">
                        <span>Calibrate:</span>
                        <span>{skill.levelPercent}%</span>
                      </div>
                      <input
                        type="range"
                        min="50"
                        max="100"
                        value={skill.levelPercent}
                        onChange={(e) => updateSkillLevel(skill.name, parseInt(e.target.value, 10))}
                        className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                      />
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
