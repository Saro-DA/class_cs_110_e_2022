const numbers = {};

console.log(fibonacci(5));

function fibonacci(n) {
    if(n <= 1) return 0;

    if (n <= 3) return 1;

    if(numbers[n]) return numbers[n];

    const result = fibonacci(n - 1) + fibonacci(n - 2);
    numbers[n] = result;
    return result;
}