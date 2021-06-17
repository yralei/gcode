'use strict';

function sendEmail(userName) {
  console.log('Gromcode party invitation was sent to ' + userName + '!');
}
function sendEmailList(userNames) {
  // hint: you should use sendEmail function inside sendEmailList function
  // put your code here
  for (let letter of userNames) {
    sendEmail(letter);
  }
}
const userNames = ['Vasily', 'Olga', 'Stepan', 'Dmytro'];
sendEmailList(userNames);