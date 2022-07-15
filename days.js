let hari = 485,
    tahun = Math.floor(hari/360),
    sisatahun = hari % 360,
    bulan = Math.floor(sisatahun/30)
    sisahari = sisatahun % 30
      

// console.log(tahun)
// console.log(sisatahun)
// console.log(bulan)
// console.log(sisahari)
console.log(`${tahun} Tahun, ${bulan} Bulan, ${sisahari} Hari`)