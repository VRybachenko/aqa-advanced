const person = {
    firstName: "Tony",
    lastName: "Stark",
    age: 48
};

person.email = "ironman@starkindustries.com";
delete person.age;

console.log(person);