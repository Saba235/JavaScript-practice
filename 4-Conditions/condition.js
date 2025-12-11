//Basic If
let age = 20;

if (age >= 18) {
  console.log("You are an adult");
}

//If-Else

let ages = 16;

if (ages >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

//If-Else If-Else

let marks = 85;

if (marks >= 90) {
  console.log("A Grade");
} 
else if (marks >= 75) {
  console.log("B Grade");
} 
else {
  console.log("C Grade");
}

//Nested If

let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
  if (isAdmin) {
    console.log("Welcome Admin");
  } else {
    console.log("Welcome User");
  }
}
