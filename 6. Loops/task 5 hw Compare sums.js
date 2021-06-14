'use strict';

function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  return sum(firstFrom, firstTo) > sum(secondFrom, secondTo) ? true : false;
}
function sum(From, To) {
  let x = 0;
  for (let i = From; i <= To; i++) {
    x += i;
  }
  return x;
}

console.log(compareSums(1, 8, 2, 3));
