//Hoisting with Function Declaration
greet(); // ✅ Works

function greet() {
  console.log("Hello");
}

//Explanation: Function declarations are fully hoisted.

//Hoisting with Function Expression
sayHi(); // ❌ TypeError

var sayHi = function () {
  console.log("Hi");
};

//Explanation: Variable is hoisted as undefined, function is not.

//Hoisting with Arrow Function
hello(); // ❌ ReferenceError

const hello = () => {
  console.log("Hello");
};

//Explanation: Arrow functions behave like variables → not callable before initialization.