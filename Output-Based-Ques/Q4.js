function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  }
}

const fn1 = outer();
const fn2 = outer();

fn1();
fn1();
fn2();
fn1();
// Output:
// 1
// 2
// 1
// 3

// Explanation:
// Every time you call outer(), a new independent closure is created with its own count.

// fn1 has its own count starting at 0
// fn2 has its own count starting at 0
// They do NOT share values.
// Now execution:
// 1️⃣ fn1();
// •	fn1’s count becomes 1 → logs 1
// 2️⃣ fn1();
// •	fn1’s count becomes 2 → logs 2
// 3️⃣ fn2();
// •	fn2’s count starts at 0, becomes 1 → logs 1
// 4️⃣ fn1();
// •	fn1’s count was 2, becomes 3 → logs 3
