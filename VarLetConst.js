//VAR
    //Scope = function
    function a() {
        var name = `madun`
    }
    // console.log(name) // diluar scope tidak bisa

    //Mutable = true
    var mobil = `toyota`
    mobil = `lamborghini`
    console.log(mobil)

//LET
    // scope = function, loop, condition
    let i = 1
    while(i < 2) {
        let gelas = `besar`
        i++
    }
    // console.log(gelas) // maka error karena diluar scope
    // mutable = true
    
    //CONST
        // scope = function, loop, condition
        let j = 1
        while(j < 2) {
            const handuk = `besar`
            j++
        }
        // console.log(handuk) // maka error karena diluar scope
        // mutable = true
        const single = false
        single = true
        console.log(single)
    
