const firstName = "Mark";
const secondName = "Bill";

const greetingConcat = "Hello, " + firstName + " and " + secondName + "!";
console.log("Greeting (concatenation):", greetingConcat);

const greetingTemplate = `Hello, ${firstName} and ${secondName}!`;
console.log("Greeting (template):", greetingTemplate);