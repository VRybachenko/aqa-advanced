const car1 = {
    brand: "Toyota",
    model: "Sienna",
    year: 2022
};

const car2 = {
    brand: "Ford",
    model: "Edge",
    owner: "Mr. Vadym Rybachenko"
};

const car3 = {...car1, ...car2};

console.log(car3);