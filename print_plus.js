

// We'll consider the input later, let's initialize the variable in the code.

const totalLines = 5;

const curLine = 1;

let text = '😎';

while (curLine <= totalLines) {
    console.log(text);
    text += '😎'; // appending text as text = text + '+'.
    curLine++; // increment as curLine = curLine + 1.
}