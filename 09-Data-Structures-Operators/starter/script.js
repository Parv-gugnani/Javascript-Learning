'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const hours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 24,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: 'Ghar ka Khana',
  location: '123 abc colony, delhi',
  categories: ['Indian', 'Bhojpuri', 'Italian', 'Organic'],
  starterMenu: ['Bidi', 'Tambaku', 'Aloo-gobhi', 'bhel', 'bread'],
  Mainmenu: ['Aloo', 'Carrot', 'Gobhi'],
  //
  hours,

  order: function (starterMenu, Mainmenu) {
    return [this.starterMenu[starterIndex], this.Mainmenu[MainIndex]];
  },

  oderdelivery({ starterIndex = 1, MainIndex = 0, time = '20:00', address }) {
    console.log(
      `oder recieved ${this.starterMenu[starterIndex]} and {this.Mainmenu[MainIndex]}
      will be delivered to ${address} at ${time}`
    );
  },

  oderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your Delicious pasta with ${ing1} , ${ing2} , ${ing3}`
    );
  },

  oderPizza(mainingdredients, ...othersingdredients) {
    console.log(mainingdredients);
    console.log(othersingdredients);
  },
};

/*
//Coding challange 4
const inputElem = document.getElementById('input');
const convertBtn = document.getElementById('convert-btn');
const outputElem = document.getElementById('output');

function convertToCamelCase() {
  const input = inputElem.value;
  const words = input.split('_');
  const camelCaseWords = words.map((word, index) => {
    if (index === 0) {
      return word;
    }
    return word[0].toUpperCase() + word.slice(1);
  });
  const camelCase = camelCaseWords.join('');
  outputElem.textContent = camelCase;
}

convertBtn.addEventListener('click', convertToCamelCase);

*/

/*
//working with string part -3

console.log('very good amazing lol'.split('+'));
console.log('very good amazing lol'.split(' '));

const [firstname, lastname] = 'Parv gugnani'.split(' ');
const newname = ['Mr.', firstname, lastname.toUpperCase()].join(' ');
console.log(newname);

const captilizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    //   namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

captilizeName('Mia and ghia davsi');
captilizeName('Parv gugnani');

// padding

const message = 'Go to Gate 23';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Parv'.padStart(25, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(454787448948978744444488784848744744447));

//repeat

const message = 'Allo lelo Bengal leloo';

console.log('Lol'.repeat(10));


*/
////////////////////////////////////
/*
//Working with string Part - 2

const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//fix captilization
const passenger = 'JOnas';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//comparing emails

//replacing
const priceGB = '288,97$';
const priceUS = priceGB.replace('$', '#').replace(',', '.');

console.log(priceUS);

const announcement = 'All Passangers Come to Boarding Door 23';
console.log(announcement.replace('Door', 'Gate'));
console.log(announcement.replace(/Door/g, 'Gate'));

//booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Parts of the NEW Airbus Family');
}

//practise ex
console.log('practise ex------------------------');
const checkbaggage = function (items) {
  const baggage = items.toLowerCase(); //to lower case is must or we have to add all cases
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on plane');
  } else {
    console.log('Welcome abroad!');
  }
};
checkbaggage('I have a Laptop, some foof and a pocket Knife');
checkbaggage('socks and camera');
checkbaggage('Got some snacks and a gun for protection');

*/
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
/*
//Working with String Part ---- 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(1));

*/
////////////////////////////////////////////////////////////////////////////
/*
//maps
const rest = new Maps();
*/

/*
//Sets
const oderset = new set(['Aloo', 'bengan', 'Bhindi', 'Aloo', 'Aloo', 'Bhindi']);

console.log(oderset);

console.log(new set('Jonas'));

console.log(oderset.size);
console.log(oderset.size('Aloo'));
console.log(oderset.size('Bhindi'));
oderset.add('Garlic bread');
oderset.add('Garlic bread');
oderset.delete('Bhindi');
console.log(oderset);

for(const oder of odersSet console.log(oder));

//
const staff =['Waiter','Chef','Waiter','Manager','Chef','Waiter'];
const staffunique = [...new Set(staff)];
console.log(staffunique);
console.log(
  new Set(['Waiter','Chef','Waiter','Manager','Chef','Waiter']).size
);

console.log(new set('Parv').size);
*/

///

/////////////////////////////////////////////////////////////////////////////////////////

/*
//looping

const menu = [...restaurant.starterMenu, ...restaurant.Mainmenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${item[0] + 1}: ${el}`);
}

