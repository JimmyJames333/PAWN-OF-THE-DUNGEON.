class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  create() {
    const chosen = this.registry.get('selectedCharacter') || 'Warrior';
    const { width, height } = this.scale;

    this.map = new MapGenerator(this);
    this.map.createMap();

    this.add.text(width / 2, height / 2, `You chose: ${chosen}`, {
      fontSize: '32px',
      color: '#00ff00'
    }).setOrigin(0.5);
  }
}
