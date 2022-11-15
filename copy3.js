
let a;

createArray(a);

// This one creates a new array and assigns its address
// to a local variable called arr.
function createArray(arr) {
    arr = [];
}

console.log(a);

a = createArray2();
function createArray2() {
    return [];
}

console.log(a);