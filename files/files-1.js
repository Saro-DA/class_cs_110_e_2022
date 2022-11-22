const fs = require('fs');

let text = fs.readFileSync("./input.txt", { encoding: 'utf8' });

text += " Hello World!"

fs.writeFileSync("./output.txt", text);

console.log(text);