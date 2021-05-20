function factorial(num) {
  let result = 1;
  if (num < 0 && num > 100) {
    console.log('num Is invalid')
  }
  while (num) { 
    result *= num--;
  }
  return result;
}
factorial(20);