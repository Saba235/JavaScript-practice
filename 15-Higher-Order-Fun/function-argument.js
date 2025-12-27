function greet(name) {
  return `Hello ${name}`;
}

function higherOrder(fn) {
  return fn("Saba");
}

console.log(higherOrder(greet)); 
// Output: Hello Saba
