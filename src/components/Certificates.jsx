import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  Calendar, 
  ShieldCheck, 
  X,
  FileCheck2
} from 'lucide-react';
import { certificatesData } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

export default function Certificates() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certificates" className="relative py-28 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-4">
            <Sparkles size={13} className="text-cyan-400" />
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-300">
              Credentials &amp; Milestones
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-100 tracking-tight mb-4">
            ACHIEVEMENTS &amp; <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">CERTIFICATES</span>
          </h2>

          <p className="text-slate-400 font-light max-w-xl mx-auto text-sm sm:text-base">
            Verified milestones representing dedication to continuous technical advancement.
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-6 shadow-[0_0_12px_rgba(0,240,255,0.8)]" />
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              onClick={() => {
                soundFx.playClick();
                setActiveCert(cert);
              }}
              onMouseEnter={() => soundFx.playHover()}
              className="glass-card p-6 sm:p-7 rounded-3xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Top Badge & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 group-hover:scale-110 transition-transform">
                      <Award size={20} />
                    </div>
                    <div>
                      <span className="font-mono text-[11px] text-cyan-400 uppercase tracking-wider block">
                        {cert.category}
                      </span>
                      <span className="font-mono text-xs text-slate-400 flex items-center gap-1">
                        <Calendar size={11} className="text-purple-400" />
                        {cert.date}
                      </span>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-emerald-950/70 text-emerald-300 border border-emerald-500/30">
                    {cert.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-100 group-hover:text-cyan-300 transition-colors mb-2">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="font-mono text-xs text-purple-300/90 mb-3">
                  Issued by: {cert.issuer}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed font-light mb-6">
                  {cert.description}
                </p>
              </div>

              {/* Skills covered & View button */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsCovered.map((s, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <span className="text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 shrink-0 ml-2">
                  <span>Verify</span>
                  <ExternalLink size={12} />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Certificate Modal */}
      {activeCert && (
        <div 
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveCert(null)}
        >
          <div 
            className="relative w-full max-w-xl glass-card bg-[#090e21] border border-cyan-500/40 p-6 sm:p-8 rounded-3xl shadow-[0_0_40px_rgba(0,240,255,0.25)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <FileCheck2 size={24} />
              </div>
              <div>
                <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">
                  Verified Credential
                </span>
                <h3 className="font-display font-bold text-xl text-slate-100">
                  {activeCert.title}
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 font-mono space-y-1.5">
                <div><span className="text-slate-500">ISSUER:</span> {activeCert.issuer}</div>
                <div><span className="text-slate-500">RECIPIENT:</span> Durgesh Kalel</div>
                <div><span className="text-slate-500">TIMELINE:</span> {activeCert.date}</div>
                <div><span className="text-slate-500">STATUS:</span> <span className="text-emerald-400">Authenticated Record</span></div>
              </div>

              <p className="font-light leading-relaxed">
                {activeCert.description}
              </p>

              <div>
                <span className="font-mono text-xs text-slate-400 block mb-2">Core Competencies:</span>
                <div className="flex flex-wrap gap-2">
                  {activeCert.skillsCovered.map((s, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setActiveCert(null)}
                className="px-5 py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs shadow-[0_0_15px_rgba(0,240,255,0.4)]"
              >
                Close Verification
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
