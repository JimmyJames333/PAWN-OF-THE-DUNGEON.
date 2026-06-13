class Player {
    constructor(scene, x, y) {
        this.scene = scene;
        this.sprite = scene.physics.add.sprite(x, y, "player");
        this.sprite.setCollideWorldBounds(true);

        this.speed = 250;
        this.cursors = scene.input.keyboard.createCursorKeys();
    }

    update() {
        const body = this.sprite.body;
        body.setVelocity(0);

        if (this.cursors.left.isDown) body.setVelocityX(-this.speed);
        if (this.cursors.right.isDown) body.setVelocityX(this.speed);
        if (this.cursors.up.isDown) body.setVelocityY(-this.speed);
        if (this.cursors.down.isDown) body.setVelocityY(this.speed);
    }
}
