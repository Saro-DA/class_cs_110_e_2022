
const mat = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i']
]

let result = "";
for (let row = 0; row < mat.length; row++) {
    for (let col = 0; col < mat[row].length; col++) {
        result += mat[row][col] + " ";
    }
    result = result.trim();
    result += "\n";
}

result = result.trim();
console.log(result);