import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Volume2, VolumeX, FileText, Sparkles } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { soundFx } from '../utils/audio';

export default function Navbar({ onOpenResume }) {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Journey', href: '#journey', id: 'journey' },
    { label: 'Certificates', href: '#certificates', id: 'certificates' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 1. Scrolled state
      setIsScrolled(window.scrollY > 20);

      // 2. Reading progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // 3. Active section detector
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec.offsetTop <= scrollPos) {
          setActiveSection(sec.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const newState = soundFx.toggle();
    setSoundEnabled(newState);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    soundFx.playClick();
    setMobileMenuOpen(false);

    const targetEl = document.querySelector(href);
    if (targetEl) {
      const topOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 z-[100] transition-all duration-100 ease-out shadow-[0_0_12px_rgba(0,240,255,0.8)]"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Main Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-panel py-3.5 shadow-2xl backdrop-blur-xl border-b border-cyan-500/10'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo DK. */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            onMouseEnter={() => soundFx.playHover()}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-600 to-purple-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-[#040714] rounded-[10px] flex items-center justify-center">
                <span className="font-display font-black text-lg bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent group-hover:glow-text-cyan">
                  DK
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-wider text-slate-100 group-hover:text-cyan-400 transition-colors">
                DURGESH<span className="text-cyan-400">.</span>
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400 -mt-1">
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/40 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-cyan-300 font-semibold shadow-[0_0_12px_rgba(0,240,255,0.25)]'
                      : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 -z-10" />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & Controls */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={handleAudioToggle}
              title={soundEnabled ? "Mute audio effects" : "Enable cyber audio effects"}
              className={`p-2 rounded-xl transition-all border ${
                soundEnabled
                  ? 'border-cyan-400/60 bg-cyan-500/10 text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                  : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>

            {/* Dark / Light Toggle */}
            <button
              onClick={() => {
                soundFx.playClick();
                toggleTheme();
              }}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Resume Button */}
            <button
              onClick={() => {
                soundFx.playClick();
                if (onOpenResume) onOpenResume();
              }}
              className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl text-slate-100 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 shadow-md shadow-purple-900/20 hover:shadow-cyan-500/20 hover:scale-[1.02]"
            >
              <FileText size={14} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => {
                soundFx.playClick();
                toggleTheme();
              }}
              className="p-2 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-cyan-400"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-xl border border-cyan-500/30 bg-slate-900/70 text-cyan-400 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-[#040714]/95 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 transition-all duration-300 animate-fadeIn">
          {/* Mobile Nav Links */}
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2 px-3">
              Navigation Menu
            </span>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30 font-semibold'
                      : 'text-slate-300 hover:bg-slate-800/50 hover:text-slate-100'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <Sparkles size={16} className="text-cyan-400" />}
                </a>
              );
            })}
          </div>

          {/* Bottom Actions in Drawer */}
          <div className="pt-6 border-t border-slate-800 flex flex-col gap-3">
            <div className="flex items-center justify-between px-2">
              <span className="text-xs text-slate-400">Audio Cyber FX</span>
              <button
                onClick={handleAudioToggle}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono border ${
                  soundEnabled
                    ? 'border-cyan-400 bg-cyan-500/10 text-cyan-300'
                    : 'border-slate-800 bg-slate-900 text-slate-400'
                }`}
              >
                {soundEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
                <span>{soundEnabled ? 'Enabled' : 'Muted'}</span>
              </button>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                soundFx.playClick();
                if (onOpenResume) onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-900/30"
            >
              <FileText size={16} />
              <span>View &amp; Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
