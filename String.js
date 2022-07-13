//escape charachter
// let a = 'I\'ll be back' 
// console.log(a)
// let b = `Opo\nkii?`
// console.log(b)
// let c = `Opo \t Kii?`
// console.log(c)

// //concatinate string
// let firstname = `galino`
// let lastname = `kambing`
// console.log(firstname + lastname)
// console.log(firstname + ` ` + lastname)

// let angkastr = "123"
// let angkanum = 4
// console.log(angkastr + angkanum, typeof(angkastr + angkanum))

// backtick = memudahkan dalam memasukkan variabel lain kedalam string
// let first_name = `mukidi`
// let last_name = `plonto`
// console.log(`${first_name} ${last_name}`)

// string prop & method
// let oke = `opo kii`
// console.log(oke.length) //hitung panjang string berapa karakter
// console.log(oke.indexOf(`kii`)) //cari urutan ke berapa kata tertentu mulai index0
// console.log(oke.substr(1,5)) // hitung index ke "n" diambil berapa karakter
// console.log(oke.slice(0,2)) // hitung index ke "n" sampai ke index ke "n-1"
// console.log(oke.split(` `)) // bagi string sesuai dengan parameter tertentu, hasilnya masuk kedalam array
// console.log(oke.split(`p`))

let cilik = `huruf cilik`
let gede = `HURUF GEDE`
// console.log(cilik.toUpperCase())
// console.log(gede.toLowerCase())
// console.log(cilik.replace(`f`, `p`)) // replace 1 karakter
// console.log(cilik.replace(`uf`, `op`)) // replace 2 karakter berdampingan
// console.log(cilik.replace(/u/g, `o`)) // replace semua huruf tertentu

// let res = cilik.replace(/u/g, `o`) //replace beberapa huruf tidak berdampingan
// let res2 = res.replace(`f`, `p`)
// console.log(res2)

console.log(cilik.includes(`huruf`))
console.log(cilik.includes(`Huruf`))