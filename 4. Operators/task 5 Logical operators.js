//my balance
const balance = 21600;

// describe some product
const id = 1001;
let productName = 'IPhone 12 Pro Max';
let isAvailable = true;
let price = 20000;
const color = 'Silver';
let storeAddress = 'Kyiv, Melnichenka st';

/**
 * Может ли пользователь купить конкретный товар и есть ли товар в наличии? Выведи результат проверки в консоль
 */

//put your code here
console.log(balance >= price);
console.log(isAvailable);

/**
 * Есть ли в наличии конкретный товар с указанным адресом мазазина?
 * В случае такой возможности выведи в консоль - 'You can buy this product in the store'
 */

//put your code here
let message = 'You can buy this product in the store';
if (isAvailable)  {
  console.log(message);
}
/**
 * Может ли пользователь купить конкретный товар и Silver ли он цвета?
 * В случае такой возможности выведи в консоль - 'You have enough money to buy product in silver color'
 */

//put your code here
let message1 = 'You have enough money to buy product in silver color';
if (balance >= price && color === 'Silver') {
  console.log(message1);
}
/**
 * Может ли пользователь купить конкретный товар и чтобы у меня осталось 1000+ денег
 * В случае такой возможности выведи в консоль - 'You have enough money to buy this product'
 */

//put your code here
let message3 = 'You have enough money to buy this product';
if (balance - price > 1000) {
  console.log(message3);
}