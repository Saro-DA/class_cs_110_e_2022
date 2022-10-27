let var1 = "5";
let var2 = 5;


// '==' ignores types.
console.log(var1 == var2);

// '===' compares types as well.
console.log(var1 === var2);

console.log(typeof var2);

// A variable gets its type when a value is assigned to it.
var2 = "hello";

console.log(typeof var2);