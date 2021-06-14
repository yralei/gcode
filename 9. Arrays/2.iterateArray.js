'use strict';

/**
 * @param {array} arr
 */
function printArray(arr) {
  // put your code here
  for (let index = 0; index < arr.length; index += 1) {
      const el = arr[index];
      console.log(el);
  }
}

/**
 * @param {array} arr
 */
function printArrayForOf(arr) {
  // put your code here
  for (let el of arr) {
      console.log(el);
  }
}