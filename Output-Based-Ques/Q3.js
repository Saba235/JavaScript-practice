console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");

//Output:
// A
// D
// C
// B

// Explanation: The execution order is as follows:
//Synchronous logs run first → A, D
//Promise (microtask) runs next → C
//setTimeout (macrotask) runs last → B


