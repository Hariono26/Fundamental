let filter = () => {
    let filterNama = document.getElementById(`filter-nama`).value
    let filterHargaMin = document.getElementById(`filter-harga1`).value
    let filterHargaMax = document.getElementById(`filter-harga2`).value
    let filterKategori = document.getElementById(`filter-kategori`).value
    
    // single filter
    if(filterNama && !filterHargaMin && !filterHargaMax && filterKategori === `Semua`) {
        let filterByNama = produk.filter(item => {
            return item.nama.toLowerCase().includes(filterNama.toLowerCase())
        })
        showData(filterByNama)
    } else if(!filterNama && filterHargaMin && !filterHargaMax && filterKategori === `Semua`) {
        let filterByHargaMin = produk.filter(item => {
            return item.harga >= filterHargaMin
        })
        showData(filterByHargaMin)
    } else if(!filterNama && !filterHargaMin && filterHargaMax && filterKategori === `Semua`) {
        let filterByHargaMax = produk.filter(item => {
            return item.harga <= filterHargaMax
        })
        showData(filterByHargaMax)
    } else if(!filterNama && !filterHargaMin && !filterHargaMax && filterKategori !== `Semua`) {
        let filterByKategori = produk.filter(item => {
            return item.kategori === filterKategori
        })
        showData(filterByKategori)
    
    // double filter
    } else if(filterNama && filterHargaMin && !filterHargaMax && filterKategori === `Semua`) {
        let filterByNamaByHargaMin = produk.filter(item => {
            return item.nama.toLowerCase().includes(filterNama.toLowerCase()) && item.harga >= filterHargaMin
        })
        showData(filterByNamaByHargaMin)
    } else if(filterNama && !filterHargaMin && filterHargaMax && filterKategori === `Semua`) {
        let filterByNamaByHargaMax = produk.filter(item => {
            return item.nama.toLowerCase().includes(filterNama.toLowerCase()) && item.harga <= filterHargaMax
        })
        showData(filterByNamaByHargaMax)
    } else if(filterNama && !filterHargaMin && !filterHargaMax && filterKategori !== `Semua`) {
        let filterByNamaByKategori = produk.filter(item => {
            return item.nama.toLowerCase().includes(filterNama.toLowerCase()) && item.kategori === filterKategori
        })
        showData(filterByNamaByKategori)
    } else if(!filterNama && filterHargaMin && filterHargaMax && filterKategori === `Semua`) {
        let filterByHargaMinByHargaMax = produk.filter(item => {
            return item.harga >= filterHargaMin && item.harga <= filterHargaMax
        })
        showData(filterByHargaMinByHargaMax)
    } else if(!filterNama && filterHargaMin && !filterHargaMax && filterKategori !== `Semua`) {
        let filterByHargaMinByKategori = produk.filter(item => {
            return item.harga >= filterHargaMin && item.kategori === filterKategori
        })
        showData(filterByHargaMinByKategori)
    } else if(!filterNama && !filterHargaMin && filterHargaMax && filterKategori !== `Semua`) {
        let filterByHargaMaxByKategori = produk.filter(item => {
            return item.harga <= filterHargaMax && item.kategori === filterKategori
        })
        showData(filterByHargaMaxByKategori)
    
    // triple filter
    } else if(filterNama && filterHargaMin && filterHargaMax && filterKategori === `Semua`) {
        let filterByNamaByHargaMinByHargaMax = produk.filter(item => {
            return item.nama.toLowerCase().includes(filterNama.toLowerCase()) && item.harga >= filterHargaMin && item.harga <= filterHargaMax
        })
        showData(filterByNamaByHargaMinByHargaMax)
    } else if(filterNama && filterHargaMin && !filterHargaMax && filterKategori !== `Semua`) {
        let filterByNamaByHargaMinByKategori = produk.filter(item => {
            return item.nama.toLowerCase().includes(filterNama.toLowerCase()) && item.harga >= filterHargaMin && item.kategori === filterKategori
        })
        showData(filterByNamaByHargaMinByKategori)
    } else if(filterNama && !filterHargaMin && filterHargaMax && filterKategori !== `Semua`) {
        let filterByNamaByHargaMaxByKategori = produk.filter(item => {
            return item.nama.toLowerCase().includes(filterNama.toLowerCase()) && item.harga <= filterHargaMax && item.kategori === filterKategori
        })
        showData(filterByNamaByHargaMaxByKategori)
    } else if(!filterNama && filterHargaMin && filterHargaMax && filterKategori !== `Semua`) {
        let filterByHargaMinByHargaMaxByKategori = produk.filter(item => {
            return item.harga >= filterHargaMin && item.harga <= filterHargaMax && item.kategori === filterKategori
        })
        showData(filterByHargaMinByHargaMaxByKategori)
    
    // quad filter
    } else if(filterNama && filterHargaMin && filterHargaMax && filterKategori !== `Semua`) {
        let filterByNamaByHargaMinByHargaMaxByKategori = produk.filter(item => {
            return item.nama.toLowerCase().includes(filterNama.toLowerCase()) && item.harga >= filterHargaMin && item.harga <= filterHargaMax && item.kategori === filterKategori
        })
        showData(filterByNamaByHargaMinByHargaMaxByKategori)
    
    }  else {
        showData(produk)
    }
}