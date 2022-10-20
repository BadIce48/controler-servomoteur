let angle = 0
servos.P0.setRange(10, 170)
basic.forever(function () {
    for (let index = 0; index <= 16; index++) {
        angle = index * 10 + 10
        servos.P0.setAngle(angle)
        basic.pause(200)
    }
    for (let index_2 = 0; index_2 <= 24; index_2++) {
        angle = index_2 * 5 + -5
        servos.P0.setAngle(angle)
        basic.pause(200)
    }
})
