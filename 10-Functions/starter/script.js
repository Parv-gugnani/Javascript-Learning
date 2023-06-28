'use strict';

/*
//Default Parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);
*/

/*
//How Passing Arguements Works

const flight = 'LH123';

const parv = {
  name: 'Parv gugnani',
  passport: 2434354566878,
};

const checkIn = function (flightNum, Passanger) {
  flightNum = 'LH999';
  Passanger.name = 'Mr.' + Passanger.name;

  if (Passanger.passport === 2434354566878) {
    alert('Check In');
  } else {
    alert('Wrong Passport!');
  }
};

checkIn(flight, parv);
console.log(flight);
console.log(parv);

//is same as doing
const flightNum = flight;
const Passanger = parv;

const newpassport = funtion(person){
  person.passport= Math.random() * 100
}
*/

//higher oder funtions
/*
Higher-order functions are functions that can take other functions 
as arguments and/or return functions as their results. 
In JavaScript, functions are first-class citizens, 
which means they can be treated just like any other value. This allows us to 
pass functions around, store them in variables, and return them from other functions.

const numbers = [1, 2, 3, 4, 5];

// map() is a higher-order function that takes a callback function as an argument
const doubledNumbers = numbers.map(function(number) {
  return number * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// filter() is another higher-order function that takes a callback function as an argument
const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]

*/
