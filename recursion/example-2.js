
printHello(5);

function printHello(count) {
    if (count < 1) {
        return;
    }

    console.log('Hello world!');
    printHello(count - 1);
    console.log('function was called for count = ' + count);
    return;
}