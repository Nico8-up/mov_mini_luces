input.onButtonPressed(Button.A, function () {
    pixel_array.range(0, 1).showColor(neopixel.colors(NeoPixelColors.Green))
    pixel_array.range(1, 2).showColor(neopixel.colors(NeoPixelColors.Purple))
    pixel_array.range(2, 3).showColor(neopixel.colors(NeoPixelColors.Red))
    pixel_array.range(3, 4).showColor(neopixel.colors(NeoPixelColors.Orange))
    pixel_array.range(4, 5).showColor(neopixel.colors(NeoPixelColors.Blue))
    pins.servoWritePin(AnalogPin.P1, 180)
    pins.servoWritePin(AnalogPin.P2, 0)
})
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
})
input.onSound(DetectedSound.Loud, function () {
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
})
input.onButtonPressed(Button.B, function () {
    pixel_array.clear()
    pixel_array.show()
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P2, 180)
})
let pixel_array: neopixel.Strip = null
pixel_array = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.forever(function () {
    basic.pause(100)
    pixel_array.rotate(1)
    pixel_array.show()
})
