import React, { useState } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Preloader from './components/Preloader';
import ThreeBackground from './components/ThreeBackground';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import NotFound from './components/NotFound';
import './App.css';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [is404, setIs404] = useState(false);

  // Allow testing 404 via ?error=404 or hash
  if (is404) {
    return <NotFound onReturnHome={() => setIs404(false)} />;
  }

  return (
    <ThemeProvider>
      <div className="relative min-h-screen text-slate-100 selection:bg-purple-500/30 selection:text-cyan-300">
        
        {/* Animated Initializing Loading Screen */}
        {loading && <Preloader onComplete={() => setLoading(false)} />}

        {/* Custom Glowing Cyber Cursor */}
        <CustomCursor />

        {/* Interactive 3D Three.js Galaxy Particle Background */}
        <ThreeBackground />

        {/* Fixed Glass Navbar with Progress Bar */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <About />
          <Skills />
          <Projects />
          <Journey />
          <Certificates />
          <Contact />
        </main>

        {/* Futuristic Footer */}
        <Footer />

        {/* Interactive Resume CV Modal */}
        {isResumeOpen && (
          <ResumeModal onClose={() => setIsResumeOpen(false)} />
        )}

      </div>
    </ThemeProvider>
  );
}
