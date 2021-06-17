'use strict';


const getSubArray = (arr, numberOfElements) => {
  arr.splice(1, 1);
  console.log(arr);
};

// examples
getSubArray([11, 4, 8, 3], 2); // ==> [11, 4]
getSubArray([1, 2, 3, 4, 5], 3); // ==> [1, 2, 3]
getSubArray(['some string', 'hello', 'I am happy'], 1); // ==> ['some string']
