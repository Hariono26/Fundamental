let palindrome = (input) => {
    var lowReg = input.toLowerCase().replace(/[\W_]/g, ``);
    var rev = lowReg.split(``).reverse().join(``);
    console.log(lowReg === rev)
}

palindrome(`ojo`)