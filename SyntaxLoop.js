// //while --> mensyaratkan kondisi true baru looping berjalan
// let i = 5
// while(i > 0) { // syarat looping terjadi --> kondisinya true baru jalan
//     console.log(`looping while`) // aksi yang dilakukan saat syarat terpenuhi
//     i-- // syarat looping berhenti
// }

// // Do-While --> menjalankan task dulu minimal 1x
// let j = 0
// do {
//     console.log(`looping do-while`)
//     j++
// } while(j < 5)

// // for --> mirip while hanya beda syntax
// for (let k = 0;k < 5;k++) {
//     console.log(`looping for`)
// }


// BREAK & CONTINUE
// break memaksa menghentikan looping

//contoh break while
// let a = 0
// while(a < 5) {
//     console.log(a)
//     if(a == 3) break
//     a++
// } // hasil = 1,2,3

// while(a < 5) {
//     if(a == 3) break
//     console.log(a)
//     a++
// } // hasil - 1,2

// contoh break for
// for (let b = 0; b < 5; b++) {
//     if (b == 3) break
//     console.log(b)
// } // 0,1,2
// for (let b = 0; b < 5; b++) {
//     console.log(b)
//     if (b == 3) break
// }// 0,1,2,3

//CONTINUE --> utk melewatkan task dibawah continue
// tampilkan hanya angka ganjil
for (let c = 0; c < 5; c++) {
    if (c % 2 == 0) continue // harus diletakkan diatas task yang mau diskip
    console.log(c)
}

// tampilkan huruf selain `l`
let str = `Hello`
for (let d = 0; d < str.length; d++) {
    if (str.charAt(d) == `l`) continue
    console.log(str.charAt(d))
}