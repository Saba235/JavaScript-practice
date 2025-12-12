//Example 1: Copy an array

let a = [1, 2, 3];
let b = [...a];

console.log(b); // [1, 2, 3]

//Example 2: Merge arrays
let x = [1, 2];
let y = [3, 4];

let result = [...x, ...y];

console.log(result); // [1, 2, 3, 4]

//B. Spread with Objects
let person = { name: "Saba", age: 27 };

let copy = { ...person };
console.log(copy);

//Example: Merge objects
let p1 = { name: "Saba" };
let p2 = { city: "Delhi" };

let merged = { ...p1, ...p2 };

console.log(merged); // { name: "Saba", city: "Delhi" }
