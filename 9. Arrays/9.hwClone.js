'use strict';


function cloneArr(arr) {
  return arr.slice();
}

// examples
cloneArr([11, 4, 8, 3]); // ==> [11, 4, 8, 3]
cloneArr([]); // ==> []
cloneArr([0]); // ==> [0]
