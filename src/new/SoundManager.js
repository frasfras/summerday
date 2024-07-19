// SoundManager.js

class SoundManager {
  constructor() {
    this.sounds = {
      click: new Audio("/sounds/click.mp3"),
      complete: new Audio("/sounds/complete.mp3"),
      gameOver: new Audio("/sounds/game_over.mp3"),
    };
    this.muted = false;
  }

  play(soundName) {
    if (!this.muted && this.sounds[soundName]) {
      this.sounds[soundName].currentTime = 0; // Reset the audio to the start
      this.sounds[soundName].play();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    return this.muted;
  }
}

export default new SoundManager();
