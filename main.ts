controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . f e 3 3 3 3 3 3 3 3 3 3 e f . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f b 3 f f e e e e f f 3 b f . 
        f f b b f b f e e f b f b b f f 
        f b b b e 1 f 4 4 f 1 e b b b f 
        . f b b e e 4 4 4 4 4 f b b f . 
        . . f 4 4 4 e d d d b f e f . . 
        . . f e 4 4 e d d d d c 4 e . . 
        . . . f e e d d b d b b f e . . 
        . . . f f 1 d 1 d 1 1 f f . . . 
        . . . . . f f f b b f . . . . . 
        `,img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . f e 3 3 3 3 3 3 3 3 3 3 e f . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f b 3 f f e e e e f f 3 b f . 
        f f b b f b f e e f b f b b f f 
        f b b b e 1 f 4 4 f 1 e b b b f 
        . f b b f 4 4 4 4 4 e e b b f . 
        . . f e f b d d d e 4 4 4 f . . 
        . . e 4 c d d d d e 4 4 e f . . 
        . . e f b b d b d d e e f . . . 
        . . . f f 1 1 d 1 d 1 f f . . . 
        . . . . . f b b f f f . . . . . 
        `],
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(2000)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f 4 4 f . . . 
        . . . . f f b f 5 4 5 5 4 f . . 
        . . . f b 3 3 e 4 5 5 5 5 f . . 
        . . f b 3 3 3 3 e 4 4 4 e f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f 3 3 3 3 e b 3 e e 3 3 f . 
        . . f 3 3 3 3 f f e e e 3 3 f . 
        . . f b b b b f b f e e e 3 f . 
        . . f b b b b e 1 f 4 4 e f . . 
        . f f b b b b f 4 4 4 4 f . . . 
        . f b b b b f f f e e e f . . . 
        . . f b b f 4 4 e d d d f . . . 
        . . . f f e 4 4 e d d d f . . . 
        . . . . f b e e b d b d b f . . 
        . . . . f f d 1 d 1 d 1 f f . . 
        . . . . . . f f b b f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f 4 4 f . . . 
        . . . . f f b f 5 4 5 5 4 f . . 
        . . . f b 3 3 e 4 5 5 5 5 f . . 
        . . f b 3 3 3 3 e 4 4 4 e f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 3 f . 
        . . f 3 3 3 3 e b 3 e e 3 3 f . 
        . . f 3 3 3 3 f f e e e 3 3 f . 
        . f f b b b b f b f e e e f . . 
        . f b b b b b e 1 f 4 4 e . . . 
        . f b b b b b f 4 4 4 4 f . . . 
        . . f b b b 4 4 e d d d f . . . 
        . . . f f f 4 4 e d d d f . . . 
        . . . f b b e e b b d d d f . . 
        . . . . f b d d 1 d 1 d b f . . 
        . . . . . f f f b b f f f . . . 
        `],
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . f 4 4 f f f f . . . . . . 
        . . f 4 5 5 4 5 f b f f . . . . 
        . . f 5 5 5 5 4 e 3 3 b f . . . 
        . . f e 4 4 4 e 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e e 3 b e 3 3 3 3 f . . 
        . f 3 3 e e e f f 3 3 3 3 f . . 
        . f 3 e e e f b f b b b b f . . 
        . . f e 4 4 f 1 e b b b b f . . 
        . . . f 4 4 4 4 f b b b b f f . 
        . . . f e e e f f f b b b b f . 
        . . . f d d d e 4 4 f b b f . . 
        . . . f d d d e 4 4 e f f . . . 
        . . f b d b d b e e b f . . . . 
        . . f f 1 d 1 d 1 d f f . . . . 
        . . . . f f b b f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . f 4 4 f f f f . . . . . . 
        . . f 4 5 5 4 5 f b f f . . . . 
        . . f 5 5 5 5 4 e 3 3 b f . . . 
        . . f e 4 4 4 e 3 3 3 3 b f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e e 3 b e 3 3 3 3 f . . 
        . f 3 3 e e e f f 3 3 3 3 f . . 
        . . f e e e f b f b b b b f f . 
        . . . e 4 4 f 1 e b b b b b f . 
        . . . f 4 4 4 4 f b b b b b f . 
        . . . f d d d e 4 4 b b b f . . 
        . . . f d d d e 4 4 f f f . . . 
        . . f d d d b b e e b b f . . . 
        . . f b d 1 d 1 d d b f . . . . 
        . . . f f f b b f f f . . . . . 
        `],
    200,
    true
    )
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 3 3 3 3 3 3 e f . . . 
        . . f b 3 3 3 3 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
        . f b 3 3 3 3 3 3 3 3 3 3 b f . 
        . f b b 3 3 3 3 3 3 3 3 b b f . 
        . f b b b b b b b b b b b b f . 
        f c b b b b b b b b b b b b c f 
        f b b b b b b b b b b b b b b f 
        . f c c b b b b b b b b c c f . 
        . . e 4 c f f f f f f c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 3 3 3 3 3 3 e f . . . 
        . . f b 3 3 3 3 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f b 3 3 3 3 3 3 3 3 3 3 b f . 
        . f b b 3 3 3 3 3 3 3 3 b b f . 
        . f b b b b b b b b b b b b f . 
        f c b b b b b b b b b b b b f . 
        f b b b b b b b b b b b b c f . 
        f f b b b b b b b b b b c f . . 
        . f c c c f f f f f f f e c . . 
        . . . f b b d b d d e 4 4 e . . 
        . . . f f 1 1 d 1 d e e f . . . 
        . . . . . f b b f f f . . . . . 
        `,img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 3 3 3 3 3 3 e f . . . 
        . . f b 3 3 3 3 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
        . f b 3 3 3 3 3 3 3 3 3 3 b f . 
        . f b b 3 3 3 3 3 3 3 3 b b f . 
        . f b b b b b b b b b b b b f . 
        f c b b b b b b b b b b b b c f 
        f b b b b b b b b b b b b b b f 
        . f c c b b b b b b b b c c f . 
        . . e 4 c f f f f f f c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 3 3 3 3 3 3 e f . . . 
        . . f b 3 3 3 3 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f b 3 3 3 3 3 3 3 3 3 3 b f . 
        . f b b 3 3 3 3 3 3 3 3 b b f . 
        . f b b b b b b b b b b b b f . 
        . f b b b b b b b b b b b b c f 
        . f c b b b b b b b b b b b b f 
        . . f c b b b b b b b b b b f f 
        . . c e f f f f f f f c c c f . 
        . . e 4 4 e d d b d b b f . . . 
        . . . f e e d 1 d 1 1 f f . . . 
        . . . . . f f f b b f . . . . . 
        `],
    200,
    true
    )
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.ay += 500
    }
})
let mySprite: Sprite = null
let mySprite2: Sprite = null
info.setLife(5)
let projectile = sprites.createProjectileFromSprite(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 3 1 3 . . . . . . 
    . . . . . . 2 3 1 3 2 . . . . . 
    . . . . . . 2 1 1 1 2 . . . . . 
    . . . . . . 2 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 2 3 1 3 2 . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, mySprite2, 0, 700)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 3 1 3 . . . . . . 
    . . . . . . 2 3 1 3 2 . . . . . 
    . . . . . . 2 1 1 1 2 . . . . . 
    . . . . . . 2 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 2 3 1 3 2 . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
