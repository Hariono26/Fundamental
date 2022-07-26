let produk = [
    {
        id: 1579581080917,
        kategori: `Makanan`,
        nama: `Mie`,
        harga: 3500,
        stok: 9
    },
    {
        id: 1579581080927,
        kategori: `Elektronik`,
        nama: `Headphone`,
        harga: 135000,
        stok: 8
    },
    {
        id: 1579581080937,
        kategori: `Pakaian`,
        nama: `Jaket`,
        harga: 250000,
        stok: 7
    },
    {
        id: 1579581080947,
        kategori: `Buah`,
        nama: `Apel`,
        harga: 20000,
        stok: 8
    },
]

class Produk {
    constructor(id, kategori, nama, harga, stok) {
        this.id = id,
        this.kategori = kategori,
        this.nama = nama,
        this.harga = harga,
        this.stok = stok
    }
}


