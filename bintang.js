let star1 = ``
for (let i = 5; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        star1 += ` * `
    }
    star1 += `\n`
}
console.log(star1)