const matrix = [
    [2, 5],
    [1, 10],
    [7, 8]
]

const r1 = 6;
const r2 = 9;

// outer loop.
for (let i = 0; i < matrix.length; i++) {
    // inner loop.
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] > r1 && matrix[i][j] < r2) {
            console.log("value = ", matrix[i][j], "i = ", i, "j = ", j);
        }
    }
}

let m = [[100]]