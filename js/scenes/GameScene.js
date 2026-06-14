class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  create() {
    const chosen = this.registry.get('selectedCharacter') || 'Warrior';
    const { width, height } = this.scale;

    this.map = new MapGenerator(this);
    this.map.createMap();

    // Show a colored circle for the chosen character
    const colorMap = {
      Warrior: 0xff4444,
      Mage: 0x44aaff,
      Rogue: 0x44ff44
    };

    this.add.circle(width / 2, height / 2, 60, colorMap[chosen]);
    this.add.text(width / 2, height / 2 + 120, `You chose: ${chosen}`, {
      fontSize: '28px',
      color: '#00ff00'
    }).setOrigin(0.5);
  }
}
