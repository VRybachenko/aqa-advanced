const users = [
  { name: 'Tony Stark', email: 'ironman@starkindustries.com', age: 48 },
  { name: 'Wanda Maximoff', email: 'wanda@avengers.com', age: 29 },
  { name: 'Thor Odinson', email: 'thor@asgard.com', age: 1500 },
];

for (const { name, email, age } of users) {
  console.log(name, email, age);
}
