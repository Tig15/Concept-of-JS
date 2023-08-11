// Squared of Array's...

const myValues = [2, 4, 5, 6, 7, 9, 10];

const squaredValues = myValues.map((value) => value * value);
console.log(squaredValues);

// Sum of every positive element...

const dispNum = [10, 15, -100, 190, -300, -12, 34];

const onlyPosSum = dispNum
  .filter((pos) => pos > 0)
  .reduce((posSum, posNum) => {
    return (posSum += posNum);
  }, 0);
console.log(onlyPosSum);

// Get Name Initials...
const name = "Aman Srivastava";

const onlyInitials = name
  .split(" ")
  .map((initials) => initials[0])
  .join(" ");
console.log(onlyInitials);

// Age difference from the youngest and oldest...
const peoples = [
  {
    name: "Aman",
    age: 21,
  },
  {
    name: "Torto",
    age: 36,
  },
  {
    name: "Ereva",
    age: 22,
  },

  {
    name: "Asher",
    age: 39,
  },
];

const onlyAge = peoples.map((people) => people.age);

const result = [
  Math.max(...onlyAge),
  Math.min(...onlyAge),
  Math.max(...onlyAge) - Math.min(...onlyAge),
];

console.log(result);
