const prompt = require('readline-sync');

let num = prompt.questionInt("Please input your number: ");

const result = {};

let div = 2;
while (num % div === 0) {
    result[div] ? result[div]++ : result[div] = 1;
    num /= div;
}
div++;
for (; div <= num; div += 2) {
    while (num % div === 0) {
        result[div] ? result[div]++ : result[div] = 1;
        num /= div;
    }
}

console.log(result);

