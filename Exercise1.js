let tanggal = new Date()
console.log(tanggal.getDate())
console.log(tanggal.getDay())
console.log(tanggal.getFullYear())
console.log(tanggal.getMonth())

let date = new Date()
let bulan = date.getMonth()
let sentence = `Saat ini Bulan`
if (bulan === 0) {
    console.log(`${sentence} 0 : Januari`)
} else if (bulan === 1) {
    console.log(`${sentence} 1 : Februari`)
} else if (bulan === 2) {
    console.log(`${sentence} 2 : Maret`)
} else if (bulan === 3) {
    console.log(`${sentence} 3 : April`)
} else if (bulan === 4) {
    console.log(`${sentence} 4 : Mei`)
} else if (bulan === 5) {
    console.log(`${sentence} 5 : Juni`)
} else if (bulan === 6) {
    console.log(`${sentence} 6 : Juli`)
} else if (bulan === 7) {
    console.log(`${sentence} 7 : Agustus`)
} else if (bulan === 8) {
    console.log(`${sentence} 8 : September`)
} else if (bulan === 9) {
    console.log(`${sentence} 9 : Oktober`)
} else if (bulan === 10) {
    console.log(`${sentence} 10 : November`)
} else if (bulan === 11) {
    console.log(`${sentence} 11 : Desember`)
}