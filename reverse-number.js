// To reverse a number. e.g: 123 -> 321.

let num = 123;
let result = 0;
while (num > 0) {
    let digit = num % 10;

    result = result * 10 + digit;

    num = (num - digit) / 10;
}

console.log(result);

