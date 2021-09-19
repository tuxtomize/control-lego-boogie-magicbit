radio.onReceivedString(function (receivedString) {
    if (receivedString == "alante") {
        magicbit.MotorStopAll()
        magicbit.MotorRun(magicbit.Motors.M1, 255)
        magicbit.MotorRun(magicbit.Motors.M3, 255)
    }
    if (receivedString == "parar") {
        magicbit.MotorStopAll()
    }
    if (receivedString == "derecha") {
        // 
        magicbit.MotorStopAll()
        magicbit.MotorRun(magicbit.Motors.M1, 255)
        magicbit.MotorRun(magicbit.Motors.M3, -255)
    }
    if (receivedString == "izquerda") {
        magicbit.MotorStopAll()
        magicbit.MotorRun(magicbit.Motors.M1, -255)
        magicbit.MotorRun(magicbit.Motors.M3, 255)
    }
    if (receivedString == "abrir") {
        magicbit.Servo(magicbit.Servos.S1, 0)
        magicbit.Servo(magicbit.Servos.S2, 0)
    }
    if (receivedString == "cerrar") {
        magicbit.Servo(magicbit.Servos.S1, 0)
        magicbit.Servo(magicbit.Servos.S2, 0)
    }
})
radio.setGroup(1)
basic.showIcon(IconNames.Yes)
basic.pause(2000)
basic.clearScreen()
