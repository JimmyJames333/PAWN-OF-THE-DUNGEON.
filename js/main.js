// js/main.js
const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  backgroundColor: '#000000',
  physics: {
    default: 'arcade',
    arcade: { gravity: { y: 0 }, debug: false }
  },
  scene: [BootScene, GameScene, UIScene]
};

new Phaser.Game(config);
