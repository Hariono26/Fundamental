// untuk membuat variabel kita bisa pakai 3 : var, let. const
var name //buat sebuah variabel dgn nama "name"
name = "John" // tentukan isi variabel dengan isi "john"
console.log(name) // seharusnya isinya "john"

let name2 = "har" // let bisa diganti isinya
name2 = "penyok"
console.log(name2)

const name3 = "yon" // const tidak bisa diganti isinya
// name3 = "mukidi"
console.log(name3)

// aturan membuat variabel di javascript:
// 1. tidak boleh ada Spasi 
// ex: stok barang, total barang 
// 2. awal nama harus huruf/ underscore/ dollar sign
// 3. dalam variable hanya menerima huruf, angka, underscore, dolar sign
// 4. penulisan variable itu case sentitif
// ex: Oke berbeda dengan oke 

// macam cara penulisan variable di javascript:
// 1. camel case : pakai capital : opoKii
// 2. snake case : pakai Underscore : opo-kii

// kapan kita menggunakan variable = ketika ingin menggunakan data tersebut lebih dari 1x
// console.log("kok gething aku")
// console.log("kok gething aku")
// console.log("kok gething aku")
// console.log("kok gething aku")
// console.log("kok gething aku")

// let kalimat = "kok gething aku"
// console.log(kalimat)
// console.log(kalimat)
// console.log(kalimat)
// console.log(kalimat)
// console.log(kalimat)

// // data type:
// // 1. string
// let data = "1234"
// let data1 = '1234'
// let data2 = `1234`
// console.log(data)
// console.log(data1)
// console.log(data2)

// // 2. number:
// // a. integers
// let data3 = 1
// console.log(data3)
// // b. float
// let data4 = 1.5
// console.log(data4)

// // 3. Boolean (true or false)
// let data5 = true
// console.log(data5)

// 4. Object
let data6 = {
    name: "peni",
    age: 12,
    single: true 
}
console.log(data6)

// 5. Array
let data7 = ["peni", 12, true]
console.log(data7)

// 6. Undifined & Null 
// a. undifined
// let data8
// console.log(data8)

// // b. null
// let data9 = null
// console.log(data9)

// console.log(typeof data1)
// console.log(typeof data3)
// console.log(typeof data5)
// console.log(typeof data6)
// console.log(typeof data7)
// console.log(typeof data8)
// console.log(typeof data9)

