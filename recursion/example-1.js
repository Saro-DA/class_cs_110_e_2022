test();
console.log('Done calling test');

function test() {
    sayHello();
    console.log('done caling sayHello');
}

function sayHello() {
    console.log('hello world');
    sayHello();
}