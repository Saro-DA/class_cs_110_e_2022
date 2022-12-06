

const sentence = "   this  ";

let lastLetterIndex = -1;
for(let i = sentence.length - 1; i >= 0; i--) {
    if(!isWhitespace(sentence[i])) {
        lastLetterIndex = i;
        break;
    }
}

let firstLetterIndex = -1;
for(let i = 0; i < sentence.length; i++) {
    if(!isWhitespace(sentence[i])) {
        firstLetterIndex = i;
        break;
    }
}

let result = sentence.substring(firstLetterIndex, lastLetterIndex + 1);


console.log(result.length);
console.log(result);



function isWhitespace(ch) {
    return ch === ' ' || ch === '\n' || ch === '\t';
}