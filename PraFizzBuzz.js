for (let num = 1; num <= 20; num++) {
    if (num % 5 == 0 && num % 3 == 0) {
     console.log(`FIZZBUZZ`)
    } else if (num % 3 == 0) {
        console.log(`FIZZ`)
    } else if (num % 5 == 0) {
     console.log(`BUZZ`)
    } else if (num % 3 != 0 || num % 5 != 0) {
     console.log(num)
    }
}




