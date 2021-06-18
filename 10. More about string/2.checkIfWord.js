'use strict';

function isLetter(c) {
  return c.toLowerCase() !== c.toUpperCase();
}

/**
 * @param {string} str
 * @return {boolean}
 */
function isValidWord(str) {
  const strArr = str.split('');
  for (let i = 0; i < strArr.length; i += 1) {
    if (!isLetter(strArr[i])) {
      return false;
    }
  }
  return true;
}

// examples
isLetter('h'); // ==> true
isLetter('W'); // ==> true
isLetter('@'); // ==> false
isLetter('1'); // ==> false

console.log(isValidWord('hello')); // ==> true
console.log(isValidWord('Hello')); // ==> true
console.log(isValidWord('Test@')); // ==> false
console.log(isValidWord('someName1')); // ==> false
console.log(isValidWord('It is me')); // ==> false
