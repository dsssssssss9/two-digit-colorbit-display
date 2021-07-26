input.onButtonPressed(Button.A, function () {
    proportionalFont.showString("MakeCode & Hardware", 150)
    proportionalFont.showSpace(3, 300)
    colorbit_51bit.clear()
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    whaleysans.showNumber(randint(10, 99))
    colorbit_51bit.clear()
    basic.pause(1000)
    basic.clearScreen()
})
let colorbit_51bit: colorbit.Strip = null
colorbit_51bit = colorbit.initColorBit(DigitalPin.P1, BitColorMode.RGB)
colorbit_51bit.setBrightness(8)
colorbit_51bit.clear()
colorbit_51bit.show()
basic.forever(function () {
    for (let loop1 = 0; loop1 <= 4; loop1++) {
        for (let loop2 = 0; loop2 <= 4; loop2++) {
            if (led.point(loop1, loop2)) {
                colorbit_51bit.drawColorBit(loop1, loop2, colorbit.colors(BitColors.White))
            } else {
                colorbit_51bit.drawColorBit(loop1, loop2, colorbit.colors(BitColors.Black))
            }
        }
    }
})
