// SYNTAX
let obj = {
    name : `Apple`,
    price : 10000,
    stock : 5
}

// how to acces value and object
console.log(obj.name)
console.log(obj[`price`])

// make object with new keyword
let obj2 = new Object()
obj2.username = `Juan`
console.log(obj2) // result {username: `Juan`}

// METHOD = Function di dalam object
let obj3 = {
    name : `Hirdzan`,
    greet() {
        console.log(`hello`)
    }
}
//how to acces method
obj3.greet()

// THIS : keyword untuk akses value didalam object
let obj4 = {
    name : `Kabol`,
    intro : function() {
        console.log(`Hello! My name is ` + this.name)
    }
}
obj4.intro()

// CLASS 
// what: cetakan untuk membuat object dengan property yg sama namun value bisa berbeda
// when : saat butuh membuat object dengan prop yang sama berkali kali
// why : agar lebih praktis saat membuat object dengan prop yg sama berkali kali

class Striker {
    constructor(name, nationality, club) {
        this.name = name,
        this.nationality = nationality
        this.club = club
    }
    intro = () => {
        console.log(`I'm a Striker`)
    }
}
let striker1 = new Striker(`Ronaldo`, `Portugal`, `Manchester United`)
let striker2 = new Striker(`Hallad`, `Norway`, `Manchester City`)
console.log(striker1)
console.log(striker2) 
striker1.intro() 

// INHERITANCE = Cetakan untuk membuat class lain / mengambil karakter dari class lain
class LivingThings {
    constructor(name, age, alive) {
        this.name = name
        this.age = age
        this.alive = true
    }
    eat = () => {
        console.log(`eating`)
    }
    breed = () => {
        console.log(`breed`)
    }
}

class Human extends LivingThings {
    constructor(name, age, pet) {
        super(name, age)
        this.pet = pet
    }
    work = () => {
        console.log(`work`)
    }
}
// inheritance dari Human (LivingThing => Human => SuperHuman)
class SuperHuman extends Human {
    constructor(name, age, pet,power) {
        super(name, age, pet)
        this.power = power
    }
    mask = () => {
        console.log(`mask`)
    }
}

let human1 = new Human(`Penyok`, 36, `Kirik`)
let superhuman1 = new SuperHuman(`Hulk`, 40, false,`Strenght`) 
console.log(human1)
console.log(superhuman1)