
console.log(gcd(30, 20));
console.log(gcdRec(30, 20));

function gcd(a, b) {
    while (a % b !== 0) {
        let temp = a;
        a = b;
        b = temp % b;
    }

    return b;
}

function gcdRec(a, b) {
    if (a % b === 0) return b;

    return gcdRec(b, a % b);
}