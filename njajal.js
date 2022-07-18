let defender = [[`Maguire`, `Varane`], `Bailly`, `Lindelof`]
// defender.splice(1, 1, `Martinez`) // SPLICE FOR REPLACE = hapus mulaiindex 1 sebanyak 1 lalu ganti data yg dihapus dengan `Martinez`
// console.log(defender)
// defender.splice(1,1) // SPLICE FOR DELETE = hapus mulai index 1 sebanyak 1
// console.log(defender)
// defender.splice(2, 0, `malacia`, `laird`) // SPLICE for insert = hapus mulai index 2 sebanyak 0 lalu ganti data yang dihapus dengan `malacia`, `laird`
// console.log(defender.sort().reverse())

// console.log(defender.join( ))

let kategori = [`demit`, `laser`, `bacokbacokan`, `tarung`, `kartun`]
let info = `onok ${kategori.length} pilm: \n`
for (i = 0; i < kategori.length; i++) {
    info += `${i + 1}. ` + kategori[i] + `\n`
}
console.log(info)