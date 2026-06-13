class CorruptionSystem {
    constructor(scene) {
        this.scene = scene;
        this.value = 0;
    }

    add(amount) {
        this.value += amount;
        this.scene.game.events.emit("corruptionChanged", this.value);
    }
}
