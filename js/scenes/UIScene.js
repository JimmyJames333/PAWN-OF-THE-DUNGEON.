class UIScene extends Phaser.Scene {
    constructor() {
        super("UIScene");
    }

    create() {
        this.add.text(20, 20, "Pawn of the Dungeon", {
            fontSize: "32px",
            color: "#ffffff"
        });
    }
}
