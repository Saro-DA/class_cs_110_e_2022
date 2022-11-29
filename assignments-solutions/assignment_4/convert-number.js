const prompt = require('readline-sync');

const number = prompt.questionInt("Insert your number = ");

let result = "";

let temp = number;

const ref = '0123456789ABCDEF';

while (temp > 0) {
    result = ref[temp % 16] + result;
    temp = Math.floor(temp / 16);
}

console.log(`The ${number} corresponds to ${result} in hexadecimal.`);