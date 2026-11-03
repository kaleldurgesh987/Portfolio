import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Download, Github, Linkedin, Sparkles, MapPin, Code2, Compass } from 'lucide-react';
import { personalInfo, rotatingRoles } from '../data/portfolioData';
import { soundFx } from '../utils/audio';
import durgeshAvatar from '../assets/images/durgesh-avatar.svg';

export default function Hero({ onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  // 3D Parallax tilt ref for hero profile card
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Typewriter effect loop
  useEffect(() => {
    const currentFullRole = rotatingRoles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentFullRole.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentFullRole.length) {
          // Pause at full word
          setTimeout(() => setIsDeleting(true), 1800);
          setTypingSpeed(100);
        } else {
          setTypingSpeed(80);
        }
      } else {
        setDisplayedText(currentFullRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % rotatingRoles.length);
          setTypingSpeed(120);
        } else {
          setTypingSpeed(45);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, typingSpeed]);

  // Mouse tilt calculation
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const scrollToProjects = (e) => {
    e.preventDefault();
    soundFx.playClick();
    const target = document.getElementById('projects');
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Radial Light Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-purple-600/20 rounded-full blur-[140px] pointer-events-none -z-10 animate-glow-pulse" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column (Col 7) */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(0,240,255,0.15)] group hover:border-cyan-400/60 transition-colors">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400 shadow-[0_0_8px_#00F0FF]" />
              </span>
              <span className="font-mono text-xs font-medium text-cyan-300">
                {personalInfo.availability}
              </span>
              <span className="text-slate-600">|</span>
              <span className="flex items-center gap-1 font-mono text-[11px] text-slate-400">
                <MapPin size={11} className="text-cyan-400" />
                {personalInfo.location}
              </span>
            </div>

            {/* Large Hero Heading */}
            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-7xl text-slate-100 tracking-tight leading-[1.08] mb-4">
              HI, I'M <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent glow-text-cyan">
                DURGESH.
              </span>
            </h1>

            {/* Dynamic Animated Rotating Text */}
            <div className="h-12 sm:h-14 flex items-center mb-6">
              <span className="font-mono text-xl sm:text-2xl md:text-3xl font-semibold text-slate-200">
                &gt;&nbsp;
                <span className="text-cyan-400 font-display font-bold">
                  {displayedText}
                </span>
                <span className="inline-block w-2 sm:w-2.5 h-6 sm:h-8 bg-purple-400 ml-1.5 animate-pulse align-middle" />
              </span>
            </div>

            {/* Tagline & Short Introduction */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-light leading-relaxed mb-8">
              <span className="text-cyan-300 font-medium">"{personalInfo.tagline}"</span>
              <br className="hidden sm:inline" />
              Specializing in reactive web applications, Unity 2D game loops, and native Android solutions with a passion for futuristic creative interfaces.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              {/* View Projects Button */}
              <a
                href="#projects"
                onClick={scrollToProjects}
                onMouseEnter={() => soundFx.playHover()}
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 bg-size-200 hover:bg-right transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.65)] hover:scale-[1.02]"
              >
                <span>View Projects</span>
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Download / View Resume Button */}
              <button
                onClick={() => {
                  soundFx.playClick();
                  if (onOpenResume) onOpenResume();
                }}
                onMouseEnter={() => soundFx.playHover()}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02]"
              >
                <Download size={16} className="text-purple-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Icons & Highlights */}
            <div className="flex items-center gap-5 pt-4 border-t border-slate-800/80 w-full max-w-lg">
              <span className="font-mono text-xs text-slate-400 tracking-wider">
                CONNECT:
              </span>

              {/* GitHub */}
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => soundFx.playHover()}
                className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:scale-110 shadow-sm"
                title="GitHub Profile"
              >
                <Github size={18} />
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => soundFx.playHover()}
                className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:scale-110 shadow-sm"
                title="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>

              {/* Direct Email quick link */}
              <a
                href={`mailto:${personalInfo.socialLinks.email}`}
                onMouseEnter={() => soundFx.playHover()}
                className="font-mono text-xs text-slate-400 hover:text-cyan-400 transition-colors ml-auto flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {personalInfo.socialLinks.email}
              </a>
            </div>

          </div>

          {/* Right 3D Profile Card Column (Col 5) */}
          <div className="lg:col-span-5 flex justify-center items-center z-10">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-sm sm:max-w-md transition-transform duration-200 ease-out"
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              }}
            >
              {/* Outer Glowing Gradient Frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 opacity-70 blur-xl group-hover:opacity-100 transition duration-1000 animate-glow-pulse" />

              {/* Main Card Container */}
              <div className="relative glass-card p-6 sm:p-8 rounded-3xl overflow-hidden border border-cyan-500/30 backdrop-blur-2xl">
                
                {/* Tech Status Pill Top */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F0FF]" />
                    <span className="font-mono text-xs uppercase tracking-wider text-slate-300">
                      SYS // IDENTITY
                    </span>
                  </div>
                  <span className="font-mono text-xs text-purple-400 font-semibold px-2.5 py-1 rounded-md bg-purple-950/60 border border-purple-500/30">
                    DEV 2026
                  </span>
                </div>

                {/* 3D Profile Graphic with Floating Animation */}
                <div className="relative mx-auto w-56 h-56 sm:w-64 sm:h-64 mb-6 flex items-center justify-center animate-float-slow">
                  {/* Subtle rotating glow circle behind */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/20 animate-spin-slow" />
                  
                  <img
                    src={durgeshAvatar}
                    alt="Durgesh Kalel 3D Avatar"
                    className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,240,255,0.25)] transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Developer Name & Role Badges */}
                <div className="text-center mb-6">
                  <h3 className="font-display font-bold text-2xl text-slate-100 tracking-wide">
                    {personalInfo.name}
                  </h3>
                  <p className="font-mono text-xs text-cyan-400 mt-1">
                    {personalInfo.role}
                  </p>
                </div>

                {/* Quick Spec Metrics Grid */}
                <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-slate-800/80">
                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center">
                    <span className="block font-display font-bold text-lg text-cyan-300">10+</span>
                    <span className="text-[11px] font-mono text-slate-400">Tech Stacks</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center">
                    <span className="block font-display font-bold text-lg text-purple-400">4+</span>
                    <span className="text-[11px] font-mono text-slate-400">Core Projects</span>
                  </div>
                </div>

                {/* Interactive Status Footer */}
                <div className="mt-4 pt-3 flex items-center justify-center gap-1.5 text-slate-400 text-xs font-mono">
                  <Code2 size={13} className="text-cyan-400" />
                  <span>Unity • React • Kotlin • C#</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
