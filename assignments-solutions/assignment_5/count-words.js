

const sentence = `This is an
apple akhper jan.`;

let count = 0;
let inWord = false;
for (let i = 0; i < sentence.length; i++) {
    if (!inWord && !isWhitespace(sentence[i])) {
        count++;
        inWord = true;
    }

    if (isWhitespace(sentence[i])) {
        inWord = false;
    }
}

console.log(count);

function isWhitespace(ch) {
    return ch === ' ' || ch === '\n' || ch === '\t';
}