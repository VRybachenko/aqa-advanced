const firstArray = ["q", "w", "e", "r", "t", "y"];
const secondArray = [1, 2, 3, 4, 5, 6];

const merged = [...firstArray, ...secondArray]; // або firstArray.concat(secondArray)

console.log("Merged:", merged.join(", "));
