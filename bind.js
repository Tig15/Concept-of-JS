var FirstPerson = {
  firstName: "Aman",
  lastName: "Srivastava",
  role: "Intern",
  workedDay: 2,
  allInOne: function () {
    console.log(`
          Hey, ${this.firstName} ${this.lastName}.
          It's great, you have begin your journey as ${this.role}.
          And well going since ${this.workedDay} days.
        `);
  },
};

// FirstPerson.allInOne();

var SecondPerson = {
  firstName: "Torto",
  lastName: "Tora",
  role: "QA Tester",
  workedDay: 140,
};

// FirstPerson.allInOne.bind(SecondPerson)();
const SecondAllinOne = FirstPerson.allInOne.bind(SecondPerson);
SecondAllinOne();
