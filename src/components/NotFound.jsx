import React from 'react';
import { Home, ArrowLeft, AlertTriangle } from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function NotFound({ onReturnHome }) {
  return (
    <div className="min-h-screen bg-[#040714] text-slate-100 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="glass-card max-w-lg w-full p-8 sm:p-12 rounded-3xl border border-red-500/30 text-center relative z-10 shadow-[0_0_50px_rgba(239,68,68,0.15)]">
        
        {/* Monogram / Error Icon */}
        <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 mx-auto flex items-center justify-center mb-6">
          <AlertTriangle size={32} />
        </div>

        <span className="font-mono text-xs text-red-400 uppercase tracking-widest block mb-2">
          ERROR // 404
        </span>

        <h1 className="font-display font-black text-4xl sm:text-5xl text-slate-100 mb-4">
          COORDINATES LOST
        </h1>

        <p className="text-sm text-slate-300 font-light leading-relaxed mb-8">
          The requested sector in hyperspace could not be resolved. It may have been relocated, purged, or never existed in this dimension.
        </p>

        <button
          onClick={() => {
            soundFx.playClick();
            if (onReturnHome) onReturnHome();
            else window.location.href = '/';
          }}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:scale-105 transition-all cursor-pointer"
        >
          <Home size={16} />
          <span>Return to Safe Coordinates</span>
        </button>

      </div>
    </div>
  );
}
