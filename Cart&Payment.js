let showKeranjang = () => {
    let tbody = document.getElementById(`tbody-keranjang`)
    let res = ``
    keranjang.forEach((item, index) => {
        if(item.jumlah === 0) {
            res += ``
        
        } else if (bayar === true) {
            res += `
            <tr>
                <td><center>${item.id}</center></td>
                <td><center>${item.kategori}</center></td>
                <td><center>${item.nama}</center></td>
                <td><center>Rp.${parseInt(item.harga).toLocaleString()}</center></td>
                <td><center>${item.jumlah}</center></td>
                <td><center><button onclick="hapusKeranjang(${index})" disabled>Hapus</button></center></td>
            </tr>`

        } else {
            res += `
            <tr>
                <td><center>${item.id}</center></td>
                <td><center>${item.kategori}</center></td>
                <td><center>${item.nama}</center></td>
                <td><center>Rp.${parseInt(item.harga).toLocaleString()}</center></td>
                <td><center>${item.jumlah}</center></td>
                <td><center><button onclick="hapusKeranjang(${index})">Hapus</button></center></td>
            </tr>`
        }
    })
    tbody.innerHTML = res
}

let tambah = (index) => {
    // let produkTerpilih = produk[index]
    let produkTerpilih = {...produk[index]}

    let ada = null
    keranjang.forEach(item => {
        if(item.nama === produkTerpilih.nama) {
            ada = 1
        }
    })
    if(ada === 1) {
        keranjang.forEach(item => {
            if(item.nama === produkTerpilih.nama) {
                item.jumlah += 1
            }
        })
    } else {
        produkTerpilih.jumlah = 1 // menambahkan property jumlah
        delete produkTerpilih.stok // menghapus property stok

        keranjang.push(produkTerpilih)
    }
    produk[index].stok -= 1

    showData(produk)
    showKeranjang()
}

let hapusKeranjang = (index) => {
    keranjang[index].jumlah -= 1
    showKeranjang()
    
    produk.forEach(item => {
        if(item.nama === keranjang[index].nama) {
            item.stok += 1
        }
    })
    showData(produk)
}

let pembayaran = () => {
    let div = document.getElementById(`rincian`)
    bayar = true
    showKeranjang()

    let res = ``
    keranjang.forEach(item => {
        let totalPerProduk = item.harga * item.jumlah
        totalHarga += totalPerProduk
        if(item.jumlah === 0) {
            res += ``
        } else {
            res += `
            <p>${item.kategori} | ${item.nama} | Rp.${(item.harga).toLocaleString()} x ${item.jumlah} = Rp.${(item.harga * item.jumlah).toLocaleString()}</p>
            `
        }
    })
    res += `<b>Sub Total = Rp.${totalHarga.toLocaleString()}</b><br><br>`
    res += `<b>PPn = Rp.${(totalHarga / 10).toLocaleString()}</b><br><br>`
    res += `<b>Total = Rp.${(totalHarga + (totalHarga / 10)).toLocaleString()}</b>`
    div.innerHTML = res
}