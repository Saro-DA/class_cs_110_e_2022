// To count the number of vowels in a text.

const text = "Hello";

let index = text.length - 1;

let result = "";
while (index >= 0) {
    result += text[index];
    index--;
}

console.log(result);