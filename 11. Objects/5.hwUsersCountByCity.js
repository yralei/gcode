'use strict';

/**
 * @param {object[]} users
 * @return {object}
 */
function usersCountByCity(users) {
  const result = {};
  for (let i = 0; i < users.length; i++) {
    const el = users[i];
    let someCity = el.city;
    let key = Object.keys(result)
    if (key.includes(someCity)) {
      result [someCity] += 1;
    } else {
      result [someCity] = 1
    }

  }
  return result;
}

// examples
const users = [
  {
    id: 888,
    name: 'Denis',
    age: 44,
    city: 'Kyiv',
  },
  {
    id: 333,
    name: 'Alex',
    age: 33,
    city: 'Lviv',
  },
  {
    id: 392,
    name: 'Nastya',
    age: 22,
    city: 'Kyiv',
  },
  {
    id: 123,
    name: 'Violetta',
    age: 15,
    city: 'Odesa',
  },
  {
    id: 640,
    name: 'Mykola',
    age: 31,
    city: 'Lviv',
  },
];

console.log(usersCountByCity(users)); // ===> { 'Kyiv': 2, 'Lviv': 2, 'Odesa': 1 }
