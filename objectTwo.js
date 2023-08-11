var Self = function (firstName, workCount) {
  (this.firstName = firstName),
    (this.workCount = workCount),
    (this.getYourData = function () {
      console.log(
        `Hey! ${this.firstName}, you have worked ${this.workCount} days.`
      );
    });
};

Self.prototype.getYourFile = function () {
  console.log(`${this.firstName} has made none file `);
};

var firtPerson = new Self("Aman", 3);
// console.log(firtPerson);
firtPerson.getYourData();
firtPerson.getYourFile();
console.log(firtPerson);

var secondPerson = new Self("Torto", 47);
// console.log(secondPerson);
secondPerson.getYourData();
