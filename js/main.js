const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    backgroundColor: "#000000",
    physics: {
        default: "arcade",
        arcade: { debug: false }
    },
    scene: [BootScene, CharacterSelectScene, GameScene, UIScene]
};

new Phaser.Game(config);
