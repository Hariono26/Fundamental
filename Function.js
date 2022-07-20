// SYNTAX FUNCTION
// FUNCTION DECLARATION
function myFunction() {
    console.log(`ini function declaration`)
}
// FUNCTION EXPRESSION
let myFunction2 = function() {
    console.log(`ini function expression`)
}
// FUNCTION EXPRESSION WITH ARROW FUNCTION `=>`
let myFunction3 = () => {
    console.log(`ini arrow function`)
}

// CALL FUNCTION
// myFunction()
// myFunction2()
// myFunction3()

// WITH RETURN VALUE
let greeting = () => {
    let name1 = `Mukidi `
    let name2 = `Plonto`
    let namaLengkap = name1 + name2

    return namaLengkap // return = output yang diharapkan keluar dari function
}
// console.log(greeting())

//contoh function tanpa return value
let greeting2 = () => {
    let name1 = `Galino `
    let name2 = `Kambing`
    let namaLengkap = name1 + name2

    console.log(namaLengkap)
}
// greeting2()

//WITH PARAMETER
let hello = (a, b) => {
    console.log(`Hello ${a + b}`)
}
// hello(`Jadon `, `Sancho`)

//RETURN
// digunakan jika kita ingin memakai hasil dari function
// return akan menghentikan proses dari function, perintah setelah return tidak akan dijalankan
let number1 = () => {
    let a = 2 ** 2
    return a
}

let number2 = () => {
    let b = 3 ** 2
    return b
}

// console.log(number1() * number2())

// PARAMETER & RETURN
let divide = (input1, input2) => {
    return input1 / input2
}
// console.log(divide(9, 2))

//PARAMETER OR ARGUMENT
// PARAMETER = variabel yang kita buat saat kita MEMBUAT function
// ARGUMENT = value yang kita buat saat kita MEMANGGIL function

// DEFAULT PARAMETER : parameter yg digunakan saat argumentnya tidak diisi/dikosongi
let sum = (input1, input2, input3 = 5) => {
    return input1 + input2 + input3
}
// console.log(sum(3,4)) // input3 terisi oleh value 5 sebagai default parameter
// console.log(sum(3,4,3)) // input3 terisi oleh value 3 (default parameter tidak berjalan)

// CALLBACK FUNCTION = Ketika sebuah function dipanggil untuk menjadi argument
let minus = (a,b) => {
    return a - b
}
let angka = () => {
    return 10
}
// console.log(minus(20, angka()))

//CALLING OTHER FUNCTION = memanggil function lain untuk digunakan didalam function
let addition = (a, b) => {
    return a + b
}
let substraction = (a, b) => {
    return a - b
}
let multiplication = (a, b) => {
    return a * b
}
let division = (a, b) => {
    return a / b
}
let showResult = (a, b) => {
    console.log(addition(a, b))
    console.log(substraction(a, b))
    console.log(multiplication(a, b))
    console.log(division(a, b))
}
// showResult(10, 5)

// RECURSIVE FUNCTION = Function yg memanggil dirinya sendiri
let countdown = (counter) => {
    console.log(counter)
    counter--
    if(counter >= 0) {
        countdown(counter)
    }
}
countdown(3)
