// Synthesized cyber audio feedback using HTML5 Web Audio API
// No external MP3 files required - zero latency, zero 404s, fully responsive!

class SoundEngine {
  constructor() {
    this.audioCtx = null;
    this.enabled = false;
  }

  init() {
    if (!this.audioCtx && typeof window !== 'undefined') {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  toggle() {
    this.init();
    this.enabled = !this.enabled;
    if (this.enabled) {
      this.playBeep(600, 0.08, 'sine', 0.05);
    }
    return this.enabled;
  }

  playHover() {
    if (!this.enabled) return;
    this.init();
    this.playBeep(440, 0.03, 'sine', 0.015);
  }

  playClick() {
    if (!this.enabled) return;
    this.init();
    this.playBeep(880, 0.05, 'triangle', 0.04);
  }

  playSuccess() {
    if (!this.enabled) return;
    this.init();
    // Cyber chime: ascending arpeggio
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playBeep(freq, 0.12, 'sine', 0.04);
      }, idx * 60);
    });
  }

  playBeep(freq, duration, type = 'sine', gainVal = 0.03) {
    try {
      if (!this.audioCtx) return;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      
      gain.gain.setValueAtTime(gainVal, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);
      
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      
      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch {
      // Audio autoplay policy or failure ignored safely
    }
  }
}

export const soundFx = new SoundEngine();
