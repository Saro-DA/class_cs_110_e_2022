
const mat = [
    ['a', 'b', 'c', 'd'],
    ['e', 'f', 'g', 'h'],
    ['i', 'j', 'k', 'l'],
    ['m', 'n', 'o', 'p'],
]

// Print main diagonal elements.
for(let i = 0; i < mat.length; i++) {
    console.log(mat[i][i]);
}

console.log("Printing elements above and including main diagonal.");

for(let i = 0; i < mat.length; i++) {
    for(let j = i; j < mat[i].length; j++) {
        console.log(mat[i][j]);
    }
}