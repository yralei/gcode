//my balance
const balance = 15600;

// describe some product
const id = 1001;
let productName = 'IPhone 12 Pro Max';
let isAvailable = true;
let price = 20000;
const color = 'Silver';
let storeAddress = null;

/**
 * Если пользователь может купить товар - выведи в консоль сообщение - 'You have enough money to buy *product name*'
 * В другом случае выведи в консоль - 'You do not have enough money to buy *product name*'
 */

// put your code here
let message = 'You have enough money to buy' + productName;
if (balance >= price) {
    console.log(message);
} else {
    console.log('You do not have enough money to buy ' + productName);
}
/**
 * Если товара есть в наличии выведи в консоль сообщение - 'Product *product name* is available now'
 */

// put your code here
let message1 = 'Product ' + productName + ' is available now';
if (isAvailable) {
    console.log(message1);
}