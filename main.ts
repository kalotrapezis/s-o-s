// Event: Button A pressed
input.onButtonPressed(Button.A, function () {
    basic.showString("CHOOSE A LETTER BY TILTING RIGHT OR LEFT")
    basic.showString("TO GO TO THE NEXT LETTER TILT DOWN")
    basic.showString("TO SEND THE MESSAGE TILT UP")
})
// Event: Tilt Down
input.onGesture(Gesture.LogoUp, function () {
    if (MyMessage.length < 100) {
        // Limit message length
        MyMessage = "" + MyMessage + Convert
        basic.showIcon(IconNames.Sword)
        music.play(music.stringPlayable("A C5 - - - - - - ", 300), music.PlaybackMode.UntilDone)
    } else {
        // Show warning for exceeding limit
        basic.showIcon(IconNames.Skull)
    }
})
// Event: Tilt Left
input.onGesture(Gesture.TiltLeft, function () {
    // Prevent going out of bounds
    MyLetIn = Math.max(MyLetIn - 1, 0)
    Display()
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    radio.sendString("TYPPING...")
})
// Function to display the current letter
function Display () {
    if (MyLetIn >= 0 && MyLetIn < letters.length) {
        Convert = letters.charAt(MyLetIn)
        basic.showString(Convert)
    }
}
// Event: Receiving message
radio.onReceivedString(function (receivedString) {
    if (receivedString.indexOf("TYPPING...") != -1) {
        basic.showString("..")
        basic.clearScreen()
    } else if (receivedString.indexOf("MSG:") == 0) {
        basic.showIcon(IconNames.Heart)
        // Remove "MSG:" before displaying
        basic.showString(receivedString)
        basic.pause(100)
        basic.clearScreen()
    }
})
// Event: Button B pressed
input.onButtonPressed(Button.B, function () {
    basic.showString("CHOOSE A LETTER BY TILTING RIGHT OR LEFT")
    basic.showString("TO GO TO THE NEXT LETTER TILT DOWN")
    basic.showString("TO SEND THE MESSAGE TILT UP")
})
// Event: Shake gesture
input.onGesture(Gesture.Shake, function () {
    MyLetIn = 0
    MyMessage = ""
    basic.showIcon(IconNames.No)
    music.play(music.stringPlayable("C D E - - - - - ", 120), music.PlaybackMode.UntilDone)
    Display()
})
// Event: Tilt Right
input.onGesture(Gesture.TiltRight, function () {
    // Prevent going out of bounds
    MyLetIn = Math.min(MyLetIn + 1, letters.length - 1)
    Display()
    music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    radio.sendString("TYPPING...")
})
// Event: Tilt Up
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        . # . # .
        . . # . .
        # # # # #
        `)
    // Prepend "MSG:" to differentiate messages
    radio.sendString("MSG:" + MyMessage)
    // Clear message after sending
    MyMessage = ""
    basic.showIcon(IconNames.Yes)
})
let Convert = ""
let MyMessage = ""
let MyLetIn = 0
let letters = ""
let MessageLength = 0
// Array of characters for selection
letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
// Initialize
MyLetIn = 0
Display()