*/

/*
//logical operator
const rest1 = {
  name: 'Rara momos',
  numguest: 20,
};

const rest2 = {
  name: 'kancha momos',
  owner: 'Givoni george',
};

//or  assigment operator
// rest2.numberguest = rest1.numguest || 10;
// rest2.numberguest = rest1.numguest || 10;
// rest1.numguest ||= 10;
// rest2.numguest ||= 10;

rest1.numguest ??= 10;
rest2.numguest ??= 10;

// rest1.owner = rest1.owner && 'Anonymous';
// rest2.owner = rest2.owner && 'Anonymous';

rest1.owner && = 'Anonymous';
rest2.owner && = 'Anonymous';

console.log(rest1);
console.log(rest2);
*/

/*
//Use any datatypes,return any datatype,short circuiting
console.log(4 || 'Parv');

const guest1 = restaurant.numguest ? restaurant.numguest : 10;
console.log(guest1);

const guest2 = restaurant.numguest || 10;
console.log(guest2);
console.log('hello' && 23 && null && 'jonas');

if (restaurant.oderPizza) {
  restaurant.oderPizza('bhel', 'aloo');
}
restaurant.oderPizza && restaurant.oderPizza('mushrooms', 'spinach');
*/

/*
//rest
//spread operator
const arr = [1, 2, ...[3, 4]];

//rest
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [Aloo, , Gobhi, ...otherfood] = [
  ...restaurant.Mainmenu,
  ...restaurant.starterMenu,
];

console.log(Aloo, Gobhi, otherfood);

//objects
const { sat, ...weekdays } = restaurant.OpeningHour;
console.log(weekdays);

//2 funtions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(4, 5, 6, 8);
add(2, 6, 9, 4, 4, 6, 6);

const x = [23, 5, 7];
add(...x);

restaurant.oderPizza('Mushroom', 'aloo', 'onion', 'oliver');
restaurant.oderPizza('mushrooms');
*/

/*
//Spead Operator
const NewMenu = [...restaurant.Mainmenu, 'Bidi'];
console.log(NewMenu);

//copy array
const Mainmenucopy = [...restaurant.Mainmenu];

//join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.Mainmenu];
console.log(menu);

//Iterable: array,string,maps, (Not objects)
const str = 'Parv';
const letter = [...str, '', 'S.'];
console.log(letter);

const ingdredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
console.log(ingdredients);

restaurant.oderPasta(...ingdredients);

//objects
const newrestaurant = {
  foundedIN: 1969,
  ...restaurant,
  founder: 'Rinkiya ke papa',
};
console.log(newrestaurant);

const restaurantcopy = { ...restaurant };
restaurantcopy.name = 'Shiv Bhandar';
console.log(restaurant.name);
*/

/*
//Destructring objects

restaurant.oderdelivery({
  time: '23:30',
  address: 'Llauyadacolorny,2033',
  MainIndex: 2,
  starterIndex: 2,
});

restaurant.oderdelivery({
  address: 'Llauyadacolorny,2033',
  starterIndex: 1,
});

const { name, OpeningHour, categories } = restaurant;
console.log(name, OpeningHour, categories);

const {
  name: restaurantname,
  OpeningHour: hour,
  categories: tags,
} = restaurant;
console.log(menu, starters);

//default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating value
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

//nested objects
const {
  fri: { open: o, close: c },
} = OpeningHour;
console.log(o, c);

*/

//
/*
//Destructring Array


const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//switching var
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, maincourse] = restaurant.order(2, 0);
console.log(starter, maincourse);

const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

//
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(q, p, r);

*/

//
///
//
//
//
//

/*
//Coding challnge # 1

const [player1, player2] = game.players;
console.log(player1, player2);

//2
const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);

//3
const allplayer = [...player1, ...player2];
console.log(allplayer);

//4
const player1Final = [...player1, 'Lalu Yadav', 'Ramu', 'shamu'];

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
*/
