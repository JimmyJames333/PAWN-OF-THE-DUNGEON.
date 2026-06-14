class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene");
    }

    create(data) {
        this.player = this.physics.add.sprite(640, 360, data.piece);
        this.player.setScale(2);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.scene.launch("UIScene");
    }

    update() {
        const speed = 200;
        this.player.setVelocity(0);

        if (this.cursors.left.isDown) this.player.setVelocityX(-speed);
        if (this.cursors.right.isDown) this.player.setVelocityX(speed);
        if (this.cursors.up.isDown) this.player.setVelocityY(-speed);
        if (this.cursors.down.isDown) this.player.setVelocityY(speed);
    }
}
