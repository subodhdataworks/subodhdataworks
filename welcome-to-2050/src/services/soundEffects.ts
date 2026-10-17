/**
 * Future.AI High-Tech Web Audio Sound Engine
 * Zero external audio files required - 100% latency-free Web Audio synthesizer.
 */

class SoundEffectsService {
  private ctx: AudioContext | null = null;
  private isEnabled: boolean = true;

  constructor() {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('future_ai_sound_enabled');
      this.isEnabled = saved !== null ? saved === 'true' : true;
    }
  }

  private initCtx(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public toggleSound(): boolean {
    this.isEnabled = !this.isEnabled;
    if (typeof window !== 'undefined') {
      localStorage.setItem('future_ai_sound_enabled', String(this.isEnabled));
    }
    if (this.isEnabled) {
      this.playColorChange();
    }
    return this.isEnabled;
  }

  public getSoundEnabled(): boolean {
    return this.isEnabled;
  }

  /**
   * Subtle high-frequency hover tick (interactive feedback)
   */
  public playHover() {
    if (!this.isEnabled) return;
    try {
      const ctx = this.initCtx();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1100, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(750, ctx.currentTime + 0.035);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.035);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.035);
    } catch {
      // AudioContext policy suppression fallback
    }
  }

  /**
   * Tactile futuristic button click
   */
  public playClick() {
    if (!this.isEnabled) return;
    try {
      const ctx = this.initCtx();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(240, ctx.currentTime + 0.06);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.06);
    } catch {
      // AudioContext policy suppression fallback
    }
  }

  /**
   * Tactile organic water / milk drop liquid plop sound
   */
  public playWaterDrop() {
    if (!this.isEnabled) return;
    try {
      const ctx = this.initCtx();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      // Water droplet frequency envelope: low tap -> fast rise -> resonant bubble tone
      osc.frequency.setValueAtTime(380, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1420, ctx.currentTime + 0.035);
      osc.frequency.exponentialRampToValueAtTime(850, ctx.currentTime + 0.11);

      gain.gain.setValueAtTime(0.18, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.22, ctx.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } catch {
      // AudioContext policy suppression fallback
    }
  }

  /**
   * Melodic 3-tone harmonic chime when changing button colors / theme
   */
  public playColorChange() {
    if (!this.isEnabled) return;
    try {
      const ctx = this.initCtx();
      if (!ctx) return;

      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.045);

        gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.045);
        gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + idx * 0.045 + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.045 + 0.18);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.045);
        osc.stop(ctx.currentTime + idx * 0.045 + 0.18);
      });
    } catch {
      // AudioContext policy suppression fallback
    }
  }

  /**
   * Deep cinematic sub-bass whoosh for cinema/video triggers
   */
  public playCinema() {
    if (!this.isEnabled) return;
    try {
      const ctx = this.initCtx();
      if (!ctx) return;

      // Sub-bass sweep
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(250, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(70, ctx.currentTime + 0.5);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(140, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(45, ctx.currentTime + 0.5);

      gain.gain.setValueAtTime(0.18, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    } catch {
      // AudioContext policy suppression fallback
    }
  }

  /**
   * Uplifting success notification chime
   */
  public playSuccess() {
    if (!this.isEnabled) return;
    try {
      const ctx = this.initCtx();
      if (!ctx) return;

      const notes = [659.25, 880, 1318.51];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.07);

        gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.07);
        gain.gain.linearRampToValueAtTime(0.09, ctx.currentTime + idx * 0.07 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.07 + 0.25);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.07);
        osc.stop(ctx.currentTime + idx * 0.07 + 0.25);
      });
    } catch {
      // AudioContext policy suppression fallback
    }
  }

  /**
   * Discovery sound (legacy support)
   */
  public playDiscovery() {
    this.playColorChange();
  }

  /**
   * Breakthrough sound (legacy support)
   */
  public playBreakthrough() {
    this.playSuccess();
  }

  /**
   * Mission Complete sound (legacy support)
   */
  public playMissionComplete() {
    this.playSuccess();
  }

  /**
   * Subtle click sound (legacy support)
   */
  public playSubtleClick() {
    this.playClick();
  }

  /**
   * Error sound (legacy support)
   */
  public playError() {
    if (!this.isEnabled) return;
    try {
      const ctx = this.initCtx();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(160, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch {
      // AudioContext policy suppression fallback
    }
  }

  public playLock() {
    this.playError();
  }

  public playLevelUp() {
    this.playCelebration();
  }

  public playUnlock() {
    this.playSuccess();
  }

  /**
   * MCQ Question Wrong "Bip-Bip" error buzzer + optional voice announcement
   */
  public playQuizWrong(speakVoice: boolean = false) {
    if (!this.isEnabled) return;
    try {
      const ctx = this.initCtx();
      if (ctx) {
        // Pulse 1: "bip"
        const osc1 = ctx.createOscillator();
        const gain1 = ctx.createGain();
        osc1.type = 'sawtooth';
        osc1.frequency.setValueAtTime(150, ctx.currentTime);
        osc1.frequency.linearRampToValueAtTime(95, ctx.currentTime + 0.1);
        gain1.gain.setValueAtTime(0.16, ctx.currentTime);
        gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
        osc1.connect(gain1);
        gain1.connect(ctx.destination);
        osc1.start(ctx.currentTime);
        osc1.stop(ctx.currentTime + 0.1);

        // Pulse 2: lower buzzer
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = 'sawtooth';
        osc2.frequency.setValueAtTime(115, ctx.currentTime + 0.12);
        osc2.frequency.linearRampToValueAtTime(70, ctx.currentTime + 0.28);
        gain2.gain.setValueAtTime(0.18, ctx.currentTime + 0.12);
        gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.28);
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        osc2.start(ctx.currentTime + 0.12);
        osc2.stop(ctx.currentTime + 0.28);
      }

      if (speakVoice && typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const phrases = ['Wrong answer!', 'Incorrect answer.', 'Not quite right!'];
        const phrase = phrases[Math.floor(Math.random() * phrases.length)];
        const utterance = new SpeechSynthesisUtterance(phrase);
        utterance.rate = 1.05;
        utterance.pitch = 0.95;
        const voices = window.speechSynthesis.getVoices();
        const voice = voices.find(v => v.lang.startsWith('en')) || voices[0];
        if (voice) utterance.voice = voice;
        window.speechSynthesis.speak(utterance);
      }
    } catch {
      // AudioContext fallback
    }
  }

  /**
   * MCQ Question Correct celebration chime
   */
  public playQuizCorrect() {
    if (!this.isEnabled) return;
    try {
      const ctx = this.initCtx();
      if (!ctx) return;

      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.05);

        gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.05);
        gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + idx * 0.05 + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.05 + 0.28);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.05);
        osc.stop(ctx.currentTime + idx * 0.05 + 0.28);
      });
    } catch {
      // AudioContext fallback
    }
  }

  /**
   * Randomized celebratory chime + spoken praise: "Good job!", "Nice!", "Excellent!", "Awesome!"
   */
  public playRandomQuizPraise() {
    if (!this.isEnabled) return;
    try {
      const ctx = this.initCtx();
      if (ctx) {
        // Diverse musical chime sets
        const chordSets = [
          [523.25, 659.25, 783.99, 1046.50], // C major arpeggio
          [587.33, 739.99, 880.00, 1174.66], // D major bright
          [659.25, 830.61, 987.77, 1318.51], // E major sparkle
          [698.46, 880.00, 1046.50, 1396.91] // F major triumphant
        ];
        const randomChord = chordSets[Math.floor(Math.random() * chordSets.length)];
        randomChord.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.045);
          gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.045);
          gain.gain.linearRampToValueAtTime(0.14, ctx.currentTime + idx * 0.045 + 0.015);
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.045 + 0.32);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime + idx * 0.045);
          osc.stop(ctx.currentTime + idx * 0.045 + 0.32);
        });
      }

      // Randomized speech praise
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const praiseList = [
          'Good job!',
          'Nice!',
          'Excellent!',
          'Awesome!',
          'Brilliant!',
          'Superb!',
          'You nailed it!',
          'Outstanding!',
          'Fantastic!'
        ];
        const chosen = praiseList[Math.floor(Math.random() * praiseList.length)];
        const utterance = new SpeechSynthesisUtterance(chosen);
        utterance.rate = 1.05 + Math.random() * 0.15;
        utterance.pitch = 1.15 + Math.random() * 0.25;
        utterance.volume = 1;
        const voices = window.speechSynthesis.getVoices();
        const englishVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Female') || v.name.includes('Natural') || v.name.includes('Google'))) || voices.find(v => v.lang.startsWith('en')) || voices[0];
        if (englishVoice) utterance.voice = englishVoice;
        window.speechSynthesis.speak(utterance);
      }
    } catch {
      // AudioContext fallback
    }
  }

  /**
   * Grand celebration victory fanfare
   */
  public playCelebration() {
    if (!this.isEnabled) return;
    try {
      const ctx = this.initCtx();
      if (!ctx) return;

      const fanfare = [
        { f: 523.25, t: 0, d: 0.1 },      // C5
        { f: 659.25, t: 0.1, d: 0.1 },    // E5
        { f: 783.99, t: 0.2, d: 0.12 },   // G5
        { f: 1046.50, t: 0.32, d: 0.35 }, // C6
        { f: 1318.51, t: 0.45, d: 0.4 }   // E6
      ];

      fanfare.forEach(item => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(item.f, ctx.currentTime + item.t);
        gain.gain.setValueAtTime(0.14, ctx.currentTime + item.t);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + item.t + item.d);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + item.t);
        osc.stop(ctx.currentTime + item.t + item.d);
      });
    } catch {
      // AudioContext fallback
    }
  }

  /**
   * Sci-fi Robot leap / jump sound
   */
  public playRobotJump() {
    if (!this.isEnabled) return;
    try {
      const ctx = this.initCtx();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.16);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.16);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.16);
    } catch {
      // AudioContext fallback
    }
  }

  /**
   * Sparkling crystal collect harmonic chime
   */
  public playCrystalCollect() {
    if (!this.isEnabled) return;
    try {
      const ctx = this.initCtx();
      if (!ctx) return;
      const notes = [880, 1174.66, 1760, 2093];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.04);
        gain.gain.setValueAtTime(0.12, ctx.currentTime + idx * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.04 + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.04);
        osc.stop(ctx.currentTime + idx * 0.04 + 0.25);
      });
    } catch {
      // AudioContext fallback
    }
  }

  /**
   * Futuristic bridge energy beam hum
   */
  public playLaserBeam() {
    if (!this.isEnabled) return;
    try {
      const ctx = this.initCtx();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(640, ctx.currentTime + 0.18);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.22);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.22);
    } catch {
      // AudioContext fallback
    }
  }

  /**
   * High-tech terminal code execution chirp
   */
  public playCodeRun() {
    if (!this.isEnabled) return;
    try {
      const ctx = this.initCtx();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(540, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1250, ctx.currentTime + 0.09);
      gain.gain.setValueAtTime(0.09, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.09);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.09);
    } catch {
      // AudioContext fallback
    }
  }

  /**
   * Sci-fi laser disintegrator zap for 50:50 Lifeline option elimination
   */
  public playZapLifeline() {
    if (!this.isEnabled) return;
    try {
      const ctx = this.initCtx();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(1400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.18);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.18);
    } catch {
      // AudioContext fallback
    }
  }

  /**
   * Shimmering magical clue chime for AI Hint reveal
   */
  public playHintChime() {
    if (!this.isEnabled) return;
    try {
      const ctx = this.initCtx();
      if (!ctx) return;
      const freqs = [784, 987.77, 1174.66, 1567.98]; // G5, B5, D6, G6
      freqs.forEach((f, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, ctx.currentTime + i * 0.05);
        gain.gain.setValueAtTime(0, ctx.currentTime + i * 0.05);
        gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + i * 0.05 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * 0.05 + 0.22);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.05);
        osc.stop(ctx.currentTime + i * 0.05 + 0.22);
      });
    } catch {
      // AudioContext fallback
    }
  }

  /**
   * Escalating combo streak fanfare
   */
  public playStreakBonus(streakCount: number) {
    if (!this.isEnabled) return;
    try {
      const ctx = this.initCtx();
      if (!ctx) return;
      const baseFreq = Math.min(1200, 440 + streakCount * 90);
      const chord = [baseFreq, baseFreq * 1.25, baseFreq * 1.5, baseFreq * 2];
      chord.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.04);
        gain.gain.setValueAtTime(0.14, ctx.currentTime + idx * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.04 + 0.24);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.04);
        osc.stop(ctx.currentTime + idx * 0.04 + 0.24);
      });
    } catch {
      // AudioContext fallback
    }
  }

  /**
   * Subtle high-precision clock tick
   */
  public playTimerTick() {
    if (!this.isEnabled) return;
    try {
      const ctx = this.initCtx();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1600, ctx.currentTime);
      gain.gain.setValueAtTime(0.03, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.02);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.02);
    } catch {
      // AudioContext fallback
    }
  }

  /**
   * Low urgency warning pulse when timer < 5s
   */
  public playTimerHurry() {
    if (!this.isEnabled) return;
    try {
      const ctx = this.initCtx();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(260, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(180, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch {
      // AudioContext fallback
    }
  }

  /**
   * Slick UI card slide / page flip swoosh
   */
  public playCardFlip() {
    if (!this.isEnabled) return;
    try {
      const ctx = this.initCtx();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(420, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(780, ctx.currentTime + 0.07);
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.07);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.07);
    } catch {
      // AudioContext fallback
    }
  }

  /**
   * Magnetic tactile code block snap chime
   */
  public playBlockSnap() {
    if (!this.isEnabled) return;
    try {
      const ctx = this.initCtx();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.05); // A5
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.09);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.09);
    } catch {}
  }

  /**
   * Bright metallic coin collection chime (+50 Coins)
   */
  public playCoinCollect() {
    if (!this.isEnabled) return;
    try {
      const ctx = this.initCtx();
      if (!ctx) return;
      const tones = [987.77, 1318.51]; // B5, E6
      tones.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.06);
        gain.gain.setValueAtTime(0.14, ctx.currentTime + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.06 + 0.16);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.06);
        osc.stop(ctx.currentTime + idx * 0.06 + 0.16);
      });
    } catch {}
  }

  /**
   * Boss Fight: Plasma laser strike & shield damage impact
   */
  public playBossHit() {
    if (!this.isEnabled) return;
    try {
      const ctx = this.initCtx();
      if (!ctx) return;
      // Laser discharge + low frequency explosion
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(850, ctx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 0.2);
      gain1.gain.setValueAtTime(0.2, ctx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start();
      osc1.stop(ctx.currentTime + 0.2);

      // Low bass rumble
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(130, ctx.currentTime + 0.05);
      osc2.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.35);
      gain2.gain.setValueAtTime(0.25, ctx.currentTime + 0.05);
      gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(ctx.currentTime + 0.05);
      osc2.stop(ctx.currentTime + 0.35);
    } catch {}
  }

  /**
   * Terminal code execution matrix scan sweep
   */
  public playTerminalRun() {
    if (!this.isEnabled) return;
    try {
      const ctx = this.initCtx();
      if (!ctx) return;
      const notes = [440, 554.37, 659.25, 880];
      notes.forEach((f, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, ctx.currentTime + i * 0.035);
        gain.gain.setValueAtTime(0.08, ctx.currentTime + i * 0.035);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.035 + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.035);
        osc.stop(ctx.currentTime + i * 0.035 + 0.08);
      });
    } catch {}
  }

  /**
   * Wrong buzzer / error tone
   */
  public playWrongTone() {
    this.playQuizWrong();
  }

  /**
   * Toggle mute (legacy support)
   */
  public toggleMute(): boolean {
    return this.toggleSound();
  }
}

export const soundEffects = new SoundEffectsService();
export const SoundEffects = soundEffects;

