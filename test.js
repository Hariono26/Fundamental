let fingers = [`jempol`, `telunjuk`, `tengah`, `manis`, `kelingking`, `manis`, `tengah`, `telunjuk`]
let input2 = 13

let proses = input2 - fingers.length
let proses2 = input2 % fingers.length

// console.log(fingers[proses - 1])
// console.log(fingers[proses2 - 1])

// catatan. hanya berlaku untuk nilai input diatas 8


// let array = [2, 7, 11, 15]
// let input = 19

// if(input % (array[0] + array[1]) == 0) {
//     console.log([0, 1])
// } else if (input % (array[0] + array[2]) == 0) {
//     console.log([0, 2])
// } else if (input % (array[0] + array[3]) == 0) {
//     console.log([0, 3])
// } else if(input % (array[1] + array[2]) == 0) {
//     console.log([1, 2])
// } else if(input % (array[1] + array[3]) == 0) {
//     console.log([1, 3])
// } else if (input % (array[2] + array[3]) == 0) {
//     console.log([2, 3])
// } else {
//     console.log(`No Way`)
// }

let dictionary = [`pro`, `gram`, `merit`, `program`, `it`, `programmer`]
let input = `programit`


let graphic = [75, 6, 15, 3, 10, 22, 15]
// let graphic = [5, 6, 15, 3, 10, 22, 15]
// let graphic = [10, 15, 8, 7, 14]
// let graphic = [100, 90, 80, 75, 65]
let min = Math.min(...graphic)

let afterBuy = graphic.slice(graphic.indexOf(min) + 1)
let max = Math.max(...afterBuy)
let output = max - min
if(output === -Infinity) {
    output = `harga selalu turun`
}

console.log(output)