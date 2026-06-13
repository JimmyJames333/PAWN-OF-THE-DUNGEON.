class AnimationSystem {
    static fadeOut(scene, sprite) {
        scene.tweens.add({
            targets: sprite,
            alpha: 0,
            duration: 300,
            onComplete: () => sprite.destroy()
        });
    }
}
