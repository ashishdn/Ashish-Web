/**
 * Developer-Friendly "Peace of Mind" Sound Engine
 * Generates an ultra-calming, lo-fi zen ambient drone (432Hz focus harmonics)
 * and soft, mechanical-keyboard style tactile micro-sounds.
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.isPlaying = false;
    this.volume = 0.7; // Clear, comfortable ambient level
    this.masterGain = null;
    this.ambientGain = null;
    this.sfxGain = null;
    this.oscillators = [];
    this.ambientInterval = null;
    this.analyser = null;
    this.listeners = new Set();
    this.hasInteracted = false;
  }

  init() {
    if (this.ctx) return;
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      this.ctx = new AudioContextClass();

      // Master output bus
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime);

      // Ambient bus
      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.setValueAtTime(0.7, this.ctx.currentTime);
      this.ambientGain.connect(this.masterGain);

      // Soft tactical SFX bus
      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      this.sfxGain.connect(this.masterGain);

      // Audio frequency analyser
      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 64;
      this.masterGain.connect(this.analyser);
      this.analyser.connect(this.ctx.destination);
    } catch {
      // Audio not supported
    }
  }

  subscribe(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  notify() {
    const state = {
      isPlaying: this.isPlaying,
      isMuted: this.isMuted,
      volume: this.volume,
      hasInteracted: this.hasInteracted
    };
    this.listeners.forEach((fn) => fn(state));
  }

  async resumeContext() {
    if (!this.ctx) this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      await this.ctx.resume();
    }
  }

  startAmbient() {
    this.init();
    if (!this.ctx) return;
    this.resumeContext();

    if (this.isPlaying) return;
    this.isPlaying = true;
    this.hasInteracted = true;

    // Peaceful 432Hz-tuned ambient chords (Deep focus, calm, zero fatigue)
    // D2 (72Hz), A2 (108Hz), D3 (144Hz), F#3 (180Hz), A3 (216Hz)
    const baseFreqs = [72.0, 108.0, 144.0, 180.0, 216.0];

    this.oscillators = baseFreqs.map((freq, index) => {
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const panner = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : null;
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Micro-detune for warm analog organic feeling
      osc.detune.setValueAtTime((index - 2) * 3, this.ctx.currentTime);

      // Very warm low-pass filter to prevent harsh high frequencies
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(260 + index * 60, this.ctx.currentTime);
      filter.Q.setValueAtTime(1.0, this.ctx.currentTime);

      // Smooth slow breathing gain
      const baseAmp = 0.1 / (index + 1);
      gain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(baseAmp, this.ctx.currentTime + 3.5);

      if (panner) {
        panner.pan.setValueAtTime((index % 2 === 0 ? -0.3 : 0.3), this.ctx.currentTime);
        osc.connect(filter);
        filter.connect(gain);
        gain.connect(panner);
        panner.connect(this.ambientGain);
      } else {
        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ambientGain);
      }

      osc.start();
      return { osc, gain, filter };
    });

    // Gentle zen harmonic bell every 12 seconds
    this.ambientInterval = setInterval(() => {
      if (!this.isPlaying || !this.ctx || this.isMuted) return;
      this.playPeaceBell();
    }, 12000);

    this.notify();
  }

  playPeaceBell() {
    if (!this.ctx || this.isMuted) return;
    try {
      const notes = [288, 360, 432, 540]; // Peaceful harmonic pentatonic
      const note = notes[Math.floor(Math.random() * notes.length)];

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(note, this.ctx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(600, this.ctx.currentTime);

      const now = this.ctx.currentTime;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(0.022, now + 0.8);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 5.0);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ambientGain);

      osc.start(now);
      osc.stop(now + 5.1);
    } catch {}
  }

  stopAmbient() {
    if (!this.isPlaying) return;
    this.isPlaying = false;
    if (this.ambientInterval) {
      clearInterval(this.ambientInterval);
      this.ambientInterval = null;
    }

    if (this.oscillators.length && this.ctx) {
      const now = this.ctx.currentTime;
      this.oscillators.forEach(({ osc, gain }) => {
        try {
          gain.gain.linearRampToValueAtTime(0.0001, now + 1.2);
          setTimeout(() => {
            try { osc.stop(); } catch {}
          }, 1300);
        } catch {
          try { osc.stop(); } catch {}
        }
      });
      this.oscillators = [];
    }

    this.notify();
  }

  togglePlay() {
    if (this.isPlaying) {
      this.stopAmbient();
    } else {
      this.startAmbient();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, now);
    }
    this.notify();
  }

  setVolume(newVal) {
    this.volume = Math.max(0, Math.min(1, newVal));
    if (this.masterGain && this.ctx && !this.isMuted) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
    this.notify();
  }

  // Developer-Friendly Mechanical Lubed Switch Click (Smooth, Thocky, Relaxing)
  playClick() {
    if (this.isMuted || !this.ctx) return;
    try {
      this.resumeContext();
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.035);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, now);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(now);
      osc.stop(now + 0.04);
    } catch {}
  }

  // Soft Velvet Hover Tick (gentle, unobtrusive)
  playHover() {
    if (this.isMuted || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(240, now);

      gain.gain.setValueAtTime(0.012, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.02);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(now);
      osc.stop(now + 0.025);
    } catch {}
  }

  // Soothing Navigation Open Tone
  playNav() {
    if (this.isMuted || !this.ctx) return;
    try {
      this.resumeContext();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(216, now);
      osc.frequency.linearRampToValueAtTime(432, now + 0.1);

      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(now);
      osc.stop(now + 0.15);
    } catch {}
  }

  // Peaceful Zen Chime on Success
  playSuccess() {
    if (this.isMuted || !this.ctx) return;
    try {
      this.resumeContext();
      const notes = [288, 360, 432]; // D4, F#4, A4 calming triad
      const now = this.ctx.currentTime;

      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = now + idx * 0.06;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.025, startTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.4);

        osc.connect(gain);
        gain.connect(this.sfxGain);

        osc.start(startTime);
        osc.stop(startTime + 0.45);
      });
    } catch {}
  }
}

export const soundManager = new SoundEngine();
