let myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task completed");
  } else {
    reject("Task failed");
  }
});

//Consuming a Promise (then, catch)
myPromise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });

  //Promise with setTimeout
  let delayedPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data received after 2 seconds");
  }, 2000);
});

delayedPromise.then(msg => console.log(msg));

//Promise Rejection Example
let loginPromise = new Promise((resolve, reject) => {
  let passwordCorrect = false;

  if (passwordCorrect) {
    resolve("Login success");
  } else {
    reject("Invalid password");
  }
});

loginPromise
  .then(msg => console.log(msg))
  .catch(err => console.log(err));

//Promise Chaining
new Promise(resolve => resolve(5))
  .then(n => n * 2)
  .then(n => n + 10)
  .then(result => console.log(result)); // 20
