
console.log(mult(4, 3));

function mult(num1, num2) {
    if(num2 === 0) return 0;

    return num1 + mult(num1, num2 -1);
}