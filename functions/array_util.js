

function returnLastN(arr, n) {
    if (n > arr.length) {
        console.log("n is larger than array size.");
        return [];
    }

    let result = [];
    for (let index = arr.length - n; index < arr.length; index++) {
        result.push(arr[index]);
    }

    return result;
}

// const myObj = {
//     myFunction: returnLastN
// }

//console.log(myObj.myFunction([1, 2, 3], 2));

// Anything that's assigned to the module.exports can be accessible from other files when required.
module.exports = {
    returnLastN: returnLastN,
    name: "World!"
}