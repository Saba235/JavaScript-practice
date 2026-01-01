//What is the output?
console.log(a);
var a = 5;
function test() {
  console.log(a);
  var a = 10;
}
test();
console.log(a); 

//Output:
// undefined
// undefined
// 5