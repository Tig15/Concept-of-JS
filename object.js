//
//
var aboutMySelf = {
  firstName: "Aman",
  lastName: "Srivastava",
  role: "Intern",
  startDate: 8,
  startDay: "Tuesday",
  workCount: "",
  dayAttended: function () {
    if (this.workCount) {
      return `He has worked ${this.workCount} days!`;
    } else {
      return `He is slacking off!`;
    }
  },
  myGreetings: function () {
    return `Hey, i am ${this.firstName} ${this.lastName} working at EnactOn Technologies as Mobile Application ${this.role} since ${this.startDate}th August.`;
  },
};

console.log(aboutMySelf.myGreetings());
aboutMySelf.workCount = 3; // Input the value in workCount...
console.log(aboutMySelf.workCount);
console.log(aboutMySelf.dayAttended());

// Very Basic of Objects

let user = new Object(); // How an empty objects are created...
let users = {}; // This also one way of doing it...

// Suppose we have this complex data of one user...
var self = {
  name: "Aman",
  age: 21,
};

self.role = "Intern"; // We can add other property keys and it values like this...
delete self.age; // We can remove it like this...

console.log(self);

console.log("age" in self); // It's output is in Boolean [True and False]

// Sum of all the corresponding salaries in the Object...
let wage = {
  Aman: 240,
  Torto: 370,
  Tora: 490,
};

let sum = 0;
for (const num in wage) {
  sum += wage[num];
}
console.log(sum);

// Create an object and multiply the property values by 2...
let box = {
  width: 80,
  height: 102,
  color: "Green",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
  return obj;
}
let result = multiplyNumeric(box);
console.log(result);

// Copying and reference for object...

let usher = {
  name: "Aman",
  age: 21,
};

let intern = usher;
console.log(intern.age); // the property and values of usher, copied to intern.
console.log(usher == intern); // It's true, because of reference...
console.log(usher == user);

// Cloning and Merging - Object.assign

Object.assign(usher, wage); // The first parameter was the target objects, later on, every arguments were just source object to be merged...
console.log(usher);

let newUser = {};

for (let key in aboutMySelf) {
  newUser[key] = aboutMySelf[key];
}

newUser.firstName = "Torto";
newUser.lastName = "Arnholt";
newUser.role = "Writer";
newUser.startDate = 14;
newUser.startDay = "Thursday";
newUser.workCount = "Two Years";

console.log(newUser);

// Let's Create an Object Calculator...
let calc = {
  firstNum: 15,
  secondNum: 16,
  read() {
    return `${this.firstNum} and ${this.secondNum} are the values.`;
  },
  sum() {
    return this.firstNum + this.secondNum;
  },
  multi() {
    return this.firstNum * this.secondNum;
  },
};

console.log(calc.read());
console.log(calc.sum());
console.log(calc.multi());

// Chaining up the ladders with the help of Objects...

let ladders = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep() {
    console.log(this.step);
  },
};

ladders.up();
ladders.down();
ladders.up();
ladders.up();
ladders.up();
ladders.down();
ladders.showStep();
