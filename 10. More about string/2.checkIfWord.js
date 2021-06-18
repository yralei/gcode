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
  if (str.length > 2) {
    for (let i = 0; i < strArr.length; i++) {
      if (!isLetter(strArr[i])) {
        return false;
      }
    }
    return true
  }
  return false;
}

// examples
console.log(isLetter('h')); // ==> true
console.log(isLetter('W')); // ==> true
console.log(isLetter('@')); // ==> false
console.log(isLetter('1')); // ==> false

console.log(isValidWord('hello')); // ==> true
console.log(isValidWord('Hello')); // ==> true
console.log(isValidWord('Test@')); // ==> false
console.log(isValidWord('someName1')); // ==> false
console.log(isValidWord('It is me')); // ==> false
