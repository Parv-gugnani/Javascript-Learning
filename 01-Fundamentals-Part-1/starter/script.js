/*
let js = "amazing";

console.log(5 + 5 + 5);

console.log("Parv");
console.log(18);

let firstname = "Parv";
console.log(firstname);
*/

//1
// const massMark = 78;
// const hieghtMark = 1.69;
// const massJohn = 92;
// const hieghtJohn = 1.95;

//test 2
// const massMark = 95;
// const hieghtMark = 1.88;
// const massJohn = 85;
// const hieghtJohn = 1.76;

// const MarkBMI = massMark / hieghtMark ** 2;

// const JohnBMI = massJohn / hieghtJohn ** 2;

// const markHigherBMI = MarkBMI > JohnBMI;

// console.log(MarkBMI, JohnBMI, markHigherBMI);

//driver
// const age = 19;
// const isOldEnough = age > 18;

// if (isOldEnough) {
//   console.log("She can start driving");
// } else {
//   console.log("She cant");
// }

//coding challange #2
const massMark = 78;
const hieghtMark = 1.69;
const massJohn = 92;
const hieghtJohn = 1.95;

// test 2
// const massMark = 95;
// const hieghtMark = 1.88;
// const massJohn = 85;
// const hieghtJohn = 1.76;

/*
const MarkBMI = massMark / hieghtMark ** 2;

const JohnBMI = massJohn / hieghtJohn ** 2;

console.log(MarkBMI, JohnBMI);

if (MarkBMI > JohnBMI) {
  console.log(
    `Mark have more bmi than John , by value of ${MarkBMI - JohnBMI}`
  );
} else {
  console.log(
    `John have more bmi than mark , by value of ${JohnBMI - MarkBMI}`
  );
}
*/

/*
const fav = prompt("What is your fav number");
console.log(fav);
if (fav == 23) {
  console.log("Cool , this is amazing");
}
*/

//coding test #4
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2; //if <= bill is under 300
console.log(
  `The bill was ${bill}, the tip was${tip}, and the total value ${bill + tip}`
);

//end
