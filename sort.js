

// let arr = [5, 3, 6, 1, 88, 10];
// let arr = [5, 3, 2, 1];
// let arr = [1, 2, 3, 4];
let arr = [1, 1, 2, 1];

// Result should be a sorted array in descending order.

let outerIndex = 0;

while (outerIndex < arr.length - 1) {
    let maxIndex = outerIndex;
    let innerIndex = outerIndex + 1;

    while (innerIndex < arr.length) {
        if (arr[maxIndex] < arr[innerIndex]) {
            maxIndex = innerIndex;
        }
        innerIndex++;
    }

    let temp = arr[outerIndex];
    arr[outerIndex] = arr[maxIndex];
    arr[maxIndex] = temp;

    outerIndex++;
}

console.log(arr);