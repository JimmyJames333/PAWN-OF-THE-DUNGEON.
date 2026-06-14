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
      { name: 'Warrior', color: 0xff4444 },
      { name: 'Mage', color: 0x44aaff },
      { name: 'Rogue', color: 0x44ff44 }
    ];

    const spacing = 300;
    const startX = width / 2 - spacing;

    characters.forEach((char, i) => {
      const x = startX + i * spacing;
      const y = height / 2;

      // Draw a colored circle as a placeholder
      const circle = this.add.circle(x, y, 60, char.color).setInteractive({ useHandCursor: true });

      circle.on('pointerover', () => circle.setScale(1.2));
      circle.on('pointerout', () => circle.setScale(1));
      circle.on('pointerdown', () => {
        this.registry.set('selectedCharacter', char.name);
        this.scene.start('GameScene');
      });

      this.add.text(x, y + 100, char.name, {
        fontSize: '24px',
        color: '#ffffff'
      }).setOrigin(0.5);
    });
  }
}
