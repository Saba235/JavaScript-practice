//Arithmetic Operators

let a = 10;
let b = 3;

console.log(a + b);   // 13
console.log(a - b);   // 7
console.log(a * b);   // 30
console.log(a / b);   // 3.333...
console.log(a % b);   // 1

a++;
console.log(a);       // 11

b--;
console.log(b);       // 2

//Comparison Operators

console.log(5 == "5");   // true (value same)
console.log(5 === "5");  // false (type different)

console.log(10 > 5);     // true
console.log(5 < 2);      // false
console.log(10 >= 10);   // true
console.log(3 != 3);     // false

//Logical Operators

let isAdult = true;
let hasID = false;

console.log(isAdult && hasID); // false
console.log(isAdult || hasID); // true
console.log(!isAdult);         // false

