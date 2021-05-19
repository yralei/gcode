/**
 * @param {number} chickens
 * @param {number} caws
 * @param {number} pigs
 * @return {number}
 */
 function countArea(chickens, caws, pigs) {
  // put your code here
  return chickens * 0.2 + caws * 1.5 + pigs * 0.5;
}
console.log(countArea(100, 20, 40));
console.log(countArea(150, 40, 60));
console.log(countArea(200, 32, 15));
console.log(countArea(77, 18, 90));
console.log(countArea(500, 200, 440));
/**
 * @param {number} chickens
 * @param {number} caws
 * @param {number} pigs
 * @return {number}
 */
const countAreaArrow = (chickens, caws, pigs) => chickens * 0.2 + caws * 1.5 + pigs * 0.5;

console.log(countAreaArrow(1000, 220, 430));
console.log(countAreaArrow(160, 50, 60));
console.log(countAreaArrow(260, 332, 145));
console.log(countAreaArrow(777, 148, 901));
console.log(countAreaArrow(550, 200, 440));