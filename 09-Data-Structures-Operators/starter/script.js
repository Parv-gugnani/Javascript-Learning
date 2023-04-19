'use strict';

const restaurant = {
  name: 'Classic Hotel',
  location: '123 abc colony, delhi',
  categories: ['Indian', 'Bhojpuri', 'Italian', 'Organic'],
  starterMenu: ['Bidi', 'Tambaku', 'Aloo-gobhi', 'bhel', 'bread'],
  Mainmenu: ['Aloo', 'Carrot', 'Gobhi'],

  order: function (starterMenu, Mainmenu) {
    return [this.starterMenu[starterIndex], this.Mainmenu[MainIndex]];
  },
};

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
