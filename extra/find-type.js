const prompt = require('readline-sync');

const input = prompt.question("Give us your input = ");

const result = Number.parseFloat(input);

if (!Number.isNaN(result)) {
    console.log("It's a number!");
} else {
    console.log("It's not a number!");
}