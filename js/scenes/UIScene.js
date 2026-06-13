class UIScene extends Phaser.Scene {
    constructor() {
        super("UIScene");
    }

    create() {
        this.corruptionText = this.add.text(10, 10, "Corruption: 0", {
            fontSize: "20px",
            fill: "#ffffff"
        });

        this.game.events.on("corruptionChanged", (value) => {
            this.corruptionText.setText("Corruption: " + value);
        });
    }
}
