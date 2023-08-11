// Fill Method...

const whichDay = ["Monday", "Tuesday", "Wednesday", "Sunday", "Friday"];

whichDay.fill("Thursday", 3, 4);

console.log(whichDay);

// Filter Method...

const myNumber = [14, 16, 18, 20, 22, 24, 26];

const fourDiv = myNumber.filter((num) => num % 4 === 0);
console.log(fourDiv);

// Map Method...
const loginData = [
  {
    name: "Aman",
    loginDate: "Yesterday",
    loginCount: 4,
    workDuration: 35,
  },
  {
    name: "Torto",
    loginDate: "Two Days",
    loginCount: 2,
    workDuration: 40,
  },
  {
    name: "Ereva",
    loginDate: "Today",
    loginCount: 7,
    workDuration: 12,
  },
  {
    name: "Asher",
    loginDate: "A Week Ago",
    loginCount: 2,
    workDuration: 21,
  },
];

const reportOfTheDay = loginData.map(
  (x) => `${x.name} is working since ${x.loginDate}`
);
console.log(reportOfTheDay);

const totalDuration = loginData.reduce((total, candid) => {
  return (total += candid.workDuration);
}, 0);
console.log(totalDuration);

const seniorEmp = loginData
  .filter((count) => count.loginCount < 4)
  .map((just) => just.name);
console.log(seniorEmp);

// Reduce Method...
const age = [21, 24, 26, 34, 12];

const oldestPerson = age.reduce((max, hood) => {
  if (max > hood) {
    hood = max;
  }
  return hood;
}, 0);

console.log(oldestPerson);

// Splice Method...

const misNum = [4, 8, 9, 0, 10, 3];

misNum.splice(2, 2, 14);
console.log(misNum);

// Slice Method...

console.log(misNum.slice(2, 4));
