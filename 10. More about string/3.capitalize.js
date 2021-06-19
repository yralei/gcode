
/**
 * @param {string} str
 * @return {string}
 */
 function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// examples
console.log(capitalize('cake')); // ==> Cake
console.log(capitalize('Monday')); // ==> Monday
console.log(capitalize('hello, it is me')); // ==> Hello, it is me
