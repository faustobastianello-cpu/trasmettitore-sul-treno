radio.onReceivedString(function (receivedString) {
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) > -33) {
        radio.sendString("T2- ")
        radio.sendString(receivedString)
        basic.showString(receivedString)
    }
})
// Entrambi i micro:bit devono avere lo stesso gruppo radio
radio.setGroup(1)
basic.forever(function () {
    basic.pause(1000)
    basic.clearScreen()
})
