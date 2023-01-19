input.onButtonPressed(Button.A, function () {
    basic.showNumber(2001)
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("- D F F G B D G ", 120)
})
input.onButtonPressed(Button.B, function () {
    led.plot(4, 4)
    led.toggle(3, 1)
    led.plot(1, 4)
    led.plotBarGraph(
    6,
    7
    )
    led.plotBarGraph(
    1,
    5
    )
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Happy)
})
basic.forever(function () {
    while (input.logoIsPressed()) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `,0)
    }
    basic.clearScreen()
})
