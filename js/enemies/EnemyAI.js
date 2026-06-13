class EnemyAI {
    constructor(enemy) {
        this.enemy = enemy;
        this.scene = enemy.scene;
        this.target = enemy.scene.player;
        this.speed = 80;
    }

    update() {
        const e = this.enemy.sprite;
        const p = this.target.sprite;

        const angle = Phaser.Math.Angle.Between(e.x, e.y, p.x, p.y);
        e.setVelocity(Math.cos(angle) * this.speed, Math.sin(angle) * this.speed);
    }
}
