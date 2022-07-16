//Tolong tampilkan console.log("Hello Gaes") sebanyak 5x
// 1. 5x secara manual
console.log(`Hello Gaes`)
console.log(`Hello Gaes`)
console.log(`Hello Gaes`)
console.log(`Hello Gaes`)
console.log(`Hello Gaes`)

// 2. Pakai Looping
for (let i = 0; i < 5; i++) {
    console.log(`Hello Gaes`)
}

/* dari segi speed : alternatif 1 lebih cepat karena mesin hanya perlu menjalankan console.log() tanpa melihat hal lain
sedangkan alternatif keduan perlu menyimpan variabel di dalam ram, melakukan checking condition, melakukan increment.*/

/* dari segi space : 1 lebih menang di ram karena variabel lebih sedikt sedangkan kalah di hardisk karena code lebih banyak*/

/* dari segi maintain : 2 lebih mudah karena hanya mengubah 1 sisi saja semnetara 1 harus ubah 1 per 1*/