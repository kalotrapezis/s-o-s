input.onButtonPressed(Button.A, function () {
    if (MyLetter.isEmpty()) {
        MyLetter = "."
    } else {
        MyLetter = "" + MyLetter + "."
    }
    Display()
})
function Display () {
    if (MyLetter == ".-") {
        Convert = "A"
        basic.showString("A")
        radio.sendString("A")
    }
    if (MyLetter == "-...") {
        Convert = "B"
        basic.showString("B")
        radio.sendString("B")
    }
    if (MyLetter == "-.-.") {
        Convert = "C"
        basic.showString("C")
        radio.sendString("C")
    }
    if (MyLetter == "-..") {
        Convert = "D"
        basic.showString("D")
        radio.sendString("D")
    }
    if (MyLetter == ".") {
        Convert = "E"
        basic.showString("E")
        radio.sendString("E")
    }
    if (MyLetter == "..-.") {
        Convert = "F"
        basic.showString("F")
        radio.sendString("F")
    }
    if (MyLetter == "--.") {
        Convert = "G"
        basic.showString("G")
        radio.sendString("G")
    }
    if (MyLetter == "....") {
        Convert = "H"
        basic.showString("H")
        radio.sendString("H")
    }
    if (MyLetter == "..") {
        Convert = "I"
        basic.showString("I")
        radio.sendString("I")
    }
    if (MyLetter == ".---") {
        Convert = "J"
        basic.showString("J")
        radio.sendString("J")
    }
    if (MyLetter == "-.-") {
        Convert = "K"
        basic.showString("K")
        radio.sendString("K")
    }
    if (MyLetter == ".-..") {
        Convert = "L"
        basic.showString("L")
        radio.sendString("L")
    }
    if (MyLetter == "--") {
        Convert = "M"
        basic.showString("M")
        radio.sendString("M")
    }
    if (MyLetter == "-.") {
        Convert = "N"
        basic.showString("N")
        radio.sendString("N")
    }
    if (MyLetter == "---") {
        Convert = "O"
        basic.showString("O")
        radio.sendString("O")
    }
    if (MyLetter == ".-.-") {
        Convert = "P"
        basic.showString("P")
        radio.sendString("P")
    }
    if (MyLetter == "--.-") {
        Convert = "Q"
        basic.showString("Q")
        radio.sendString("Q")
    }
    if (MyLetter == ".-.") {
        Convert = "R"
        basic.showString("R")
        radio.sendString("R")
    }
    if (MyLetter == "...") {
        Convert = "S"
        basic.showString("S")
        radio.sendString("S")
    }
    if (MyLetter == "-") {
        Convert = "T"
        basic.showString("T")
        radio.sendString("T")
    }
    if (MyLetter == "..-") {
        Convert = "U"
        basic.showString("U")
        radio.sendString("U")
    }
    if (MyLetter == "...-") {
        Convert = "V"
        basic.showString("V")
        radio.sendString("V")
    }
    if (MyLetter == ".--") {
        Convert = "W"
        basic.showString("W")
        radio.sendString("W")
    }
    if (MyLetter == "-..-") {
        Convert = "X"
        basic.showString("X")
        radio.sendString("X")
    }
    if (MyLetter == "-.--") {
        Convert = "Y"
        basic.showString("Y")
        radio.sendString("Y")
    }
    if (MyLetter == "--..") {
        Convert = "Z"
        basic.showString("Z")
        radio.sendString("Z")
    }
    if (MyLetter == ".----") {
        Convert = "1"
        basic.showString("1")
        radio.sendString("1")
    }
    if (MyLetter == "..---") {
        Convert = "2"
        basic.showString("2")
        radio.sendString("2")
    }
    if (MyLetter == "...--") {
        Convert = "3"
        basic.showString("3")
        radio.sendString("3")
    }
    if (MyLetter == "....-") {
        Convert = "4"
        basic.showString("4")
        radio.sendString("4")
    }
    if (MyLetter == ".....") {
        Convert = "5"
        basic.showString("5")
        radio.sendString("5")
    }
    if (MyLetter == "-....") {
        Convert = "6"
        basic.showString("6")
        radio.sendString("6")
    }
    if (MyLetter == "--...") {
        Convert = "7"
        basic.showString("7")
        radio.sendString("7")
    }
    if (MyLetter == "---..") {
        Convert = "8"
        basic.showString("8")
        radio.sendString("8")
    }
    if (MyLetter == "----.") {
        Convert = "9"
        basic.showString("9")
        radio.sendString("9")
    }
    if (MyLetter == "-----") {
        Convert = "0"
        basic.showString("0")
        radio.sendString("0")
    }
}
input.onButtonPressed(Button.AB, function () {
    MyLetter = ""
    basic.showString("MESSAGE")
    radio.sendString(MyMessage)
    basic.pause(2000)
    MyMessage = ""
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    if (MyLetter.isEmpty()) {
        MyLetter = "-"
    } else {
        MyLetter = "" + MyLetter + "-"
    }
    Display()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    MyMessage = "" + MyMessage + Convert
    MyLetter = ""
})
let Convert = ""
let MyLetter = ""
let MyMessage = ""
MyMessage = ""
MyMessage = ""
radio.setGroup(1)
