input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("MESSAGE" + MyMessage)
    basic.pause(2000)
    MyMessage = ""
    basic.showString("MESSAGE SEND")
    basic.showIcon(IconNames.Yes)
})
input.onGesture(Gesture.TiltLeft, function () {
    MyLetIn += -1
    Display()
    basic.pause(200)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
function Display () {
    if (MyLetIn == 0) {
        Convert = "A"
        basic.showString("A")
    }
    if (MyLetIn == 1) {
        Convert = "B"
        basic.showString("B")
    }
    if (MyLetIn == 2) {
        Convert = "C"
        basic.showString("C")
    }
    if (MyLetIn == 3) {
        Convert = "D"
        basic.showString("D")
    }
    if (MyLetIn == 4) {
        Convert = "E"
        basic.showString("E")
    }
    if (MyLetIn == 5) {
        Convert = "F"
        basic.showString("F")
    }
    if (MyLetIn == 6) {
        Convert = "G"
        basic.showString("G")
    }
    if (MyLetIn == 7) {
        Convert = "H"
        basic.showString("H")
    }
    if (MyLetIn == 8) {
        Convert = "I"
        basic.showString("I")
    }
    if (MyLetIn == 9) {
        Convert = "J"
        basic.showString("J")
    }
    if (MyLetIn == 10) {
        Convert = "K"
        basic.showString("K")
    }
    if (MyLetIn == 11) {
        Convert = "L"
        basic.showString("L")
    }
    if (MyLetIn == 12) {
        Convert = "M"
        basic.showString("M")
    }
    if (MyLetIn == 13) {
        Convert = "N"
        basic.showString("N")
    }
    if (MyLetIn == 14) {
        Convert = "O"
        basic.showString("O")
    }
    if (MyLetIn == 15) {
        Convert = "P"
        basic.showString("P")
    }
    if (MyLetIn == 16) {
        Convert = "Q"
        basic.showString("Q")
    }
    if (MyLetIn == 17) {
        Convert = "R"
        basic.showString("R")
    }
    if (MyLetIn == 18) {
        Convert = "S"
        basic.showString("S")
    }
    if (MyLetIn == 19) {
        Convert = "T"
        basic.showString("T")
    }
    if (MyLetIn == 20) {
        Convert = "U"
        basic.showString("U")
    }
    if (MyLetIn == 21) {
        Convert = "V"
        basic.showString("V")
    }
    if (MyLetIn == 22) {
        Convert = "W"
        basic.showString("W")
    }
    if (MyLetIn == 23) {
        Convert = "X"
        basic.showString("X")
    }
    if (MyLetIn == 24) {
        Convert = "Y"
        basic.showString("Y")
    }
    if (MyLetIn == 25) {
        Convert = "Z"
        basic.showString("Z")
    }
    if (MyLetIn == 26) {
        Convert = "1"
        basic.showString("1")
    }
    if (MyLetIn == 27) {
        Convert = "2"
        basic.showString("2")
    }
    if (MyLetIn == 28) {
        Convert = "3"
        basic.showString("3")
    }
    if (MyLetIn == 29) {
        Convert = "4"
        basic.showString("4")
    }
    if (MyLetIn == 30) {
        Convert = "5"
        basic.showString("5")
    }
    if (MyLetIn == 31) {
        Convert = "6"
        basic.showString("6")
    }
    if (MyLetIn == 32) {
        Convert = "7"
        basic.showString("7")
    }
    if (MyLetIn == 33) {
        Convert = "8"
        basic.showString("8")
    }
    if (MyLetIn == 34) {
        Convert = "9"
        basic.showString("9")
    }
    if (MyLetIn == 35) {
        Convert = "0"
        basic.showString("0")
    }
}
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onGesture(Gesture.Shake, function () {
    MyLetIn = 0
    MyMessage = ""
    basic.showIcon(IconNames.No)
    music.play(music.stringPlayable("C D E - - - - - ", 120), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.TiltRight, function () {
    MyLetIn += 1
    Display()
    basic.pause(200)
    music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.LogoDown, function () {
    MyMessage = "" + MyMessage + Convert
    basic.showIcon(IconNames.Sword)
    music.play(music.stringPlayable("A C5 - - - - - - ", 300), music.PlaybackMode.UntilDone)
})
let Convert = ""
let MyMessage = ""
let MyLetIn = 0
MyLetIn = 0
