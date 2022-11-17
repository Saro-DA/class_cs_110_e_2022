
let result = {};

let num = 15;
for (let div = 2; div <= Math.sqrt(num);) {
    if (num % div === 0) {
        num = Math.floor(num / div);
        result[div] ? result[div]++ : result[div] = 1;
    } else {
        div++;
    }
}

if (num > 2) {
    result[num] = 1;
}

console.log(result);