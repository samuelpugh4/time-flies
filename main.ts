controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.overlapsWith(mySprite2)) {
        game.over(true)
    } else {
        info.changeLifeBy(-1)
    }
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`Background`)
mySprite = sprites.create(assets.image`Hero`, SpriteKind.Player)
mySprite2 = sprites.create(assets.image`Bouncer`, SpriteKind.Food)
mySprite2.setVelocity(50, 50)
mySprite2.setBounceOnWall(true)
mySprite2.setPosition(0, 0)
info.startCountdown(10)
