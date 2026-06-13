class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  preload() {
    this.load.image('logo', 'assets/sprites/logo.png');
  }

  create() {
    const { width, height } = this.scale;
    this.add.text(width / 2, height / 2, 'Loading...', {
      fontSize: '32px',
      color: '#ffffff'
    }).setOrigin(0.5);

    this.time.delayedCall(1000, () => {
      console.log('BootScene finished loading, switching to GameScene...');
      this.scene.start('GameScene');
    });
  }
}
