let player = [[`Ronaldo`, `Penyerang`, `37`],[`De Gea`, `Kiper`, `31`],[`Bruno`, `Gelandang`, `26`]]
let daftarplayer = `Daftar Pemain Manchester United : \n`


for(let x = 0; x < player.length; x++) {
    let list = `${x + 1}. `
    for(y = 0; y < player[x].length; y++) {
        if(y < player[x].length - 1) {
            list += `${player[x][y]}, `
        } else {
            list += `${player[x][y]} tahun. \n`
        }
    } 
    daftarplayer += list
}
console.log(daftarplayer)