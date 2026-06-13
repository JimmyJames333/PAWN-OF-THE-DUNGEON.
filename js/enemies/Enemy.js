class Enemy {
    constructor(scene, x, y) {
        this.scene = scene;
        this.sprite = scene.physics.add.sprite(x, y, "enemy");
        this.sprite.setCollideWorldBounds(true);

        this.hp = 5;
        this.ai = new EnemyAI(this);
    }

    takeDamage(amount) {
        this.hp -= amount;
        if (this.hp <= 0) this.die();
    }

    die() {
        new LootDrop(this.scene, this.sprite.x, this.sprite.y);
        this.sprite.destroy();
    }

    update() {
        this.ai.update();
    }
}
