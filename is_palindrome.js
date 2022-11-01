const originalNumber = 212;
let num = originalNumber;
let result = 0;
while (num > 0) {
    let digit = num % 10;

    result = result * 10 + digit;

    num = (num - digit) / 10;
}

if (result === originalNumber) {
    console.log(originalNumber + ' is palindrome.');
} else {
    console.log(originalNumber + ' is not palindrome.');
}

