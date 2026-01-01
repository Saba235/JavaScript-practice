var a = 10;
function test() {
  console.log(a);
  var a = 20;
  console.log(a);
}
test();
console.log(a);
// Output:              
// undefined
// 20
// 10

// Explanation:
// In JavaScript, variable declarations (using var) are hoisted to the top of their scope. 
// However, only the declaration is hoisted, not the initialization.
// So, the function test() is interpreted like this:
