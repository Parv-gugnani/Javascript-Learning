//strict mode 1
//dry

"use strict"; //use it in each and every project
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

*/

/*7
//coding challange #1

const calcavg = (a, b, c) => (a + b + c) / 3; //parameter are only used in function
console.log(calcavg(3 + 4 + 5));

//test 1
//use let as values are going to change in future
let dolscore = calcavg(44, 23, 71);
let koalascore = calcavg(65, 54, 49);
console.log(dolscore, koalascore);

const checkwinner = function (dolscore, koalascore) {
  if (dolscore >= 2 * koalascore) {
    console.log(`Dol is winner (${dolscore}) vs (${koalascore})`);
  } else if (koalascore >= 2 * dolscore) {
    console.log(`Dol is winner (${koalascore}) vs (${dolscore})`);
  } else console.log(`No team is winner`);
};
checkwinner(dolscore, koalascore);

// //test 2
// const dolscore =calcavg(65, 54 ,49);
// const koalascore = calcavg(23, 34,27);
*/

/*
// array

const friends = ["parv", "aloo", "goofj"];

friends.pop(); // length dont work here
// friends.shift();
console.log(friends.indexOf("parv"));
console.log(friends.includes("aloo"));
*/
/*
const caltip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// const caltip =
// return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bill = [125, 555, 44];
const tip = [caltip(bill[0]), caltip(bill[1])];
caltip(bill[2]);
const total = [bill[0] + tip[0], bill[1] + tip[1], bill[2] + tip[2]];
console.log(bill, tip);
*/
/*
const parv = {
  friends: ["alloo", "cholu", "lollu"],
};

console.log(
  `Parv has ${parv.friends.length} friends ,${parv.friends} and his best friend is 
  ${parv.friends[1]}`
);

*/

/*
// object methods
const Parv = {
  firstname: "Parv",
  lastname: "gugnani",
  Birthyear: 2005,
  friends: ["aloo", "lollu", "chollu"],
  job: "Dev",
  hasdriverlicense: true,

  caclage: function () {
    console.log(this);
    return 2023 - this.Birthyear;
  },

  getSummary: function () {
    return `${this.firstname} is a ${this.caclage()}-year old ${
      Parv.job
    }, and he has ${this.hasdriverlicense ? "a" : "no"} drivers License`;
  },
};

console.log(Parv.caclage());
console.log(Parv.getSummary());
*/

/*
//coding challange #3

const Mark = {
  fullname: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const John = {
  fullname: "John Smith",
  mass: 92,
  height: 1.95,

  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

Mark.calcBmi();
John.calcBmi();
console.log(Mark.bmi, John.bmi);

if (Mark.bmi > John.bmi) {
  console.log(`${Mark.fullname}'s Bmi (${Mark.bmi})
  is higher than ${John.fullname}'s Bmi (${John.bmi})`);
}
//
else if (John.bmi > Mark.bmi) {
  console.log(`${John.fullname}'s Bmi (${John.bmi})
  is higher than ${Mark.fullname}'s Bmi (${Mark.bmi})`);
} else {
  console.log("Dono chutiye hai");
}
*/

/*
//for loop
for (let r = 1; r <= 10; r++) {
  console.log(`lol ${r}`);
}
*/

/*
const Parv = [
  "Parv",
  "gugnani",
  2023 - 2005,
  ["aloo", "lollu", "chollu"],
  "Dev",
];
const type = [];

for (let i = 0; i < Parv.length; i++) {
  console.log(Parv[i], typeof Parv[i]);
  type[i] = typeof Parv[i];
}

console.log(type);

const years = [1991, 2007, 2005, 2010];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}
console.log(ages);

//
console.log("----only strings-----");
for (let i = 0; i < Parv.length; i++) {
  if (typeof Parv[i] != "string") continue;
  console.log(Parv[i]);
}

console.log("----Break with numbers-----");
for (let i = 0; i < Parv.length; i++) {
  if (typeof Parv[i] === "number") break;
  console.log(Parv[i]);
}
*/

/*
//looping backward

const Parv = [
  "Parv",
  "gugnani",
  2023 - 2005,
  ["aloo", "lollu", "chollu"],
  "Dev",
];

for (let i = Parv.length - 1; i >= 0; i++) {
  console.log(i, Parv[i]);
}

for (let ex = 1; ex < 4; ex++) {
  console.log(`Starting exercise ${ex}`);
  for (let r = 1; r < 6; r++) {
    console.log(`exeercvie ${ex}: Lifting wiegth compeltinfn ${r}`);
  }
}
*/

/*
//while loop

// for (let r = 1; r <= 10; r++) {
//   console.log(`Lifting weights repetition ${r}`);
// }
let r = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${r}`);
  r++;
}

let;

*/

/*
//coding challange #4

const calctip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tip = [];
const total = [];

for (let i = 0; i < bill.length; i++) {
  const tip = calctip(bill[i]);
  tip.push(tip);
  total.push(tip + bill[i]);
}
console.log(bill, tip, total);

const calcavg = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcavg([2, 3, 7]));
console.log(calcavg(total));
console.log(calcavg(tip));
*/

//end -10 april
