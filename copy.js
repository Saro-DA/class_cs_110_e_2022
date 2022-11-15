
// if the variable has a simple type, then the value is copied at
// assignment.
let a = 10;

let b = a;

b++;

console.log(a);

let name1 = "Saro";
let name2 = name1;

name2 += 1;

console.log("name1", name1);
console.log("name2", name2);

// Complex types get copied by reference.

const arr1 = [];
let arr2 = arr1;

arr1.push(100);

console.log(arr2);

arr2 = [];

console.log(arr1);

/**
 * Remarks;
 * Any variable is stored in the static memory of an application.
 * If a variable has simple type value, then the value is also stored
 * in the static memory.
 * If a variable is assigned to complex type such as array, object or function,
 * Then, the content itself is stored in the dynamic memory called Heap.
 * However its address is stored in the variable in the static memory.
 * Therefore when we assign a variable (that contains an array) into
 * another variable, the address is assigned to the other variable and both
 * variables can affect the same content.
 *  */
