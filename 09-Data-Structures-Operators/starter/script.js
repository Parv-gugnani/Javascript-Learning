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

const menu = [...restaurant.starterMenu, ...restaurant.Mainmenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${item[0] + 1}: ${el}`);
}

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
