// ARRAY
// SYNTAX ARRAY
let things = [5, `Book`, true, undefined, null, {}, []]

// ACCES ARRAY
// console.log(things[1])

// CHANGE DATA INI ARRAY
things[3] = `Pencil`
// console.log(things)

//CREATE NEW INDEX
things[8] = true
// console.log(things.length) 
// console.log(things)

//PUSH & POP
let forward = [`Messi`, `Ronaldo`, `Mbappe`]
forward.push(`Neymar`) // PUSH = menambahkan data setelah index terakhir
forward.pop() // POP = menhapus data index terakhir
// console.log(forward)

//UNSHIFT & SHIFT
let midfield = [`Bruno`, `Fred`, `McTominay`]
midfield.unshift(`Van de Beek`, `Frankie de Jong`) // UNSHIFT = menambahkan data sebelum index 0
// console.log(midfield)
midfield.shift() // SHIFT = menghapus data index ke 0
// console.log(midfield)

// SPLICE var.splice(start, deletecount, new data (optional))
let defender = [`Maguire`, `Varane`, `Bailly`, `Lindelof`]
// defender.splice(1, 1, `Martinez`) // SPLICE FOR REPLACE = hapus mulaiindex 1 sebanyak 1 lalu ganti data yg dihapus dengan `Martinez`
// console.log(defender)
// defender.splice(1,1) // SPLICE FOR DELETE = hapus mulai index 1 sebanyak 1
// console.log(defender)
defender.splice(2, 0, `malacia`, `laird`) // SPLICE for insert = hapus mulai index 2 sebanyak 0 lalu ganti data yang dihapus dengan `malacia`, `laird`
// console.log(defender)

// DELETE = hapus data tanpa menghapus indexnya -> data index tertentu menjadi kosong
let goalkeeper = [`De Gea`, `Henderson`, `Heaton`]
delete goalkeeper[1]
// console.log(goalkeeper)

// SLICE = Mengambil isi array mulai index ke x sampai index ke y-1
let jeding = [`cibuk`, `bak`, `wc`, `keran`, `timbo`, `selang`, `sikat jeding`]
let rusak = jeding.slice(0, 5)
// console.log(rusak)
let jekapik = jeding.slice(5)
// console.log(jekapik) 

//INCLUDES
let barca = [`rapinha`, `lewandowski`, `christensen`, `kessie`]
// console.log(barca.includes(`messi`))
// console.log(barca.includes(`lewandowski`))

//INDEX OF
// console.log(barca.indexOf(`rapinha`)) // cari indeks dari `rapinha`
// console.log(barca.indexOf(`messi`)) // jika tidak ada maka hasinya -1

//SORT = urutkan data
// console.log(barca.sort()) //secara ascending

let ongko = [1, 2, 3, 4, 5]
// console.log(ongko.sort((a, b) => b - a)) // urutkan data descending khusus number

//REVERSE = membalikkan urutan data di dalam array
// console.log(ongko.reverse())

//JOIN = menggabugkan data dalam array menjadi string
let dudukongko = ongko.join(` - `)
// console.log(typeof(dudukongko))

//gabungkan banyak method dalam satu kali eksekusi perintah array
//console.log(ongko.slice(1, 5).sort((a, b) => b - a).join(` ? `))

//CONCATINATE ARRAY
let atk = forward.concat(midfield)
// console.log(atk)
let field = atk.concat(defender).concat(goalkeeper)
// console.log(field)

// ARRAY 2 DIMENSION
let j = [[1, 2], [3,5], [[5, 6, [9, 10]], 7, 8]]
// console.log(j[2][0][0]) // how to get item 5
// console.log(j[2][0][2][1]) // how to get item 10

// LOOP WITH ARRAY
// let kategori = [`demit`, `laser`, `bacokbacokan`, `tarung`, `kartun`]
// let info = `onok ${kategori.length} pilm: \n`
// for (i = 0; i < kategori.length; i++) {
//     info += kategori[i] + `\n`
// }
// console.log(info)

let player = [[`Ronaldo`, `Penyerang`, `37`],[`De Gea`, `Kiper`, `31`],[`Bruno`, `Gelandang`, `26`]]
let daftarplayer = `Daftar Pemain Manchester United : \n`


for(let x = 0; x < player.length; x++) {
    daftarplayer += `${x + 1}. `
    for(y = 0; y < player[x].length; y++) {
        if(y < player[x].length - 1) {
            daftarplayer += `${player[x][y]}, `
        } else {
            daftarplayer += `${player[x][y]} tahun. \n`
        }
    }
}
console.log(daftarplayer)

  