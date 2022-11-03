


const arr = [3, 6, 5, 1, 2];

let p = 1;

let index = 0;

while (index < arr.length) {
    p *= arr[index];
    index++;
}

console.log("The product of " + arr + " is = " + p);