let Los_jodidos = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 3 1 3 . . . . . . 
    . . . . . . 2 3 1 3 2 . . . . . 
    . . . . . . 2 1 1 1 2 . . . . . 
    . . . . . . 2 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 2 3 1 3 2 . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
let Los_jodidos_2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 3 1 3 . . . . . . 
    . . . . . . 2 3 1 3 2 . . . . . 
    . . . . . . 2 1 1 1 2 . . . . . 
    . . . . . . 2 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 2 3 1 3 2 . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
let Los_jodidos_3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 3 1 3 . . . . . . 
    . . . . . . 2 3 1 3 2 . . . . . 
    . . . . . . 2 1 1 1 2 . . . . . 
    . . . . . . 2 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 2 3 1 3 2 . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
let Los_jodidos_4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 3 1 3 . . . . . . 
    . . . . . . 2 3 1 3 2 . . . . . 
    . . . . . . 2 1 1 1 2 . . . . . 
    . . . . . . 2 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 2 3 1 3 2 . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
let Los_jodidos_5 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 3 1 3 . . . . . . 
    . . . . . . 2 3 1 3 2 . . . . . 
    . . . . . . 2 1 1 1 2 . . . . . 
    . . . . . . 2 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 2 3 1 3 2 . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
let a = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 3 1 3 . . . . . . 
    . . . . . . 2 3 1 3 2 . . . . . 
    . . . . . . 2 1 1 1 2 . . . . . 
    . . . . . . 2 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 2 3 1 3 2 . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
