class LootDrop {
    constructor(scene, x, y) {
        if (Math.random() < 0.5) {
            new Item(scene, x, y);
        }
    }
}
