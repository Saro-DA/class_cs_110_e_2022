

console.log(power(2, 3));

function power(base, pow) {
    if(pow === 0) return 1;

    return base * power(base, pow - 1);
}