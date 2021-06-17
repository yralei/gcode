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
/**
 * @param {number[]} sales
 * @param {number} plannedRevenue
 * @return {boolean}
 */
function checkRevenue(sales, plannedRevenue) {
  getRevenue(sales) >= plannedRevenue;
  return
}
const plannedRevenue = 500;
console.log(checkRevenue(sales));
// examples
getRevenue([25, 40, 10, 58]); // ===> 133
checkRevenue([25, 40, 10, 58], 100); // ===> true