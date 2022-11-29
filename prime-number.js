const num = 1;
let isPrime = true;

if (num < 2) {
    isPrime = false;
}

let div = 2;

while (div <= Math.sqrt(num) && isPrime) {
    if (num % div === 0) {
        isPrime = false;
    }
    div++;
}

if (isPrime) {
    console.log(num + " is prime.");
} else {
    console.log(num + " is not prime.");
}