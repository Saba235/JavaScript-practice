//Get current date & time
let now = new Date();
console.log(now);

//Get parts of date
let date = new Date();

console.log(date.getFullYear()); // year
console.log(date.getMonth());    // month (0–11)
console.log(date.getDate());     // day
console.log(date.getHours());    // hours
console.log(date.getMinutes());  // minutes

//Display readable date
let today = new Date();
let formatted = today.toDateString();

console.log(formatted); // e.g. Mon Sep 16 2025
