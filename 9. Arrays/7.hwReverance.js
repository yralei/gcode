'use strict';

function reverseArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[arr.length - i - 1];
  }
return result
}


console.log(reverseArray([11, 4, 8, 3])); // ==> [3, 8, 4, 11]
console.log(reverseArray([])); // ==> []
reverseArray([100, 50]); // ==> [50, 100]
