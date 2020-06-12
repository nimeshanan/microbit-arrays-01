input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        basic.showNumber(list_1[index])
        clear()
    }
})
function clear () {
    basic.pause(500)
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
    for (let value of list_2) {
        basic.showNumber(value)
        clear()
    }
})
let list_2: number[] = []
let list_1: number[] = []
list_1 = [1, 2, 3, 4, 5]
basic.showNumber(list_1.length)
clear()
list_2 = [7, 4, 8, 2]
basic.showNumber(list_2.length)
clear()
