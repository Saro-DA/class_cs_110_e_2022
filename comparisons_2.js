
let a = true;
let b = true;
let c = false;
let d = true;
let e = true;

// Non flat style.
if (a) {
    console.log('a is true');
    if (b) {
        console.log('b is true');
        if (c) {
            console.log('c is true');
            if (d) {
                console.log('d is true');
                if (e) {
                    console.log('e is true');
                }
            }
        }
    }
}

// Flat style.
if (!a) {
    return;
}
console.log('a is true');

if (!b) {
    return;
}
console.log('b is true');

if (!c) {
    return;
}
console.log('c is true');

if (!d) {
    return;
}
console.log('d is true');

if (!e) {
    return;
}
console.log('e is true');

