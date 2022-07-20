//FOR EACH = melooping isi array
// let minuman = [`Pop Ice`, `Marimas`, `Nutrisari`]
// minuman.forEach(merk => {
//     console.log(merk)
// })

// //for each 2 dimension
// let makanan = [[`Bakso`, 1], [`Soto`, 2]]
// makanan.forEach(jenis => {
//     jenis.forEach(stock => {
//         console.log(stock)
//     })
// })

// MAP = mengganti data di dalam array
let arr1 = [1, 2, 3, 4, 5]
let newarr1 = arr1.map(item => {
    return item * 2
})
// console.log(newarr1)

let arr2 = [1, 2, 3, 4, 5].map(item => {
    return item * 2
})
// console.log(arr2)

// map dengan dua parameter
let arr3 = [1, 2, 3, 4, 5]
let newarr3 = arr3.map((item, index) => {
    if (index % 2 !== 0) {
        return item * 2
    } else {
        return item
    }
})
// console.log(arr3)
// console.log(newarr3)

// map dengan hasil [[2, 3], [2, 3], [2 ,3]]
let a = [1, 2, 3]
let newA = a.map(item => {
    return [2, 3]
})
// console.log(newA)

// FILTER = menyaring data di dalam array
let arr4 = [`piye`, `to`, `kiih`]
let newArr4 = arr4.filter(item => {
    return item.includes(`i`)
})
// console.log(newArr4)

