let x = 1;
{
  console.log(x); // ❌ x is in temporal dead zone
  let x = 2;
}
//Output:
// ReferenceError: Cannot access 'x' before initialization      

// ❌ Explanation:
// In this code, we are using 'let' to declare the variable 'x' inside a block scope.
// The line 'console.log(x);' tries to access 'x' before it has been initialized within that block.
// This results in a ReferenceError because variables declared with 'let' and 'const' are not hoisted in the same way as 'var'.
// They are in a "temporal dead zone" from the start of the block until the declaration is encountered.