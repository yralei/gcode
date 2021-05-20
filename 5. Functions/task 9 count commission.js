/**
 * @param {number} amount
 * @param {string} currency
 * @return {number}
 */
 function countCommision(amount, currency) {
  switch(currency) {
      case 'UAH':
        return amount < 1000 ? amount * 0.02 : amount * 0.01;
      case 'USD':
        return amount < 5000 ? amount * 0.005 : amount * 0.0025;
      case 'EUR':
        return amount < 3000 ? amount * 0.0075 : amount * 0;
  }
  }
  console.log(countCommision(1000, 'UAH'));
  console.log(countCommision(8000, 'UAH'));
  console.log(countCommision(4000, 'USD'));
  console.log(countCommision(6000, 'USD'));
  console.log(countCommision(3000, 'EUR'));