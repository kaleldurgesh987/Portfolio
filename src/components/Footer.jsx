import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart, Github, Linkedin, Instagram, Mail, Sparkles, Clock, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

export default function Footer() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('');

  // Live IST Clock (Maharashtra, India)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format in Indian Standard Time
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTime(new Intl.DateTimeFormat('en-IN', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll percentage for back-to-top ring
  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        setScrollProgress((window.scrollY / total) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Journey', href: '#journey' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#02040b] border-t border-slate-900 pt-16 pb-12 overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Monogram (Col 5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-600 to-purple-600 p-[1.5px]">
                <div className="w-full h-full bg-[#040714] rounded-[10px] flex items-center justify-center">
                  <span className="font-display font-black text-lg bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                    DK
                  </span>
                </div>
              </div>
              <span className="font-display font-bold text-xl text-slate-100 tracking-wide">
                DURGESH KALEL
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 font-light max-w-sm leading-relaxed">
              Creative Developer, Programmer &amp; Tech Enthusiast based in Maharashtra, India. Turning creative ideas into digital experiences.
            </p>

            {/* Live IST Clock */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 font-mono text-xs text-slate-300">
              <Clock size={13} className="text-cyan-400" />
              <span>Maharashtra (IST):</span>
              <span className="text-cyan-300 font-bold">{currentTime || '11:30 AM'}</span>
            </div>
          </div>

          {/* Quick Links (Col 4) */}
          <div className="md:col-span-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-slate-300 mb-4">
              Navigation Index
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onMouseEnter={() => soundFx.playHover()}
                  className="text-slate-400 hover:text-cyan-400 transition-colors py-1 flex items-center gap-1.5"
                >
                  <span className="text-purple-400 font-mono">&gt;</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links & Back to Top (Col 3) */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div>
              <h4 className="font-display font-bold text-xs uppercase tracking-widest text-slate-300 mb-4 md:text-right">
                Connect
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:scale-110"
                  title="GitHub"
                >
                  <Github size={16} />
                </a>
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:scale-110"
                  title="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href={personalInfo.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-purple-400 hover:border-purple-500/40 transition-all hover:scale-110"
                  title="Instagram"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href={`mailto:${personalInfo.socialLinks.email}`}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:scale-110"
                  title="Email"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>

            {/* Back to top with circular progress */}
            <div className="mt-6 md:mt-0 flex items-center gap-3">
              <span className="text-xs font-mono text-slate-400">Back to Top</span>
              <button
                onClick={scrollToTop}
                className="relative w-11 h-11 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 hover:text-white transition-all hover:scale-110 shadow-lg group cursor-pointer"
                title="Scroll back to top"
              >
                {/* SVG Progress Ring */}
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle
                    cx="22"
                    cy="22"
                    r="19"
                    className="text-slate-800"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="transparent"
                  />
                  <circle
                    cx="22"
                    cy="22"
                    r="19"
                    className="text-cyan-400 transition-all duration-150"
                    strokeWidth="2"
                    strokeDasharray={119.38}
                    strokeDashoffset={119.38 - (119.38 * scrollProgress) / 100}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                  />
                </svg>
                <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Copyright & Tech Stack Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} Durgesh Kalel. All digital rights reserved.
          </div>

          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Built with React, Vite, Three.js &amp; Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
