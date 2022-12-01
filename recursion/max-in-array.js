
console.log(findMaxRec([10, 7, 8]));

function findMax(arr) {
    if (arr.length == 0) return null;

    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

function _findMaxRecHelper(arr, start) {

    if (start == arr.length - 1) {
        return arr[start];
    }

    const subResult = _findMaxRecHelper(arr, start + 1);

    return arr[start] > subResult ? arr[start] : subResult;
}

function findMaxRec(arr) {
    if (arr.length == 0) return null;
    return _findMaxRecHelper(arr, 0)
}

module.exports = {
    findMax,
    findMaxRec
}