import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Github, 
  Linkedin, 
  Instagram, 
  Sparkles, 
  Copy, 
  Check, 
  Clock 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { submitContactMessage } from '../firebase/firebaseConfig';
import { soundFx } from '../utils/audio';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socialLinks.email);
    setCopied(true);
    soundFx.playClick();
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    soundFx.playClick();

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ loading: false, success: false, error: 'Please fill in all required fields.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ loading: false, success: false, error: 'Please provide a valid email address.' });
      return;
    }

    setStatus({ loading: true, error: null, success: false });

    try {
      const result = await submitContactMessage(formData);
      
      if (result.success) {
        setStatus({ loading: false, success: true, error: null });
        soundFx.playSuccess();
        
        // Trigger celebratory confetti
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00F0FF', '#3B82F6', '#A855F7', '#EC4899']
        });

        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ loading: false, success: false, error: result.error || 'Failed to submit. Please try again.' });
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: 'Network error. Please try again.' });
    }
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden bg-slate-950/40">
      {/* Background Cyber Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-purple-600/10 to-blue-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-4">
            <Sparkles size={13} className="text-cyan-400" />
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-300">
              Initiate Transmission
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-slate-100 tracking-tight mb-4">
            LET'S BUILD <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">SOMETHING AMAZING.</span>
          </h2>

          <p className="text-slate-400 font-light max-w-xl mx-auto text-sm sm:text-base">
            Have a project in mind, a freelance inquiry, or want to discuss creative tech? Drop a message below.
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-6 shadow-[0_0_12px_rgba(0,240,255,0.8)]" />
        </div>

        {/* 2-Column Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info & Social Connections (Col 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick Email Card */}
            <div className="glass-card p-6 sm:p-7 rounded-3xl border border-slate-800 hover:border-cyan-500/40 transition-all">
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider block mb-2">
                DIRECT INBOX
              </span>
              <div className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-slate-900/90 border border-slate-800">
                <div className="flex items-center gap-2.5 truncate">
                  <Mail size={18} className="text-cyan-400 shrink-0" />
                  <span className="font-mono text-xs sm:text-sm text-slate-200 truncate">
                    {personalInfo.socialLinks.email}
                  </span>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>
              <p className="text-[11px] font-mono text-slate-400 mt-2 flex items-center gap-1.5">
                <Clock size={12} className="text-purple-400" />
                <span>Typical response within 24 hours</span>
              </p>
            </div>

            {/* Location & Status Card */}
            <div className="glass-card p-6 sm:p-7 rounded-3xl border border-slate-800">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-slate-100">
                    Location &amp; Operations
                  </h4>
                  <p className="text-xs text-slate-300 font-mono mt-0.5">
                    {personalInfo.location}
                  </p>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed font-light">
                    Available for remote global collaboration, hybrid roles, and tech events across India.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>{personalInfo.availabilityStatus}</span>
              </div>
            </div>

            {/* Social Grid */}
            <div className="glass-card p-6 rounded-3xl border border-slate-800">
              <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block mb-4">
                FIND ME ACROSS CYBERSPACE
              </span>
              <div className="grid grid-cols-2 gap-3">
                {/* GitHub */}
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => soundFx.playHover()}
                  className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-800/60 transition-all flex items-center gap-3 text-slate-300 hover:text-cyan-300"
                >
                  <Github size={18} />
                  <span className="font-display font-medium text-xs">GitHub</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => soundFx.playHover()}
                  className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-800/60 transition-all flex items-center gap-3 text-slate-300 hover:text-cyan-300"
                >
                  <Linkedin size={18} />
                  <span className="font-display font-medium text-xs">LinkedIn</span>
                </a>

                {/* Instagram */}
                <a
                  href={personalInfo.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => soundFx.playHover()}
                  className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 hover:bg-slate-800/60 transition-all flex items-center gap-3 text-slate-300 hover:text-purple-300"
                >
                  <Instagram size={18} />
                  <span className="font-display font-medium text-xs">Instagram</span>
                </a>

                {/* Email Direct */}
                <a
                  href={`mailto:${personalInfo.socialLinks.email}`}
                  onMouseEnter={() => soundFx.playHover()}
                  className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-800/60 transition-all flex items-center gap-3 text-slate-300 hover:text-cyan-300"
                >
                  <Mail size={18} />
                  <span className="font-display font-medium text-xs">Email</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form (Col 7) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-cyan-500/30 backdrop-blur-2xl relative shadow-[0_0_40px_rgba(0,240,255,0.1)]">
              
              <h3 className="font-display font-bold text-2xl text-slate-100 mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 font-mono mb-8">
                SECURE ENDPOINT // VALIDATED INPUT
              </p>

              {/* Status Banner */}
              {status.success && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm flex items-center gap-3 animate-fadeIn">
                  <CheckCircle2 size={20} className="shrink-0 text-emerald-400" />
                  <span>Message delivered successfully! Thank you, Durgesh will get back to you shortly.</span>
                </div>
              )}

              {status.error && (
                <div className="mb-6 p-4 rounded-2xl bg-red-950/70 border border-red-500/40 text-red-300 text-xs sm:text-sm animate-fadeIn">
                  {status.error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-slate-100 placeholder:text-slate-600 transition-colors outline-none font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@domain.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-slate-100 placeholder:text-slate-600 transition-colors outline-none font-sans"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity / Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-slate-100 placeholder:text-slate-600 transition-colors outline-none font-sans"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Your Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your idea, requirements, timeline, or just say hello..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-slate-100 placeholder:text-slate-600 transition-colors outline-none resize-none font-sans"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.loading}
                  onMouseEnter={() => soundFx.playHover()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 hover:from-cyan-300 hover:to-purple-400 transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.65)] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status.loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Payload...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
