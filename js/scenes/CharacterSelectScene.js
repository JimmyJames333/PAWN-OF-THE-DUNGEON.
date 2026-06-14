class CharacterSelectScene extends Phaser.Scene {
    constructor() {
        super("CharacterSelectScene");
    }

    create() {
        this.add.text(450, 150, "Select Your Piece", {
            fontSize: "48px",
            color: "#ffffff"
        });

        const pawn = this.add.image(640, 400, "pawn")
            .setScale(3)
            .setInteractive();

        pawn.on("pointerdown", () => {
            this.scene.start("GameScene", { piece: "pawn" });
        });
    }
}
