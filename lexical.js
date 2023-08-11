function myName() {
  var name = "Torto"; // When declared here in function scope, the child function was also able to get the variable access.
  function sayHello() {
    console.log(`Hey ${name}`);
  }
  sayHello(); // myName() is parent lexical environment...
}

myName();
var name = "Aman"; // When declared out of function scope, the value was allocated but undefined...
// console.log(name);

// Let's know about scope, block and it connection with let, const, var...

if (true) console.log("Yes"); // This is one way of writing if() code. Which has single statement and it workable as well...

// But what if there is more to reveal, we can use mulitple statement or compound statement but inside curly bracket which is called block...

const arr = [2, 5, 3, 7, 11, 14, 23, 44, 4, 6, 8];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    sum += arr[i];
  }
} // Here we have so many to do. Thus, it doesn't require single statement, so to wrap all of it, we use curly braces.

console.log(sum);

// Now how is scope for let, const, var...Why let and const is block scope? Well, as we know var has global space in global object, so it can be used anywhere in the code. But let/const make their own random scope, which is used after reassigned of values.

// Suppose...

var b = 200;
{
  let a = 20;
  var b = 30; // Shadowing of a variable b shown here...
  const c = 40;

  console.log(a);
  console.log(b);
  console.log(c);
}
// console.log(a);
console.log(b);
// console.log(c);
// The reason, it through the referenceError because let and const are out of their scope. They make their own random scope, just as we have placed in block, gave starting and ending perimeter. It assumed that part as it block, no longer can accessed outside that block. But, var can because of it's global space in global object... So it's not wrong to say, var have global scope,and let/const have block scope but when it's defined in one. Else let/const have random scope.
