const obj = {
    name: "A",
    num: 10,
    obj: {
        name: "B",
        num: 11,
        obj: {
            name: "C",
            num: 20
        }
    }
}

console.log(search(obj, "C"));

function search(o, subject) {
    if(o.name === subject) {
        return o.num;
    }

    if(o.obj) {
        return search(o.obj, subject);
    }
}