// 1st challenge
function converter(FarNum) {
  let CelNum = ((FarNum - 32) * 5) / 9;
  console.log(FarNum + " farenheits are equal: " + CelNum + "degrees");
}
converter(10);

// 1.2 challenge
// T(°F) = T(°C) × 9/5 + 32
function RevConverter(CelNum) {
  let FarNum = (CelNum * 9) / 5 + 32;
  console.log(CelNum + " celciuses are equal to " + FarNum + " degrees");
}
let result = RevConverter(20);

// 2nd challenge
function calculate(orig, tipPer) {
  let total = orig + orig * (tipPer * 0.01);
  console.log(total + " is the total amount. Whitout tip is: " + orig);
}
calculate(100, 5);

// 2.1 challenge
function calculate(orig, tipPer) {
  let total = orig + orig * (tipPer * 0.01);
  console.log(total + " is the total amount. Whitout tip is: " + orig);
}
calculate(100, 5);

// 3rd challenge
function average(got, total) {
  let aver = (got / total) * 100;
  let averLetter = "";
  if (aver >= 90) {
    averLetter = "A";
  } else if (aver >= 80) {
    averLetter = "B";
  } else if (aver >= 70) {
    averLetter = "C";
  } else if (aver >= 60) {
    averLetter = "D";
  } else {
    averLetter = "F";
  }
  console.log("Your grade is " + aver + " this is " + averLetter);
}
average(140, 150);

// Object practice
let firstBook = {
  title: "Warhammer 40000: Horus Heresy",
  author: "Games Workshop",
  pagesNum: 1200,
};
let returnObject = function (objectToReturn) {
  return objectToReturn;
};
// Changing the value
let objectResult = returnObject(firstBook);
objectResult.pagesNum = 388;
// Option 1
console.log(objectResult);
// Option 2
console.log(returnObject(firstBook));

// //Object practice part 2
let secondBook = {
  title: "Wings of Fire",
  author: "Sazerland",
  pagesNum: 400,
};
secondBook.pagesNum = 700;
console.log(secondBook);

function returnObjectDirectly() {
  return {
    title: "Mine campf",
    author: "Hitler",
    pagesNum: 350,
  };
}
let anotherReturnedObject = returnObjectDirectly();
anotherReturnedObject.title = "History of USSR";
console.log(anotherReturnedObject);

// 4th challenge
let account1 = {
  name: "Erlan",
  income: 200,
  expenses: 100,
};

function addExpenses(object, amount) {
  object.expenses += amount;
}

function addIncome(object, amount) {
  object.income = object.income + amount;
}

function resetAccount(object) {
  object.income = 0;
  object.expenses = 0;
}

function getSummary(object) {
  let balance = object.income - object.expenses;
  console.log(
    "Account balance is " +
      balance +
      ". Expenses are " +
      object.expenses +
      ", income is " +
      object.income
  );
}

getSummary(account1);
resetAccount(account1);
addIncome(account1, 2400);
addExpenses(account1, 1700);
getSummary(account1);

const dreamDestinations = ["Bali", "California", "Florida", "Scotland"];

for (let i = 0; i < dreamDestinations.length; i++) {
  let count = i + 1;
  console.log(count + " " + dreamDestinations);
}
