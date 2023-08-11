// Function Statement aka Function Declaration
function state() {}

state();
// This is well defined function statement or you can say function declaration. Where a function name state() is created and later, it's called...

// ....................................................................  //

// Function Expression aka Anonymous Function
const getInfo = function () {};

getInfo();
// This also function, but in a bit different way. It's said to be function, but assigned to a variable, turning itself into expression of that variable. This way of function is also called in same way.

// ...................................................................  //

// Named Function Expression
const getData = function info() {};

// ...................................................................  //

// What are Parameters & Arguments?
// Here this 's' is parameter, means one of variable passing to the funtion.
function sqArea(s) {
  let result = s * s;
  console.log(result);
}
sqArea(10);
// Here '10' is an argument, the value assigned to parameter 's'.

// ...................................................................  //
// First Class Functions
const arrTotal = () => {
  let total = 0;
  for (const num of arrValue) {
    total += num;
  }
  return total;
};

const arrValue = [2, 5, 6, 8, 8, 12, 12];
const result = arrTotal(arrValue);
console.log(result);

// ...................................................................  //
// Arrow Function aka First-Class Function
