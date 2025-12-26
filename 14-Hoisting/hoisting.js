//Hoisting with var
var a;
console.log(a); // undefined
a= 5;
console.log(a); // 5

//Hoisting with let (Temporal Dead Zone)
console.log(b); // ❌ ReferenceError
let b = 20;

//Hoisting with const
console.log(c); // ❌ ReferenceError
const c = 30;
