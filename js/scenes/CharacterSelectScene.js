class CharacterSelectScene extends Phaser.Scene {
  constructor() {
    super('CharacterSelectScene');
  }

  create() {
    const { width, height } = this.scale;

    this.add.text(width / 2, 100, 'Choose Your Character', {
      fontSize: '40px',
      color: '#ffffff'
    }).setOrigin(0.5);

    const characters = [
      { name: 'Warrior', color: '#ff4444' },
      { name: 'Mage', color: '#44aaff' },
      { name: 'Rogue', color: '#44ff44' }
    ];

    characters.forEach((char, i) => {
      const y = 250 + i * 100;
      const text = this.add.text(width / 2, y, char.name, {
        fontSize: '32px',
        color: char.color
      }).setOrigin(0.5).setInteractive({ useHandCursor: true });

      text.on('pointerover', () => text.setStyle({ fontSize: '36px' }));
      text.on('pointerout', () => text.setStyle({ fontSize: '32px' }));
      text.on('pointerdown', () => {
        this.registry.set('selectedCharacter', char.name);
        console.log('Selected character:', char.name);
        this.scene.start('GameScene');
      });
    });
  }
}
