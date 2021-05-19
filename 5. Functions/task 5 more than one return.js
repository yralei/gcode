/**
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @return {number}
 */
 function min(firstNumber, secondNumber) {
  // put your code here
if (firstNumber < secondNumber) {
  return firstNumber;
} else {
  return secondNumber;
}
}
console.log(min(100, 40));
console.log(min(30, 50));