//* * * * */
let res = ``
for (let i = 0; i < 5; i++) {
    res += ` * `
}
console.log(res) // res ditambah bintang setiap kali looping - setelah looping selesai baru console.log berjalan

// *
// * *
// * * *
// * * * *
// * * * * *
let res1 = ''
for (let i = 0; i < 5; i++) {
    res1 += ` * `
    console.log(res1)
} // res ditambah bintang setiap kali looping - res langsung di console.log setiap kali looping

// *
// *
// *
// *
// *
let res2 = ``
for (let i = 0; i < 5; i++) {
    res2 += ` * ` + `\n`
}
console.log(res2)

// *****
// *****
// *****
// *****
// *****
let res3 = ``
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        res3 += ` * `
    }
    res3 += `\n`
}   
console.log(res3)

// *
// * *
// * * *
// * * * *
// * * * * *
let res4 = ``
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        res4 += ` * `
    }
    res4 += `\n`
}
console.log(res4)