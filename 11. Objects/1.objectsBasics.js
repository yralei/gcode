'use strict'
const product = {
  id: 911911,
  name: 'Porche 911',
  isAvailable: true,
  price: 320000,
  color: 'Gold',
  storeAddress: null,
};

const productName = product['name'];
console.log(productName);
const storeAddress = product['storeAddress'];
console.log(storeAddress);
product.deliveryOptions = ['Новая почта', 'Укр почта', 'Самовывоз'];
console.log(product);
