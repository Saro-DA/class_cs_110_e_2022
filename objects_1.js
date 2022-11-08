let arr = [2, 4, 6, 8];
let obj = {
    fname: "Armen",
    lname: "Mkrtumyan",
    gpa: 3.4,
    gender: "male",
    "home address": "Komitas 25"
};

const height = 160;
console.log("obj.height = " + obj.height);
obj.height = height;
console.log("obj.height = " + obj.height);

console.log(obj.fname);
let key = "fname";
console.log(obj[key]);

console.log(obj.dob);

console.log(Object.keys(obj));
console.log(Object.values(obj));

// To show how to use a variable for the index.
// let index = 3;
// console.log(arr[index]);

console.log(obj["home address"]);


