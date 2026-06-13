class MapGenerator {
    constructor(scene) {
        this.scene = scene;
    }

    generateDungeon() {
        this.scene.add.text(480, 40, "Dungeon Loaded", {
            fontSize: "32px",
            fill: "#ffffff"
        });
    }
}
