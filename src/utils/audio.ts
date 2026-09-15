// Web Audio API ambient traditional ceremonial music synthesizer
// Plays a serene, authentic modal wedding melody reminiscent of Sri Lankan ceremonial flute and bells

class WeddingAudioPlayer {
  private ctx: AudioContext | null = null;
  private isPlayingState: boolean = false;
  private timerId: number | null = null;
  private masterGain: GainNode | null = null;
  private listeners: ((playing: boolean) => void)[] = [];

  public subscribe(fn: (playing: boolean) => void) {
    this.listeners.push(fn);
    return () => {
      this.listeners = this.listeners.filter(l => l !== fn);
    };
  }

  private notify() {
    this.listeners.forEach(fn => fn(this.isPlayingState));
  }

  public isPlaying(): boolean {
    return this.isPlayingState;
  }

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Plays a melodic bell/flute note with soft exponential decay
  private playNote(freq: number, duration: number, type: OscillatorType = 'sine', detune: number = 0) {
    if (!this.ctx || !this.masterGain) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);
      osc.detune.setValueAtTime(detune, now);

      // Flute-like attack & soft bell release
      noteGain.gain.setValueAtTime(0.0001, now);
      noteGain.gain.exponentialRampToValueAtTime(0.25, now + 0.12);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(noteGain);
      noteGain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + duration);
    } catch {
      // safe fallback
    }
  }

  // Auspicious Poruwa ceremonial melodic sequence
  private playMelodyStep(step: number) {
    if (!this.isPlayingState || !this.ctx) return;

    // Auspicious pentatonic raga notes (Hz): C4, D4, E4, G4, A4, C5, D5
    const notes = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33];
    const melody = [
      { n: 0, d: 2.2, type: 'sine' as OscillatorType },
      { n: 2, d: 1.8, type: 'sine' as OscillatorType },
      { n: 3, d: 2.0, type: 'sine' as OscillatorType },
      { n: 4, d: 2.5, type: 'triangle' as OscillatorType },
      { n: 5, d: 3.0, type: 'sine' as OscillatorType },
      { n: 4, d: 1.8, type: 'sine' as OscillatorType },
      { n: 3, d: 2.0, type: 'triangle' as OscillatorType },
      { n: 2, d: 2.4, type: 'sine' as OscillatorType },
      { n: 1, d: 1.8, type: 'sine' as OscillatorType },
      { n: 0, d: 3.2, type: 'sine' as OscillatorType },
    ];

    const current = melody[step % melody.length];
    const baseFreq = notes[current.n];

    // Primary note
    this.playNote(baseFreq, current.d, current.type);
    // Soft octave overtone for traditional flute shimmer
    this.playNote(baseFreq * 2, current.d * 0.8, 'sine', 4);

    // Schedule next note
    const nextInterval = (current.d * 750) + 150;
    this.timerId = window.setTimeout(() => {
      this.playMelodyStep(step + 1);
    }, nextInterval);
  }

  public start() {
    this.initContext();
    if (this.isPlayingState) return;

    this.isPlayingState = true;
    this.notify();
    this.playMelodyStep(0);
  }

  public pause() {
    this.isPlayingState = false;
    if (this.timerId !== null) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    this.notify();
  }

  public toggle() {
    if (this.isPlayingState) {
      this.pause();
    } else {
      this.start();
    }
  }
}

export const weddingAudio = new WeddingAudioPlayer();