let a1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 3 1 3 . . . . . . 
    . . . . . . 2 3 1 3 2 . . . . . 
    . . . . . . 2 1 1 1 2 . . . . . 
    . . . . . . 2 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 2 3 1 3 2 . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
let a2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 3 1 3 . . . . . . 
    . . . . . . 2 3 1 3 2 . . . . . 
    . . . . . . 2 1 1 1 2 . . . . . 
    . . . . . . 2 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 2 3 1 3 2 . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
let a3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 3 1 3 . . . . . . 
    . . . . . . 2 3 1 3 2 . . . . . 
    . . . . . . 2 1 1 1 2 . . . . . 
    . . . . . . 2 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 2 3 1 3 2 . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
projectile = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 3 1 3 . . . . . . 
    . . . . . . 2 3 1 3 2 . . . . . 
    . . . . . . 2 1 1 1 2 . . . . . 
    . . . . . . 2 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 2 3 1 3 2 . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
let mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 2 1 2 . . . . . . 
    . . . . . . . 3 1 3 . . . . . . 
    . . . . . . 2 3 1 3 2 . . . . . 
    . . . . . . 2 1 1 1 2 . . . . . 
    . . . . . . 2 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 3 1 1 1 3 . . . . . 
    . . . . . . 2 3 1 3 2 . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
mySprite = sprites.create(img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f 3 3 f f e e e e f f 3 3 f . 
    . f b b f b f e e f b f b b f . 
    . f b b e 1 f 4 4 f 1 e b b f . 
    f f b b f 4 4 4 4 4 4 f b b f f 
    f b b f f f e e e e f f f b b f 
    . f e e f b d d d d b f e e f . 
    . . e 4 c d d d d d d c 4 e . . 
    . . e f b d b d b d b b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`nivel0`)
mySprite.ay += 500
mySprite.setPosition(80, 740)
forever(function () {
    projectile.vy = 300
    projectile.setPosition(randint(30, 160), 650)
    pause(1000)
    mySprite3.vy = 300
    mySprite3.setPosition(randint(30, 160), 650)
    pause(1000)
})
forever(function () {
    Los_jodidos.vy = 300
    Los_jodidos.setPosition(randint(30, 160), 400)
    pause(200)
    Los_jodidos_2.vy = 300
    Los_jodidos_2.setPosition(randint(30, 160), 100)
    pause(200)
    Los_jodidos_3.vy = 300
    Los_jodidos_3.setPosition(randint(30, 160), 100)
    pause(200)
    Los_jodidos_4.vy = 300
    Los_jodidos_4.setPosition(randint(30, 160), 100)
    pause(200)
    Los_jodidos_5.vy = 300
    Los_jodidos_5.setPosition(randint(30, 160), 100)
    pause(200)
})
forever(function () {
    mySprite2.vy = 300
    mySprite2.setPosition(randint(30, 160), 650)
    pause(1600)
})
forever(function () {
    a1.vy = 300
    a1.setPosition(randint(30, 160), 400)
    pause(500)
    a2.vy = 300
    a2.setPosition(randint(30, 160), 400)
    pause(500)
    a.vy = 300
    a.setPosition(randint(30, 160), 400)
    pause(500)
})
forever(function () {
    if (info.life() == 0) {
        game.showLongText("GAME OVER", DialogLayout.Bottom)
        game.gameOver(false)
        mySprite.setPosition(80, 740)
        info.setLife(5)
    }
})
