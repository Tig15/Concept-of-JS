function yourName() {
  var myName = "Aman Srivastava";
  function sayHello() {
    console.log(`Hey! ${myName} here!`);
  }
  return sayHello;
}

const getGreetings = yourName();

getGreetings();

// Let's talk more about closures...

/* function mulTables() {
  for (let i = 1; i <= 10; i++) {
    setTimeout(() => {
      const num = 2;
      const result = num * i;
      console.log(`${num} X ${i} = ${result}`);
    }, i * 1000);
  }
}
mulTables(); */
// So the problem here using var was occuring, because i was referring to the same memory, as setTimeOut kept loop run, the value of i was being stored, it was too late to run it along. Later, just after increment, it does, and fall in false result.
// So to Prevent it, we are using let instead of var. Because let has block-scope, it makes new i variable after first iteration value stored.

// Now, how we can make this happen with var... Let's see...

function multTables() {
  for (var i = 1; i <= 10; i++) {
    function close(i) {
      setTimeout(() => {
        const num = 2;
        const result = num * i;
        console.log(`${num} X ${i} = ${result}`);
      }, i * 1000);
    }
    close(i);
  }
  console.log("Let's know more about closure: ");
}

multTables();
