//A. Rest with Functions
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20)); // 30


//B. Rest with Destructuring

let colors = ["red", "blue", "green", "yellow"];

let [first, ...restColors] = colors;

console.log(first);        // red
console.log(restColors);   // ["blue", "green", "yellow"]

