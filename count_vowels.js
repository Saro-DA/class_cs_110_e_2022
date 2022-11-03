// To count the number of vowels in a text.

const text = "Albert";

const subject = text.toLowerCase();

let index = 0;

let count = 0;
let hCount = 0
let others = 0
while (index < subject.length) {

    // if (subject[index] === 'a' ||
    //     subject[index] === 'e' ||
    //     subject[index] === 'i' ||
    //     subject[index] === 'o' ||
    //     subject[index] === 'u') {
    //     count++;
    // }

    switch (subject[index]) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            count++;
            break;
        case 'h':
            hCount++;
            break;
        default:
            others++;
            break;
    }

    index++;
}

console.log("Count of vowels: " + count);
// Just to demonstrate the break usage in a switch.
console.log("Count of H's: " + hCount);
console.log("Count of other characters: " + others);