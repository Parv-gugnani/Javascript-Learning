'use strict';

const restaurant = {
  name: 'Ghar ka Khana',
  location: '123 abc colony, delhi',
  categories: ['Indian', 'Bhojpuri', 'Italian', 'Organic'],
  starterMenu: ['Bidi', 'Tambaku', 'Aloo-gobhi', 'bhel', 'bread'],
  Mainmenu: ['Aloo', 'Carrot', 'Gobhi'],
  OpeningHour: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 24,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterMenu, Mainmenu) {
    return [this.starterMenu[starterIndex], this.Mainmenu[MainIndex]];
  },

  oderdelivery: function ({
    starterIndex = 1,
    MainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `oder recieved ${this.starterMenu[starterIndex]} and {this.Mainmenu[MainIndex]}
      will be delivered to ${address} at ${time}`
    );
  },

  oderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your Delicious pasta with ${ing1} , ${ing2} , ${ing3}`
    );
  },
};

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
