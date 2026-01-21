//Function Declaration
function calculateAreaDeclaration(width, height) {
    return width * height;
}
console.log("Declaration:", calculateAreaDeclaration(10, 15));

//Function Expression
const calculateAreaExpression = function (width, height) {
    return width * height;
};
console.log("Expression:", calculateAreaExpression(10, 15));

//Arrow Function
const calculateAreaArrow = (width, height) => {
    return width * height;
};
console.log("Arrow:", calculateAreaArrow(10, 15));