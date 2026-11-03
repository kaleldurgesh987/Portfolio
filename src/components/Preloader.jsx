import React, { useEffect, useState } from 'react';
import { soundFx } from '../utils/audio';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING NEURAL INTERFACE...");
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const statuses = [
      { at: 20, text: "CALIBRATING 3D PARTICLE MATRIX..." },
      { at: 50, text: "LOADING PROJECT REPOSITORIES & ASSETS..." },
      { at: 80, text: "ESTABLISHING SECURE PROTOCOLS..." },
      { at: 98, text: "SYSTEM READY. WELCOME TO DURGESH'S UNIVERSE." }
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          soundFx.playSuccess();
          setTimeout(() => {
            setIsFading(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 600);
          }, 300);
          return 100;
        }

        const step = Math.floor(Math.random() * 8) + 3;
        const next = Math.min(prev + step, 100);

        const found = statuses.slice().reverse().find(s => next >= s.at);
        if (found) {
          setStatusText(found.text);
        }

        return next;
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[99999] bg-[#040714] flex flex-col items-center justify-center transition-all duration-700 select-none ${
        isFading ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Background Radial Glow */}
      <div className="absolute w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none animate-glow-pulse" />
      <div className="absolute w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -bottom-10" />

      {/* Cyber Hexagon Monogram Container */}
      <div className="relative mb-8">
        <div className="w-24 h-24 rounded-2xl p-1 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 animate-spin-slow">
          <div className="w-full h-full bg-[#040714] rounded-xl flex items-center justify-center">
          </div>
        </div>

        {/* Static Inner DK Monogram */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display font-black text-3xl tracking-widest bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent glow-text-cyan">
            DK
          </span>
        </div>
      </div>

      {/* Heading */}
      <h2 className="font-display font-bold text-xl md:text-2xl text-slate-100 tracking-wider mb-2">
        DURGESH KALEL
      </h2>
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400 mb-8">
        Creative Developer // Maharashtra, India
      </p>

      {/* Futuristic Progress Bar */}
      <div className="w-64 md:w-80 h-2 bg-slate-900 border border-slate-800 rounded-full overflow-hidden p-0.5 relative shadow-inner">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full transition-all duration-150 ease-out shadow-[0_0_15px_rgba(0,240,255,0.8)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage and Cyber Status */}
      <div className="w-64 md:w-80 mt-3 flex items-center justify-between font-mono text-xs text-slate-400">
        <span className="text-cyan-400 animate-pulse text-[11px] truncate pr-2">
          {statusText}
        </span>
        <span className="font-bold text-slate-200">
          {progress}%
        </span>
      </div>
    </div>
  );
}
