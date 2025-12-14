//Basic Callback Example
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

greet("Saba", sayBye);

//Callback with setTimeout (Async behavior)
console.log("Start");

setTimeout(function () {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End");

//Arrow Function Callback
setTimeout(() => {
  console.log("Arrow function callback");
}, 1000);

//setInterval (Runs repeatedly)
let count = 1;

let timer = setInterval(() => {
  console.log("Count:", count);
  count++;

  if (count > 5) {
    clearInterval(timer); // stop interval
  }
}, 1000);


//Callback Hell
setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);
