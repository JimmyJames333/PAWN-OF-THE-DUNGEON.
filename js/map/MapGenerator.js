class MapGenerator {
  constructor(scene) {
    this.scene = scene;
  }

  createMap() {
    const { width, height } = this.scene.scale;
    const graphics = this.scene.add.graphics();
    graphics.fillStyle(0x444444, 1);

    const tileSize = 64;

    for (let x = 0; x < width; x += tileSize) {
      for (let y = 0; y < height; y += tileSize) {
        graphics.fillRect(x, y, tileSize - 2, tileSize - 2);
      }
    }

    console.log('Map generated successfully.');
  }
}
