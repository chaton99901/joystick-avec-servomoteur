servos.P0.setRange(10, 170)
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P0, pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    1023,
    10,
    170
    ))
})
