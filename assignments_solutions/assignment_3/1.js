

/*
++++
++++
++++
++++
*/

const num = 5;

let line = "";
let count = 1;
while (count <= num) {
    line += '+';
    count++;
}

let result = "";
count = 1;
while (count <= num) {
    // console.log(line);
    result += line + '\n';
    count++;
}

result = result.trim();
console.log(result);
