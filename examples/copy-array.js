

const a1 = [1, 2, 7];

// const a2 = [...a1]; short form.

const a2 = [];

for (let i = 0; i < a1.length; i++) {
    a2.push(a1[i]);
}

a1.push(100);

console.log(a1);
console.log(a2);