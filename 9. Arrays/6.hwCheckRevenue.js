'use strict';

function getRevenue(sales) {
  let sum = 0;
  for(let i = 0; i < sales.length; i++) {
    sum += sales[i];
  }
  return sum;
}
let sales = [25, 40, 10, 58];
console.log(getRevenue(sales));

function checkRevenue(sales, plannedRevenue) {
  let result;
  if (getRevenue(sales) >= plannedRevenue) {
    result = true;
  } else {
    result = false;
  }
  return result
}
const plannedRevenue = 500;
console.log(checkRevenue([25, 40, 10, 58], 100));
// examples
getRevenue([25, 40, 10, 58]); // ===> 133
checkRevenue([25, 40, 10, 58], 100); // ===> true