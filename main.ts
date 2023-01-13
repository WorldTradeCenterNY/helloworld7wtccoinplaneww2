input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Tortoise)
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    music.playMelody("E C C - E B C5 C5 ", 120)
})
