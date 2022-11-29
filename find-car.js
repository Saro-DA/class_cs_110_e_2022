const cars = [
    {
        name: "BMW",
        maxSpeed: 260
    },
    {
        name: "Ferrari",
        maxSpeed: 360
    },
    {
        name: "Porsche",
        maxSpeed: 320
    },
    {
        name: "Toyota FJ",
        maxSpeed: 180
    },
    {
        name: "Niva",
        maxSpeed: 120
    }
]

let maxCar = cars[0];

for (let index = 1; index < cars.length; index++) {
    if (cars[index].maxSpeed > maxCar.maxSpeed) {
        maxCar = cars[index];
    }
}

console.log(maxCar);

let countBmw = 0;

for (let index = 0; index < cars.length; index++) {
    if (cars[index].name === "BMW") {
        countBmw++;
    }
}

console.log("There are " + countBmw + " BMW car(s) in your list.");