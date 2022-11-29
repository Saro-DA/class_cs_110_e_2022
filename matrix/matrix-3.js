const mat = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i']
]

let result = "";
for (let col = 0; col < mat[0].length; col++) {
    for (let row = 0; row < mat.length; row++) {
        result += mat[row][col] + " ";
    }
    result = result.trim();
    result += '\n';
}
result = result.trim();
console.log(result);

/**
 * a d g
 * b e h
 * c f i
 */