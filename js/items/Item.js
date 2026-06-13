class Item {
    constructor(scene, x, y) {
        this.scene = scene;
        this.sprite = scene.physics.add.sprite(x, y, "item");

        scene.physics.add.overlap(scene.player.sprite, this.sprite, () => {
            this.sprite.destroy();
            scene.corruption.add(1);
        });
    }
}
